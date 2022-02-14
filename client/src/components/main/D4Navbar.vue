<template>
  <div class="nav-scroller py-1 mb-2 bg-color-darall">
    <nav class="nav d-flex justify-content-between p-1 no-wrap" id="categoryBtn">
      <button
        class="
          p-1
          link-secondary
          text-white
          outline-darall
          bg-color-darall
          rounded
        "
        v-for="cat in menuBtnList"
        :key="cat.id"
      >
        {{ cat.category }}
      </button>
    </nav>
  </div>
</template>   

<script>
import menuBtnList from "../../json/menuBtnList.json";
export default {
  name: "D4Navbar",
  show: false,
  data() {
    return {
      menuBtnList: menuBtnList,
      // declare message with an empty value
      id: "",
      // https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties
    };
  },
  methods: {
    show(event) {
      if (this.show) {
        this.show = true;
        console.log(event);
      }
      this.show = false;
    },
  },
};
</script>

<style scoped>
.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
  border-radius: 8px;
}
.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.nav-scroller .nav-link {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
}
button:hover {
  background-color: var(--darall) !important;
  color: var(--white)!important;
  border: 1px solid var(--white)!important;
  font-weight: bold;
}
/* @media (max-width:768px) {
  #categoryBtn {
    visibility: hidden;
  }
} */
</style>
