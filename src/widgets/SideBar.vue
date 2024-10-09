<template>
    <div class="side-bar-container">
        <ul>
            <li>
                <router-link to="/">
                    <span class="material-symbols-outlined" :style="`color: #565656;`">
                        home
                    </span>
                    Home
            
                </router-link>
            </li>
            <li>
                <FolderDropDown href="/github">
                    <template #icon>
                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/565656/github.png" alt="github"/>
                    </template>
                    GitHub
                    <template #list>
                        <li>
                            <FolderDropDown v-for="repo in repos" :key="repo.name">
                                {{ repo.name }}
                            </FolderDropDown>
                        </li>
                    </template>
                </FolderDropDown>
            </li>
            <li>
                <FolderDropDown href="/g-drive">
                    <template #icon>
                        <img width="24" height="24" src="https://img.icons8.com/ios/24/google-drive--v3.png" alt="google-drive--v3"/>
                    </template>
                    Google Drive
                    <template #list>
                        
                    </template>
                </FolderDropDown>
            </li>
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
import FolderDropDown from '@/components/FolderDropDown.vue';
export default {
    components: {
        FolderDropDown
    },
    computed: {
        repos() {
            return this.$store.state.repos
        }
    }
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
                color: #222;
                img, span {
                    margin-right: 4px;
                }
            }
        }
    }
</style>