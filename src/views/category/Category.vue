<template>
    <div id="category">

        <!--<Header/>-->
        <div>
            <van-nav-bar
                    title="商城"
                    left-text="首页"
                    left-arrow
                    @click-left="$router.push('/')"
            />
        </div>

        <Container :category-items="categoryItems" v-if="categoryItems" />

    </div>
</template>

<script>
    /* 组件 */
    import Container from "@/views/category/components/Container";
    /* 网络请求 */
    import {getCategory} from "@/network/xiaomi_mall_api";

    export default {
        name: "Category",
        components: {Container},
        data() {
            return {
                categoryItems: null
            }
        },
        created() {
            getCategory().then(value => {
                this.categoryItems = value.data;
            });
        },
        mounted() {
            if (!this.$store.state.categoryWarning) {
                this.$store.state.categoryWarning = true;
                this.$dialog.alert({
                    title: "免责声明",
                    message: "小米商城api调用仅供学习参考,不提供实际服务"
                });

            }
        },
        beforeRouteEnter(to, form ,next){
            next(vm=>{
                vm.$bus.$emit("footerIndexChange", {index:1});
            })
        }
    }
</script>

<style scoped lang="scss">

</style>
