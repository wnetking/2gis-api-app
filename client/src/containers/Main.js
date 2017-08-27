import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Map, Marker } from '2gis-maps-react'

export default class Markers extends Component {
  onClick = (e) => {
    let { mapActions } = this.props;
    mapActions.saveMarkerAction([e.latlng.lat, e.latlng.lng]);
  }

  componentDidMount() {
    let { mapActions } = this.props;
    mapActions.setLocationAction();
  }

  render() {
    let { mapState, mapActions } = this.props

    return (
      <div>
        <Map onClick={this.onClick}
          style={{ width: "100%", height: "400px" }}
          center={mapState.center} zoom={mapState.zoom} fullscreenControl={false}>

          {mapState.markers.map((item, index) => (
            <Marker
              key={index} pos={item.pos} label={`Created by: ${item.author} <br><br> ${item.created}`}>
            </Marker>
          ))}
        </Map>
        {!mapState.isLoadFromServer ?
          <Button bsStyle="info" className="mt-3" onClick={mapActions.getAllMarkers}>
            {mapState.fetching ?
              'Загрузка ...'
              :
              'Загрузить все маркеры'
            }
          </Button>
          :
          null
        }
      </div>
    );
  }
}