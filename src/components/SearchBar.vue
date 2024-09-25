<template>
    <div class="search-bar">
        <div>Q</div>
        <input type="search" placeholder="Search">
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .search-bar {
        width: 700px;
        background-color: #eeeef2;
        border-radius: 100px;
        @include flex-row;
        overflow: hidden;
        padding: 14px 16px;
        &:has(input[type=search]:focus) {
            background-color: #fff;
            box-shadow: 0 0 4px -1px #333;
        }
        div {
            padding: 0 16px;
        }
        input[type=search] {
            width: 80%;
            background-color: transparent;
            outline: none;
            border: none;
            &::placeholder {
                color: #334;
                font-size: medium;
            }
        }
    }
</style>