import React from 'react'
import {Link} from 'react-router-dom'

export default class headerMenu extends React.Component{
    render(){
        const menuItems = [
            {
                text:'free course',
                link:'//www.cmooc.com/free-course/list'
            },
            {
                text:'career path',
                link:'//www.cmooc.com/career-path'
            },
            {
                text:'project',
                link:'//www.cmooc.com/project'
            },
            {
                text:'ask and answer',
                link:'//www.cmooc.com/ask'
            },
            {
                text:'blog',
                link:'//www.cmooc.com/blog'
            }
        ].map(v => (
            <ul className="menu-item"><Link to={v.link}>v.text</Link></ul>
        ))
        return (
            <div className="menu-container">
                {menuItems}
            </div>
        )
    }
}