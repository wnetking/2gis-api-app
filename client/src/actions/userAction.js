import { LOGIN } from '../constants/'


export function logInAction(data) {
  return {
    type: LOGIN,
    payload: {
      isLogin: true,
      userInfo: {
        name: data.name,
        email: data.email,
        imageUrl: data.imageUrl
      }
    }
  }
}