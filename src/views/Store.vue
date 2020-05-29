<template>
  <div>
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0">
            <router-link to="/" tag="a">Home</router-link>
            <span class="mx-2 mb-0">/</span>
            <strong class="text-black">Store</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <button
              type="button"
              class="btn btn-secondary btn-md dropdown-toggle px-4"
              id="dropdownMenuReference"
              data-toggle="dropdown"
            >
              Reference
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
              <a class="dropdown-item">Relevance</a>
              <a class="dropdown-item">Name, A to Z</a>
              <a class="dropdown-item">Name, Z to A</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item">Price, low to high</a>
              <a class="dropdown-item">Price, high to low</a>
            </div>
          </div>
        </div>
        <br /><br />
        <div class="row">
          <Product
            v-for="p in getProds"
            :key="p.p_id + p.name"
            :name="p.name"
            :mrp="p.mrp"
            :sp="p.sp"
            :link="'/product/' + p.p_id"
            :p_data="p"
          ></Product>
        </div>
        <div class="row mt-5">
          <div class="col-md-12 text-center">
            <div class="site-block-27">
              <ul>
                <li><a href="#">&lt;</a></li>
                <li class="active"><span>1</span></li>
                <li><a href="#">&gt;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="site-section bg-secondary bg-image "
      style="background-image: url( 'images/bg_2.webp'); "
    >
      <div class="container ">
        <div class="row align-items-stretch ">
          <div class="col-lg-6 mb-5 mb-lg-0 ">
            <a
              href="# "
              class="banner-1 h-100 d-flex "
              style="background-image: url( 'images/bg_1.webp'); "
              loading="lazy"
            >
              <div class="banner-1-inner align-self-center "></div>
            </a>
          </div>
          <div class="col-lg-6 mb-5 mb-lg-0 ">
            <a
              href="# "
              class="banner-1 h-100 d-flex "
              style="background-image: url( 'images/bg_2.webp'); "
              loading="lazy"
            >
              <div class="banner-1-inner ml-auto align-self-center "></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: { Product: () => import("@/components/Product.vue") },
  computed: {
    getProds() {
      return this.$store.getters.getProducts;
    }
  }
};
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid rgb(219, 25, 74);
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  /* Safari */
  animation: spin 2s linear infinite;
}
/* Safari */

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
