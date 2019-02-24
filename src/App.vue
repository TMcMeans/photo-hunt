<template>
  <div id="app">
    <h1>Photo Hunt</h1>
    <p>Search for and view photos based on your search terms below.</p>
    <SearchForm/>
    <PhotoContainer/>
  </div>
</template>

<script>
import SearchForm from "./components/SearchForm.vue";
import PhotoContainer from "./components/PhotoContainer.vue";

export default {
  name: "app",
  components: {
    SearchForm,
    PhotoContainer
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
