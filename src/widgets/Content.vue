<template>
    <div id="main-content">
        <h2>Home</h2>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Owner</th>
                    <th>Last Modified</th>
                    <th>File Size</th>
                    <th>:</th>
                </tr>
                <FolderListItem v-for="repo in repos" :key="repo.name"
                    :folderName="repo.name"
                    :owner="repo.owner.login"
                    :updatedAt="repo.updated_at"
                    :size="repo.size"
                    folderColour="crimson"
                />
            </tbody>
        </table>
    </div>
</template>

<script>
import FolderListItem from '@/components/FolderListItem.vue';

export default {
    components: {
        FolderListItem
    },
    computed: {
        repos() {
            // return this.$store.state.repos
        }
    },
    async mounted() {
        // this.$store.dispatch('getRepos');
    }    
}
</script>

<style lang="scss">
    #main-content {
        height: 100%;
        text-align: left;
        padding: 16px;
        border-radius: 16px 16px 0 0;
        background-color: #fff;
        font-family: sans-serif;

        h2 {
            margin-bottom: 16px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            tr {
                width: 100%;
                border-bottom: 0.5px solid #33333388;
                th, td {
                    padding: 8px 4px;
                }    
            }
        } 
    }
</style>