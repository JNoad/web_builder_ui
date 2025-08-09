<template>
    <section
        class="hero-banner"
        :style="{
            backgroundImage: `url(${background})`,
            ...customStyle
        }"
    >
        <div class="hero-content">
            <slot />
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroBanner',
    props: {
        background: { type: String, required: true },
        customStyle: { type: Object, default: () => ({}) }
    }
}
</script>

<style scoped>
.hero-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: var(--hero-height, 400px);
    background-size: cover;
    background-position: center;
    color: var(--hero-text-color, #fff);
    text-align: center;
    padding: var(--hero-padding, 2rem);
}

.hero-content {
    background: var(--hero-overlay, rgba(0, 0, 0, 0.4));
    padding: 2rem;
    border-radius: var(--hero-content-radius, 8px);
}
</style>
