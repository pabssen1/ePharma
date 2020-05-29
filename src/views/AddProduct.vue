<template>
  <div class="site-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-12">
          <form
            id="stock"
            class="stock"
            @submit.prevent="pushMed"
            align="center"
          >
            <div class="row">
              <div class="col-12 col-md-6">
                <h3>
                  <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                  Product Details
                </h3>
                <div
                  class="form-group"
                  style="display:flex; flex-direction: row;"
                >
                  <label for="medName" style="margin: 6px">Medicine Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="medName"
                    aria-describedby="medicineName"
                    placeholder="Ex: Ibuprofen Tablets, 200mg"
                    style="margin: 6px"
                    v-model="medicine.name"
                    required
                  />
                </div>
                <div
                  class="form-group"
                  style="display:flex; flex-direction: row;"
                >
                  <label for="medDesc" style="margin: 6px">Description</label>
                  <textarea
                    class="form-control"
                    id="medDesc"
                    placeholder="Medicine Description"
                    style="margin: 6px"
                    v-model="medicine.description"
                    required
                  />
                </div>
                <div
                  class="form-group"
                  style="display:flex; flex-direction: row;"
                >
                  <label for="medPrice" style="margin: 6px">MRP</label>
                  <input
                    type="number"
                    min="0"
                    class="form-control"
                    id="medPrice"
                    step="0.01"
                    placeholder="Per unit price in INR"
                    style="margin: 6px"
                    v-model="medicine.mrp"
                    required
                  />
                </div>
                <div
                  class="form-group"
                  style="display:flex; flex-direction: row;"
                >
                  <label for="medSP" style="margin: 6px"
                    >Discounted Price</label
                  >
                  <input
                    type="number"
                    min="0"
                    :max="medicine.mrp"
                    step="0.01"
                    class="form-control"
                    id="medSP"
                    placeholder="Per unit price in INR(Leave blank if same as MRP)"
                    style="margin: 6px"
                    v-model="medicine.sp"
                  />
                </div>
                <div
                  class="form-group"
                  style="display:flex; flex-direction: row;"
                >
                  <label for="medStock" style="margin: 6px">Stock</label>
                  <input
                    type="number"
                    min="0"
                    class="form-control"
                    id="medStock"
                    placeholder="Stock in inventory"
                    style="margin: 6px;"
                    v-model="medicine.stock"
                    required
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <ImageUpload></ImageUpload>
              </div>
            </div>
            <button class="btn btn-primary" align="center">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../db";
import picStore from "../helpers/imageStore.js";
import upload from "@/components/ImageUpload.vue";
export default {
  components: {
    ImageUpload: () => import("@/components/ImageUpload.vue")
  },
  data: function() {
    return { medicine: {} };
  },
  methods: {
    pushMed: function(event) {
      console.log(event);
      var m = this.medicine;
      console.log(m);
      if (
        m.name == null ||
        m.description == null ||
        m.mrp == null ||
        m.stock == null
      ) {
        alert("Data Incomplete!");
      } else {
        m["imgSrc"] = picStore.picture;
        console.log(this.medicine);
        var stockRef = db.ref("med").push();
        stockRef.set(m);
        this.medicine = {};
        upload.picture = null;
      }
    }
  }
};
</script>

<style scoped>
#medPrice,
#medStock,
#medSP {
  max-width: 30%;
}
@media only screen and (max-width: 600px) {
  #medPrice,
  #medStock,
  #medSP {
    max-width: 50%;
  }
}
</style>
