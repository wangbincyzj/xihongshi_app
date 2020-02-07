<template>
    <div class="lost_find">

        <div class="header">
            <div class="left" @click="$router.push('/home')">返回首页</div>
            <div class="center">失物招领</div>
            <div class="right"></div>
        </div>

        <div class="circle">
            <van-circle
                    v-model="currentRate"
                    :rate="80"
                    size="200px"
                    layer-color="#ebedf0"
                    text="Coming Soon ..."
                    :speed="30"
            />
        </div>

        <h3>该页面尚未完成!</h3>
    </div>
</template>

<script>
    export default {
        name: "LostFind",
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
        background: rgb(25, 137, 250);
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
        color: rgb(25, 137, 250);
    }

</style>
