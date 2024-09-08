<template>
    <div class="home-grid">
        <div>1</div>
        <div>2</div>
        <!-- <div>3</div> -->
        <SideBar/>
        <div>4</div>
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
    .home-grid {
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

        div {
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