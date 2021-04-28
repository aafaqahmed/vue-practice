<template>
  <div class="container">
    <div class="row">
      <h1>{{ text }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  props:['text']

}
</script>

<style>
img{
  width: 300px;
  height: 200px;
}
</style>