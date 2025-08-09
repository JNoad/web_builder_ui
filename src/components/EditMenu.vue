<template>
    <div id="editor-menu" ref="editorMenu">
        <div class="editor-menu-icon" ref="editorMenuIcon" @click="toggleMenu" @mousedown="activateDrag"></div>
        <div class="menu-list hidden" ref="menuList">
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
        toggleMenu() {
            if (!this.hasMoved) {
                this.$refs.menuList.classList.toggle('hidden');
            }
        },
        activateDrag(e) {
            e.preventDefault();
            this.isDragging = true;
            this.dragFrom = { x: e.clientX, y: e.clientY };
            this.hasMoved = false;
            window.addEventListener('mousemove', this.drag);
            window.addEventListener('mouseup', this.deactivateDrag);
        },
        deactivateDrag() {
            this.isDragging = false;
            window.removeEventListener('mousemove', this.drag);
            window.addEventListener('mouseup', this.deactivateDrag);
        },
        drag(e) {
            if (this.isDragging) {
                const dx = Math.abs(e.clientX - this.dragFrom.x);
                const dy = Math.abs(e.clientY - this.dragFrom.y);

                if (dx > 5 || dy > 5) {
                    this.hasMoved = true;
                }
                const {width, height} = this.$refs.editorMenuIcon.getBoundingClientRect();
                
                this.$refs.editorMenu.style.left =`${e.clientX - width/2 > 0 ? e.clientX - width/2 : 0}px`;
                this.$refs.editorMenu.style.top = `${e.clientY - height/2 > 0 ? e.clientY - height/2 : 0}px`;
            }
        }
    },
}
</script>
<style lang="scss">
    #editor-menu {
        $size: 50px;
        @include positioning(absolute);
        @include sizing($w: $size, $h: $size);
        .editor-menu-icon {
            @include positioning(absolute, 0, 0, 0, 0);
            @include sizing($w: $size, $h: $size);
            z-index: 2;
            background-color: white;
            background-image: url(https://img.icons8.com/ios-glyphs/60/menu--v3.png);
            background-size: cover;
            border-radius: 4px;
            border: 1px solid black;
        }
        .menu-list {
            @include positioning(absolute, 50%, 5%);
            @include sizing($w: 250px, $h: 400px, $p: (0.5*$size) 0 0 5px);
            z-index: 1;
            background-color: white;
            box-shadow: 0 0 4px black;
            border-radius: 4px;
            // display: none;
        }
        .hidden {
            display: none;
        }
    }
</style>