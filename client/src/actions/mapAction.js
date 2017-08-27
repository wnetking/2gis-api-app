import { SAVE_MARKERS, SET_LOCATION, GET_ALL_MARKERS,GET_ALL_MARKERS_FETCH } from '../constants/'
import getLocation from '../utils/getLocation'
import db from '../utils/dbUtils'

export function saveMarkerAction(pos) {
  return (dispatch, getState) => {
    db.save({
      author: getState().user.userInfo.name,
      pos: pos,
      created: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    }).then(() => {
      dispatch({
        type: SAVE_MARKERS,
        payload: {
          center: pos,
          markers: [].concat(getState().map.markers, {
            author: getState().user.userInfo.name,
            pos: pos,
            created: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
          })
        }
      });
    });
  }
}

export function setLocationAction() {
  return (dispatch, getState) => {
    getLocation().then((pos) => {
      dispatch({
        type: SET_LOCATION,
        payload: {
          center: pos,
          markers: [].concat(getState().map.markers, {
            author: getState().user.userInfo.name,
            pos: pos,
            created: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
          })
        }
      })
    })
  }
}

export function getAllMarkers() {
  return (dispatch, getState) => {
    dispatch({
      type: GET_ALL_MARKERS_FETCH,
      payload: {
        fetching: true
      }
    })

    db.getAll().then((data) => {
      dispatch({
        type: GET_ALL_MARKERS,
        payload: {
          fetching: false,
          isLoadFromServer: true,
          markers: [].concat(getState().map.markers, data)
        }
      })
    })
  }
}