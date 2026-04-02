<template>
    <header>
        <NavBar/>
    </header>
    <main>
        <!-- <router-view></router-view> -->
        <EditorView/>
    </main>
    <footer>
        
    </footer>
</template>
<script>
import NavBar from './components/NavBar.vue';
import EditorView from './views/Editor'
export default {
    components: {
        NavBar
    }
}
</script>
<style lang="scss">

</style>