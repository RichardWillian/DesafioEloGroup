<template>
  <table class="table table-hover table-bordered text-center" id="tabellaSos">
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
            cancel: "td:not(.card)",
            update: function (event, ui) {

              if (ui.originalPosition.left > ui.position.left) return false;

              var $tdMovida = $(ui.item);
              var idLead = $tdMovida.attr("id").split("_")[1];
              var status = $tdMovida.index();

              var arrayLeads = $this.leads.filter(function (lead) {
                return lead.id == idLead;
              });
              var usuario = arrayLeads.shift();
              if(status - usuario.status != 1)
                return false;

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