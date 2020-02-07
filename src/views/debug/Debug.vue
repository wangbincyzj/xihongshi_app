<template>
    <div class="debug clear">
        <h3><van-icon name="gem-o" /> <span>感谢测试</span></h3>
        <transition name="fade">
            <div class="items" v-if="show">
                <div class="item">
                    <h3>bug提交</h3>
                    <ul>
                        <li>QQ:309567157</li>
                        <li>微信:15755153273</li>
                    </ul>
                </div>
                <div class="item">
                    <h3>项目地址</h3>
                    <ul>
                        <li>移动端  xxx</li>
                        <li>管理端  xxx</li>
                        <li>后端  xxx</li>
                    </ul>
                </div>
                <div class="item">
                    <h3>技术栈</h3>
                    <ul>
                        <li>移动端  Vue+VantUI</li>
                        <li>管理端  Vue+ElementUI</li>
                        <li>后端    Django+MySQL</li>
                        <li>服务器    腾讯云</li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Debug",
        data() {
            return{
                show: false
            }
        },
        mounted() {
            this.show = true
        }
    }
</script>

<style scoped lang="scss">
    .debug{
        width: 100%;
        height: 100vh;
        background: url("~@/assets/image/debug/bgc.png");
        font-size: .14rem;
        color: white;
        >h3{
            position: relative;
            margin-top: .3rem;
            font-size: .20rem;
            text-align: center;
            line-height: .3rem;
            color: gold;
            span{
                display: inline-block;
                transform: translateY(-.03rem);
            }
        }
        div.item{
            border-radius: .08rem;
            background: rgba(255, 255, 255, 0.21);
            margin: .3rem .5rem 0;
            padding: .1rem;
            h3{
                font-size: .16rem;
                line-height: .3rem;
                color: var(--el-warning);
            }
            ul{
                margin-left: .1rem;
                li{
                    line-height: .2rem;
                }
            }
        }
    }
    .fade-enter-active, .fade-leave-active{
        transition: all 0.8s linear;
        opacity: 1;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
        transform: translateY(10vh);
    }

</style>
