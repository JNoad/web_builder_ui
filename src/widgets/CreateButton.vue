<template>
    <div class="create-btn">
        <button @click="toggleMenu">
            <span class="material-symbols-outlined">
                add
            </span>
            Create
        </button>
        
        <div class="create-menu" :class="{hidden: !menuOpen}">
            <Modal title="New Folder"/>
            <Modal title="New Project"/>
            <Modal title="New File"/>
        </div>


    </div>
</template>
<script>
import Modal from '@/components/Modal.vue';
export default {
    components: {
        Modal
    },
    data() {
        return {
            menuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        close (e) {
            if (!this.$el.contains(e.target) && this.menuOpen) {
                this.toggleMenu();
            }
        },
        newFolder() {

        },
        newProject() {

        },
        newFile() {

        },
    },
    mounted () {
        document.addEventListener('click', this.close)
    },
}
</script>
<style lang="scss">
.create-btn {
    padding: 16px;
    position: relative;
    overflow: visible !important;
    button {
        padding: 16px;
        display: flex; align-items: center;
        border: none; border-radius: 16px;
        font-size: 16px;
        box-shadow: 0 0 6px -2px rgba(0, 0, 0, 0.5), 0 4px 2px -2px rgba(0, 0, 0, 0.5);
        background-color: #fff;
        cursor: pointer;
        span {
            margin-right: 4px;
        }
        &:active {
            box-shadow: inset 0 0 6px -2px rgba(0, 0, 0, 0.5), inset 0 4px 2px -2px rgba(0, 0, 0, 0.5);
        }
        &:hover {
            background-color: color.mix(#fff, #ccf, 50%);
        }
    }
    .create-menu {
        width: 350px; height: 250px;
        background-color: white;
        box-shadow: 0 0 4px -2px rgba(0, 0, 0, 0.5);
        @include positioning(absolute);
        @include flex-column($align: start);
        z-index: 2;
        transition: all 0.25s ease-in-out; 
        border-radius: 16px;
        > * {
            padding: 4px 12px;
            cursor: pointer;
        }
    }
}
</style>