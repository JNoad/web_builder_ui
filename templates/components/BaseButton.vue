<template>
        <button
            :class="[
                'base-button',
                `base-button--${color}`,
                `base-button--${size}`,
                { 'base-button--rounded': rounded }
            ]"
            :style="customStyle"
        >
            <slot />
        </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        color: { type: String, default: 'primary' },
        size: { type: String, default: 'md' },
        rounded: { type: Boolean, default: false },
        customStyle: { type: Object, default: () => ({}) }
    }
}
</script>

<style scoped>
.base-button {
    border: none;
    cursor: pointer;
    padding: var(--button-padding, 0.5rem 1rem);
    font-size: var(--button-font-size, 1rem);
}

.base-button--primary {
    background: var(--primary-color, #007bff);
    color: var(--primary-text, #fff);
}

.base-button--secondary {
    background: var(--secondary-color, #6c757d);
    color: var(--secondary-text, #fff);
}

.base-button--md {
    padding: 0.5rem 1rem;
}

.base-button--lg {
    padding: 0.75rem 1.5rem;
}

.base-button--rounded {
    border-radius: var(--button-radius, 9999px);
}
</style>