<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand"><h4>Travelline</h4></router-link>
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
          <div class="btn-group" role="group">
            <span id="btnGroupDrop" class="button-type margin-right dropdown-toggle" 
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ lang }}
            </span>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop">
              <a @click="changeLanguage('ru')" class="dropdown-item cursor-hand">ru</a>
              <a @click="changeLanguage('en')" class="dropdown-item cursor-hand">en</a>
            </div>
          </div>
          <router-link to="/signup" class="btn btn-success margin-right">SignUp</router-link>
          <router-link to="/login" class="btn btn-success">Login</router-link>
        </form>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>

import Store from './store/Store';

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    lang() {
      return this.$store.state.language;
    },
  },
  methods: {
    changeLanguage(language) {
      Store.dispatch('changeLanguage', language);
    },
  },
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

.cursor-hand {
  cursor: pointer;
}

.button-type {
  cursor: pointer;
  color: white;
}

</style>
