<template>
  <div class="form-group col-lg-12">
    <label for="password" id="labelPassword">Password *</label>
    <input type="password" class="form-control" id="password" v-on:keyup="event => validatePassword(event.target, '#mensagemErroPassword', '#labelPassword', '#confirmarPassword')"/>
    <small id="mensagemErroPassword" class="form-text text-danger" hidden></small>
  </div>
</template>

<script>

import Utils from '../../../utils/Utils'
export default {
  methods:{
    validatePassword: Utils.methods.validatePassword
  }
}
</script>