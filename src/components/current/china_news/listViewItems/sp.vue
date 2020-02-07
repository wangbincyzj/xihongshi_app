<template>
    <div class="sp">
        <h3>{{sectionInfo.title}}</h3>
        <div class="img">
            <img :src="sectionInfo.picture" alt="">
            <img src="@/assets/image/china_news/play.png" alt="">
        </div>
        <div class="author">
            {{sectionInfo.source}} {{sectionInfo.pubtime|timeFormat}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "sp",
        props: ["sectionInfo"],
    }
</script>

<style scoped lang="scss">
    .sp{
        font-size: .12rem;
        h3{
            font-size: .16rem;
        }
        div.img{
            position: relative;
            margin: .1rem 0;
            img:nth-child(1){
                width: 100%;
                height: 1.8rem;
            }
            img:nth-child(2){
                opacity: 0.8;
                transform: scale(0.8) translate(-50%, -50%);
                position: absolute;
                left: 50%;
                top: 50%;

            }
        }
        div.author{
            color: var(--el-info);
        }
    }
</style>
