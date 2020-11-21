<template>
  <div class="form-group col-lg-12">
    <label for="usuario" id="labelUsuario">Usuário *</label>
    <input
      class="form-control"
      id="usuario"
      aria-describedby="usuarioHelp"
      v-on:keyup="
        (event) =>
          validateFieldEmpty(
            event.target,
            '#mensagemErroUsuario',
            '#labelUsuario'
          )
      "
    />
    <small
      id="mensagemErroUsuario"
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
      var $usuario = $("#usuario");
      var $labelUsuario = $("#labelUsuario");
      var $mensagemErroUsuario = $("#mensagemErroUsuario");

      $usuario.val("");
      Utils.methods.removeDetailsError(
        $usuario,
        $labelUsuario,
        $mensagemErroUsuario
      );
      Utils.methods.removeDetailsSuccess(
        $usuario,
        $labelUsuario,
        $mensagemErroUsuario
      );
    },
    adicionarDetalhesErro(mensagem) {
      var $usuario = $("#usuario");
      var $labelUsuario = $("#labelUsuario");
      var $mensagemErroUsuario = $("#mensagemErroUsuario");

      Utils.methods.addDetailsError(
        mensagem,
        $usuario,
        $labelUsuario,
        $mensagemErroUsuario
      );
    },
  },
};
</script>