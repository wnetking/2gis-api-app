import Marker from '../models/marker'

export function listMarkers() {
  return Marker.find();
}

export function createMarker(data) {
  const marker = new Marker(data)

  return marker.save();
}

export function deleteMarker(id) {
  return Marker.findById(id).remove();
}