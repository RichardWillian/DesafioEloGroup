// Estou comentando esse 'http' para não dar erro de 'variável não utilizada'
// Mas caso houvesse uma API seria utilizada

// import { http } from './config'

var bdLeads = []

// Fiz esse 'for' para simular uma primeira consulta ao banco de dados
// Caso houvesse uma API, não seria necessário
for (var i = 1; i <= 6; i++) {
    bdLeads.push({
        id: i,
        nome: 'Item' + i,
        email: "EloGroup@EloGroup" + i + ".com",
        oportunidades: ["1", "2", "3", "4"],
        status: Math.floor(Math.random() * (3))
    })
}

export default {
    // Como não há o backend, estou criando esse array
    // Temporário para simular as consultas na API

    salvarLead: (lead) => {
        // http.post('salvarLead', lead).then(response => {
        //     //Salvar Lead (Lead)
        // });

        bdLeads.push(lead);
    },
    recuperarLeads: () => {
        // http.get('recuperarLeads').then(response => {
        //     //Retornar Leads (Leads) da API
        // });

        return bdLeads;
    },
    atualizarLead: (lead) => {
        console.log(lead);
        // http.put('atualizarLead', lead).then(response => {
        //     //Atualizar lead
        // });
    }
}