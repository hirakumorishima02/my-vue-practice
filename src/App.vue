<template>
  <div id="app">
    <!--VueRouterを呼び出し-->
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/product">Product</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{ background: #e25193 }
</style>
