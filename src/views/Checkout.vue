<template>
  <div class="product-card ">
    <div
      class="basket-card--container justify-content-center"
      v-if="this.$store.getters.getCart.length == 0"
    >
      <div class="info-container justify-content-center">
        <div class="card-info">
          <div class="info">
            <div class="name">Cart is empty</div>
          </div>
          <router-link to="/store" tag="a" class="btn btn-primary px-5 py-3"
            >Shop Now</router-link
          >
        </div>
      </div>
    </div>
    <form-wizard
      @on-complete="onComplete(calcTotal)"
      shape="tab"
      color="#e00f70"
      transition="props.transition"
      finishButtonText="Pay Now"
      v-else
    >
      <h2 slot="title">Checkout</h2>
      <tab-content title="Cart Info" icon="ti-shopping-cart-full">
        <div>
          <Product v-for="item in cart" :key="item.p_id" :item="item"></Product>
          Total : {{ calcTotal }}
        </div>
      </tab-content>
      <tab-content title="Billing and Payment" icon="ti-truck">
        <Ship></Ship>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import "ti-icons/css/themify-icons.css";
export default {
  data: function() {
    return {
      loading: false,
      amount: 0,
      cart: []
    };
  },
  components: {
    Ship: () => import("@/components/ShipNpay.vue"),
    FormWizard,
    TabContent,
    Product: () => import("@/components/CartProduct.vue")
  },
  methods: {
    onComplete: function(total) {
      console.log(total);
    }
  },
  created() {
    this.$store.dispatch("retrieveUser");
    var that = this;
    var med = this.$store.getters.getProducts;
    Object.keys(this.$store.getters.getCartObj).forEach(element => {
      var result = med.find(({ p_id }) => p_id == element);
      that.cart.push(result);
    });
  },
  computed: {
    calcTotal() {
      var total = 0;
      this.cart.forEach(element => {
        if (element) {
          total +=
            (element.sp != null ? element.sp : element.mrp) *
            this.$store.getters.getCartObj[element.p_id];
        }
      });
      return total;
    },
    cartWatcher() {
      return this.$store.getters.getCartObj;
    }
  },
  watch: {
    cartWatcher() {
      //console.log(oldData, newData);
      var that = this;
      var med = this.$store.getters.getProducts;
      this.cart = [];
      Object.keys(that.$store.getters.getCartObj).forEach(element => {
        var result = med.find(({ p_id }) => p_id == element);
        that.cart.push(result);
      });
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.product-card {
  margin: 0 auto;
  position: relative;
  max-width: 960px;
  padding: 0;
}
</style>
