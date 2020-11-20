<template>
  <div class="form-group col-lg-12">
    <label for="confirmarPassword" id="labelConfirmarPassword">Confirmar Password *</label>
    <input type="password" class="form-control" id="confirmarPassword" v-on:keyup="event => validatePassword(event.target, '#mensagemErroConfirmarPassword', '#labelConfirmarPassword', '#password')"/>
    <small id="mensagemErroConfirmarPassword" class="form-text text-danger" hidden></small>
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