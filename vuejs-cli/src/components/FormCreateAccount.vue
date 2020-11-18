<template>
  <div class="container" id="formulario">
    <div class="row justify-content-md-center">
      <div class="border border-dark rounded col-lg-6">
        <form>
          <LogoEloGroup />
          <div class="form-group col-lg-12">
            <label for="usuarioEmail">Usuário *</label>
            <input
              type="email"
              class="form-control"
              id="usuarioEmail"
              aria-describedby="usuarioEmailHelp"
            />
            <small id="usuarioEmailHelp" class="form-text text-muted"
              >Email de usuário utilizado para entrar no sistema. Exemplo:
              richard.divino@elogroup.com</small
            >
          </div>
          <div class="form-group col-lg-12">
            <label for="password">Password *</label>
            <input type="password" class="form-control" id="password" />
          </div>
          <div class="form-group col-lg-12">
            <label for="confirmarPassword">Confirmar Password *</label>
            <input
              type="password"
              class="form-control"
              id="confirmarPassword"
            />
          </div>
          <div class="form-group col-lg-12">
            <button type="submit" class="btn btn-outline-dark btn-lg btn-block">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LogoEloGroup from './LogoEloGroup.vue';
export default {
  components: {
    LogoEloGroup
  },
};
</script>