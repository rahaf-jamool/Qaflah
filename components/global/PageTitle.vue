<template>
  <div class="page-header d-flex align-items-center">
    <div class="container">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
    name:"PageTitle",
    props:['title']
}
</script>

<style scoped>
 .page-header {
    background-image: url("../../public/assets/images/about-header.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
  }
.page-header h1 {
    font-weight: bold;
    color: white;
  }
</style>
