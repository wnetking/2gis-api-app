import React, {Component} from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import {Map, Marker, Popup} from '2gis-maps-react'

export default class Markers extends Component {
  state = {
    zoom: 12,
    center: [54.98, 82.89],
    markers: [],
    pos: [54.98, 82.89],
    draggable: false,
    withPopup: false,
    popupContent: 'Hello world!'
  };

  onClick = (e) => {
    this.setState({
      pos: [e.latlng.lat, e.latlng.lng],
      center: [e.latlng.lat, e.latlng.lng]
    });

    this.addMarker();
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.setState({
        pos: [pos.coords.latitude, pos.coords.longitude],
        center: [pos.coords.latitude, pos.coords.longitude]
      });

      this.addMarker();
    });
  }


  onChangePos = e => {
    this.setState({
      pos: e.target.value.split(',')
    });
  };

  onChangeDraggable = () => {
    this.setState({
      draggable: !this.state.draggable
    });
  };

  onChangeWithPopup = () => {
    this.setState({
      withPopup: !this.state.withPopup
    });
  };

  onChangePopupContent = e => {
    this.setState({
      popupContent: e.target.value
    });
  };

  addMarker = () => {
    let markers = this.state.markers;
    const pos = this.state.pos;
    const draggable = this.state.draggable;
    const popupContent = this.state.popupContent;
    let popup = null;
    if (this.state.withPopup) {
      popup = (
        <Popup>
          { popupContent }
        </Popup>
      );
    }
    markers.push(
      <Marker key={this.state.markers.length} draggable={draggable} pos={pos}>
        { popup }
      </Marker>
    );
    this.setState({
      markers: markers
    });
  };

  removeMarker = () => {
    let markers = this.state.markers;
    markers.pop();
    this.setState({
      markers: markers
    });
  };

  render() {
    return (
      <div>
        <Map onClick={this.onClick} style={{width: "100%", height: "700px"}} center={this.state.center} zoom={this.state.zoom}>
          { this.state.markers }
        </Map>
        <ButtonToolbar className="mt-3">
          <Button bsStyle="primary" onClick={this.removeMarker} disabled={!this.state.markers.length}>
            Show
          </Button>
          <Button>Save</Button>
        </ButtonToolbar>
      </div>
    );
  }
}