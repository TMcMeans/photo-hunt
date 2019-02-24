<template>
  <div class="search-form">
    <input type="text">
    <button>Search</button>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  props: {
    msg: String
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
