<template>
  <div class="form-group col-lg-12">
    <label for="email" id="labelEmail">Email *</label>
    <input
      class="form-control"
      id="email"
      aria-describedby="emailHelp"
      v-on:keyup="
        (event) =>
          validateFieldEmpty(
            event.target,
            '#mensagemErroEmail',
            '#labelEmail'
          )
      "
    />
    <small
      id="mensagemErroEmail"
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
    validateFieldEmpty: Utils.methods.validateFieldEmpty,
    limparCampos() {
      var $email = $("#email");
      var $labelEmail = $("#labelEmail");
      var $mensagemErroEmail = $("#mensagemErroEmail");

      $email.val("");
      Utils.methods.removeDetailsError(
        $email,
        $labelEmail,
        $mensagemErroEmail
      );
      Utils.methods.removeDetailsSuccess(
        $email,
        $labelEmail,
        $mensagemErroEmail
      );
    },
    adicionarDetalhesErro(mensagem) {
      var $email = $("#email");
      var $labelEmail = $("#labelEmail");
      var $mensagemErroEmail = $("#mensagemErroEmail");

      Utils.methods.addDetailsError(
        mensagem,
        $email,
        $labelEmail,
        $mensagemErroEmail
      );
    },
  },
};
</script>