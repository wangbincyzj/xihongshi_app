<template>
    <div class="wrapper" :style="style" >
        <img :src="sectionInfo.body.img_url" alt="" >
    </div>
</template>

<script>
    export default {
        name: "ImageW1080",
        props: ["view", "index"],
        mounted() {
            // console.log(this.index)
        },
        computed: {
            sectionInfo() {
                let obj = this.view.data.goods_tpl_datas;
                return obj[Object.keys(obj)[0]].sections[this.index];

            },
            style() {
                let paddingLeft = this.sectionInfo.body.margin_left ? this.sectionInfo.body.margin_left / 100 +"rem" : null;
                let paddingRight = this.sectionInfo.body.margin_right ? this.sectionInfo.body.margin_right / 100 +"rem" : null;
                return {paddingLeft, paddingRight}
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper{
        /*width: 7.2rem;*/
        /*padding: 0 .32rem;*/
        img{
            width: 100%;
            /*border-radius: .16rem;*/
        }
    }
</style>
