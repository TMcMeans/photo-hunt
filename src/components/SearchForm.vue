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
        this.error = "Type a query in the search bar to view related images.";
      }
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="text"] {
  width: 200px;
  height: 25px;
  font-size: 1em;
  margin: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid black;
}
button {
  border-radius: 0%;
  height: 30px;
  font-size: 1em;
  border: 2px solid black;
  cursor: pointer;
}
button:hover {
  background: black;
  color: white;
}
</style>
