<template>
  <div class="container-fluid category-container">
    <div class="row">
      <div class="col">
        <d-1-header id="category-header" :darallData="darallData"></d-1-header>
        <e-1-login :darallData="darallData" :infoAPIshops="infoAPIshops">
          ></e-1-login
        >
        <!-- <div style="height: 50px">asdfasdf</div> -->
        <d-3-footer id="category-footer" :darallData="darallData"></d-3-footer>
      </div>
    </div>
  </div>
</template>

<script>
import darallData from "../json/darallData.json";
import axios from "axios";
const baseURL = "/";

import D1Header from "../components/main/D1Header.vue";
import D3Footer from "../components/main/D3Footer.vue";
import E1Login from "../components/login/E1Login.vue";

export default {
  name: "Login",
  components: { D1Header, D3Footer, E1Login },
  data() {
    return {
      darallData: darallData,
      id: "",
      infoAPIshops: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`${baseURL}/shops`);
      this.infoAPIshops = res.data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
.category-container {
  background-image: url("../assets/whiteBg2.jpg");
  background-position: top;
  background-repeat: no-repeat;
  text-align: center;
}
#category-footer {
  position: relative;
  height: auto;
  bottom: 0;
  width: 100%;
}
#showcase {
  width: 200px;
  border-radius: 50px;
}
</style>