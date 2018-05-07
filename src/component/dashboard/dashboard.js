import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'

function Msg(){
    return <h2>消息列表页面</h2>
}
@connect(
    state=>state
)
// DashBoard is for various pages to have the same structures, eg. logo, footer, etc
export default class DashBoard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
      const {pathName}=this.props.location
      const user = this.props.user
      const navList = [
          {
            path:'/boss',
            // when logging in as boss, what he sees is the list the job-seekers
            text:'job-seeker',
            icon:'boss',
            title:'job-seeker list',
            component:Boss,
            hide: user.type==='genius'
          },
          {
              path:'/genius',
              text:'boss',
              icon:'job-seeker',
              title:'boss list',
              component:Genius,
              hide: user.type==='boss'
          },
          {
              // message will not hide, so no need to have property 'hide'
              path:'/msg',
              text:'message',
              icon:'msg',
              title:'message list',
              component:Msg
          },
          {
              path:'/me',
              text:'me',
              icon:'user',
              title:'personal center',
              component:User
          }
      ]
        return (
            <div>
                {/*the navbar needs to be fixed to the logo*/}
                <NavBar className="fixed-header" mode="dark">{navList.find(v=>v.path===pathName).title}</NavBar>
                <div style={{marginTop:45}}>
                    <Switch>
                        {navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))}
                    </Switch>
                </div>
            </div>
        )
    }
}