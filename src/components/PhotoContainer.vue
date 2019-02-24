<template>
  <div class="photo-container">
    <h1 v-show="query">{{query}}</h1>
    <p v-show="!photos.length">No photos searched...</p>
    <Photo v-for="photo in photos" :key="photo.id" :photo="photo"/>
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
    photos: Array,
    query: String
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>