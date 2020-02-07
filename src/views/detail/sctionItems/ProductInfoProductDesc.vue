<template>
    <div class="product_info_product_desc">
        <div class="wrapper">
            <div v-html="sectionInfo" class="content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductInfoProductDesc",
        props: ["view"],
        mounted() {
            // console.log(this.view)
        },
        computed:{
            sectionInfo() {
                return this.view.data.goods_info[this.$store.state.detailActiveIndex].product_desc
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper{
        text-align: left;
        padding: 0 .16rem;
        color: rgba(0,0,0,.54);
        .content{
            line-height: 1.5em;
            word-break: break-all;
            font-size: .15rem;
        }
    }
</style>
