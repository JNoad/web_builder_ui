<template>
    <tr @click="openRepo()">
        <td>
            <div>
                <span class="material-symbols-outlined folder-icon" :style="`color: ${folderColour ? folderColour : '#565656'};`">
                    folder
                </span>
                <span>{{ folderName }}</span>
            </div>
        </td>
        <td>{{ owner }}</td>
        <td>{{ [new Date(updatedAt).toLocaleString('default', {day: 'numeric', month: 'short', year: 'numeric'})].join(' ') }}</td>
        <td>{{ size > 1000 ? (repo.size / 1024).toFixed(2) + "mb" : size + "kb" }}</td>
        <td>:</td>
    </tr>
</template>
<script>
export default {
    props: ['folderName', 'owner', 'updatedAt', 'size', 'folderColour'],
    methods: {
        openRepo() {
            this.$store.dispatch('fetchRepoContents', {owner: this.owner, repo: this.folderName})
        }
    }
}
</script>
<style lang="scss" scoped>
    tr {

        &:hover {
            background-color: #eee;
        }
        td {
            cursor: default;
            div {
                @include flex-row();
                span {
                    margin-right: 8px;
                }
            }
        }
    }
</style>