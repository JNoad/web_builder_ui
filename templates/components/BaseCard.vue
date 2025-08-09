<template>
    <div class="base-card" :style="customStyle">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'BaseCard',
    props: {
        customStyle: { type: Object, default: () => ({}) }
    }
}
</script>

<style scoped>
.base-card {
    background: var(--card-bg, #fff);
    border: 1px solid var(--card-border, #ddd);
    border-radius: var(--card-radius, 8px);
    padding: var(--card-padding, 1rem);
    box-shadow: var(--card-shadow, 0 2px 4px rgba(0,0,0,0.1));
}
</style>
