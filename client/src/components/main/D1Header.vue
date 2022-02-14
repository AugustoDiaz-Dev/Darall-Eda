<template>
  <div class="container">
    <header class="resto-header py-3" id="top">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1 d-flex justify-content-start" id="login">
          <a class="btn btn-sm outline-darall color-darall m-3" href="#">
            <router-link to="/" class="color-darall"
              >Зарегистрироваться</router-link
            >
          </a>
          <a class="btn btn-sm outline-darall m-3" href="#"
            ><router-link to="/" class="color-darall"
              >Войти</router-link
            ></a
          >
        </div>

        <div class="col-4 text-center">
          <router-link
            class="resto-header-logo nav-link color-darall"
            to="/"
            ><img :src="darallData.logoDarall" :alt="darallData.title" id="mainLogo" />
            еда</router-link
          >
        </div>

        <div
          class="
            col-4
            d-flex
            flex-column
            justify-content-end
            align-items-center
          "
        >
          <input
            type="text"
            v-model="search"
            class="outline-darall rounded p-1"
            id="search"
            placeholder="Поиск"
          />
          <!-- FILTER BEGINS -->
          <div v-for="menu in filtered" :key="menu.id" style="max-width: 100px">
            <div v-if="search">
              <div>
                <!-- <a href="" v-b-modal.modal-1>{{ menu.title }}</a> -->
                <b-button
                  v-b-modal.modal-1
                  class="transparent color-darall mt-1"
                  variant="outline-light"
                  >{{ menu.title }}</b-button
                >

                <b-modal
                  id="modal-1"
                  :title="menu.title"
                  class="d-flex flex-column"
                >
                  <img :src="menu.img" :alt="menu.title" width="50%" />
                  <p class="my-4">{{ menu.country }}</p>
                  <b-button variant="outline-primary">заказ</b-button>
                  <!-- Add function. @click show the price and confirm purchase -->
                </b-modal>
              </div>
            </div>
          </div>
          <!-- FILTER ENDS -->
        </div>
      </div>
    </header>
  </div>
</template>

<script>
// import axios from "axios";
// const baseURL = "http://localhost:3000";
// import D4Navbar from "./D4Navbar.vue";
export default {
  // components: { D4Navbar },
  name: "D1Header",
  data() {
    return {
      // menuBtnList: "",
      search: "",
      // info: [],
    };
  },
  props: {
    darallData: Object,
    infoAPI: Array,
  },
  // async created() {
  //   try {
  //     const res = await axios.get(`${baseURL}/menus`);
  //     this.info = res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },

  computed: {
    filtered() {
      return this.infoAPI.filter((menu) =>
        menu.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style>
/* Head styles */
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
.resto-header {
  line-height: 1;
  border-bottom: 1px solid var(--lightgrey);
}
.resto-header-logo {
  font-size: 3.5rem;
}
.resto-header-logo:hover {
  text-decoration: none;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--lightdarall);
  text-align: center;
  opacity: 0.5; /* Firefox */
}
@media (max-width: 768px) {
  #login a,
  #search {
    display: none;
  }
  .resto-header-logo {
    font-size: 1.5rem;
    background-color: var(--white);
    border-radius: 8px;
  }
}
.transparent {
  background-color: transparent !important;
  border: transparent;
}
</style>
