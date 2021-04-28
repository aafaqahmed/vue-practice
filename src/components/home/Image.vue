<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <slot name="img01"></slot>
      </div>
      <div class="col-lg-4">
        <slot name="img02"></slot>
      </div>
      <div class="col-lg-4">
        <slot name="img03"></slot>
      </div>
    </div>
  </div>
</template>

<style>
img{
  width: 300px;
  height: 200px;
}
</style>