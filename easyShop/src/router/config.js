import React from 'react'
import Loadable from 'react-loadable'
const Loading = () => {
    return <div>
        <img src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=757907025,1989047610&fm=26&gp=0.jpg'/>
    </div>
}
const Login = Loadable({
    loader:() => import ('../views/login/login'),
    loading:Loading
})
const Home = Loadable({
    loader:() => import ('../views/home/home'),
    loading:Loading
})
const Special = Loadable({
    loader:() => import ('../views/special/special'),
    loading:Loading
})
const Classification = Loadable({
    loader:() => import ('../views/classification/classification'),
    loading:Loading
})
const ShoppingCart = Loadable({
    loader:() => import ('../views/ShoppingCart/ShoppingCart'),
    loading:Loading
})
const My = Loadable({
    loader:() => import ('../views/My/my'),
    loading:Loading
})
const MyCollection = Loadable({
    loader:() => import ('../views/My/MyCollection/myCollection'),
    loading:Loading
})
const routers=[
    {
        path:'/home',
        component:Home
    },{
        path:'/login',
        component:Login
    },{
        path:'/special',
        component:Special
    },{
        path:'/classification',
        component:Classification
    },{
        path:'/shoppingCart',
        component:ShoppingCart
    },{
        path:'/my',
        component:My
    },{
        path:'/myCollection',
        component:MyCollection
    },{
        path:'/',
        redirect:'/home'
    }
]
export default routers