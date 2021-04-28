import Home from './views/Home.vue'
import Team from './views/Team.vue'
import Contact from './views/Contact.vue'
import AllMembers from './components/team/AllMembers.vue'
import Head from './components/team/Head.vue'
import Marketing from './components/team/Marketing.vue'
import Technology from './components/team/Technology.vue'

export const routes = [
  {
    path: '/',
    component:Home,
  },
  {
    path: '/team/',
    component:Team,
    children:[
      {path:'',component:AllMembers},
      {path:'head',component:Head},
      {path:'mkt',component:Marketing},
      {path:'tech',component:Technology}
    ],
  },
  {
    path: '/contact',
    component:Contact,
  }
];