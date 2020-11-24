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
        <TableOportunidades />
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
import ModalFormularioLead from "./ModalFormularioLead";
import LeadService from "../../services/leads";
import TableLeads from "../PainelLeads/components/TableLeads";
import TableOportunidades from "./components/TableOportunidades";

export default {
  components: {
    InputNome,
    InputEmail,
    InputTelefone,
    LogoEloGroup,
    TableOportunidades,
  },
  methods: {
    salvarLead() {
      var $nome = $("#nome");
      var $email = $("#email");
      var $telefone = $("#telefone");

      var nomeIsEmpty = $nome.val() == "";
      var emailIsEmpty = $email.val() == "";
      var telefoneIsEmpty = $telefone.val() == "";

      var checkboxIsEmpty =
        TableOportunidades.methods.recuperarCheckboxs().length == 0;

      var formValido =
        !nomeIsEmpty && !emailIsEmpty && !telefoneIsEmpty && !checkboxIsEmpty;

      if (formValido) {
        var lead = this.montarLead(
          $nome,
          $email,
          $telefone,
          TableOportunidades.selected
        );

        LeadService.salvarLead(lead);
        ModalFormularioLead.methods.fecharModal();
        TableLeads.methods.carregarTabela();

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

      if (checkboxIsEmpty)
        TableOportunidades.methods.adicionarDetalhesErro(
          "É preciso selecionar pelo menos uma 'oportunidade'"
        );
    },
    limparCampos() {
      InputNome.methods.limparCampos();
      InputEmail.methods.limparCampos();
      InputTelefone.methods.limparCampos();
      TableOportunidades.methods.limparCampos();
    },
    montarLead($nome, $email, $telefone, oportunidadesEscolhidas) {
      var lead = {
        id: Math.floor(Math.random() * 100) + 4,
        nome: $nome.val(),
        email: $email.val(),
        telefone: $telefone,
        oportunidades: oportunidadesEscolhidas,
        status: 0,
      };
      return lead;
    },
    validateFieldEmpty: Utils.methods.validateFieldEmpty,
  },
};
</script>