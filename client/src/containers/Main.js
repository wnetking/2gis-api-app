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

    this.addMarker(pos);
  }

  showAll = () => {
    let { data, dispatch } = this.props;

    dispatch.saveMarkersAction({
      showAll: !data.showAll
    })
  }


  addMarker = (pos) => {
    let { data, dispatch } = this.props;

    dispatch.saveMarkersAction({
      markers: Array.prototype.concat(data.markers,
        <Marker key={Math.floor(Math.random() * 10000)} draggable={data.draggable} pos={pos}>
        </Marker>
      ),
    })
  }

  componentDidMount() {
    let { data, dispatch } = this.props;
    if (navigator.geolocation.getCurrentPosition((pos) => { }) === undefined) {
      this.addMarker(data.pos);
    } else {
      navigator.geolocation.getCurrentPosition((pos) => {
        dispatch.saveMarkersAction({
          pos: [pos.coords.latitude, pos.coords.longitude],
          center: [pos.coords.latitude, pos.coords.longitude]
        })
        this.addMarker();
      });
    }
  }



  render() {
    let { data } = this.props
    let lastMarker = data.markers[data.markers.length - 1]
    return (
      <div>
        <Map onClick={this.onClick} style={{ width: "100%", height: "400px" }} center={data.center} zoom={data.zoom}>
          {data.showAll ?
            data.markers :
            lastMarker
          }
        </Map>
        <ButtonToolbar className="mt-3">
          <Button  onClick={this.showAll} >
            {!data.showAll ?
              'Show all' :
              'Show last'
            }
          </Button>
          <Button bsStyle="primary" disabled={!data.markers.length}>Save</Button>
        </ButtonToolbar>
      </div>
    );
  }
}