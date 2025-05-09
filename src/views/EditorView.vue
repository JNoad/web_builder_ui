<template>
    <div class="editor-view">
        <EditMenu/>
        <EditorWindow/>
    </div>
</template>
<script>
import EditMenu from '@/components/EditMenu.vue';
import EditorWindow from '@/widgets/EditorWindow.vue';
export default {
    components: {
        EditMenu,
        EditorWindow
    }
}
</script>
<style lang="scss">
    .editor-view {
        position: relative;
        overflow: hidden;
    }
</style>