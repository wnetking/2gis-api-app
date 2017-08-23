import { SAVE_MARKERS } from '../constants/'

export function saveMarkerAction(marker, centerPos) {
  return (dispatch, getState, api) => {
    dispatch({
      type: SAVE_MARKERS,
      payload: {
        center: centerPos,
        markers: [].concat(getState().map.markers, marker)
      }
    });
  }
}

export function showMarkersAction(data) {
  return {
    type: 'SHOW_MARKERS',
    payload: data
  }
}