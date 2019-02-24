<template>
  <div id="app">
    <h1>Photo Hunt</h1>
    <p>Search for and view photos based on your search terms below.</p>
    <SearchForm @handleClick="fetchPhotos"/>
    <PhotoContainer/>
  </div>
</template>

<script>
import SearchForm from "./components/SearchForm.vue";
import PhotoContainer from "./components/PhotoContainer.vue";
import { accessKey, secretKey } from "./api/apiKey.js";

export default {
  name: "app",
  components: {
    SearchForm,
    PhotoContainer
  },
  data: () => {
    photos: [];
  },
  methods: {
    fetchPhotos: query => {
      const url = ``;
      axios
        .get(url)
        .then(response => response.json())
        .then(photo => (this.photos = photos));

      console.log(this.photos);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
