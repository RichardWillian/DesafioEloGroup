<template>
  <div class="alert alert-dismissible fade show" role="alert">
    <strong>{{prefixo}}: </strong> {{ mensagemAlerta }}
    <button
      type="button"
      class="close"
      aria-label="Close"
      v-on:click="esconder"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
import $ from "jquery";
import Utils from "../utils/Utils";

var vm = null;
export default {
  data() {
    return {
      mensagemAlerta: "",
      prefixo: "",
    };
  },
  methods: {
    exibir: function (prefixo, mensagem, classe) {
      this.esconder();
      vm.prefixo = prefixo;
      vm.mensagemAlerta = mensagem;
      var $alert = $(".alert");
      Utils.methods.addClass($alert, classe);

      $alert.show();
    },
    esconder() {
      console.log("Escondeu");
      var $alert = $(".alert");
      Utils.methods.removeClass($alert, "alert-warning");
      Utils.methods.removeClass($alert, "alert-success");
      $alert.hide();
    },
  },
  mounted(){
      // Sinceramente não sei o que aconteceu aqui,
      // O 'this' não estava mais acessando as propriedades em 'data' dentro de 'methods'
      // Então estou fazendo essa solução...
      vm = this;
      $(".alert").hide();
  }
  
};
</script>