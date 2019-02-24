<template>
  <img class="photo" :src="photo.urls.small" :alt="photo.description">
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
.photo {
  width: 400px;
  height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
}
</style>

