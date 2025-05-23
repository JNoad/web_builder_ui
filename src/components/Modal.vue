<template>
    <div @click="toggleModal">{{ title }}</div>
    <div id="modal" v-if="open" @click="toggleModal">
        <div class="modal-interior" @click.stop>
            <h2>{{ title }}</h2>
            <hr>

            <form @submit="submitProject">
                <input type="text" v-model="projectTitle" placeholder="ProjectName">
                <div>
                    Select frontend/UI framework:
                    <br>
                    <label>
                        <input type="radio" name="ui" value="">
                        None
                    </label>
                    <br>
                    <label>
                        <input type="radio" name="ui" value="vue">
                        Vue JS
                    </label>
                </div>

                <div>
                    Select backend/API framework:
                    <br>
                    <label>
                        <input type="radio" name="api" value="">
                        None
                    </label>
                    <br>
                    <label>
                        <input type="radio" name="api" value="nodejs">
                        Node JS
                    </label>
                </div>

                <h3>{{ msg }}</h3>

                <button type="submit">Submit</button>
            </form>
            
            <Terminal />
        </div>
    </div>
</template>
<script>
import Terminal from './Terminal.vue';
export default {
    props: ['title'],
    components: {
        Terminal
    },
    data() {
        return {
            open: false,
            projectTitle: ''
        }
    },
    methods: {
        toggleModal() {
            this.open = !this.open
        },
        submitProject(e) {
            e.preventDefault();
            
            // this.$store.dispatch('createProject', {title: this.projectTitle})
            this.$store.dispatch('terminalCommand', this.projectTitle)
        }
    },
    computed: {
        msg() {
            // return this.$store.state.msg
        }
    }
}
</script>
<style lang="scss">
    #modal {
        @include positioning(fixed, 0, 0);
        width: 100%; height: 100%;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.5);

        .modal-interior {
            width: 650px; height: 500px;
            background-color: #fff;
            border-radius: 16px;
            @include positioning(absolute, 0, 0, 0, 0);
            margin: auto; padding: 16px;
            box-shadow: 0 0 12px -4px black;
        }
    }
</style>