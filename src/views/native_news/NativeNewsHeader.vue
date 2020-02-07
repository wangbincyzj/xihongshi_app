<template>
    <van-nav-bar
            title="本市热点"
            left-text="返回"
            right-text="首页"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
    />
</template>

<script>
    export default {
        name: "NativeNewsHeader",
        methods:{
            onClickLeft() {
                this.$router.back()
            },
            onClickRight() {
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>

</style>
