<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <form id="shipping" class="card p-3" @submit.prevent="checkout">
        <div class="form-group" style="display:flex; flex-direction: row;">
          <label for="Name" style="margin: 6px">Name</label>
          <input
            type="text"
            class="form-control"
            id="Name"
            aria-describedby="Name"
            placeholder="Enter your name"
            style="margin: 6px"
            v-model="name"
            required
          />
        </div>
        <div class="form-group" style="display:flex; flex-direction: row;">
          <label for="tel" style="margin: 6px">Phone Number</label>
          <input
            type="tel"
            class="form-control"
            id="tel"
            placeholder="+91-XXXXXXXXXX"
            style="margin: 6px"
            v-model="tel"
            required
          />
          <label for="email" style="margin: 6px">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
            style="margin: 6px"
            v-model="email"
            required
          />
        </div>
        <div class="form-group" style="display:flex; flex-direction: row;">
          <label for="Address1" style="margin: 6px">Address Line 1</label>
          <input
            type="textarea"
            class="form-control"
            id="Address1"
            aria-describedby="Address1"
            placeholder="Address Line 1"
            style="margin: 6px"
            v-model="address1"
            required
          />
        </div>
        <div class="form-group" style="display:flex; flex-direction: row;">
          <label for="Address2" style="margin: 6px">Address Line 2</label>
          <input
            type="textarea"
            class="form-control"
            id="Address2"
            aria-describedby="Address2"
            placeholder="Address Line 2"
            style="margin: 6px"
            v-model="address2"
            required
          />
        </div>
        <div class="form-group" style="display:flex; flex-direction: row;">
          <label for="city" style="margin: 6px">City/Town</label>
          <input
            type="textarea"
            class="form-control"
            id="city"
            aria-describedby="city"
            placeholder="Enter your city/town"
            style="margin: 6px"
            v-model="ct_twn"
            required
          />

          <label for="zip" style="margin: 6px">Pincode</label>
          <input
            type="number"
            class="form-control"
            id="zip"
            aria-describedby="zip"
            placeholder="Pincode"
            style="margin: 6px;"
            v-model="pincode"
            required
          />
        </div>
        <div class="form-group" style="display:flex; flex-direction: row;">
          <label for="state" style="margin: 6px">State</label>
          <input
            type="textarea"
            class="form-control"
            id="state"
            aria-describedby="state"
            placeholder="Enter your state"
            style="margin: 6px;"
            v-model="state"
            required
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: null,
      tel: null,
      email: null,
      address1: null,
      address2: null,
      ct_twn: null,
      state: null,
      pincode: null
    };
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
#state {
  max-width: 40%;
}
@media only screen and (max-width: 600px) {
  #state {
    max-width: 100%;
  }
}
</style>
