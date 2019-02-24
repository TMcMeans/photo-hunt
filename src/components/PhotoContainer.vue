<template>
  <div class="photo-container">
    <h1>Photo Container</h1>
    <Photo/>
  </div>
</template>

<script>
import Photo from "./Photo.vue";

export default {
  name: "PhotoContainer",
  components: {
    Photo
  },
  props: {
    photos: Array
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>