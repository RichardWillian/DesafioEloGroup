<template>
  <div>
    <section class="container-fluid row justify-content-md-center">
      <div class="row justify-content-center">
        <div class="col table-responsive">
          <div class="mt-2 col-md-5">
            <BotaoAdicionarLead />
          </div>
          <div class="mt-2 row">
            <TableLeads />
          </div>
          <ModalFormularioCriacaoLead />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import TableLeads from "./components/TableLeads";
import BotaoAdicionarLead from "./components/BotaoAdicionarLead";
import ModalFormularioCriacaoLead from "../FormCreateAccount/ModalFormularioCriacaoLead";

export default {
  components: {
    TableLeads,
    BotaoAdicionarLead,
    ModalFormularioCriacaoLead,
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