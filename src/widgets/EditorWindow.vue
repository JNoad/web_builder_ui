<template>
    <div id="editor-window" @mouseup="loadComponent( { compType: 'component', compName: 'DropDown', content: '<button>hi</button>', props: {title: 'hello'} } )">
        <div id="app">
            <component :is="comp.name" v-for="comp in components" v-bind="comp.props" v-html="comp.content"/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            components: [],
        }
    },
    methods: {
        async loadComponent(comp) {
            const module = await import(`@/${comp.compType}s/${comp.compName}.vue`);
            this.components.push({name: module.default, props: comp.props, content: comp.content});
        }
    },
    
}
</script>
<style lang="scss">
    #editor-window {
        @include sizing($width: 100vw, $height: 100vh);
        border: 4px solid red;
        overflow: hidden;
    }
</style>