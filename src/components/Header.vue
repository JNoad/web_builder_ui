<template>
    <header>
        <div class="logo">
            <img width="44" height="44" src="https://img.icons8.com/arcade/64/engine.png" alt="engine"/>
            <span>Engine</span>
        </div>
        <SearchBar/>
        <div>
            
        </div>
    </header>
</template>
<script>
import SearchBar from './SearchBar.vue';
export default {
    components: {
        SearchBar
    }
}
</script>
<style lang="scss">
    header {
        @include flex-row();
        padding: 4px 0;
        .logo {
            padding: 4px 16px;
            @include flex-row;
            width: 250px;
            span {
                font-family: sans-serif;
                font-size: large;
                margin: 0 8px;
            }
        }
    }
</style>