<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
            <img src="@/assets/image/home/s1.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="@/assets/image/home/s2.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="@/assets/image/home/s3.jpg" alt="">
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    export default {
        name: "Swiper"
    }
</script>

<style scoped lang="scss">
    img{
        width: 100%;
    }
</style>
