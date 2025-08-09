<template>
    <div class="section-header" :style="customStyle">
        <h2>{{ title }}</h2>
        <p v-if="subtitle">{{ subtitle }}</p>
    </div>
</template>

<script>
export default {
    name: 'SectionHeader',
    props: {
        title: { type: String, required: true },
        subtitle: { type: String, default: '' },
        customStyle: { type: Object, default: () => ({}) }
    }
}
</script>

<style scoped>
.section-header h2 {
    font-size: var(--header-font-size, 2rem);
    margin: 0;
}

.section-header p {
    color: var(--header-subtitle-color, #666);
    font-size: var(--header-subtitle-size, 1rem);
    margin: 0.5rem 0 0 0;
}
</style>
