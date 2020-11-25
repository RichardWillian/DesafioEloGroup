<template>
  <div
    class="modal fade"
    id="modalFormularioLead"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalFormularioLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title" id="modalFormularioLabel">Novo Lead</h1>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <FormularioCriacaoLead />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputNome from "./components/InputNome";
import InputEmail from "./components/InputEmail";
import InputTelefone from "./components/InputTelefone";
import FormularioCriacaoLead from "./FormCreateLead";

export default {
  components: {
    FormularioCriacaoLead,
  },
  methods: {
    fecharModal() {
      InputNome.methods.limparCampos();
      InputEmail.methods.limparCampos();
      InputTelefone.methods.limparCampos();
      window.$("#modalFormularioLead").modal("toggle");
    },
    abrirModal() {
      InputNome.methods.limparCampos();
      InputEmail.methods.limparCampos();
      InputTelefone.methods.limparCampos();
    },
  },
  data() {
    return {
      mostrarModal: false,
    };
  },
  mounted() {
    window.$("#modalFormularioLead").on("show.bs.modal", this.abrirModal);
  },
};
</script>