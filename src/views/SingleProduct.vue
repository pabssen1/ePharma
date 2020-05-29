<template>
  <div>
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0">
            <router-link to="/" tag="a">Home</router-link>
            <span class="mx-2 mb-0">/</span>
            <router-link to="/store" tag="a">Store</router-link>
            <span class="mx-2 mb-0">/</span>
            <strong class="text-black">{{ p.name }}</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section">
      <div class="container  py-5">
        <div class="row justify-content-center">
          <div
            class="col-12 col-md-8 card py-5 mr-auto"
            style="border-right-width: 40px;"
          >
            <Loader v-if="loading" style="max-height:100%"> </Loader>
            <div class="row px-3 " v-else>
              <div class="col-md-6 p-3 ">
                <div class="text-center">
                  <img :src="p.imgSrc" alt="Image" class="img-fluid py-5" />
                </div>
              </div>
              <div class="col-md-6 mr-auto">
                <h2 class="text-black">{{ p.name }}</h2>
                <div class="card p-2">
                  <h3 class="text-black" style="font-size:18px">Info:</h3>
                  <p style="font-size:14px">{{ p.description }}</p>
                </div>
                <p v-if="p.sp != null">
                  <del>₹{{ p.mrp }}</del>
                  <strong class="text-primary h4">₹{{ p.sp }}</strong>
                </p>
                <p v-else>
                  <strong class="text-primary h4">₹{{ p.mrp }}</strong>
                </p>
                <div class="mb-5">
                  <div class="input-group mb-3" style="max-width: 220px;">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-primary js-btn-minus"
                        type="button"
                        @click="removeFromCart(p.p_id, true)"
                      >
                        &minus;
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control text-center"
                      :value="getCartObj[p.p_id]"
                      max="3"
                      aria-label="add-to-cart"
                      aria-describedby="aff-product-to-cart"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-primary js-btn-plus"
                        type="button"
                        @click="incCart(p.p_id)"
                      >
                        &plus;
                      </button>
                    </div>
                  </div>
                </div>
                <p>
                  <button
                    :class="'btn ' + btnClass + ' px-4 py-3 '"
                    @click="pt_C(p.p_id)"
                    :disabled="added"
                  >
                    {{ addBtn }}
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 px-4 py-3 card justify-content-center">
            <h3 style="font-size:13px">Disclaimer:</h3>
            <p style="font-size:11px">
              The contents of this website are for informational purposes only
              and not intended to be a substitute for professional medical
              advice, diagnosis, or treatment. Please seek the advice of a
              physician or other qualified health provider with any questions
              you may have regarding a medical condition. Do not disregard
              professional medical advice or delay in seeking it because of
              something you have read on this website.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="site-section bg-secondary bg-image "
      style="background-color: rgb(219, 25, 74); "
    >
      <div class="container ">
        <div class="row align-items-stretch ">
          <div class="col-lg-6 mb-5 mb-lg-0 ">
            <a
              href="# "
              class="banner-1 h-100 d-flex "
              style="background-image: url( 'images/bg_1.webp'); "
            >
              <div class="banner-1-inner align-self-center "></div>
            </a>
          </div>
          <div class="col-lg-6 mb-5 mb-lg-0 ">
            <a
              href="# "
              class="banner-1 h-100 d-flex "
              style="background-image: url( 'images/bg_2.webp'); "
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
  components: {
    Loader: () => import("@/components/Loader.vue")
  },
  data: function() {
    return {
      p: {},
      added: false,
      addBtn: "Add to cart",
      btnClass: "btn-primary",
      loading: true
    };
  },
  beforeMount() {
    if (this.$attrs.p_data) {
      localStorage.setItem(
        "currentProduct",
        JSON.stringify(this.$attrs.p_data)
      );
    }
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("currentProduct"))) {
      this.p = JSON.parse(localStorage.getItem("currentProduct"));
      this.p["Qty"] = 0;
      this.loading = false;
    }
  },
  computed: {
    getCartObj() {
      return this.$store.getters.getCartObj;
    }
  },
  methods: {
    pt_C: function(n) {
      if (n) {
        this.$store.commit("pushToCart", n);
        this.addBtn = "Added to cart";
        this.btnClass = "btn-success";
        setTimeout(() => {
          this.added = true;
          this.$router.push("/store");
        }, 1000);
      }
    },
    removeFromCart(n, m) {
      this.$store.dispatch("unSetCart", { id: n, isBreak: m });
      if (this.$store.getters.getCartObj[n] <= 1) {
        this.addBtn = "Add to cart";
        this.btnClass = "btn-primary";
        this.added = false;
      } else {
        this.addBtn = "Added to cart";
        this.btnClass = "btn-success";
        this.added = true;
      }
    },
    incCart(n) {
      this.$store.commit("pushToCart", n);
      this.addBtn = "Added to cart";
      this.btnClass = "btn-success";
      this.added = true;
    }
  }
};
</script>

<style scoped>
.contained {
  max-width: 900px;
}
.card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22);
}
.offer {
  background: #e3e3e3;
  background: -moz-linear-gradient(top, #e3e3e3, #c8c8c8);
  background: gradient(
    linear,
    left top,
    left bottom,
    from(#e3e3e3),
    to(#c8c8c8)
  );
  padding: 10px 20px;
  margin-left: -20px;
  margin-top: 0;
  position: relative;
  width: auto;
  height: 5%;

  -moz-box-shadow: 1px 1px 3px #292929;
  -webkit-box-shadow: 1px 1px 3px #292929;
  box-shadow: 1px 1px 3px #292929;

  color: #454545;
  text-shadow: 0 1px 0 white;
}

.arrow {
  width: 0;
  height: 0;
  line-height: 0;
  border-left: 20px solid transparent;
  border-top: 10px solid #c8c8c8;
  top: 104%;
  left: 0;
  position: absolute;
}
</style>
