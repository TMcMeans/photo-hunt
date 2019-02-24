<template>
  <div class="search-form">
    <input type="text" v-model="query" placeholder="Search for photos">
    <button @click.prevent="onClick">Search</button>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  props: {},
  data: () => ({
    query: ""
  }),
  methods: {
    onClick() {
      this.query = "";
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
