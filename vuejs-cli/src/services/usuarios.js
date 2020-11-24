// Estou comentando esse 'http' para não dar erro de 'variável não utilizada'
// Mas caso houvesse uma API seria utilizada

// import { http } from './config'

export default {
    // Como não há o backend, estou criando esse array
    // Temporário para simular as consultas na API

    validarLoginUsuario: (usuario) => {
        console.log(usuario);
        // http.post('validarLoginUsuario', usuario).then(response => {
        //     //Salvar Usuários (Leads)
        // });
    },
}