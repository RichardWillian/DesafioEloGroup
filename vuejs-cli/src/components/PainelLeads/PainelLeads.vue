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
                <th>Cliente em Potencial</th>
                <th>Dados Confirmados</th>
                <th>Reunião Agendada</th>
              </tr>
            </thead>
            <tbody>
              <tr id="1" class="sortable">
                <td id="11" class="card">Org. Internacionais</td>
                <td id="12" class="connectedSortable"></td>
                <td id="13" class="connectedSortable"></td>
              </tr>
              <tr id="2" class="sortable">
                <td id="21" class="connectedSortable"></td>
                <td id="22" class="card">Ind. Farm. LTDA</td>
                <td id="23" class="connectedSortable"></td>
              </tr>
              <tr id="3" class="sortable">
                <td id="31" class="card">Musc. Sound Live Cmp</td>
                <td id="32"></td>
                <td id="33"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import $ from "jquery";
require("jquery-ui-bundle");

export default {
  methods: {
    criarDraggable(element) {
      var $tdClicada = $(element).parent();
      var idtd = $tdClicada.attr("id");
      if (idtd) {
        var idPrefix = idtd.split("_")[0];
        var numeroProximaCelula = parseInt(idtd.split("_")[1]) + 1;

        $("#" + idPrefix + "_" + numeroProximaCelula).droppable({
          classes: {
            "ui-droppable-active": "ui-state-active border-danger",
            "ui-droppable-hover": "ui-state-hover border-alert",
          },
        });
      }
    },
  },
  mounted() {
    $(function () {
      $(".sortable").sortable({
        cursor: "move",
        forceHelperSize: true,
        scroll: false,
        update: function (event, ui) {
          return ui.originalPosition.left < ui.position.left;
        },
      });
    });
  },
};
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
  float: left;
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
.sortable li {
  margin: 3px 3px 3px 3px;
  padding: 0.4em;
  padding-left: 1.5em;
  font-size: 1.4em;
  height: 18px;
}
.sortable li span {
  position: absolute;
  margin-left: -1.3em;
}

.card {
  background-color: white;
  border-radius: 3px;
}
</style>