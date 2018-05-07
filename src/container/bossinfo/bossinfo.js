/**
 * Created by xianm on 2018-03-09.
 */
import React from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {update} from '../../redux/user.redux'
import {connect} from 'react-redux'

// connect method connects the redux and BossInfo class
connect(
    state=>state.user,
    {update}
)
export default class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // the state should have all the fields with initial values
            title:'',
            company:'',
            salary:'',
            desc:''
        }
    }
    onChange(k, v){
        this.setState(
            {[k]: v}
        )
    }
    render(){
        const path = this.props.location.pathname
        const redirectTo = this.props.redirectTo
        return (
            <div>
                // the checking of whether redirectTo is the same as path is to avoid
                // the warning that you are already in bossinfo page but you still want
                // to redirect to bossinfo
                {redirectTo&&redirectTo !== path? <Redirect to={this.props.redirectTo}/> : null}
                <NavBar mode="light">complete Boss info</NavBar>
                <AvatarSelector selectAvator={imgName=>{
                    this.setState({
                            avatar:imgName
                    })
                }}/>
                <InputItem onChange={v=>this.onChange('title', v)}>recruiting position</InputItem>
                <InputItem onChange={v=>this.onChange('company', v)}>company name</InputItem>
                <InputItem onChange={v=>this.onChange('salary', v)}>salary range</InputItem>
                <TextareaItem rows = {3}
                              autoHeight
                              onChange={v=>this.onChange('desc', v)}
                              title='job description'
                />
                <Button
                    onClick={()=>{
                        this.props.update(this.state)
                    }}
                    type='primary'>save</Button>
            </div>
        )
    }
}
