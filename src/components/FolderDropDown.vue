<template>
    <div class="folder">
        <div class="folder-head">
            <span @click="dropDown()" class="clickable dropdown-icon">
                <input type="checkbox">
            </span>
            <span class="material-symbols-outlined folder-icon">
                folder
            </span>
            <router-link to="/my-projects">
                <slot>
                        
                </slot>
            </router-link>
        </div>
        <div ref="dropdown" class="dropdown-closed dropdown my-projects-dropdown">
            <ul>
                <slot name="list">
                    
                </slot>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        dropDown(selector) {
            const el = this.$refs.dropdown
            el.classList.toggle('dropdown-closed');
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
            .dropdown-icon {
                display: inline-block;
                background-image: url(https://img.icons8.com/material-sharp/16/sort-down.png);
                background-repeat: no-repeat;
                transform: rotate(-90deg); transition: all 0.2s ease;
                $size: 16px;
                width: $size; height: $size +  6;
                &:has(input:checked){
                    transform: rotate(0deg);
                }
                input {
                    opacity: 0;
                }
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