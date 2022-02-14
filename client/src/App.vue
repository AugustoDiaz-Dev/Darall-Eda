<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
/* Color Palette */
:root {
  --darall: #7a2a9a;
  --lightdarall: #8b81c1;
  --white: #fff;
  --lightgrey: #e5e5e5;
  --darkgrey: #727272;
  --black: #000;
}
.color-darall {
  color: var(--darall) !important;
}
.color-darall-light {
  color: var(--lightdarall) !important;
}
.bg-color-darall {
  background-color: var(--darall) !important;
}
.bg-color-darall-light {
  background-color: var(--lightdarall) !important;
}
.outline-darall {
  border: 1px solid var(--darall) !important;
}
/* General Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}

/* RESETS */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: sans-serif;
}
li {
  list-style-type: none;
}
/* hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid var(--darall);
  margin: 1em 0;
  padding: 0;
} */
a {
  color: inherit;
  text-decoration: none;
}
::selection {
  color: var(--white) !important;
  background-color: var(--darall) !important;
}
.flex-auto {
  flex: 0 0 auto;
}
</style>
