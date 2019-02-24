<template>
  <div class="search-form">
    <input type="text" v-model="query">
    <button>Search</button>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  props: {},
  data: () => ({
    query: ""
  })
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
