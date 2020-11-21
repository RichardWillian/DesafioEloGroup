<template>
  <table class="nopadding table table-hover table-bordered text-center table-responsive" id="tabelaLeads">
    <thead class="thead-dark">
      <tr>
        <th value="1">Cliente em Potencial</th>
        <th value="2">Dados Confirmados</th>
        <th value="3">Reunião Agendada</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(lead, index) in leads"
        v-bind:key="lead.id"
        :id="'tr_' + index"
        class="sortable"
      >
        <template v-if="lead.status == 0">
          <td class="card" :id="'td_' + lead.id">{{ lead.nome }}</td>
          <td></td>
          <td></td>
        </template>
        <template v-else-if="lead.status == 1">
          <td></td>
          <td class="card" :id="'td_' + lead.id">{{ lead.nome }}</td>
          <td></td>
        </template>
        <template v-else>
          <td></td>
          <td></td>
          <td class="card" :id="'td_' + lead.id">{{ lead.nome }}</td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
import $ from "jquery";
require("jquery-ui-bundle");
import Alert from "../../Alert";
import UsuarioService from "@/services/usuarios";

export default {
  data() {
    return { leads: [] };
  },
  methods: {
    adicionarNovoLead() {
      this.leads = this.carregarTabela();
    },
    carregarTabela() {
      var $this = this;
      $this.leads = UsuarioService.recuperarUsuarios();
      $(function () {
        $(".sortable")
          .sortable({
            cursor: "move",
            scroll: false,
            cancel: "td:not(.card)",
            update: function (event, ui) {
              if (ui.originalPosition.left > ui.position.left) {
                Alert.methods.exibir("Não é permitido retornar um status.");
                return false;
              }

              var $tdMovida = $(ui.item);
              var idLead = $tdMovida.attr("id").split("_")[1];
              var status = $tdMovida.index();

              var arrayLeads = $this.leads.filter(function (lead) {
                return lead.id == idLead;
              });
              var usuario = arrayLeads.shift();

              if (status - usuario.status != 1) {
                Alert.methods.exibir(
                  "Só é permitido alterar um status por vez."
                );
                return false;
              }

              usuario.status = status;

              UsuarioService.atualizarUsuario(usuario);
            },
          })
          .disableSelection();
      });
    },
  },
  mounted() {
    this.carregarTabela();
  },
};
</script>

<style scoped>
html {
  overflow: scroll;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.table {
  max-height: 500px;
  max-width: 600px;
}
thead, tbody tr {
  display: table;
  width: 100%;
  max-width: 600px;
  table-layout: fixed;
}

tbody {
  display: block;
  overflow-y: auto;
  table-layout: fixed;
  max-height: 420px;
  max-width: 600px;
}

.nopadding{
  margin: 0px!important;
  padding: 0px!important;
}
</style>