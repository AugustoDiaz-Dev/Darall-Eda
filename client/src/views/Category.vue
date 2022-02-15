<template>
  <div class="container-fluid category-container">
    <div class="row">
      <div class="col">
        <d-1-header id="category-header" :darallData="daralldata"></d-1-header>
        <h2>Show the selected item</h2>
        <!-- <div v-for="item in menu">{{ item.title }}</div> -->
        <!-- Crear un nuevo componente. Si el id del boton coincide con la categoria mostrar algo -->
        <div style="height: 300px">
          <!-- <h2 v-for="item in menuBtnList">{{ item.id }}</h2> -->
          <!-- <div
            class="color-darall d-flex flex-row justify-content-center p-1"
            v-for="item in info"
            :key="item.id"
          >
            <h4>
              {{ item.shop_name }}
            </h4>
            <img :src="item.img" alt="" id="showcase" />
            <p>{{ item.category }}</p>
          </div> -->
        </div>
        <d-3-footer id="category-footer" :darallData="daralldata"></d-3-footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const baseURL = "";

import darallData from "../json/darallData.json";
import menuBtnList from "../json/menuBtnList.json";

import D1Header from "../components/main/D1Header.vue";
import D3Footer from "../components/main/D3Footer.vue";

export default {
  components: { D1Header, D3Footer },
  data() {
    return {
      menuBtnList,
      id: "",
      info: [],
      darallData: darallData,
    };
  },

  async created() {
    try {
      const res = await axios.get(`${baseURL}/shops`);
      this.info = res.data;
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