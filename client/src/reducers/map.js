import { SAVE_MARKERS, SET_LOCATION, GET_ALL_MARKERS, GET_ALL_MARKERS_FETCH } from '../constants/'

const initialState = {
  fetching: false,
  isLoadFromServer: false,
  zoom: 8,
  center: [46.8, 32.07],
  withPopup: false,
  showAll: false,
  markers: []
};

export default function map(state = initialState, action) {
  switch (action.type) {
    case SAVE_MARKERS:
      return {
        ...state,
        ...action.payload
      }
    case SET_LOCATION:
      return {
        ...state,
        ...action.payload
      }
    case GET_ALL_MARKERS:
      return {
        ...state,
        ...action.payload
      }
    case GET_ALL_MARKERS_FETCH:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}