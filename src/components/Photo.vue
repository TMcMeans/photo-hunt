<template>
  <div class="photo">
    <img :src="photo.urls.small" :alt="photo.description">
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: {
    photo: Object
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
