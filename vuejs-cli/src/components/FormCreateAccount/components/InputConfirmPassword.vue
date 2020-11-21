<template>
  <div class="form-group col-lg-12">
    <label for="confirmarPassword" id="labelConfirmarPassword"
      >Confirmar Password *</label
    >
    <input
      type="password"
      class="form-control"
      id="confirmarPassword"
      v-on:keyup="
        (event) =>
          validatePassword(
            event.target,
            '#mensagemErroConfirmarPassword',
            '#labelConfirmarPassword',
            '#password'
          )
      "
    />
    <small
      id="mensagemErroConfirmarPassword"
      class="form-text text-danger"
      hidden
    ></small>
  </div>
</template>

<script>
import $ from "jquery";
import Utils from "@/utils/Utils";
export default {
  methods: {
    validatePassword: Utils.methods.validatePassword,
    limparCampos() {
      var $confirmarPassword = $("#confirmarPassword");
      var $labelConfirmarPassword = $("#labelConfirmarPassword");
      var $mensagemErroConfirmarPassword = $("#mensagemErroConfirmarPassword");

      $confirmarPassword.val("");
      Utils.methods.removeDetailsError(
        $confirmarPassword,
        $labelConfirmarPassword,
        $mensagemErroConfirmarPassword
      );
      Utils.methods.removeDetailsSuccess(
        $confirmarPassword,
        $labelConfirmarPassword,
        $mensagemErroConfirmarPassword
      );
    },
    adicionarDetalhesErro(mensagem) {
      var $confirmarPassword = $("#confirmarPassword");
      var $labelConfirmarPassword = $("#labelConfirmarPassword");
      var $mensagemErroConfirmarPassword = $("#mensagemErroConfirmarPassword");

      Utils.methods.addDetailsError(
        mensagem,
        $confirmarPassword,
        $labelConfirmarPassword,
        $mensagemErroConfirmarPassword
      );
    },
  },
};
</script>