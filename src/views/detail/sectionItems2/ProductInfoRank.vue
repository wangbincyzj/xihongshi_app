<template>

</template>

<script>
    export default {
        name: "ProductInfoRank",
        props: ["view", "index"],
        mounted() {
            // console.log(this.sectionInfo)
        },
        computed: {
            sectionInfo() {
                return this.view.data.goods_share_datas.comments.list
            },
        },
    }
</script>

<style scoped>

</style>
