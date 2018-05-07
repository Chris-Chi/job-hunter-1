/**
 * Created by xianm on 2018-03-09.
 */
import React from 'react'
import {Grid, List} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class AvatarSelector extends React.Component{
    // type checking can ensure the potential error is exposed as early as possible
    static propTypes = {
        selectAvatar: PropTypes.func.isRequired
    }
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                .split(',')
                .map(v=>(
                    // this 'require' is webpack require
                       {icon: require(`../img/${v}.png`),
                        text: v}))
        const gridHeader = this.state.icon ? (
            <div>
                <span>the avatar selected</span>
                <img style={{width:20}} src={this.state.icon} alt=""/>
            </div>
        ) : 'Please choose the avatar'
        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid data={avatarList} columnNum = {5}
                          onClick={elem=>{
                              this.setState(elem)
                              // the parent component pass in the function selectAvatar, the function
                              // selectAvatar will store the avatar text into the parent component's
                              // instance's state
                              this.props.selectAvatar(elem.text)
                          }}
                    />
                </List>
            </div>
        )
    }
}