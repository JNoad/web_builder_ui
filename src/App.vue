<template>
        <div class="layout-grid">
        <div>1</div>
        <div>2</div>
        <!-- <div>3</div> -->
        <SideBar/>
        <div>
            <router-view />
        </div>
        <div>5</div>
    </div>
    
</template>

<script>
import SideBar from '@/components/SideBar.vue';

export default {
    components: {
        SideBar
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

    > div {
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
}
</style>
