<template>
  <div class="col-sm-6 col-lg-4 text-center item p-0" data-aos="zoom-in-down">
    <router-link tag="a" :to="{ name: 'Product', params: { p_data } }">
      <Loader v-if="loading"></Loader>
      <img
        :src="p_data.imgSrc"
        alt="Image"
        style="max-width: 100%;height: 120px;"
        loading="lazy"
        v-else
      />
    </router-link>
    <h3 class="text-dark">
      <router-link
        tag="a"
        :to="{ name: 'Product', params: { p_data } }"
        style="font-size:18px"
      >
        {{ name }}</router-link
      >
    </h3>
    <p class="price" v-if="sp != null">
      <del>₹ {{ mrp }} &mdash;</del>₹ {{ sp }}
    </p>
    <p class="price" v-else>₹ {{ mrp }}</p>
  </div>
</template>

<script>
export default {
  components: {
    Loader: () => import("@/components/Loader.vue")
  },
  data() {
    return {
      loading: false
    };
  },
  props: {
    name: String,
    mrp: String,
    sp: String,
    p_data: Object
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22);
}
</style>
