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
          <h1 class="modal-title" id="modalFormularioLabel">Inserir Lead</h1>
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
import InputUsuario from "./components/InputUsuario";
import InputPassword from "./components/InputPassword";
import FormularioCriacaoLead from "./FormCreateAccount";
import InputConfirmPassword from "./components/InputConfirmPassword";

export default {
  components: {
    FormularioCriacaoLead,
  },
  methods: {
    fecharModal(){
      InputUsuario.methods.limparCampos();
      InputPassword.methods.limparCampos();
      InputConfirmPassword.methods.limparCampos();
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