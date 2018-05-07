/**
 * Created by xianm on 2018-03-01.
 */
import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {loadData} from '../../redux/user.redux'
import {connect} from 'react-redux'

@withRouter
@connect(
    null,
    {loadData}
    )
/*
this component is responsible for verifying whether the routing is okay.
eg. if the user has no status of 'logged in', he is not allowed to access certain pages.
that means, without the cookie which has the userid, the routing to certain url is not allowed and will
be forced to 'login' page.
It achieves the user's info from backend and do the routing accordingly.
Because the routing logic is complex, we use a separate component for the routing solely
 */
export default class AuthRoute extends React.Component{
    // why doing routing in componentDidMount method?
    // that's because the frontend cannot determine how to route specifically until it achieves
    // information(data) from the backend
    componentDidMount(){
        const publicList = ['/login', '/register']
        const pathName = this.props.location.pathname
        if(publicList.indexOf(pathName) > -1){
            return null
        }
        axios.get('/user/info')
            .then(
            res => {
                if(res.status === 200){
                    if(res.data.code === 0){
                        // when the server sends response with success info, it means
                        // the user has been authenticated successfully, and the server has
                        // sent back the user info. function 'loadData' will store the user
                        // info into redux
                        this.props.loadData(res.data.data)
                    }else{
                    //    this.props.history.push('/login')
                    }
                }
            }
        )
    }

    render(){
        return null
    }
}