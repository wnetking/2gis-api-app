import React, {Component} from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import {Map, Marker} from '2gis-maps-react'

export default class Markers extends Component {
  onClick = (e) => {
    let {dispatch} = this.props;
    let pos = [e.latlng.lat, e.latlng.lng];

    dispatch.saveMarkersAction({
      pos: pos,
      center: pos
    })

    this.addMarker(pos, e.latlng);
  }

  saveMarkers = () => {
    let {data, auth, authActions} = this.props;

    if (auth.user.name === 'Anonim') {
      authActions.updateDataAction({
        login: false,
        message: {
          type: 'danger',
          show: true,
          text: 'Sorry, you cant save markers. Please login.'
        }
      });
    } else {
      fetch('/user/save-markers', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          'positions': data.positions,
          'username': auth.user.name
        })
      }).then(res => res.json()
      ).then(item => {
        console.log(item);
        authActions.updateDataAction(item);
      });
    }
  }


  showAll = () => {
    let {data, dispatch} = this.props;

    dispatch.saveMarkersAction({
      showAll: !data.showAll
    })
  }

  addMarker = (pos) => {
    let {data, dispatch} = this.props;

    dispatch.saveMarkersAction({
      markers: Array.prototype.concat(data.markers,
        <Marker key={Math.floor(Math.random() * 100000)} draggable={data.draggable} pos={pos}>
        </Marker>
      ),
      positions: Array.prototype.concat(data.positions, [pos])
    })
  }

  componentDidMount() {
    let {data, dispatch, authActions} = this.props;

    navigator.geolocation.getCurrentPosition((pos) => {
      if (pos.coords === undefined) {
        this.addMarker(data.pos);
      } else {
        dispatch.saveMarkersAction({
          pos: [pos.coords.latitude, pos.coords.longitude],
          center: [pos.coords.latitude, pos.coords.longitude]
        })
        this.addMarker([pos.coords.latitude, pos.coords.longitude]);
      }
    })

    if (localStorage.getItem('user')) {
      fetch('/user/get-positions', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          username: localStorage.getItem('user')
        })
      })
        .then(res => res.json())
        .then(item => {
          authActions.updateDataAction(item);

          if (item.user.positions.length > 0) {
            item.user.positions.forEach((pos)=> {
              this.addMarker(pos);
            })
          }
        });
    }
  }


  render() {
    let {data} = this.props
    let lastMarker = data.markers[data.markers.length - 1]

    return (
      <div>
        <Map onClick={this.onClick} style={{ width: "100%", height: "400px" }} center={data.center} zoom={data.zoom} fullscreenControl={false}>
          {data.showAll ?
            data.markers :
            lastMarker
          }
        </Map>
        <ButtonToolbar className="mt-3">
          <Button onClick={this.showAll}>
            {!data.showAll ?
              'Show all' :
              'Show last'
            }
          </Button>
          <Button bsStyle="primary" disabled={!data.markers.length} onClick={this.saveMarkers}>Save</Button>
        </ButtonToolbar>
      </div>
    );
  }
}