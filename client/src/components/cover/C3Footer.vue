<template>
  <footer
    class="text-white text-center"
    v-html="darallData.footerLink"
  ></footer>
</template>

<script>
export default {
  name: "C3Footer",
  props: {
    darallData: Object,
  },
};
</script>

<style>
footer {
  margin: 0 auto;
  position: fixed;
  height: 3.125rem;
  width: 100%;
  bottom: 0;
}
footer p,
footer a {
  font-size: 1.25rem;
}
</style>