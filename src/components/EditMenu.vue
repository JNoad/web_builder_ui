<template>
    <div class="editor-panel-icon" ref="editorPanelIcon" @click="togglePanel" @mousedown="activateDrag"></div>
    <div id="editor-panel" ref="editorPanel">
        <div class="editor-menu hidden" ref="menuList">
            <DropDown title="Settings">
                Hi there
            </DropDown>
            <DropDown title="Components">
                Hi there
            </DropDown>
            <DropDown title="Layout">
                Hi there
            </DropDown>
        </div>

        <div class="code-preview">
            <pre>
                <code>
                    My code
                </code>
            </pre>
        </div>
    </div>
</template>
<script>
import DropDown from '@/components/DropDown.vue';
export default {
    components: {
        DropDown
    },
    data() {
        return {
            isDragging: false,
            dragFrom: {
                x: 0, 
                y: 0,
            },
            hasMoved: false,
        }
    },
    methods: {
        togglePanel() {
            if (!this.hasMoved) {
                this.$refs.menuList.classList.toggle('hidden');
            }
        },
        // activateDrag(e) {
        //     e.preventDefault();
        //     this.isDragging = true;
        //     this.dragFrom = { x: e.clientX, y: e.clientY };
        //     this.hasMoved = false;
        //     window.addEventListener('mousemove', this.drag);
        //     window.addEventListener('mouseup', this.deactivateDrag);
        // },
        // deactivateDrag() {
        //     this.isDragging = false;
        //     window.removeEventListener('mousemove', this.drag);
        //     window.addEventListener('mouseup', this.deactivateDrag);
        // },
        // drag(e) {
        //     if (this.isDragging) {
        //         const dx = Math.abs(e.clientX - this.dragFrom.x);
        //         const dy = Math.abs(e.clientY - this.dragFrom.y);

        //         if (dx > 5 || dy > 5) {
        //             this.hasMoved = true;
        //         }
        //         const {width, height} = this.$refs.editorPanelIcon.getBoundingClientRect();
                
        //         this.$refs.editorPanel.style.left =`${e.clientX - width/2 > 0 ? e.clientX - width/2 : 0}px`;
        //         this.$refs.editorPanel.style.top = `${e.clientY - height/2 > 0 ? e.clientY - height/2 : 0}px`;
        //     }
        // }
    },
}
</script>
<style lang="scss" scoped>
    $icon-size: 40px;
    .editor-panel-icon {
        @include positioning(fixed, 0, 0);
        @include sizing($w: $icon-size, $h: $icon-size);
        z-index: 2;
        // background-color: white;
        background-image: url(https://img.icons8.com/ios-glyphs/60/menu--v3.png);
        background-size: cover;
        border-radius: 4px;
        border: 1px solid black;
    }
    #editor-panel {
        @include positioning(relative);
        // @include sizing($w: $size, $h: $size);
        .menu-list {
            @include positioning(relative);
            @include sizing($w: 250px, $h: 100%, $p: ($icon-size * 1.1) 0 0 5px, $m: 0);
            z-index: 1;
            background-color: white;
            box-shadow: 0 0 4px black;
            border-radius: 4px;
            // display: none;
        }
        .hidden {
            display: none;
        }
        &:has(.hidden) {
            width: 0;
        }
    }
</style>