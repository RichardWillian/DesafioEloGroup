<template>
  <div class="form-group col-lg-12">
    <label for="nome" id="labelNome">Nome *</label>
    <input
      class="form-control"
      id="nome"
      aria-describedby="nomeHelp"
      v-on:keyup="
        (event) =>
          validateFieldEmpty(
            event.target,
            '#mensagemErroNome',
            '#labelNome'
          )
      "
    />
    <small
      id="mensagemErroNome"
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
      var $nome = $("#nome");
      var $labelNome = $("#labelNome");
      var $mensagemErroNome = $("#mensagemErroNome");

      $nome.val("");
      Utils.methods.removeDetailsError(
        $nome,
        $labelNome,
        $mensagemErroNome
      );
      Utils.methods.removeDetailsSuccess(
        $nome,
        $labelNome,
        $mensagemErroNome
      );
    },
    adicionarDetalhesErro(mensagem) {
      var $nome = $("#nome");
      var $labelNome = $("#labelNome");
      var $mensagemErroNome = $("#mensagemErroNome");

      Utils.methods.addDetailsError(
        mensagem,
        $nome,
        $labelNome,
        $mensagemErroNome
      );
    },
  },
};
</script>