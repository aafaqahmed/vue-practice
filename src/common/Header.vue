<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link to="/" class="nav-link" exact>Home</router-link>
          <router-link to="/team" class="nav-link" exact>Team</router-link>
          <router-link to="/contact" class="nav-link" exact>Contact</router-link>
        </ul>
      </div>
    </nav>  </div>
</template>

<script>

</script>

<style>

</style>