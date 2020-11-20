<template>
  <div class="container" id="formulario">
    <div class="row justify-content-md-center">
      <div class="border border-dark rounded col-lg-6">
        <form v-on:submit.prevent="salvarUsuario">
          <LogoEloGroup />
          <div class="form-group col-lg-12">
            <label for="usuario" id="labelUsuario">Usuário *</label>
            <input
              class="form-control"
              id="usuario"
              aria-describedby="usuarioHelp"
               v-on:keyup="event => validateFieldEmpty(event.target, '#mensagemErroUsuario', '#labelUsuario')"
            />
            <small id="mensagemErroUsuario" class="form-text text-danger" hidden></small>
          </div>
          <InputPassword />
          <InputConfirmPassword />
          <div class="form-group col-lg-12">
            <button class="btn btn-outline-dark btn-lg btn-block">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LogoEloGroup from "../LogoEloGroup";
import InputPassword from "./components/InputPassword";
import InputConfirmPassword from "./components/InputConfirmPassword";
import Utils from "../../utils/Utils";
import UsuarioService from '../../services/usuarios'
import $ from "jquery";

export default {
  components: {
    LogoEloGroup,
    InputPassword,
    InputConfirmPassword,
  },
  methods: {
    salvarUsuario() {
      var usarioIsEmpty = $("#usuario").val() == "";
      var passwordIsEmpty = $("#password").val() == "";
      var confirmarPasswordIsEmpty = $("#confirmarPassword").val() == "";

      var formValido = !usarioIsEmpty && !passwordIsEmpty && !confirmarPasswordIsEmpty && Utils.methods.isPasswordValid();

      if (formValido) {
        var usuario = {
          'nome': $("#usuario").val(),
          'password': $("#password").val()
        }

        UsuarioService.salvarUsuario(usuario);
        return;
      }

      var parteMensagem = 'É preciso preencher o campo';

      if (usarioIsEmpty) Utils.methods.addDetailsError(parteMensagem + ' \'usuário\'', $('#usuario'), $('#labelUsuario'), $('#mensagemErroUsuario'));
      if (passwordIsEmpty) Utils.methods.addDetailsError(parteMensagem +  ' \'password\'', $('#password'), $('#labelPassword'), $('#mensagemErroPassword'));
      if (confirmarPasswordIsEmpty) Utils.methods.addDetailsError(parteMensagem + '\'confirmar password\'', $('#confirmarPassword'), $('#labelConfirmarPassword'), $('#mensagemErroConfirmarPassword'));
    },
    validateFieldEmpty: Utils.methods.validateFieldEmpty
  },
};
</script>