<template>
  <!-- CAROUSEL BEGINS -->
  <b-carousel
    class="my-shadow mt-3"
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
  >
    <b-carousel-slide
      caption="Darall еда"
      :img-src="darallData.carouselSlide1"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Darall еда"
      :img-src="darallData.carouselSlide2"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Darall еда"
      :img-src="darallData.carouselSlide3"
    ></b-carousel-slide>
  </b-carousel>
  <!-- CAROUSEL ENDS -->
</template>

<script>
export default {
  name: "D7Carousel",
  props: {
    darallData: Object,
  },
};
</script>
