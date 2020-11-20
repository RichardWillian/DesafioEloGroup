import { http } from './config'

export default {
    salvarUsuario: (usuario) => {
        http.post('salvarUsuario', usuario).then(response => {
            console.log(response);
        });
    }
}