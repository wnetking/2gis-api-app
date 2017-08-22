const initialState = {
  zoom: 12,
  center: [46.47995502122337, 30.75759887695313],
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
  ],
  withPopup: false,
  showAll: false
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