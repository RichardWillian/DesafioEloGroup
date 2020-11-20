//MUUUITO BOM
<template>
  <div>
    <section class="container-fluid row justify-content-md-center">
      <div class="row justify-content-center">
        <div class="col table-responsive">
          <table
            class="table table-hover table-bordered text-center"
            id="tabellaSos"
          >
            <thead class="thead-dark">
              <tr>
                <th value="1">Cliente em Potencial</th>
                <th value="2">Dados Confirmados</th>
                <th value="3">Reunião Agendada</th>
              </tr>
            </thead>
            <tbody>
              <tr class="sortable">
                <td class="card">Org. Internacionais</td>
                <td></td>
                <td></td>
              </tr>
              <tr class="sortable">
                <td></td>
                <td class="card">Ind. Farm. LTDA</td>
                <td></td>
              </tr>
              <tr class="sortable">
                <td class="card">Musc. Sound Live Cmp</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <ModalFormularioCriacaoLead />
          <button
            type="button"
            v-on:click="adicionarNovoLead()"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Novo Lead (+)
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import $ from "jquery";
import ModalFormularioCriacaoLead from "../FormCreateAccount/ModalFormularioCriacaoLead";
require("jquery-ui-bundle");

export default {
  components: {
    ModalFormularioCriacaoLead
  },
  methods: {
    adicionarNovoLead() {
      $("#tabellaSos tr:last").after(
        '<tr id="4" class="sortable"><td id="41" class="card">Novo Elemento Adicionado</td><td id="42"></td> <td id="43"></td></tr>'
      );

      carregarSortables();
    },
  },
  mounted() {
    $(function () {
      carregarSortables();
    });
  },
};

function carregarSortables() {
  $(".sortable")
    .sortable({
      cursor: "move",
      cancel: "td:not(.card)",
      update: function (event, ui) {
        return ui.originalPosition.left < ui.position.left;
      },
    })
    .disableSelection();
}
</script>

<style scoped>
body {
  font-family: Arial;
}
h2 {
  margin: 5px;
}
input[type="text"] {
  margin: 10px;
}
input[type="button"] {
  margin: 10px;
}
.container {
  width: 20%;
  clear: right;
  margin: 10px;
  border-radius: 5px;
}
.sortable {
  list-style-type: none;
  margin: 0;
  padding: 2px;
  min-height: 30px;
  border-radius: 5px;
}

.card {
  background-color: white;
  border-radius: 3px;
}
</style>