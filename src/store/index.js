import Vue from "vue";
import Vuex from "vuex";
import { user, db } from "../db";
import { firebase } from "@firebase/app";
Vue.use(Vuex);
import reactivePersist from "vuex-reactive-persist";
const rPersist = new reactivePersist({
  key: "easyPharma",
  storage: window.localStorage
});
export default new Vuex.Store({
  state: {
    user: {},
    medicines: [],
    cart: []
  },
  plugins: [rPersist],
  mutations: {
    setUser(state, payload) {
      if (user != null) {
        state.user = payload;
      } else {
        state.user = { uid: -1 };
      }
    },
    setMeds(state, payload) {
      state.medicines = [];
      state.medicines = payload;
    },
    setCart(state, payload) {
      state.cart = payload;
    },
    unSetCart(state, payload) {
      var i = 0;

      while (i < state.cart.length) {
        if (state.cart[i] === payload.id) {
          state.cart.splice(i, 1);
          console.log(payload);
          if (payload.isBreak) break;
        } else {
          ++i;
        }
      }
    },
    pushToCart(state, payload) {
      state.cart.push(payload);
    }
  },
  actions: {
    retrieveProductsLimit: ({ commit }) => {
      var items = [];
      db.ref("med")
        .limitToFirst(5)
        .on(
          "value",
          function(snapshot) {
            snapshot.forEach(function(child) {
              console.log(child.val().imgSrc);
              var key = child.key;
              items.push({
                name: child.val().name,
                description: child.val().description,
                mrp: child.val().mrp,
                sp: child.val().sp,
                stock: child.val().stock,
                p_id: key,
                imgSrc: child.val().imgSrc //<--------------this is where I get the key
              });
            });

            commit("setMeds", items);
          },
          function(error) {
            // The Promise was rejected.
            console.error(error);
          }
        );
    },
    retrieveProducts: ({ commit }) => {
      var items = [];
      db.ref("med").on(
        "value",
        function(snapshot) {
          snapshot.forEach(function(child) {
            var key = child.key;
            var ch = child.val();
            ch["p_id"] = key;
            items.push(ch);
            commit("setMeds", items);
          });
          items = [];
        },
        function(error) {
          // The Promise was rejected.
          console.error(error);
        }
      );
    },
    retrieveUser: ({ commit }) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          commit("setUser", user);
        } else {
          // No user is signed in.
        }
      });
    },
    unSetCart: ({ commit }, payload) => {
      if (payload) commit("unSetCart", payload);
    },
    unSetUser: ({ commit }) => {
      firebase
        .auth()
        .signOut()
        .then(function() {
          commit("setUser", {});
        })
        .catch(function(error) {
          // An error happened.
          console.log(error);
        });
    }
  },
  getters: {
    getProducts: state => state.medicines,
    getUser: state => state.user,
    getCart: state => state.cart,
    getCartObj: state => {
      var arr = state.cart;
      var cart = {};
      for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        cart[num] = cart[num] ? cart[num] + 1 : 1;
      }
      return cart;
    },
    getProductsObj: state => state.medicinesObj
  },
  modules: {}
});
