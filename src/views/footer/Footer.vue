<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="shop-o" to="/category">商城</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/cart" :info="$store.state.cart.length">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" to="/profile">个人中心</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import storage from "good-storage"

    export default {
        name: "Footer",
        data() {
            return {
                active: 0
            }
        },
        mounted() {
            this.$bus.$on("footerIndexChange", function ({index}) {
                this.active = index;
            }.bind(this));

        }
    }
</script>

<style scoped>

</style>
