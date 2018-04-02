<template>
  <div>
    <div class="container pt-5 pb-5">
      <div class="col-12 text-center">
        <div><h4>Sign up</h4></div>
        <div class="col-md-6 offset-md-3 text-center">
          <div class="pt-3 text-left">
            <h6>Enter your Email address:</h6>
          </div>
          <div class="pt-1">
            <input v-model.trim="email" @input="$v.email.$touch()" 
            :class="{ 'is-invalid': !$v.email.$dirty ? false : emailError, 'is-valid': !emailError }" 
            class="form-control">
          </div>
          <div class="pt-3 text-left">
            <h6>Create password:</h6>
          </div>
          <div class="pt-1">
            <div class="input-group">
              <input v-if="passwordTypeFirstEnabled" type="password" v-model.trim="passwordFirst" @input="$v.passwordFirst.$touch()" 
              :class="{ 'is-invalid': !$v.passwordFirst.$dirty ? false : passwordFirstError, 'is-valid': !passwordFirstError }" 
              class="form-control">
              <input v-else type="text" v-model.trim="passwordFirst" @input="$v.passwordFirst.$touch()"
              :class="{ 'is-invalid': !$v.passwordFirst.$dirty ? false : passwordFirstError, 'is-valid': !passwordFirstError }" 
              class="form-control">
              <span class="input-group-btn">
                <button @click="passwordTypeFirstEnabled = !passwordTypeFirstEnabled" v-if="passwordTypeFirstEnabled" 
                class="btn btn-secondary button-group" type="button">Show</button>
                <button @click="passwordTypeFirstEnabled = !passwordTypeFirstEnabled" v-else 
                class="btn btn-secondary button-group" type="button">Hide</button>
              </span>
            </div>
          </div>
          <div class="pt-3 text-left">
            <h6>Retry password:</h6>
          </div>
          <div class="pt-1">
            <div class="input-group">
              <input v-if="passwordTypeSecondEnabled" type="password" v-model.trim="passwordSecond" @input="$v.passwordSecond.$touch()" 
              :class="{ 'is-invalid': !$v.passwordSecond.$dirty ? false : passwordSecondError, 'is-valid': !passwordSecondError }" 
              class="form-control">
              <input v-else type="text" v-model.trim="passwordSecond" @input="$v.passwordSecond.$touch()"
              :class="{ 'is-invalid': !$v.passwordSecond.$dirty ? false : passwordSecondError, 'is-valid': !passwordSecondError }" 
              class="form-control">
              <span class="input-group-btn">
                <button @click="passwordTypeSecondEnabled = !passwordTypeSecondEnabled" v-if="passwordTypeSecondEnabled" 
                class="btn btn-secondary button-group" type="button">Show</button>
                <button @click="passwordTypeSecondEnabled = !passwordTypeSecondEnabled" v-else 
                class="btn btn-secondary button-group" type="button">Hide</button>
              </span>
            </div>
          </div>
          <div class="pt-3">
            <button :disabled="signUpDisabled" class="btn btn-block btn-secondary">Sign up</button>
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
      passwordFirst: '',
      passwordSecond: '',
      passwordTypeFirstEnabled: true,
      passwordTypeSecondEnabled: true,
    }
  },
  validations: {
    email: {
      required,
    },
    passwordFirst: {
      required,
    },
    passwordSecond: {
      required,
    },
  },
  computed: {
    emailError () {
      return !emailValidator.validate(this.email);
    },
    passwordFirstError() {
      if (passwordCheck(this.passwordFirst)) {
        return false;
      }
      return true;
    },
    passwordSecondError() {
      if (passwordCheck(this.passwordSecond)) {
        return false;
      }
      return true;
    },
    signUpDisabled() {
      if (this.emailError || this.passwordFirstError || this.passwordSecondError) {
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
