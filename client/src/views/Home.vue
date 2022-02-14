<template>
  <div
    class="
      home
      cover-container
      d-flex
      w-100
      h-100
      p-3
      mx-auto
      flex-column
      h-100
    "
  >
    <C1Header :darallData="darallData" />
    <C2Main :darallData="darallData" />
    <C3Footer :darallData="darallData" />
  </div>
</template>

<script>
import darallData from "../json/darallData.json";
import C1Header from "../components/cover/C1Header.vue";
import C2Main from "../components/cover/C2Main.vue";
import C3Footer from "../components/cover/C3Footer.vue";
import C4Navbar from "../components/cover/C4Navbar.vue";

export default {
  name: "Home",
  data() {
    return {
      darallData: darallData,
    };
  },
  components: {
    C1Header,
    C2Main,
    C3Footer,
    C4Navbar,
  },
};
</script>

<style>
body {
  background-image: url("../assets/banner.jpg");
  background-position: top;
  background-repeat: no-repeat;
  text-align: center;
}
header img {
  max-width: 60%;
}
</style>
