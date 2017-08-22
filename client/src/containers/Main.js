import React, { Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import { Map, Marker } from '2gis-maps-react'

export default class Markers extends Component {
  onClick = (e) => {
    let { dispatch } = this.props;
    let pos = [e.latlng.lat, e.latlng.lng];

    dispatch.saveMarkersAction({
      pos: pos,
      center: pos
    })

    this.addMarker(pos, e.latlng);
  }

  saveMarkers = () => {
    let { mapState, auth, authActions } = this.props;

    if (auth.user.name === 'Anonim') {
      authActions.updatemapStateAction({
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
          'positions': mapState.positions,
          'username': auth.user.name
        })
      }).then(res => res.json()
        ).then(item => {
          console.log(item);
          authActions.updatemapStateAction(item);
        });
    }
  }


  showAll = () => {
    let { mapState, dispatch } = this.props;

    dispatch.saveMarkersAction({
      showAll: !mapState.showAll
    })
  }

  addMarker = (pos) => {
    let { mapState, dispatch } = this.props;

    dispatch.saveMarkersAction({
      markers: Array.prototype.concat(mapState.markers,
        <Marker key={Math.floor(Math.random() * 100000)} draggable={mapState.draggable} pos={pos}>
        </Marker>
      ),
      positions: Array.prototype.concat(mapState.positions, [pos])
    })
  }

  componentDidMount() {

  }


  render() {
    let { mapState } = this.props
    let lastMarker = mapState.markers[mapState.markers.length - 1]

    return (
      <div>
        <Map onClick={this.onClick}
          style={{ width: "100%", height: "400px" }}
          center={mapState.center} zoom={mapState.zoom} fullscreenControl={false}>
          {mapState.markers.map((item, index) => (
            <Marker key={index} draggable={item.draggable} pos={item.pos}>
            </Marker>
          ))}
        </Map>
        <ButtonToolbar className="mt-3">
          <Button onClick={this.showAll}>
            {!mapState.showAll ?
              'Show all' :
              'Show last'
            }
          </Button>
          <Button bsStyle="primary" disabled={!mapState.markers.length} onClick={this.saveMarkers}>Save</Button>
        </ButtonToolbar>
      </div>
    );
  }
}