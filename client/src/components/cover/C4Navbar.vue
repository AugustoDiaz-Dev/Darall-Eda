<template>
  <nav class="nav nav-masthead justify-content-center float-md-end">
    <router-link
      class="nav-link active darall-link"
      aria-current="page"
      to="/"
      >{{ darallData.btnText1 }}</router-link
    >
    <router-link class="nav-link darall-link" to="/main">{{
      darallData.btnText2
    }}</router-link>
    <router-link class="nav-link darall-link" to="/main">{{
      darallData.btnText3
    }}</router-link>
    <router-link class="nav-link darall-link" to="/main">{{
      darallData.btnText4
    }}</router-link>

    <div id="nav" class="h-100"></div>
  </nav>
</template>

<script>
export default {
  name: "C4Navbar",
  props: {
    darallData: Object,
  },
};
</script>

<style>
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
}
.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}
.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}
.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}
.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}
.darall-link:hover {
  color: #7a2a9a !important;
  font-weight: bold;
}
</style>