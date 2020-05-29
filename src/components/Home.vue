<template>
  <div>
    <div
      class="site-blocks-cover"
      style="background-image: url('images/background1.webp');"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 mx-auto order-lg-2 align-self-center">
            <div class="site-block-cover-content text-center">
              <h2 style="color: #3628b4;" class="sub-title">Meds made Easy</h2>
              <h1
                style="color: #3628b4;text-shadow: 2px 2px rgb(219, 45, 74)"
                class="shimmer"
              >
                Welcome To EasyPharma
              </h1>
              <p>
                <router-link
                  to="/store"
                  tag="a"
                  class="btn btn-primary px-5 py-3"
                  >Shop Now</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section">
      <div class="container">
        <div class="row align-items-stretch section-overlap">
          <div
            class="col-md-6 col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay=""
          >
            <div
              class="banner-wrap h-100 lazyload"
              style="background-image: url( 'images/1.webp'); background-size: cover; background-repeat: no-repeat;"
            >
              <a class="h-100"></a>
            </div>
          </div>
          <div
            class="col-md-6 col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              class="banner-wrap h-100 lazyload"
              style="background-image: url( 'images/3.webp'); background-size: cover; background-repeat: no-repeat;"
            >
              <a class="h-100"></a>
            </div>
          </div>
          <div
            class="col-md-6 col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="banner-wrap h-100 lazyload"
              style="background-image: url( 'images/2.webp'); background-size: auto; background-repeat: no-repeat;"
            >
              <a class="h-100">
                <h5></h5>
                <p></p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="title-section text-center col-12">
            <h2 class="text-uppercase">Popular Products</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <Loader v-if="getProds == null"></Loader>
          <Product
            v-else
            v-for="p in getProds.slice(0, 5)"
            :key="p.p_id"
            :name="p.name"
            :mrp="p.mrp"
            :sp="p.sp"
            :p_data="p"
          ></Product>
        </div>
        <div class="row mt-12">
          <div class="col-12 text-center">
            <router-link
              v-if="getProds != null"
              to="/store"
              tag="a"
              class="btn btn-primary px-4 py-3"
              >View All Products</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="site-section bg-secondary bg-image"
      style="background-color: salmon;"
    >
      <div class="container">
        <div class="row align-items-stretch">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <a
              href="# "
              class="banner-1 h-100 d-flex lazyload"
              style="background-image: url( 'images/bg_1.webp'); "
              data-scr="images/bg_1.webp"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div class="banner-1-inner align-self-center lazyload"></div>
            </a>
          </div>
          <div class="col-lg-6 mb-5 mb-lg-0">
            <a
              href="# "
              class="banner-1 h-100 d-flex"
              style="background-image: url( 'images/bg_2.webp'); "
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div class="banner-1-inner ml-auto align-self-center"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Product: () => import("@/components/Product.vue"),
    Loader: () => import("@/components/Loader.vue")
  },
  computed: {
    getProds() {
      return this.$store.getters.getProducts;
    }
  },
  data: function() {
    return {
      prods: []
    };
  }
};
</script>

<style scoped>
html,
body {
  overflow-x: hidden;
}
</style>
