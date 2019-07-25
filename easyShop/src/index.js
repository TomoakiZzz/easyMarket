import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './views/home.js';
import Login from './views/login/login'
import 'antd-mobile/dist/antd-mobile.css';


// 引入mobx
import {Provider} from 'mobx-react';
import store from './store'


ReactDOM.render(<Provider {...store}>
        <Login />
    </Provider>, document.getElementById('root'));