<template>
    <div class="accordion" :style="customStyle">
        <div
            class="accordion__item"
            v-for="(item, index) in items"
            :key="index"
        >
            <div class="accordion__header" @click="toggle(index)">
                {{ item.title }}
            </div>
            <div
                class="accordion__content"
                v-show="active === index"
            >
                <slot :content="item.content">{{ item.content }}</slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Accordion',
    props: {
        items: {
            type: Array,
            required: true
        },
        customStyle: { type: Object, default: () => ({}) }
    },
    data() {
        return {
            active: null
        }
    },
    methods: {
        toggle(index) {
            this.active = this.active === index ? null : index
        }
    }
}
</script>

<style scoped>
.accordion__header {
    padding: var(--accordion-header-padding, 1rem);
    background: var(--accordion-header-bg, #f0f0f0);
    cursor: pointer;
}

.accordion__content {
    padding: var(--accordion-content-padding, 1rem);
    background: var(--accordion-content-bg, #fff);
    border: var(--accordion-content-border, 1px solid #ddd);
}
</style>