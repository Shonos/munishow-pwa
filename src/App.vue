<template>
  <div class="region-full">
    <router-view/>
  </div>
</template>

<style lang="scss">
.region-tab {
  display: flex;
  height: 100%;
  align-items: center;
}

body {
  margin: 0;
}

p {
  margin:0;
}

.font-12 {
  font-size:16px;
}

.font-white {
  color:white;
}

.header {
  margin: 10px;
}

.region-full {
  height: 100vh;
  max-width: 500px;
  background-color: #978f9a;
  position: relative;
}

.region-tab {
  display: flex;
  height: 100%;
  align-items: center;
}

.background-default {
  background-image: url(./assets/background-default.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@import url('https://fonts.googleapis.com/css?family=Shrikhand');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
</style>
