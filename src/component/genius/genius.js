import React from 'react'
import {connect} from 'react-redux'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import {getUserList} from '../../redux/chatUser.redux'

@connect(
    state=>state.chatuser,
    {getUserList}
)
export default class Genius extends React.component{
    componentDidMount(){
        this.props.getUserList('boss')
    }

    render(){
        return null
    }
}