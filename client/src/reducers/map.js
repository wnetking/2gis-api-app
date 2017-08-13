const initialState = {
  zoom: 12,
  center: [46.47995502122337, 30.75759887695313],
  markers: [],
  pos: [46.47995502122337, 30.75759887695313],
  draggable: false,
  withPopup: false,
  showAll: false,
  popupContent: 'Hello world!'
};

export default function map(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_MARKERS':
      return {
        ...state,
        ...action.payload

      }
    case 'SHOW_MARKERS':
      return state.map(todo =>
        (todo.id === action.payload.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )

    default:
      return state
  }
}