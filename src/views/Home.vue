<template>
  <HomeComp />
</template>

<script>
export default {
  name: "Home",
  components: {
    HomeComp: () => import("@/components/Home.vue")
  }
};
</script>
<style scoped></style>
