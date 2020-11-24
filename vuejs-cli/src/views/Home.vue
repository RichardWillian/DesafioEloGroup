<template>
  <div>
    <NavBar />
    <div class="mb-5 mt-5">
      <FormCreateAccount />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/FooterBar";
import FormCreateAccount from "@/components/FormCreateAccount/FormCreateAccount";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    FormCreateAccount,
  },
};
</script>

<style>
</style>
