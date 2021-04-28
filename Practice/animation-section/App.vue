<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animation</h1>
        <hr>
        <button @click="show = !show" class="btn btn-primary">Show alert</button>
        <br><br>
        <transition name="slide" appear>
          <div class="alert alert-info" v-if="show">Here is some info!!</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        show: true
    }
  }
}
</script>

<style>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
  .fade-leave{

  }
  .fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }
  .slide-enter{
    opacity: 0;
  }
  .slide-enter-active{
    transition: opacity 1s;
    animation: slide-in 1s ease-out forwards;
  }
  .slide-leave{
    
  }
  .slide-leave-active{
    transition: opacity 1s;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }
  
  @keyframes slide-in {
    from{
      transform: translateY(20px);
    }
    to{
      transform: translateY(0px);
    }
  }

  @keyframes slide-out {
    from{
      transform: translateY(0px);
    }
    to{
      transform: translateY(20px);
    }
  }
</style>