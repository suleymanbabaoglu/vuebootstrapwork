<template>
  <div class="row text-center">
    <div class="jumbotron">
      <h1>404 - PAGE NOT FOUND</h1>
    </div>
    <div class="row">
      <router-link to="/">
        <button
          class="btn btn-primary text-center"
          style="height: 100px;width: 100px"
        >
          <i class="fa fa-home" style="font-size: 80px"></i>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "404"
};
</script>

<style scoped></style>
