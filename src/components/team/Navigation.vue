<template>
<div class="row">
  <ul class="nav nav-pills nav-justified">
    <li role="presentation">
      <router-link class="nav-link nav-item" active-class="active" to="/team" exact>All</router-link>
    </li>
    <li role="presentation">
      <router-link class="nav-link nav-item" to="/team/head" active-class="active">Head</router-link>
    </li>
    <li role="presentation">
      <router-link class="nav-link nav-item" to="/team/mkt" active-class="active">Marketing</router-link>
    </li>
    <li role="presentation">
      <router-link class="nav-link nav-item" to="/team/tech" active-class="active">Technical</router-link>
    </li>
  </ul>
</div>

</template>

<style>

</style>