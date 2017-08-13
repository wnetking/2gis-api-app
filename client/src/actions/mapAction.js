export function saveMarkersAction(data) {
  return {
    type: 'SAVE_MARKERS',
    payload : data
  }
}

export function showMarkersAction(data) {
  return {
    type: 'SHOW_MARKERS',
    payload : data
  }
}