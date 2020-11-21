// import { http } from './config'

var bdUsuarios = [{
        id: 1,
        nome: 'Org. Internacionais',
        password: "El@Gr0oup1",
        status: 0
    },
    {
        id: 2,
        nome: 'Ind. Farm. LTDA',
        password: "El@Gr0oup2",
        status: 1
    },
    {
        id: 3,
        nome: 'Musc. Sound Live Cmp',
        password: "El@Gr0oup3",
        status: 0
    },
]

export default {
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