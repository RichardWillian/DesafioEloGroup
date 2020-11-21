<template>
  <div>
    <NavBar />
    <FromCreateAccount />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import FromCreateAccount from "../components/PainelLeads/PainelLeads";

export default {
  name: "App",
  components: {
    NavBar,
    FromCreateAccount,
  },
};
</script>

<style>
</style>
