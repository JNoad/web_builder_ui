<template>
    <header>
        <NavBar/>
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer>
        
    </footer>
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
    components: {
        NavBar
    }
}
</script>
<style lang="scss">

</style>