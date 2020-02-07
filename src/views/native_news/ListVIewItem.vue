<template>
    <div class="item">
        <div class="content">
            <div class="title">
                <div class="item_title ">{{item.title}}</div>
                <div class="author">
                    <div>编辑  {{item.pub_user}}</div>
                    <div>{{item.source}} {{item.create_time|djangoTimeFormat}}</div>
                </div>
            </div>
            <div class="img" >
                <img :src="item.picture" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListVIewItem",
        props:["item"]
    }
</script>

<style scoped lang="scss">
    .item{
        div.content{
            display: flex;
            justify-content: space-between;
            div.img{
                img{
                    width: 1rem;
                    height: 1rem;
                }
            }
            div.title{
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                font-size: .16rem;
                div.author{
                    font-size: .12rem;
                    color: var(--el-info);
                }
                div.item_title{
                    font-weight: 600;
                }
            }
        }
    }
</style>
