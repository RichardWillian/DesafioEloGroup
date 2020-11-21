<template>
  <div class="justify-content-center border border-dark offset-md-2 col-md-8">
    <div class="row justify-content-md-center">
      <div>
        <div class="col table-responsive">
          <div class="row justify-content-md-center">
            <logo-elo-group class="col-lg-12"/>
          </div>
          <div class="col-xs-12">
            <Alert />
          </div>
          <div class="row mt-2">
            <div class="col">
              <BotaoAdicionarLead />
            </div>
            <div class="offset-md-1 col-md-7">
              <h2>Painel de Leads</h2>
            </div>
          </div>
          <div class="row mt-3 mb-5">
            <TableLeads />
          </div>
          <ModalFormularioCriacaoLead />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Alert from "../Alert";
import TableLeads from "./components/TableLeads";
import BotaoAdicionarLead from "./components/BotaoAdicionarLead";
import ModalFormularioCriacaoLead from "../FormCreateAccount/ModalFormularioCriacaoLead";
import LogoEloGroup from '../LogoEloGroup.vue';

export default {
  components: {
    Alert,
    TableLeads,
    BotaoAdicionarLead,
    ModalFormularioCriacaoLead,
    LogoEloGroup,
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