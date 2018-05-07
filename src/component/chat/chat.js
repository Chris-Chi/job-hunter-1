import React from 'react'
import io from 'socket.io-client'

export default class Chat extends React.Component{
    componentDidMount(){
        // because it's cross-domain, we need to connect manually
        const socket = io('ws://localhost:9093')
    }
    render(){

    }
}