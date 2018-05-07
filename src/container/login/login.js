/**
 * Created by xianm on 2018-02-25.
 */
import React from 'react'
import {connect} from 'react-redux'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import Logo from '../../component/logo/logo'
import {login} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
    state=>state.user,
    {login}
)
export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:'',
            pwd:''
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange(key, val){
        this.setState({
            [key]:val
        })
    }
    handleLogin(){
        this.props.login(this.state)
    }
    register(){
        this.props.history.push('/register')
    }
    render(){
        return (
            <div>
                <Logo/>
                <h2>Login Page</h2>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.handleChange('user', v)}
                        >user</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            type="password" onChange={v=>this.handleChange('pwd', v)}
                        >password</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.handleLogin}>login</Button>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>register</Button>
                </WingBlank>
            </div>
        )
    }
}