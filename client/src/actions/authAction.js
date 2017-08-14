export function logInAction(data) {
  return {
    type: 'LOGIN',
    payload: data
  }
}

export function logOutAction(data) {
  return {
    type: 'LOGOUT',
    payload: data
  }
}

export function errorAction(data) {
  return {
    type: 'ERROR',
    payload: data
  }
}

export function updateDataAction(data) {
  return {
    type: 'UPDATE_DATA',
    payload: data
  }
}