<template>
  <div class="form-group col-lg-12">
    <label for="telefone" id="labelTelefone">Telefone *</label>
    <input
      class="form-control"
      id="telefone"
      aria-describedby="telefoneHelp"
      v-on:keyup="
        (event) =>
          validateFieldEmpty(
            event.target,
            '#mensagemErroTelefone',
            '#labelTelefone'
          )
      "
    />
    <small
      id="mensagemErroTelefone"
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
      var $telefone = $("#telefone");
      var $labelTelefone = $("#labelTelefone");
      var $mensagemErroTelefone = $("#mensagemErroTelefone");

      $telefone.val("");
      Utils.methods.removeDetailsError(
        $telefone,
        $labelTelefone,
        $mensagemErroTelefone
      );
      Utils.methods.removeDetailsSuccess(
        $telefone,
        $labelTelefone,
        $mensagemErroTelefone
      );
    },
    adicionarDetalhesErro(mensagem) {
      var $telefone = $("#telefone");
      var $labelTelefone = $("#labelTelefone");
      var $mensagemErroTelefone = $("#mensagemErroTelefone");

      Utils.methods.addDetailsError(
        mensagem,
        $telefone,
        $labelTelefone,
        $mensagemErroTelefone
      );
    },
  },
};
</script>