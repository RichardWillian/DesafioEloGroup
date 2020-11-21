<template>
  <div class="container" id="formulario">
    <form v-on:submit.prevent="salvarUsuario">
      <LogoEloGroup />
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
      <InputPassword />
      <InputConfirmPassword />
      <div class="form-group col-lg-12">
        <button class="btn btn-outline-dark btn-lg btn-block">Registrar</button>
      </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery";
import Utils from "../../utils/Utils";
import LogoEloGroup from "../LogoEloGroup";
import UsuarioService from "../../services/usuarios";
import InputPassword from "./components/InputPassword";
import TableLeads from '../PainelLeads/components/TableLeads';
import InputConfirmPassword from "./components/InputConfirmPassword";
import ModalFormularioCriacaoLead from './ModalFormularioCriacaoLead';

export default {
  components: {
    LogoEloGroup,
    InputPassword,
    InputConfirmPassword,
  },
  methods: {
    salvarUsuario() {
      var $usuario = $("#usuario");
      var $password = $("#password");
      var $confirmarPassword = $("#confirmarPassword");

      var usarioIsEmpty = $usuario.val() == "";
      var passwordIsEmpty = $password.val() == "";
      var confirmarPasswordIsEmpty = $confirmarPassword.val() == "";

      var formValido =
        !usarioIsEmpty &&
        !passwordIsEmpty &&
        !confirmarPasswordIsEmpty &&
        Utils.methods.isPasswordValid();

      if (formValido) {
        var usuario = {
          id: Math.floor(Math.random() * 100) + 4,
          nome: $usuario.val(),
          password: $password.val(),
          status: 0
        };

        UsuarioService.salvarUsuario(usuario);
        ModalFormularioCriacaoLead.methods.fecharModal();
        TableLeads.methods.carregarTabela();

        this.limparCampos();
        return;
      }

      var parteMensagem = "É preciso preencher o campo";

      if (usarioIsEmpty)
        Utils.methods.addDetailsError(
          parteMensagem + " 'usuário'",
          $usuario,
          $("#labelUsuario"),
          $("#mensagemErroUsuario")
        );
      if (passwordIsEmpty)
        Utils.methods.addDetailsError(
          parteMensagem + " 'password'",
          $password,
          $("#labelPassword"),
          $("#mensagemErroPassword")
        );
      if (confirmarPasswordIsEmpty)
        Utils.methods.addDetailsError(
          parteMensagem + "'confirmar password'",
          $confirmarPassword,
          $("#labelConfirmarPassword"),
          $("#mensagemErroConfirmarPassword")
        );
    },
    limparCampos() {
      $("#usuario").val("");
      $("#password").val("");
      $("#confirmarPassword").val("");
    },
    validateFieldEmpty: Utils.methods.validateFieldEmpty,
  },
};
</script>