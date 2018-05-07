import React from 'react'
import logoImg from '../../static/img/index/logo.jpg'
console.log(logoImg)

export default () => {
    const logoTitle = 'cmooc'
    const linkTitle = 'back to index'
    return (
        <div className="logo-container">
            <a href="#" target='_self' title={linkTitle}><img src={logoImg} title={logoTitle}/></a>
        </div>
    )
}
