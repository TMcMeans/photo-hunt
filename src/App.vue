<template>
  <div id="app">
    <h1 class="title">Photo Hunt</h1>
    <p>Search for and view photos based on your search terms below.</p>
    <SearchForm @handleClick="fetchPhotos"/>
    <PhotoContainer :photos="photos" :query="query"/>
  </div>
</template>

<script>
import axios from "axios";

import SearchForm from "./components/SearchForm.vue";
import PhotoContainer from "./components/PhotoContainer.vue";
import { accessKey } from "./api/apiKey.js";

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
      const url = `https://api.unsplash.com/search/photos?page=1&per_page=100&client_id=${accessKey}&query=${query}`;

      axios
        .get(url)
        .then(response => {
          console.log(`Fetching data based on search query: ${query}`);
          this.photos = response.data.results;
          this.query = query;
        })
        .catch(error => {
          console.log(`There was an error fetching data: ${error.response}`);

          return error.response;
        });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Sanchez");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  font-family: "Sanchez", serif;
  font-size: 3em;
  border: 2px solid black;
  color: white;
  background: black;
  margin: 0 auto 0 auto;
}
p {
  font-size: 1.2em;
}
</style>
