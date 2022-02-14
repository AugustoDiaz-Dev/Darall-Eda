<template>
  <div class="color-darall">
    <hr />
    <h2 class="mt-5" id="food-cards">{{ darallData.sectionTitle3 }}</h2>
    <div class="col-md-12 d-flex justify-content-between" id="menuFood">
      <div
        class="card p-2 m-2"
        style="width: 18rem"
        v-for="item in infoAPI"
        :key="item.id"
      >
        <img :src="item.img" class="card-img-top" :alt="item.title" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.description }}</p>
          <a href="#" class="btn bg-color-darall text-white w-50">корзину</a>
        </div>
      </div>
    </div>
    <hr />
    <h2 class="mt-5" id="drink-cards">{{ darallData.sectionTitle4 }}</h2>
    <div class="col-md-12 d-flex justify-content-between" id="menuDrink">
      <div
        class="card p-2 m-2"
        style="width: 18rem"
        v-for="item in cardDrinks"
        :key="item.id"
      >
        <img :src="item.img_src" class="card-img-top" :alt="item.title" />
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.text }}</p>
          <a href="#" class="btn bg-color-darall text-white w-50">{{
            item.btn_text
          }}</a>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import cardDrinks from "../../json/cardDrinks.json";
export default {
  name: "D6Cards",
  data() {
    return {
      cardDrinks,
    };
  },
  props: {
    infoAPI: Array,
    darallData: Object,
  },
};
</script>

<style scoped>
@media (max-width: 960px) {
#menuFood, #menuDrink {
  background-color: red!important;
}
}
</style>