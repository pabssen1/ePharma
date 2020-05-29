<template>
  <div class="site-navbar py-3">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <div class="logo">
          <div class="site-logo">
            <router-link to="/">
              <a class="js-logo-clone">
                <img src="images/logo.webp" height="70px" />
              </a>
            </router-link>
          </div>
        </div>
        <div class="main-nav d-none d-lg-block">
          <nav
            class="site-navigation text-right text-md-center"
            role="navigation"
          >
            <ul class="site-menu js-clone-nav d-none d-lg-block">
              <router-link :to="{ name: 'Home' }" tag="li">
                <router-link :to="{ name: 'Home' }" tag="a">Home</router-link>
              </router-link>
              <router-link :to="{ name: 'Store' }" tag="li">
                <router-link :to="{ name: 'Store' }" tag="a">Store</router-link>
              </router-link>
              <router-link :to="{ name: 'Contact' }" tag="li">
                <router-link :to="{ name: 'Contact' }" tag="a"
                  >Contact</router-link
                >
              </router-link>
              <router-link to="/about" tag="li">
                <router-link to="/about" tag="a">About Us</router-link>
              </router-link>
              <router-link to="/add-product" tag="li">
                <a v-show="currentUser != null">Add Product</a>
              </router-link>
            </ul>
          </nav>
        </div>
        <div class="icons" style="color: black">
          <router-link
            tag="a"
            to="/checkout"
            class="icons-btn d-inline-block bag"
          >
            <span class="icon-shopping-bag"></span>
            <span class="number">{{ cartLength }}</span>
          </router-link>
          <router-link
            to="/login"
            class="btn btn-primary px-1 py-1"
            style="margin-left: 50px;color: blanchedalmond;"
            v-if="currentUser == null"
            >Login</router-link
          >

          <a
            v-else
            class="btn btn-primary px-1 py-1"
            style="margin-left: 50px;background-color: rgb(219, 45, 74); border-color: rgb(219, 45, 74); color: blanchedalmond;"
            @click="signOut"
            >Signout</a
          >

          <a
            class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
          >
            <span class="icon-menu"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("retrieveUser");
  },
  computed: {
    currentUser() {
      if (this.$store.getters.getUser != null) {
        return this.$store.getters.getUser.displayName;
      }
      return null;
    },
    cartLength() {
      if (this.$store.getters.getCart != []) {
        return Object.keys(this.$store.getters.getCartObj).length;
      }
      return 0;
    }
  },
  methods: {
    signOut: function() {
      this.$store.dispatch("unSetUser");
    }
  }
};
</script>
<style scoped></style>
