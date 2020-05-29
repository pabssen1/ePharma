import Vue from "vue";
import VueRouter from "vue-router";
const Home = resolve => require(["../views/Home.vue"], resolve);
import SingleProduct from "../views/SingleProduct.vue";
Vue.use(VueRouter);
export var loading = false;
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "EasyPharma - Meds made easy"
    },
    beforeEnter: (to, from, next) => {
      loading = true;
      document.title = to.meta.title;
      next();
    }
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Contact.vue"),
    meta: {
      title: "EasyPharma | Contact Us"
    }
  },
  {
    path: "/store",
    name: "Store",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Store.vue"),
    meta: {
      title: "EasyPharma | Store"
    }
  },
  {
    path: "/add-product",
    name: "Add Product",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddProduct.vue"),
    meta: {
      title: "Admin | Add Product"
    }
  },
  {
    path: "/view",
    props: true,
    name: "Product",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SingleProduct,
    meta: {
      title: "EasyPharma | Product"
    }
  },
  {
    path: "/login",
    props: true,
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    meta: {
      title: "EasyPharma | Login"
    }
  },
  {
    path: "/about",
    props: true,
    name: "AboutUs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "EasyPharma | AboutUs"
    }
  },
  {
    path: "/checkout",
    props: true,
    name: "Checkout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Checkout.vue"),
    meta: {
      title: "EasyPharma | Checkout"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
  linkExactActiveClass: "active",
  base: process.env.BASE_URL,
  routes
});

export default router;
