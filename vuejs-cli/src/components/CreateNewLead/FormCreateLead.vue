<template>
  <div class="container" id="formularioLead">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <LogoEloGroup />
      </div>
    </div>

    <form v-on:submit.prevent="salvarLead">
      <div class="row">
        <div class="col-md-6">
          <InputNome />
          <InputTelefone />
          <InputEmail />
        </div>
        <div class="col-md-6">
          <p>Oportunidades *</p>
          <table
            class="table table-hover table-bordered text-center table-responsive-xl"
          >
            <thead class="thead-dark">
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </td>
                <td>RPM</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </td>
                <td>Produto Digital</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </td>
                <td>Analytics</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </td>
                <td>BPM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="form-group col-md-12">
        <button class="btn btn-outline-dark btn-lg btn-block">Salvar</button>
      </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery";
import Utils from "@/utils/Utils";
import LogoEloGroup from "../LogoEloGroup";
import InputNome from "./components/InputNome";
import InputEmail from "./components/InputEmail";
import InputTelefone from "./components/InputTelefone";

export default {
  components: {
    InputNome,
    InputEmail,
    InputTelefone,
    LogoEloGroup,
  },
  methods: {
    salvarLead() {
      var $nome = $("#nome");
      var $email = $("#email");
      var $telefone = $("#telefone");

      var nomeIsEmpty = $nome.val() == "";
      var emailIsEmpty = $email.val() == "";
      var telefoneIsEmpty = $telefone.val() == "";

      var formValido = !nomeIsEmpty && !emailIsEmpty && !telefoneIsEmpty;

      if (formValido) {
        // var nome = this.montarUsuario($nome, $email);

        // UsuarioService.salvarUsuario(nome);
        // ModalFormularioCriacaoLead.methods.fecharModal();
        // TableLeads.methods.carregarTabela();

        this.limparCampos();
        return;
      }

      var parteMensagem = "É preciso preencher o campo";

      if (nomeIsEmpty)
        InputNome.methods.adicionarDetalhesErro(parteMensagem + " 'nome'");

      if (emailIsEmpty)
        InputEmail.methods.adicionarDetalhesErro(parteMensagem + " 'email'");

      if (telefoneIsEmpty)
        InputTelefone.methods.adicionarDetalhesErro(
          parteMensagem + " 'telefone'"
        );
    },
    limparCampos() {
      InputNome.methods.limparCampos();
      InputEmail.methods.limparCampos();
      InputTelefone.methods.limparCampos();
    },
    montarUsuario($nome, $email) {
      var nome = {
        id: Math.floor(Math.random() * 100) + 4,
        nome: $nome.val(),
        email: $email.val(),
        status: 0,
      };
      return nome;
    },
    validateFieldEmpty: Utils.methods.validateFieldEmpty,
  },
};
</script>