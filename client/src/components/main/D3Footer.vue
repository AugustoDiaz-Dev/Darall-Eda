<template>
  <footer class="resto-footer bg-color-darall-light container-fluid">
    <div class="row">
      <div class="d-flex flex-column offset-2 col-2 p-3">
        <a href="#">link 1</a>
        <a href="#">link 2</a>
        <a href="#">link 3</a>
        <a href="#">link 4</a>
      </div>
      <div class="d-flex flex-column offset-1 col-2 p-3">
        <a href="#">link 1</a>
        <a href="#">link 2</a>
        <a href="#">link 3</a>
        <a href="#">link 4</a>
      </div>
      <div class="d-flex flex-column offset-1 col-2 p-3">
        <a href="#">link 1</a>
        <a href="#">link 2</a>
        <a href="#">link 3</a>
        <a href="#">link 4</a>
      </div>
    </div>
    <div class="row">
      <div class="offset-3 col-6">
        <p>
          <a href="#top" class="text-black" id="goToTop">Back to top</a>
        </p>
        <p class="text-white">
          &copy;
          <a :href="darallData.website">
          <router-link to="/">
          <img :src="darallData.logoWhite" :alt="darallData.title"/>
          </router-link>
          </a>
          еда
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "D3Footer",
  props: {
    darallData: Object,
  },
};
</script>

<style scoped>
footer {
  position: relative;
  height: 10%;
  bottom: 0;
  width: 100%;
}
.resto-footer {
  text-align: center;
  border-top: 0.05rem solid var(--lightgrey);
}
.resto-footer p:last-child {
  margin-bottom: 2rem;
}
div a {
  color: var(--white);
  text-decoration: none;
}
div a:hover {
  color: var(--black);
}
#goToTop:hover {
  color: var(--white)!important;
  font-weight: bold;
}
</style>

