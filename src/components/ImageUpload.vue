<template>
  <div>
    <div>
      <h3>Upload Product Image:</h3>
      <input type="file" @change="previewImage" accept="image/*" required />
    </div>
    <div>
      <p>
        Progress: {{ uploadValue.toFixed() + "%" }}
        <progress id="progress" :value="uploadValue" max="100"></progress>
      </p>
    </div>
    <div v-if="imageData != null">
      <img class="preview" :src="picture" />
      <br />
      <button class="btn btn-primary" type="button" @click="onUpload">
        Upload
      </button>
    </div>
  </div>
</template>
<script>
import { storage } from "../db";
import picStore from "../helpers/imageStore.js";
export default {
  name: "Upload",
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;
      var uid = this.$store.getters.getUser.uid;
      picStore.picture = uid + "/" + this.imageData.name;
      const storageRef = storage
        .ref("med_img/" + uid)
        .child(this.imageData.name)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
            picStore.picture = this.picture;
          });
        }
      );
    }
  }
};
</script>
<style scoped>
img.preview {
  width: 200px;
}
</style>
