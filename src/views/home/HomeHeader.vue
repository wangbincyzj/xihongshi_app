<template>
    <div id="home_header">
        <!--导航栏-->
        <van-nav-bar
                title="本地资讯"
                @click-right="rightClick"
                right-text="个人中心"
        >
        </van-nav-bar>

        <!--最新通知-->
        <van-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" left-icon="volume-o" />
    </div>

</template>

<script>
    export default {
        name: "Header",
        methods:{
            rightClick() {
                this.$bus.$emit("footerIndexChange", {index:3});
                this.$router.push("/profile");
            }
        },
    }
</script>

<style scoped>

</style>
