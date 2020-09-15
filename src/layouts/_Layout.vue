<template>
  <div class="wrapper">
    <Header />
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel -->
        <User />
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <Menu />
      </section>
      <!-- /.sidebar -->
    </aside>

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import User from "./components/User";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
export default {
  name: "HomeLayout",
  components: { Footer, Menu, User, Header }
};
</script>

<style scoped>
@import "../assets/css/skin.css";
</style>
