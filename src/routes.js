import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetails from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'

export const routes = [
  {
    path: '',
    component: Home,
    name: 'home'
  },
  {
    path:'/user',
    component: User,
    children:[
      {path:'',component:UserStart},
      {path:':id/edit',component:UserEdit, name: 'editUser'},
      {path:':id',component:UserDetails},
      {path:'*', redirect:'/'}
    ],
  }
];