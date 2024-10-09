<template>
    <router-view></router-view>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
*, ::before, ::after {
    margin: 0; padding: 0;
    box-sizing: border-box;
    text-align: start;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
    background-color: #f8f8f8;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
