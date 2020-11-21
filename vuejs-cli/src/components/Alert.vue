<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Operação Inválida: </strong> {{ mensagemAlerta }}
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
var vm = null;
export default {
  data() {
    return {
      mensagemAlerta: "",
    };
  },
  methods: {
    exibir: function (mensagem) {
      console.log(vm.mensagemAlerta);
      vm.mensagemAlerta = mensagem;
      $(".alert").show();
    },
    esconder() {
      $(".alert").hide();
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