import appConfig from '../configs/appConfig.js'
import axios from 'axios'
export const CHECK_LOGIN = 'CHECK_LOGIN'
export const VIEW_USER = 'VIEW_USER'
export const LIST_USER = 'LIST_USER'

export function checkLogin(payload) {
    return {
        type: CHECK_LOGIN,
        payload: payload
    }
}

export function checkLoginMiddleWare(postData) {
    return (dispatch) => {
        axios({
            method:'post',
            url:appConfig.appURL.loginCheck,
            data: postData,
            // headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(res => {
            dispatch(checkLogin(res.data.responseData))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function listUser(payload) {
    return {
        type:LIST_USER,
        payload:payload
    }
}

export function listUserMiddleWare() {
    return (dispatch) => {
        axios({
            method:'post',
            url:appConfig.appURL.listUser,
        })
        .then(res => {
            dispatch(listUser(res.data.responseData))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function viewUser(payload) {
    return {
        type: VIEW_USER,
        payload: payload
    }
}

export function viewUserMiddleware(postData) {
    return (dispatch) => {
        axios({
            method:'post',
            url:appConfig.appURL.viewUser,
            data:postData
        })
        .then((res)=> {
            dispatch(viewUser(res.data.responseData))
        })
        .catch((err)=> {
            console.log(err)
        })

    }
}