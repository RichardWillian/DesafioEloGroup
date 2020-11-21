// Estou comentando esse 'http' para não dar erro de 'variável não utilizada'
// Mas caso houvesse uma API seria utilizada

// import { http } from './config'

var bdUsuarios = []

// Fiz esse 'for' para simular uma primeira consulta ao banco de dados
// Caso houvesse uma API, não seria necessário
for (var i = 1; i <= 6; i++) {
    console.log(i)
    bdUsuarios.push({
        id: i,
        nome: 'Item' + i,
        password: "El@Gr0oup" + i,
        status: Math.floor(Math.random() * (3))
    })
}

export default {
    // Como não há o backend, estou criando esse array
    // Temporário para simular as consultas na API

    salvarUsuario: (usuario) => {
        // http.post('salvarUsuario', usuario).then(response => {
        //     //Salvar Usuários (Leads)
        // });

        bdUsuarios.push(usuario);
    },
    recuperarUsuarios: () => {
        // http.get('recuperarUsuarios').then(response => {
        //     //Retornar Usuários (Leads) da API
        // });

        return bdUsuarios;
    },
    atualizarUsuario: () => {
        // http.put('atualizarUsuario', usuario).then(response => {
        //     //Atualizar usuário
        // });
    }
}