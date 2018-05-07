/**
 * Created by xianm on 2018-02-25.
 */
import React from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Logo from '../../component/logo/logo'
import {register} from '../../redux/user.redux'

@connect(
    state=>state.user,
    {register}
)
export default class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type: 'talent'
        }
        this.login = this.login.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }

    login(){
        this.props.history.push('/login')
    }

    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }

    handleRegister(){
        this.props.register(this.state)
    }

    render(){
        const RadioItem = Radio.RadioItem
        return (
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <List>
                    {this.props.msg?<p className = 'error-msg'>{this.props.msg}</p>:null}
                    <InputItem onChange={ v=> this.handleChange('user', v) }>user name</InputItem>
                    <WhiteSpace/>
                    <InputItem type='password' onChange={ v=> this.handleChange('pwd', v)}>password</InputItem>
                    <WhiteSpace/>
                    <InputItem type='password' onChange={ v=> this.handleChange('repeatpwd', v)}>repeat password</InputItem>
                    <WhiteSpace/>
                    {/* not all data should be put into redux. the type 'talent' or 'boss' here are
                    only used to make a different look in radio item, so no need to put this into redux
                     */}
                    <RadioItem checked={this.state.type === 'talent'} onChange={()=>this.handleChange('type','talent')}>talent</RadioItem>
                    <WhiteSpace/>
                    <RadioItem checked={this.state.type === 'boss'} onChange={()=>this.handleChange('type','boss')}>boss</RadioItem>
                    <Button type="primary" handleRegister={this.handleRegister}>register</Button>
                </List>
            </div>
        )
    }
}