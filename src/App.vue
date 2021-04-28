<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
              <app-header></app-header>
              <transition name="slide" mode="out-in">
                <router-view></router-view>
              </transition>

            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
    export default {
      components:{
        'app-header':Header,
      }
    }
</script>

<style>
.slide-enter{
  opacity: 0;
}
.slide-enter-active{
  transition: opacity 1s;
  animation: slide-out 1s ease-out forwards;
}
.slide-leave-active{
}
.slide-leave{
  animation: slide-in 1s ease-out forwards;

}

@keyframes slide-out {
  to{
    transform: translateY(0);
  }
  from{
    transform: translateY(30px);
  }
}

@keyframes slide-in {
  to{
    transform: translateY(-30px);
  }
  from{
    transform: translateY(0px);
  }
}
</style>

<style>
</style>
