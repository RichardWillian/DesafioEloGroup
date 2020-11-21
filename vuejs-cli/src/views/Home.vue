<template>
  <div>
    <NavBar />
    <Alert />
    <FromCreateAccount />
    <FooterBar />
  </div>
</template>

<script>
import Alert from "@/components/Alert";
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
import FromCreateAccount from "@/components/PainelLeads/PainelLeads";

export default {
  name: "App",
  components: {
    Alert,
    NavBar,
    FooterBar,
    FromCreateAccount,
  },
};
</script>

<style>
</style>
