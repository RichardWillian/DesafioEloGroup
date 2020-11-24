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
            class="table table-hover table-bordered text-center table-responsive-xl" id="tabela-oportunidades"
          >
            <thead class="thead-dark">
              <tr>
                <th scope="col">
                  <input type="checkbox" v-model="selecionarCheckBoxTodos">
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="oportunidade in oportunidades"
                v-bind:key="oportunidade.id"
              >
                <td>
                  <input
                    type="checkbox"
                    v-model="selected"
                    :value="oportunidade.id"
                  />
                </td>
                <td>{{ oportunidade.nome }}</td>
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
import ModalFormularioLead from "./ModalFormularioLead";
import LeadService from '../../services/leads';
import TableLeads from '../PainelLeads/components/TableLeads';

export default {
  data() {
    return {
      oportunidades: [
        {
          id: "1",
          nome: "RPA",
        },
        {
          id: "2",
          nome: "Produto Digital",
        },
        {
          id: "3",
          nome: "Analytics",
        },
        {
          id: "4",
          nome: "BPM",
        },
      ],
      selected: [],
    };
  },
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
      var checkboxIsEmpty = this.selected.length == 0;

      var formValido = !nomeIsEmpty && !emailIsEmpty && !telefoneIsEmpty && !checkboxIsEmpty;

      if (formValido) {
          console.log("Formulário Válido 2");
        var lead = this.montarLead($nome, $email, $telefone, this.selected);

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
    },
    limparCampos() {
      InputNome.methods.limparCampos();
      InputEmail.methods.limparCampos();
      InputTelefone.methods.limparCampos();
      this.selected = [];
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
  computed: {
    selecionarCheckBoxTodos: {
      get() {
        if (this.oportunidades && this.oportunidades.length > 0) {
          let allChecked = true;

          for (const oportunidade of this.oportunidades) {
            if (!this.selected.includes(oportunidade.id)) {
              allChecked = false;
            }
            if (!allChecked) break;
          }

          return allChecked;
        }

        return false;
      },
      set(value) {
        const checked = [];

        if (value) {
          this.oportunidades.forEach((oportunidade) => {
            checked.push(oportunidade.id);
          });
        }

        this.selected = checked;
      },
    },
  },
};
</script>