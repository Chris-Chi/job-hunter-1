/**
 * Created by xianm on 2018-03-05.
 */
import axios from 'axios'
import {getRedirectPath} from '../util'

// const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// using AUTH_SUCCESS to replace REGISTER, LOGIN and UPDATE SUCCESS, as all of the three successes
// can be regarded as authentication success
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const initState = {
    // where the user should redirect to, eg. after logging in or registering,
    // the page need to redirect to somewhere else
    redirectTo:'',
    msg:'',
 //   isAuth:false,
    user:'',
    type:''
}
//  all the functions inside function 'user' are pure functions, so the function 'user'
// is also a pure function
export function user(state=initState, action){
    switch(action.type){
        case AUTH_SUCCESS:
            // the value of redirectTo should be variable, because where it routes to depends on whether
            // the user info is complete, and also the type of user, talent or boss
            return {...state, msg:'', redirectTo:getRedirectPath(action.payload), ...action.payload }
        case LOAD_DATA:
            return {...state, ...action.payload}
        case ERROR_MSG:
            return {...state, msg: action.msg}
        default:
            return state
    }
}

// action creator
const authSuccess = obj => {
    // you need to filter the password out, otherwise the user can view the
    // original password in the browser. eg. in developer tool or redux plugin
    // you should never expose the original password anywhere
    const {pwd, ...data} = obj
    return {type: AUTH_SUCCESS, payload: data}
}

const errorMsg = msg => ({ msg, type: ERROR_MSG })

export function userInfo(){
    return dispatch=>{
        axios.get('user/info').then(
            res=>{
                if(res.status===200){
                    if(res.data.code ===0){

                    }else{
                        this.props.loadData(res.data.data)
                        this.props.history.push('/login')
                    }
                }
            }
        )
    }
}
export function loadData(userInfo){
    return {type: LOAD_DATA, payload: userInfo}
}

// this is not a reducer, it's just a function that implements user register
export function register({user, pwd, repeatpwd, type}){
    if(!user||!pwd){
        return errorMsg('you must enter user name and password')
    }
    if(pwd !== repeatpwd){
        return errorMsg('the password does not match re-entered password')
    }
    return dispatch =>{
        axios.post('/user/register', {user, pwd, type})
            .then(res=>{
                if(res.status === 200&&res.data.code ===0){
                    dispatch(authSuccess({user, pwd, type}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}
export function update(data){
    return dispatch=>{
        axios.post('/user/update', data)
            // user without an avatar will also be recognised as a valid user, so
        // we only do a weak validation here, we don't check if there's input
            .then(
                res=>{
                    if(res.status===200 && res.data.code===0){
                        dispatch(authSuccess(res.data.data))
                    }else {
                        dispatch(errorMsg(res.data.msg))
                    }
                }
            )
    }
}
export function login({user, pwd}){
    if(!user || !pwd){
        return errorMsg("you must enter user name and password")
    }
    return dispatch => {
        axios.post('/user/login', {user, pwd})
            .then(
                res => {
                    if(res.status === 200 && res.data.code ===0){
                        dispatch(authSuccess(res.data.data))
                    }else{
                        dispatch(errorMsg(res.data.msg))
                    }
                }
            )
    }
}