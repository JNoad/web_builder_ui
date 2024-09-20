<template>
    <div class="layout-grid">
        <div>1</div>
        <CreateButton/>
        <SideBar/>
        <div>
            <router-view />
        </div>
        <div>5</div>
    </div>
    
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import CreateButton from './components/CreateButton.vue';

export default {
    components: {
        SideBar,
        CreateButton
    }
    
}
</script>

<style lang="scss">
*, ::before, ::after {
    margin: 0; padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
    background-color: #eee;
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

.layout-grid {
    width: 100vw; height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-areas:
        "header header header header header"
        "newb mainContent mainContent mainContent rightBar"
        "leftBar mainContent mainContent mainContent rightBar"
        "leftBar mainContent mainContent mainContent rightBar";
    grid-template-columns: auto 1fr auto auto auto;
    grid-template-rows: auto auto auto 1fr;

    > * {
        border: 1px solid lime;
        // width: 100%; height: 100%;
        overflow: hidden;
        &:nth-child(1) {
            grid-area: header;
        }
        &:nth-child(2) {
            grid-area: newb;
        }
        &:nth-child(3) {
            grid-area: leftBar;
        }
        &:nth-child(4) {
            grid-area: mainContent;
        }
        &:nth-child(5) {
            grid-area: rightBar;
        }
    }
    .hidden {
        display: opacity 0;
        height: 0; overflow: hidden;
        padding: 0;
    } 
}
</style>
