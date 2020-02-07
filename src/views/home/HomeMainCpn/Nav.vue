<template>
    <van-grid :column-num="4" class="nav">
        <van-grid-item
                class="nav_item"
                v-for="item in items"
                :key="item.name"
        >
            <router-link :to="item.path" class="nav_item_link">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="item.xlink"></use>
                </svg>
                <p>{{item.name}}</p>
            </router-link>
        </van-grid-item>
    </van-grid>

</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {
                navItems: ["本地资讯", "东方新闻", "人才市场", "本市院线",
                    "折扣商城", "失物招领", "市长邮箱", "程序测试"],
                items:[
                    {name: "本地资讯", path: "/native_news", xlink: "#icon-xinwen"},
                    {name: "东方新闻", path: "/china_news", xlink: "#icon-remen"},
                    {name: "人才市场", path: "/job", xlink: "#icon-woderencai"},
                    {name: "本市院线", path: "/movies", xlink: "#icon-dianying"},
                    {name: "折扣商城", path: "/category", xlink: "#icon-shangcheng"},
                    {name: "失物招领", path: "/lost_find", xlink: "#icon-homexinwenxiansuo"},
                    {name: "市长邮箱", path: "/mayor_email", xlink: "#icon-youxiang"},
                    {name: "程序测试", path: "/debug", xlink: "#icon-bug"},

                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .nav{
        font-size: .12rem;
        .nav_item{
            .nav_item_link{
                display: flex;
                flex-flow: column;
                align-items: center;
            }
            svg{
                font-size: .24rem;
                margin-bottom: .1rem;
            }
            p{
                color: var(--el-info);
            }
        }
    }
</style>
