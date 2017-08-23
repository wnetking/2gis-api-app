import React, { Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import { Map, Marker } from '2gis-maps-react'

export default class Markers extends Component {
  onClick = (e) => {
    let { mapActions } = this.props;
    let newMarker = {
      author: 'Anonim',
      pos: [e.latlng.lat, e.latlng.lng],
      label: 'Hello world!',
      draggable: false,
      clickable: true,
      created: Date.now
    };

    mapActions.saveMarkerAction(newMarker, [e.latlng.lat, e.latlng.lng]);

  }

  componentDidMount() {

  }

  render() {
    let { mapState } = this.props

    return (
      <div>
        <Map onClick={this.onClick}
          style={{ width: "100%", height: "400px" }}
          center={mapState.center} zoom={mapState.zoom} fullscreenControl={false}>

          {mapState.markers.map((item, index) => (
            <Marker 
              key={index} draggable={item.draggable} pos={item.pos} label={item.label}>
            </Marker>
          ))}

        </Map>

        <ButtonToolbar className="mt-3">
          <Button bsStyle="primary" disabled={!mapState.markers.length} onClick={this.saveMarkers}>Save</Button>
        </ButtonToolbar>
      </div>
    );
  }
}