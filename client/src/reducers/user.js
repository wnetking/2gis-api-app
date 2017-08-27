import { LOGIN } from '../constants/'

const initialState = {
  isLogin: false,
  userInfo: {
    name: 'Anonim',
    email: 'anonim@anonim.com',
    imageUrl: ''
  }
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}