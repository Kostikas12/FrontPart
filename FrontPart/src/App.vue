<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand"><h4>FineLine</h4></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/about" class="nav-link"><h6>About</h6></router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/contacts" class="nav-link"><h6>Contacts</h6></router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-md-0">
          <router-link to="/signup" class="btn btn-secondary margin-right">SignUp</router-link>
          <router-link to="/login" class="btn btn-secondary">Login</router-link>
        </form>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: opacity .2s;
}

</style>
