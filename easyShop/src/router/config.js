import React from 'react'
import Loadable from 'react-loadable'
const Loading = () => {
    return <div>
        <img src='http://mi.hqyj.com/uploads/allimg/170420/13130Q011-0.gif' style={{width:'100%',height:'100%'}}/>
    </div>
}
//登录
const Login = Loadable({
    loader:() => import ('../views/login/login'),
    loading:Loading
})
//首页
const Home = Loadable({
    loader:() => import ('../views/home/home'),
    loading:Loading
})
//专题
const Special = Loadable({
    loader:() => import ('../views/special/special'),
    loading:Loading
})
//分类
const Classification = Loadable({
    loader:() => import ('../views/classification/classification'),
    loading:Loading
})
//购物车
const ShoppingCart = Loadable({
    loader:() => import ('../views/ShoppingCart/ShoppingCart'),
    loading:Loading
})
//我的
const My = Loadable({
    loader:() => import ('../views/My/my'),
    loading:Loading
})
//我的收藏
const MyCollection = Loadable({
    loader:() => import ('../views/My/MyCollection/myCollection'),
    loading:Loading
})
//地址添加
const AddressManagement = Loadable({
    loader:() => import ('../views/My/addressManagement/addressManagement'),
    loading:Loading
})
//留言
const TopicDetail = Loadable({
    loader:() => import ('../views/topicDetail/topicDetail'),
    loading:Loading
})
//写留言
const CommentWrite = Loadable({
    loader:() => import ('../views/topicDetail/commentWrite/commentWrite'),
    loading:Loading
})
//查看留言
const CommentList = Loadable({
    loader:() => import ('../views/topicDetail/commentList/commentList'),
    loading:Loading
})
//品牌详情页
const DrandDetail = Loadable({
    loader:() => import ('../views/brandDetail/brandDetail'),
    loading:Loading
})
//分类
const GoodsCategory = Loadable({
    loader:() => import ('../views/goodsCategory/goodsCategory'),
    loading:Loading
})
//分类
const Goods = Loadable({
    loader:() => import ('../views/goods/goods'),
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
        path:'/addressManagement',
        component:AddressManagement
    },{
        path:'/topicDetail/:id',
        component:TopicDetail
    },{
        path:'/topicCommentWrite/:id',
        component:CommentWrite
    },{
        path:'/comment/:id',
        component:CommentList
    },{
        path:'/brandDetail/:id',
        component:DrandDetail
    },{
        path:'/categorys/:id',
        component:GoodsCategory
    },{
        path:'/goods/:id',
        component:Goods
    },{
        path:'/',
        redirect:'/home'
    }
]
export default routers