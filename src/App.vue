<template>
  <div class="site-wrap" data-aos="fade-up" data-aos-delay="">
    <div id="app">
      <Loader v-show="$root.loading"></Loader>
      <div v-show="!$root.loading">
        <Header />
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
        <Footer style="padding-bottom:0px" />
      </div>
    </div>
  </div>
</template>

<style>
@import url("/css/style.css");
@import url("/css/main.css");
@import url("/fonts/icomoon/style.css");
@import url("https://fonts.googleapis.com/css?family=Rubik:400,700|Crimson+Text:400,400i");
html,
body {
  overflow-x: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Header,
    Footer,
    Loader
  },
  beforeMount() {
    this.$store.dispatch("retrieveProducts");
    this.$store.dispatch("retrieveUser");
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Your Website";
    }
  }
};
</script>
