<template>
    <div class="feature-grid" :style="customStyle">
        <div
            class="feature-grid__item"
            v-for="(item, index) in features"
            :key="index"
        >
            <div class="feature-grid__icon">
                <slot :name="`icon-${index}`" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureGrid',
    props: {
        features: {
            type: Array,
            required: true
        },
        customStyle: { type: Object, default: () => ({}) }
    }
}
</script>

<style scoped>
.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--feature-grid-gap, 2rem);
}

.feature-grid__item {
    text-align: center;
    padding: var(--feature-item-padding, 1rem);
    border: var(--feature-item-border, 1px solid #eee);
    border-radius: var(--feature-item-radius, 8px);
}

.feature-grid__icon {
    font-size: var(--feature-icon-size, 2rem);
    margin-bottom: 0.5rem;
}
</style>