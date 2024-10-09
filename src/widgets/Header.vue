<template>
    <header>
        <div class="logo">
            <img width="44" height="44" src="https://img.icons8.com/arcade/64/engine.png" alt="engine"/>
            <span>Engine</span>
        </div>
        <SearchBar/>
        <div class="options">
            <button @click="signInWithGitHub">Sign in with GitHub</button>
        </div>
    </header>
</template>
<script>
import SearchBar from './SearchBar.vue';
export default {
    components: {
        SearchBar
    },
    methods: {
        signInWithGitHub() {
            // Redirect the user to the backend OAuth route
            window.location.href = "http://localhost:3000/github/auth";
        }
    },
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
        .options {
            position: absolute;
            right: 24px;
        }
    }
</style>