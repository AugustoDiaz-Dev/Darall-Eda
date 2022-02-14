<template>
  <div class="p-4">
    <h4 class="fst-italic text-center mb-5">{{ darallData.sectionTitle1 }}</h4>
    <ul class="list-unstyled d-flex justify-content-around">
      <li>
        <a :href="darallData.website"
          ><img :src="darallData.logoDarall" height="16px" :alt="darallData.title"
        /></a>
      </li>
      <li>
        <a :href="darallData.website"
          ><b-icon-facebook class="color-darall"></b-icon-facebook
        ></a>
      </li>
      <li>
        <a :href="darallData.website"
          ><b-icon-instagram class="color-darall"></b-icon-instagram
        ></a>
      </li>
      <li>
        <a :href="darallData.website"
          ><b-icon-twitter class="color-darall"></b-icon-twitter
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "D9Contacts",
  props: {
    darallData: Object,
  },
};
</script>