import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由懒加载
// const Home = () =>import ("@/views/home/Home.vue")
import Home from '@/views/home/Home.vue'
import Profile from '@/views/profile/Profile.vue'
import Cart from '@/views/cart/Cart.vue'
import Category from '@/views/category/Category.vue'
import Detail from '@/views/detail/Detail.vue'

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:"/home",
    name:"home",
    component:Home
  },
  {
    path:"/profile",
    name:"profile",
    component:Profile
  },
  {
    path:"/cart",
    name:"cart",
    component:Cart
  },
  {
    path:"/category",
    name:"category",
    component:Category
  },
  {
    path:"/detail/:iid",
    name:"detail",
    component:Detail
  }
  
]

const router = new VueRouter({
  routes
})

export default router
