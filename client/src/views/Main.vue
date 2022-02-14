<template>
  <div class="main">
    <d-1-header :darallData="darallData" :infoAPI="infoAPI"></d-1-header>
    <d-2-main :darallData="darallData" :infoAPI="infoAPI"></d-2-main>
    <d-3-footer :darallData="darallData"></d-3-footer>
  </div>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:3000";

import darallData from "../json/darallData.json";
import D1Header from "../components/main/D1Header.vue";
import D2Main from "../components/main/D2Main.vue";
import D3Footer from "../components/main/D3Footer.vue";
export default {
  name: "Main",
  data() {
    return {
      darallData: darallData,
      infoAPI: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`${baseURL}/menus`);
      this.infoAPI = res.data;
    } catch (err) {
      console.log(err);
    }
  },
  components: { D1Header, D2Main, D3Footer },
};
</script>

<style scoped>
div {
  background-image: url("../assets/whiteBg2.jpg");
  background-position: top;
  background-repeat: no-repeat;
}
</style>
