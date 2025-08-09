<template>
    <nav class="navbar" :style="customStyle">
        <div class="navbar__logo">
            <slot name="logo" />
        </div>
        <div class="navbar__links">
            <slot name="links" />
        </div>
        <div class="navbar__actions">
            <slot name="actions" />
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        customStyle: { type: Object, default: () => ({}) }
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--navbar-padding, 1rem 2rem);
    background: var(--navbar-bg, #fff);
    border-bottom: var(--navbar-border, 1px solid #ddd);
}

.navbar__logo {
    flex: 1;
}

.navbar__links {
    flex: 2;
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.navbar__actions {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}
</style>
