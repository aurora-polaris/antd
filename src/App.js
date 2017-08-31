import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from 'antd/lib/button';
//如果要引入多个的话，用上面的那种方式就会使代码变多，所以用下面的方式
import { Button } from 'antd';
//按需打包
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
