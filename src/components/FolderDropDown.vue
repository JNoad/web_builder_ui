<template>
    <div class="folder">
        <div class="folder-head">
            <span class="clickable dropdown-icon">
                <input type="checkbox" v-model="folderOpen">
            </span>
            <router-link :to="href">
                <slot name="icon">
                    <span v-if="folderOpen" class="material-symbols-outlined" :style="`color: ${colour ? colour : '#565656'};`">
                        folder_open
                    </span>
                    <span v-else class="material-symbols-outlined folder-icon" :style="`color: ${colour ? colour : '#565656'};`">
                        folder
                    </span>
                </slot>
                <slot>
                        
                </slot>
            </router-link>
        </div>
        <div ref="dropdown" class="dropdown my-projects-dropdown" :class="{'dropdown-closed': !folderOpen}">
            <ul>
                <slot name="list">
                    
                </slot>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ['colour', 'href'],
    data() {
        return {
            folderOpen: false
        }
    },
}
</script>
<style lang="scss">
    .clickable {
        cursor: pointer;
    }
    .folder {
        .folder-head {
            display: flex; align-items: center;
            position: relative; left: -16px;
            .dropdown-icon {
                display: inline-block;
                background-image: url(https://img.icons8.com/material-sharp/16/sort-down.png);
                background-repeat: no-repeat;
                transform: rotate(-90deg); transition: all 0.2s ease;
                $size: 16px;
                width: $size; height: $size +  6;
                scale: 75%;
                &:has(input:checked){
                    transform: rotate(0deg);
                }
                input {
                    opacity: 0;
                }
            }
            a {
                display: flex;
                align-items: center;
                color: #222;
                text-decoration: none;
            }
            .folder-icon {
                $size: 24px;
                width: $size; height: $size;

            }
        }
        .dropdown {
            transition: all 0.3s ease;
            transform-origin: top;
            max-height: 800px;
            opacity: 1;
            ul li {
                margin: 0 8px; padding: 0 8px;
            }
        }
        .dropdown-closed {
            max-height: 0px;
            opacity: 0;
            overflow: hidden;
        }
    }
</style>