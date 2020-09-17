<template>
  <ul class="sidebar-menu" data-widget="tree">
    <li class="header">MAIN NAVIGATION</li>
    <li class="active">
      <router-link to="/">
        <a><i class="fa fa-dashboard"></i> Dashboard</a>
      </router-link>
    </li>
    <li>
      <router-link to="users">
        <a><i class="fa fa-users"></i> Users</a>
      </router-link>
    </li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-files-o"></i>
        <span>Layout Options</span>
        <span class="pull-right-container">
          <span class="label label-primary pull-right">4</span>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="pages/layout/top-nav.html"
            ><i class="fa fa-circle-o"></i> Top Navigation</a
          >
        </li>
        <li>
          <a href="pages/layout/boxed.html"
            ><i class="fa fa-circle-o"></i> Boxed</a
          >
        </li>
        <li>
          <a href="pages/layout/fixed.html"
            ><i class="fa fa-circle-o"></i> Fixed</a
          >
        </li>
        <li>
          <a href="pages/layout/collapsed-sidebar.html"
            ><i class="fa fa-circle-o"></i> Collapsed Sidebar</a
          >
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style scoped></style>
