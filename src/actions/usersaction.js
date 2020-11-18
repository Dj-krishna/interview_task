import { getUsersApi } from "../api/api"

export const getUsersAction = (users) => ({
  type: 'GET_ALL_USERS',
  users
})


export const getAllUsers = () => dispatch => {
  getUsersApi().then(data => {
    dispatch(getUsersAction(data))
  }).catch(err=>{
    console.log("Error :  "+ err)
  })
}

