<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand"><h4>Project</h4></router-link>
      <form class="form-inline">
        <router-link to="/registration" class="btn btn-secondary margin-right">Registration</router-link>
        <router-link to="/login" class="btn btn-secondary">Login</router-link>
      </form>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

.margin-right {
  margin-right:25px;
}

</style>
