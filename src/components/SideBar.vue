<template>
    <div class="side-bar-container">
        <ul>
            <li>
                <router-link to="/">
                    <span class="material-symbols-outlined" :style="`color: #565656;`">
                        home
                    </span>
                    Home
            
                </router-link></li>
            <li>
                <FolderDropDown href="/projects">
                    My Projects
                    <template #list>
                        <li>
                            <FolderDropDown colour="crimson">
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
            <li><router-link to="github">
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/565656/github.png" alt="github"/>
                GitHub
            </router-link></li>
            <li><router-link to="hosted">
                <span class="material-symbols-outlined" :style="`color: #565656;`">
                    smb_share
                </span>
                Hosted
            </router-link></li>
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
        width: 250px; height: 100%;
        > ul {
            margin: 16px auto;
            padding: 0 16px 0 4px;
            li {
                width: 100%;
                margin: 4px; padding: 4px 24px;
                border-radius: 16px;
                // background-color: #eee;
                text-align: left;
                list-style: none;
            }
            a {
                text-decoration: none;
                display: flex;
                align-items: center;
                img, span {
                    margin-right: 4px;
                }
            }
        }
    }
</style>