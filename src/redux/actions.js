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
    var formdata = new FormData();
    formdata.append('data', JSON.stringify(postData))
    return (dispatch) => {
        axios({
            method:'post',
            url:appConfig.appURL.loginCheck,
            data: formdata,
            headers: {'Content-Type': 'multipart/form-data'}
            // headers: {'Access-Control-Allow-Credentials':true}
            // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
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