<template>
<div class="container">
  <br><hr><br>
  <app-navigation></app-navigation>
  <br><hr><br>
  <router-view :members="members"></router-view>
</div>
</template>

<script>
import Navigation from '../components/team/Navigation.vue'
export default {

  data(){
    return{
      members:[
        {
          name: 'Aafaq Ahmad',
          title: 'Ceo',
          email: 'aafaq@gmail.com',
          text: 'Phasellus eget enim eu lectus faucibus vestibulum',
          position: 'head',
          img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
        },
        {
          name: 'Farhan Ahmad',
          title: 'Partner',
          email: 'farhan@gmail.com',
          text: 'Phasellus eget enim eu lectus faucibus vestibulum',
          position: 'head',
          img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
        },
        {
          name: 'Arslan Ahmad',
          title: 'CTO',
          email: 'arslan@gmail.com',
          text: 'Phasellus eget enim eu lectus faucibus vestibulum',
          position: 'tech',
          img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
        },
        {
          name: 'Muneer Ahmad',
          title: 'Marketing Head',
          email: 'muneer@gmail.com',
          text: 'Phasellus eget enim eu lectus faucibus vestibulum',
          position: 'mkt',
          img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
        }
      ]
    }
  },

  components:{
    'app-navigation': Navigation,
  }
}

</script>