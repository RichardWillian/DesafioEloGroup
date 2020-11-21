<template>
  <div>
    <NavBar />
    <div class="mb-2 mt-2">
      <PainelLeads />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/FooterBar";
import PainelLeads from "@/components/PainelLeads/PainelLeads";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    PainelLeads,
  },
};
</script>

<style>
</style>
