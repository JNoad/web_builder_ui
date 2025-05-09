<template>
    <div class="drop-down">
        <h3 @click="toggleDropdown" onselect="() => {return false}">{{ title }}</h3>

        <div class="drop-down-content" ref="dropDownContent">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        "title"
    ],
    methods: {
        toggleDropdown() {
            this.$refs.dropDownContent.classList.toggle('hidden')
        }
    }
}
</script>
<style lang="scss">
    .drop-down {
        h3 {
            user-select: none;
        }
        .hidden {
            height: 0px;
            display: none;
        }
    }
</style>