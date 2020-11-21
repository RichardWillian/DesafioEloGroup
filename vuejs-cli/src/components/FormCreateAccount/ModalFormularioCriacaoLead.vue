<template>
  <div
    class="modal fade"
    id="modalFormulario"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalFormularioLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalFormularioLabel">Inserir Lead</h5>
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
import FormularioCriacaoLead from "./FormCreateAccount";

export default {
  components: {
    FormularioCriacaoLead,
  },
  methods: {
    fecharModal(){
      window.$('#modalFormulario').modal("toggle");
    }
  },
  data() {
    return {
      mostrarModal: false,
    };
  },
};
</script>