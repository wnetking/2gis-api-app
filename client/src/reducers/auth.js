const initialState = {
  login: localStorage.getItem('user') ? true : false,
  user: {
    name: localStorage.getItem('user') || 'Anonim',
    email: localStorage.getItem('email') || 'anonim@anonim.com'
  },
  message: {
    type: 'info',
    show: false,
    text: 'Test message'
  }
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        ...action.payload
      }
    case 'ERROR':
      return {
        ...state,
        ...action.payload
      }

    case 'UPDATE_DATA':
      
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}