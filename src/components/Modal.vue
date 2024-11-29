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
                    Select frontend/UI framework:
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

                <button type="submit">Submit</button>
            </form>
            
        </div>
    </div>
</template>
<script>
export default {
    props: ['title'],
    data() {
        return {
            open: true,
            projectTitle: ''
        }
    },
    methods: {
        toggleModal() {
            this.open = !this.open
        },
        submitProject(e) {
            e.preventDefault();
            console.log('Attempting to submit...');
            
            this.$store.dispatch('createProject', {title: this.projectTitle})
        }
    }
}
</script>
<style lang="scss">
    #modal {
        @include positioning(fixed);
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