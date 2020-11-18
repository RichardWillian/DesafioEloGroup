<template>
  <div class="form-group rounded" v-bind:style="styleImage">
    <div class="row justify-content-md-center">
      <img v-bind:src="image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/logo-EloGroup-branco.png"),
      styleImage: "background-color: #14222b; padding: 4%; margin-top: 3%",
    };
  },
};
</script>