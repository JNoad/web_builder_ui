<template>
    <div class="testimonial-slider" :style="customStyle">
        <div class="testimonial" v-for="(item, index) in testimonials" :key="index" v-show="current === index">
            <p class="testimonial__quote">{{ item.quote }}</p>
            <p class="testimonial__author">— {{ item.author }}</p>
        </div>
        <div class="testimonial-slider__controls">
            <button @click="prev">Prev</button>
            <button @click="next">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestimonialSlider',
    props: {
        testimonials: {
            type: Array,
            required: true
        },
        customStyle: { type: Object, default: () => ({}) }
    },
    data() {
        return {
            current: 0
        }
    },
    methods: {
        next() {
            this.current = (this.current + 1) % this.testimonials.length
        },
        prev() {
            this.current = (this.current - 1 + this.testimonials.length) % this.testimonials.length
        }
    }
}
</script>

<style scoped>
.testimonial-slider {
    position: relative;
    text-align: center;
}

.testimonial {
    padding: var(--testimonial-padding, 1rem);
}

.testimonial__quote {
    font-size: var(--testimonial-quote-size, 1.25rem);
    font-style: italic;
}

.testimonial__author {
    margin-top: 0.5rem;
    font-weight: bold;
}

.testimonial-slider__controls {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
}
</style>
