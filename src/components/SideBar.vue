<template>
    <div class="side-bar-container">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li>
                <FolderDropDown href="/projects">
                    myProjects
                    <template #list>
                        <li>
                            <FolderDropDown>
                                hi
                                <template #list>
                                    <li>Item</li>
                                </template>
                            </FolderDropDown>
                        </li>
                        <li>Bye</li>
                    </template>
                </FolderDropDown>
            </li>
            <li><router-link to="github">GitHub</router-link></li>
            <li><router-link to="hosted">Hosted</router-link></li>
        </ul>
        <ul>
            <li>
                <router-link>Recent</router-link>
            </li>
            <li>
                <router-link>Starred</router-link>
            </li>
            <li>
                <router-link>Trash</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import FolderDropDown from './FolderDropDown.vue';
export default {
    components: {
        FolderDropDown
    },
}
</script>
<style lang="scss">
    .side-bar-container {
        width: 300px; height: 100%;
        border: 2px solid black !important;
        > ul {
            margin: 16px auto;
            li {
                width: 100%; 
                margin: 4px; padding: 4px 8px;
                border-radius: 16px;
                background-color: #eee;
                text-align: left;
                list-style: none;
            }
            a {
                text-decoration: none;
            }
        }
    }
</style>