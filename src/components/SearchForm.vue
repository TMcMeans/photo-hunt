<template>
  <div class="search-form">
    <p v-show="error">{{error}}</p>
    <input type="text" v-model="query" placeholder="Search for photos">
    <button @click.prevent="onClick">Search</button>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  props: {},
  data: () => ({
    query: "",
    error: ""
  }),
  methods: {
    onClick() {
      if (this.query) {
        this.error = "";
        this.$emit("handleClick", this.query);
        this.query = "";
      } else {
        this.error = "You must type a query in the search to view photos.";
      }
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
