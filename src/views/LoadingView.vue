<template lang="">
    <div id="loading-backdrop">
        <div class="message">
            <h1>Loading...</h1>
            <p>Creating new project...</p>
            <div class="spinner">
                <div class="left"></div>
                <div class="right"></div>
                
                <div class="remove-circle"></div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    async mounted() {

        console.clear()
        console.log(this.$route.query.projectTitle);

        let url = (await axios.post("/create", {projectName: this.$route.query.projectTitle})).data;
        console.log("URL:", url)
        
        this.$router.push({
            name: 'editor',
            query: { url }
        })
            
    },
}
</script>
<style lang="scss">
    #loading-backdrop {
        $backdrop-color: #cfd;
        background-color: $backdrop-color;
        @include sizing($w: 100vw, $h: 100vh);
        @include flex-column($justify: center, $align: center);
        
        .message {
            text-shadow: 0 0 1.5px #22222280;
            @include flex-column($justify: center, $align: center);
            h1 {
                text-align: center;
                color: #fafafa;
                
            }
            p {
                text-align: center;
                color: #999;
            }

            .spinner {
                $color: rgb(255, 30, 75);
                @include sizing($w: 50px, $h:50px, $m: 16px 0, $p: 0);
                @include flex-row();
                position: relative;
                border-radius: 100%;
                overflow: hidden;
                .left,.right {
                    @include sizing($w: 100%, $h:100%);
                }
                .left {
                    background-image: linear-gradient($color, rgba($color, 0.8), rgba($color, 0.33), rgba($color, 0));
                }
                .right {
                    background-image: linear-gradient(rgba($color, 0), rgba($color, 0.33), rgba($color, 0.8), $color);
                }
                .remove-circle {
                    background-color: $backdrop-color;
                    border-radius: 100%;
                    @include sizing ($w: 44px, $h: 44px);
                    @include positioning($position: absolute, $top: 3px, $left: 3px)
                }
                animation: rotate 2s linear infinite;

                @keyframes rotate {
                    100% {transform: rotate(360deg);}
                }
            }
        }
    }
</style>