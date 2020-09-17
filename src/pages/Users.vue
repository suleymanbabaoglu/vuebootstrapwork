<template>
    <div class="container" style="height: 500px">
        <button class="btn btn-success" @click="addUser">ADD</button>
    </div>
</template>

<script>
export default {
  name: "Users",
  methods: {
    addUser() {
        this.$store.dispatch("addUser")
    }
  }
};
</script>

<style scoped></style>
