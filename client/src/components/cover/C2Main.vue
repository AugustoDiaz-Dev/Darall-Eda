<template>
  <main class="px-3 text-center">
    <h1 class="text-white">{{ darallData.title }}</h1>
    <p class="lead text-white">{{ darallData.slogan }}</p>
    <p class="lead">
      <router-link
        id="enter"
        class="btn btn-lg fw-bold outline-darall bg-white color-darall"
        to="/main"
        >{{ darallData.btnText5 }}</router-link
      >
    </p>
  </main>
</template>

<script>
export default {
  name: "C2Main",
  props: {
    darallData: Object,
  },
};
</script>

<style>
main {
  margin-top: 50%;
}
@media (min-width: 992px) and (max-width: 1280px) {
  main {
    margin-top: 55vh;
  }
}
#enter:hover {
  background-color: var(--darall) !important;
  color: var(--white) !important;
  padding: 0.5rem 1.2rem;
}
</style>
