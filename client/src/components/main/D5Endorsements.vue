<template>
  <div class="row mb-2" id="endorsements">
    <div class="col-md-6 my-shadow" v-for="rec in recommended" :key="rec.id">
      <div
        class="
          row
          g-0
          border
          rounded
          overflow-hidden
          flex-md-row
          mb-4
          shadow-sm
          h-md-250
          position-relative
          glass
        "
      >
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2">{{ rec.subtitle }}</strong>
          <h3 class="mb-0 color-darall">
            {{ rec.title }}
          </h3>
          <div class="mb-1 text-muted">
            {{ rec.date }}
          </div>
          <p class="card-text mb-2">
            {{ rec.text_content }}
          </p>
          <button
            type="button"
            class="btn text-white bg-color-darall w-50"
            data-toggle="tooltip"
            data-placement="right"
            title="50% discount !!!"
          >
            {{ rec.btn_text }}
          </button>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img :src="rec.img_src" :alt="rec.endorser_name" width="200" height="250" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recommended from "../../json/endorsements.json";

export default {
  name: "D5Endorsements",
  data() {
    return {
      recommended: recommended,
      id: "",
    };
  },
};
</script>

<style>
.card-img-right {
  height: 100%;
  border-radius: 0 3px 3px 0;
}

.h-250 {
  height: 250px;
}
@media (min-width: 768px) {
  .h-md-250 {
    height: 250px;
  }
}
.glass {
  background: linear-gradient(
    135deg,
    rgba(142, 158, 171, 0.1),
    rgba(238, 242, 243, 0)
  );
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
}
.my-shadow {
  box-shadow: 10px 10px 5px var(--white)!important;
}
</style>
