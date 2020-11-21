<template>
  <div>
    <NavBar />
    <PainelLeads />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PainelLeads from "@/components/PainelLeads/PainelLeads";

export default {
  name: "App",
  components: {
    NavBar,
    PainelLeads,
  },
};
</script>

<style>
</style>
