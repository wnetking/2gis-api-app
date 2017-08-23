import { SAVE_MARKERS } from '../constants/'

const initialState = {
  zoom: 10,
  center: [46.47995502122337, 30.75759887695313],
  withPopup: false,
  showAll: false,
  markers: [
    {
      author: 'Anonim',
      pos: [46.47995502122337, 30.75759887695313],
      label: 'Hello world!',
      draggable: false,
      clickable: true,
      created: Date.now
    },
    {
      author: 'Anonim-1',
      pos: [46.5, 30.9],
      label: 'Hello world!',
      draggable: false,
      clickable: true,
      created: Date.now
    }
  ]
};

export default function map(state = initialState, action) {
  switch (action.type) {
    case SAVE_MARKERS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}