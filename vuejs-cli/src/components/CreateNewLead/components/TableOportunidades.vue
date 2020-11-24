<template>
  <div class="col-md-6">
    <label id="labelOportunidades">Oportunidades *</label>
    <table
      class="table table-hover table-bordered text-center table-responsive-xl"
      id="tabelaOportunidades"
    >
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            <input type="checkbox" v-model="selecionarCheckBoxTodos" />
          </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="oportunidade in oportunidades" v-bind:key="oportunidade.id">
          <td>
            <input
              type="checkbox"
              v-model="selected"
              :value="oportunidade.id"
            />
          </td>
          <td>{{ oportunidade.nome }}</td>
        </tr>
      </tbody>
    </table>
    <small
      id="mensagemErroOportunidades"
      class="form-text text-danger"
      hidden
    ></small>
  </div>
</template>

<script>
import $ from "jquery";
import Utils from "@/utils/Utils";
var vm = null;
export default {
  data() {
    return {
      oportunidades: [
        {
          id: "1",
          nome: "RPA",
        },
        {
          id: "2",
          nome: "Produto Digital",
        },
        {
          id: "3",
          nome: "Analytics",
        },
        {
          id: "4",
          nome: "BPM",
        },
      ],
      selected: [],
    };
  },
  computed: {
    selecionarCheckBoxTodos: {
      get() {
        this.limparCampos(true);
        if (this.oportunidades && this.oportunidades.length > 0) {
          let allChecked = true;

          for (const oportunidade of this.oportunidades) {
            if (!this.selected.includes(oportunidade.id)) {
              allChecked = false;
            }
            if (!allChecked) break;
          }

          return allChecked;
        }

        return false;
      },
      set(value) {
        const checked = [];

        if (value) {
          this.oportunidades.forEach((oportunidade) => {
            checked.push(oportunidade.id);
          });
        }
        this.selected = checked;
      },
    },
  },
  mounted() {
    // Sinceramente não sei o que aconteceu aqui,
    // O 'this' não estava mais acessando as propriedades em 'data' dentro de 'methods'
    // Então estou fazendo essa solução...
    vm = this;
  },
  methods: {
    adicionarDetalhesErro(mensagem) {
      var $tableOportunidades = $("#tabelaOportunidades");
      var $labelOportunidades = $("#labelOportunidades");
      var $mensagemErroOportunidades = $("#mensagemErroOportunidades");

      Utils.methods.addDetailsError(
        mensagem,
        $tableOportunidades,
        $labelOportunidades,
        $mensagemErroOportunidades
      );
    },
    limparCampos(limparSelecionados) {
      var $tableOportunidades = $("#tabelaOportunidades");
      var $labelOportunidades = $("#labelOportunidades");
      var $mensagemErroOportunidades = $("#mensagemErroOportunidades");

      Utils.methods.removeDetailsError(
        $tableOportunidades,
        $labelOportunidades,
        $mensagemErroOportunidades
      );
      Utils.methods.removeDetailsSuccess(
        $tableOportunidades,
        $labelOportunidades,
        $mensagemErroOportunidades
      );

      if (!limparSelecionados) vm.selected = [];
    },
    recuperarCheckboxs() {
      return vm.selected;
    },
  },
};
</script>