<template>
  <div class="photo-container">
    <h1 class="search-string" v-show="query">viewing search results for: {{query}}</h1>
    <p v-show="!photos.length">No photos found...</p>
    <div class="photo-wrapper">
      <Photo class="photo" v-for="photo in photos" :key="photo.id" :photo="photo"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
@import url("https://fonts.googleapis.com/css?family=Sanchez");
.photo-container {
  margin: 0 auto;
  width: 90%;
}
.photo-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-evenly;
}
.search-string {
  font-family: "Sanchez", serif;
}
</style>
