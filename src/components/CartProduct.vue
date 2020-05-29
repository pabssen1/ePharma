<template>
  <div class="basket-card--container p-2">
    <div class="info-container">
      <div class="card-info card">
        <img
          class="image"
          :src="item.imgSrc"
          style="max-width: 120px;height: 120px;"
        />
        <div class="info">
          <div class="name">
            {{ item.name }}
            <div class="buttons">
              <span class="delete-btn"></span>
            </div>
          </div>
          <div class="other-info">
            <div class="amount">{{ getCartObj[item.p_id] }} Units</div>
            <div class="basket-price">
              Rs. {{ item.sp != null ? item.sp : item.mrp }}
            </div>
          </div>
        </div>
        <button
          class="fa fa-close remove"
          @click="removeFromCart(item.p_id, false)"
        ></button>
      </div>
      <div class="quantity-buttons">
        <button
          class="btn fa fa-minus minus-btn"
          type="button"
          name="button"
          @click="removeFromCart(item.p_id, true)"
        ></button>
        <input
          type="text"
          :value="getCartObj[item.p_id]"
          class="input quanity-input"
        />
        <button
          class="btn fa fa-plus plus-btn"
          type="button"
          name="button"
          @click="incCart(item.p_id)"
        ></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  data: function() {
    return {
      imgurl: "images/product_05.webp"
    };
  },
  computed: {
    getCartObj() {
      return this.$store.getters.getCartObj;
    }
  },
  methods: {
    removeFromCart(n, m) {
      this.$store.dispatch("unSetCart", { id: n, isBreak: m });
    },
    incCart(n) {
      this.$store.commit("pushToCart", n);
    }
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
* {
  box-sizing: border-box;
}

.input {
  font-family: "Maven Pro", sans-serif;
  margin: 0;
  padding: 10px;
  width: 45px;
  text-align: center;
}
.price,
.basket-card--container .info-container .card-info .info .other-info .amount,
.basket-card--container .info-container .card-info .info .other-info .amount,
html
  body
  .basket-card--container
  .info-container
  .card-info
  .info
  .other-info
  .basket-price,
.basket-card--container
  .info-container
  .card-info
  .info
  .other-info
  .basket-price {
  font-family: "Maven Pro", sans-serif;
  font-weight: 700;
  color: #4050a4;
}
.btn {
  text-decoration: none;
  background: none;
  background-color: #4050a4;
  border-color: #4050a4;
  color: white;
  border-width: 1px;
  border-style: solid;
  padding: 15px 17px;
  letter-spacing: 2px;
  font-weight: bold;
}
.btn:hover {
  background-color: #4050a4;
  border-color: #4050a4;
  color: #faf5e8;
}

.basket-card--container {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  box-orient: vertical;
  -webkit-box-direction: normal;
  -moz-box-direction: normal;
  box-direction: normal;
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  flex-direction: column;
  -ms-flex-direction: column;
  min-width: 15.25em;
  margin: 10px;
  background: white;
}
/* .info-container {
  border: 1px solid;
  border-color:  #4050a4;
  border-bottom: none;
} */
@media (min-width: 30em) {
  .info-container {
    position: relative;
    /* border-bottom: 1px solid  #4050a4; */
  }
}
.basket-card--container .info-container .card-info {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.basket-card--container:hover .info-container:hover .card-info:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22);
}
.basket-card--container .info-container .card-info {
  border-radius: 0.3em;
  -webkit-box-ordinal-group: 1;
  -moz-box-ordinal-group: 1;
  box-ordinal-group: 1;
  -webkit-order: 1;
  -moz-order: 1;
  order: 1;
  -ms-flex-order: 1;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  box-orient: horizontal;
  -webkit-box-direction: normal;
  -moz-box-direction: normal;
  box-direction: normal;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  flex-direction: row;
  -ms-flex-direction: row;
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
  -o-justify-content: space-between;
  justify-content: space-between;
  -ms-flex-pack: justify;
  -webkit-box-align: stretch;
  -moz-box-align: stretch;
  box-align: stretch;
  -webkit-align-items: stretch;
  -moz-align-items: stretch;
  -ms-align-items: stretch;
  -o-align-items: stretch;
  align-items: stretch;
  -ms-flex-align: stretch;
  padding: 10px;
}
.basket-card--container .info-container .card-info .image {
  display: block;
  -webkit-align-self: flex-start;
  -moz-align-self: flex-start;
  align-self: flex-start;
  -ms-flex-item-align: start;
  min-width: 70px;
  margin-right: 15px;
  font-size: 0;
}
.basket-card--container .info-container .card-info .remove {
  background: none;
  border: none;
  padding: 0;
  min-width: 45px;
  height: 45px;
  line-height: 45px;
  font-size: 30px;
  margin-left: 5px;
  text-align: center;
  color: #4050a4;
}
.basket-card--container .info-container .card-info .remove:focus {
  outline-color: #4050a4;
  outline-offset: -3px;
}
.basket-card--container .info-container .card-info .remove:hover:before {
  color: #4050a4;
}
.basket-card--container .info-container .card-info .info {
  -webkit-box-flex: auto;
  -moz-box-flex: auto;
  box-flex: auto;
  -webkit-flex: auto 1 1;
  -moz-flex: auto 1 1;
  -ms-flex: auto 1 1;
  flex: auto 1 1;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  box-orient: vertical;
  -webkit-box-direction: normal;
  -moz-box-direction: normal;
  box-direction: normal;
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  flex-direction: column;
  -ms-flex-direction: column;
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
  -o-justify-content: space-between;
  justify-content: space-between;
  -ms-flex-pack: justify;
}
.basket-card--container .info-container .card-info .info .name {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-transform: uppercase;
}
@media (min-width: 20em) {
  .basket-card--container .info-container .card-info .info .name {
    font-size: 18px;
  }
}
.basket-card--container .info-container .card-info .info .other-info {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
  -o-justify-content: space-between;
  justify-content: space-between;
  -ms-flex-pack: justify;
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  box-lines: multiple;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.basket-card--container .info-container .card-info .info .other-info .amount {
  margin-right: 5px;
  font-size: 16px;
}
.basket-card--container
  .info-container
  .card-info
  .info
  .other-info
  .basket-price {
  font-size: 16px;
}
.basket-card--container .info-container .quantity-buttons {
  -webkit-box-ordinal-group: 2;
  -moz-box-ordinal-group: 2;
  box-ordinal-group: 2;
  -webkit-order: 2;
  -moz-order: 2;
  order: 2;
  -ms-flex-order: 2;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 0;
}
@media (min-width: 30em) {
  .basket-card--container .info-container .quantity-buttons {
    display: block;
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -50px;
  }
}
.basket-card--container .info-container .quantity-buttons .btn {
  vertical-align: middle;
  padding: 0;
  width: 45px;
  height: 45px;
  line-height: 45px;
  font-size: 23px;
}
@media (min-width: 30em) {
  .basket-card--container .info-container .quantity-buttons .btn {
    width: 35px;
    height: 35px;
    line-height: 35px;
    font-size: 18px;
    background-color: #4050a4;
    color: rgb(178, 186, 211);
  }
  .basket-card--container .info-container .quantity-buttons .btn:hover {
    border-color: #4050a4;
    background-color: #4050a4;
    color: white;
  }
}
.basket-card--container .info-container .quantity-buttons .btn:focus {
  outline-color: #4050a4;
  outline-offset: -3px;
}
.basket-card--container .info-container .quantity-buttons .btn:before {
  margin-left: 3px;
}
.basket-card--container .info-container .quantity-buttons .quanity-input {
  vertical-align: middle;
  -webkit-box-flex: auto;
  -moz-box-flex: auto;
  box-flex: auto;
  -webkit-flex: auto 1 1;
  -moz-flex: auto 1 1;
  -ms-flex: auto 1 1;
  flex: auto 1 1;
  font-size: 18px;
  border: 1px solid #4050a4;
  color: #8e7442;
  height: 45px;
  width: 55px;
  margin: 0 -1px;
}
@media (min-width: 30em) {
  .basket-card--container .info-container .quantity-buttons .quanity-input {
    height: 35px;
  }
}
.basket-card--container .info-container .quantity-buttons .quanity-input:focus {
  outline-color: #4050a4;
  outline-offset: -3px;
}

@-webkit-keyframes tp-rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}
@keyframes tp-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}

/* Buttons -  Delete and Like */
.buttons {
  position: relative;
  padding-top: 30px;
  margin-right: 60px;
}
.like-btn {
  position: absolute;
  top: -10px;
  left: -25px;
  display: inline-block;
  background: url("https://i.ya-webdesign.com/images/twitter-heart-png-1.png");
  width: 90px;
  height: 90px;
  background-size: 2900%;
  background-repeat: no-repeat;
  cursor: pointer;
}

.is-active {
  animation-name: animate;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-timing-function: steps(28);
  animation-fill-mode: forwards;
}

@keyframes animate {
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: right;
  }
}

* {
  box-sizing: border-box;
}
</style>
