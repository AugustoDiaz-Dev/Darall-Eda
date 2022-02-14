<template>
    <main class="container">
  <div class="p-4 p-md-5 mb-4 text-white rounded banner">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic darall">{{darallData.title}}</h1>
      <h3 class="lead my-3 darall">{{darallData.slogan}}</h3>
    </div>
  </div>

  <d-5-endorsements></d-5-endorsements>

  <div class="row g-5 mb-5">
    <div class="col-12" id="carousel">
      <d-7-carousel :darallData="darallData"></d-7-carousel>
      
    </div>
  </div>
  <hr>
  <d-4-navbar></d-4-navbar>
  <d-6-cards :infoAPI="infoAPI" :darallData="darallData"></d-6-cards>

</div>

  <div class="row g-5">
    <d-8-tables :darallData="darallData"></d-8-tables>

    <div class="col-md-4">
      <div class="position-sticky" style="top: 2rem;" id="about">
        <div class="p-4 mb-3 text-white rounded bg-color-darall">
          <h4 class="fst-italic">{{darallData.title}}</h4>
          <p class="mb-0">{{darallData.about}}
          </p>
        </div>

        <div class="p-4" id="featuredShops">
          <h4 class="fst-italic text-center mb-5">{{darallData.sectionTitle2}}</h4>
          <ul class="list-unstyled mb-0 d-flex justify-content-center flex-wrap" v-for="shop in shops" :key="shop.id">
            <li class="pb-2 d-flex flex-column justify-content-center">
              <a :href="shop.img"><img :src="shop.img" alt="" height="80px"></a>
            </li>
          </ul>
          <hr>
        </div>

        <d-9-contacts :darallData="darallData"></d-9-contacts>
      </div>
    </div>
  </div>

</main>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:3000";

import D5Endorsements from "./D5Endorsements.vue";
import D6Cards from "./D6Cards.vue";
import D7Carousel from "./D7Carousel.vue";
import D8Tables from "./D8Tables.vue";
import D9Contacts from "./D9Contacts.vue";
import D4Navbar from "./D4Navbar.vue";

export default {
  name: "D2Main",
  data() {
    return {
      shops: [],
    };
  },
  props: {
    darallData: Object,
    infoAPI: [],
  },
  async created() {
    try {
      const res = await axios.get(`${baseURL}/shops`);
      this.shops = res.data;
    } catch (err) {
      console.log(err);
    }
  },
  components: {
    D7Carousel,
    D6Cards,
    D5Endorsements,
    D7Carousel,
    D8Tables,
    D9Contacts,
    D4Navbar,
  },
};
</script>

<style scoped>
main {
  margin-top: 0;
}
main .banner {
  background-color: var(--darall);
  height: 33rem;
  width: 100%;
  background-image: url("../../assets/banner_parallax.png");
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.75;
}
main .banner:hover {
  opacity: 1;
}
main h1,
main h3.lead {
  color: var(--white);
  text-shadow: 0 0 3px var(--black), 2px 4px 8px var(--darall);
}
.display-4 {
  font-size: 2.5rem;
}
#carousel {
  margin: 0 auto;
  margin-top: 3rem;
}
@media (min-width: 768px) {
  .display-4 {
    font-size: 3rem;
  }
}
@media (max-width: 768px) {
  #endorsements,
  #featuredShops,
  #about,
  .banner {
    display: none;
  }
}
</style>