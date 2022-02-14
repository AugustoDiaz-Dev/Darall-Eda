<template>
  <div>
    <header class="mb-auto">
      <div>
        <h3 class="float-md-start mb-0">
          <img :src="darallData.logoWhite" :alt="darallData.title" id="homeLogo" />
        </h3>
        <C4Navbar :darallData="darallData" />
      </div>
    </header>
  </div>
</template>

<script>
import C4Navbar from "../cover/C4Navbar.vue";
export default {
  name: "C1Header",
  data() {
    return {};
  },
  props: {
    darallData: Object,
  },
  components: {
    C4Navbar,
  },
};
</script>

<style>
.cover-container {
  max-width: 42rem;
}
@media (max-width: 768px) {
  h3 {
    display: flex;
    justify-content: center;
  }
}
</style>
