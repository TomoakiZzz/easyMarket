import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import My from "./views/My/my"
import Login from "./views/login/login"
import Home from "./views/home/home"
import Classification from './views/classification/classification'
import ShoppingCart from './views/ShoppingCart/ShoppingCart'
import Special from './views/special/special'
import MyCollection from './views/My/MyCollection/myCollection'
import goodsCategory from "./views/goodsCategory/goodsCategory"
import AddressManagement from './views/My/addressManagement/addressManagement'
import brandDetail from "./views/brandDetail/brandDetail"
import topicDetail from "./views/topicDetail/topicDetail"
import 'antd-mobile/dist/antd-mobile.css';
import "./scss/common.scss"
import rootRouters from "./router/config"
// 引入mobx
import { Provider } from 'mobx-react';
import store from './store'



ReactDOM.render(<Provider {...store}>
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/my' component={My} />
            <Route path='/Classification' component={Classification} />
            <Route path='/ShoppingCart' component={ShoppingCart} />
            <Route path='/Special' component={Special} />
            <Route path="/home" component={Home}/>
            <Route path="/myCollection" component={MyCollection}/>
            <Route path="/addressManagement" component={AddressManagement}/>
            <Route path="/categorys/:id" component={goodsCategory}/>
            <Route path="/brandDetail/:id" component={brandDetail}/>
            <Route path="/topicDetail/:id" component={topicDetail}/>
            <Redirect from="/" exact to="/home" />
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));