import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        let arr = [1,3,5,7,9];
        console.log(this.props);
        return (
            <div>
                <ul>{arr.map(
                    number =><li>{number*5}</li>
                )}</ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;
