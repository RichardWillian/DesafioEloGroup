<template>
  <div class="container" id="formulario">
    <div class="col-md-10 offset-md-1">
      <form v-on:submit.prevent="validarLoginUsuario">
        <LogoEloGroup />
        <InputUsuario />
        <InputPassword />
        <InputConfirmPassword />
        <div class="form-group col-lg-12">
          <button class="btn btn-outline-dark btn-lg btn-block">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Utils from "@/utils/Utils";
import LogoEloGroup from "../LogoEloGroup";
import UsuarioService from "@/services/usuarios";
import InputUsuario from "./components/InputUsuario";
import InputPassword from "./components/InputPassword";
import TableLeads from "../PainelLeads/components/TableLeads";
import router from "../../router";
import InputConfirmPassword from "./components/InputConfirmPassword";

export default {
  components: {
    LogoEloGroup,
    InputUsuario,
    InputPassword,
    InputConfirmPassword,
  },
  methods: {
    validarLoginUsuario() {
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
        var usuario = this.montarUsuario($usuario, $password);

        UsuarioService.validarLoginUsuario(usuario);
        TableLeads.methods.carregarTabela();

        this.limparCampos();

        router.push({ name: "painelLeads"})
        return;
      }

      var parteMensagem = "É preciso preencher o campo";

      if (usarioIsEmpty)
        InputUsuario.methods.adicionarDetalhesErro(
          parteMensagem + " 'usuário'"
        );

      if (passwordIsEmpty)
        InputPassword.methods.adicionarDetalhesErro(
          parteMensagem + " 'password'"
        );

      if (confirmarPasswordIsEmpty)
        InputConfirmPassword.methods.adicionarDetalhesErro(
          parteMensagem + " 'confirmar password'"
        );
    },
    limparCampos() {
      $("#usuario").val("");
      InputUsuario.methods.limparCampos();
      InputPassword.methods.limparCampos();
      InputConfirmPassword.methods.limparCampos();
    },
    montarUsuario($usuario, $password) {
      var usuario = {
        id: Math.floor(Math.random() * 100) + 4,
        nome: $usuario.val(),
        password: $password.val(),
        status: 0,
      };
      return usuario;
    },
    validateFieldEmpty: Utils.methods.validateFieldEmpty,
  },
};
</script>