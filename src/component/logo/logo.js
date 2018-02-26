/**
 * Created by xianm on 2018-02-26.
 */
import React from 'react'
import logoImg from './job_recruiting.PNG'

export default class Logo extends React.Component{
    render(){
        return (
            <div className="logo-container">
                <img src={logoImg} alt="job recruiting logo"/>
            </div>
        )
    }
}