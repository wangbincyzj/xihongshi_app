<template>
    <div class="lost_find">

        <div class="header">
            <div class="left" @click="$router.push('/home')">返回首页</div>
            <div class="center">市长邮箱</div>
            <div class="right"></div>
        </div>

        <div class="circle">
            <van-circle
                    v-model="currentRate"
                    :rate="30"
                    size="200px"
                    layer-color="#ebedf0"
                    text="Coming Soon ..."
                    color="#ff1c7a"
                    :speed="10"
            />
        </div>

        <h3>该页面尚未完成!</h3>
    </div>
</template>

<script>
    export default {
        name: "Mail",
        data() {
            return {
                currentRate: 0

            }
        }
    }
</script>

<style scoped lang="scss">

    div.header {
        color: white;
        font-size: .18rem;
        line-height: .5rem;
        text-align: center;
        background: #ff1c7a;
        width: 100%;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        .left, .right {
            width: 20%;
            font-size: .11rem;
        }

        .center {
            width: 60%;
        }
    }

    .circle{
        margin-top: .8rem;
        text-align: center;
    }

    h3{
        font-size: .3rem;
        margin-top: .2rem;
        text-align: center;
        color: #ff1c7a;
    }

</style>
