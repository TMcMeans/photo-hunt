<template>
  <div id="app">
    <h1>Photo Hunt</h1>
    <p>Search for and view photos based on your search terms below.</p>
    <SearchForm @handleClick="fetchPhotos"/>
    <PhotoContainer :photos="photos" :query="query"/>
  </div>
</template>

<script>
import axios from "axios";

import SearchForm from "./components/SearchForm.vue";
import PhotoContainer from "./components/PhotoContainer.vue";
import { accessKey, secretKey } from "./api/apiKey.js";

export default {
  name: "app",
  components: {
    SearchForm,
    PhotoContainer
  },
  data: () => ({
    photos: [],
    query: ""
  }),
  methods: {
    fetchPhotos(query) {
      const url = `https://api.unsplash.com/search/photos?page=1&per_page=50&client_id=${accessKey}&query=${query}`;

      axios
        .get(url)
        .then(response => {
          console.log(`Fetching data based on search query: ${query}`);
          this.photos = response.data.results;
          this.query = query;
        })
        .catch(error => {
          console.log(`There was an error fetching data: ${error.response}`);
        });
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
