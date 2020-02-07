<template>
    <div class="zw">
        <div class="content">
            <div class="title">
                <div>{{sectionInfo.title}}</div>
                <div class="author">{{sectionInfo.source}} {{sectionInfo.pubtime|timeFormat}}</div>
            </div>
            <div class="img">
                <img :src="sectionInfo.picture" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "zwsp",
        props:["sectionInfo"]
    }
</script>

<style scoped lang="scss">
    .zw{
        div.content{
            display: flex;
            div.img{
                img{
                    width: 1.6rem;
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
            }
        }
    }
</style>
