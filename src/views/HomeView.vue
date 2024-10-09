<template>
    <div id="home">
        <div class="layout-grid">
        <Header/>
        <CreateButton/>
        <SideBar/>
        <Content/>
        <div>5</div>
    </div>
    </div>
</template>

<script>
import Header from '@/widgets/Header.vue';
import CreateButton from '@/widgets/CreateButton.vue';
import SideBar from '@/widgets/SideBar.vue';
import Content from '@/widgets/Content.vue';

export default {
    components: {
        Header,
        SideBar,
        CreateButton,
        Content
    }
    
}
</script>

<style lang="scss">
    #home {
        width: 100%; height: 100%;
        
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
                // border: 1px solid lime;
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

    }
</style>