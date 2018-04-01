<template>
  <div>
    <div class="container pt-5 pb-5">
      <div class="col-12 text-center">
        <div><h4>Login</h4></div>
        <div class="col-md-6 offset-md-3 text-center">
          <div class="pt-3 text-left">
            <h6>Enter your Email address:</h6>
          </div>
          <div class="pt-1">
            <input type="text" v-model.trim="email" @input="$v.email.$touch()"
            :class="{ 'is-invalid': !$v.email.$dirty ? false : emailError, 'is-valid': !emailError }" 
            class="form-control">
          </div>
          <div class="pt-3 text-left">
            <h6>Enter password:</h6>
          </div>
          <div class="pt-1">
            <div class="input-group">
              <input v-if="passwordTypeEnabled" type="password" v-model.trim="password" @input="$v.password.$touch()" 
              :class="{ 'is-invalid': !$v.password.$dirty ? false : passwordError, 'is-valid': !passwordError }" 
              class="form-control">
              <input v-else type="text" v-model.trim="password" @input="$v.password.$touch()"
              :class="{ 'is-invalid': !$v.password.$dirty ? false : passwordError, 'is-valid': !passwordError }" 
              class="form-control">
              <span class="input-group-btn">
                <button @click="passwordTypeEnabled = !passwordTypeEnabled" v-if="passwordTypeEnabled" 
                class="btn btn-secondary button-group" type="button">Show</button>
                <button @click="passwordTypeEnabled = !passwordTypeEnabled" v-else 
                class="btn btn-secondary button-group" type="button">Hide</button>
              </span>
            </div>
          </div>
          <div class="pt-3">
            <button :disabled="loginDisabled" class="btn btn-block btn-secondary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import emailValidator from '../../../node_modules/email-validator';
import { passwordCheck } from '../../utils/Validators';
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      passwordTypeEnabled: true,
    }
  },
  validations: {
    email: {
      required,
    },
    password: {
      required,
    },
  },
  computed: {
    emailError () {
      return !emailValidator.validate(this.email);
    },
    passwordError() {
      if (passwordCheck(this.password)) {
        return false;
      }
      return true;
    },
    loginDisabled() {
      if (this.emailError || this.passwordError) {
        return true;
      }
      return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-group {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
