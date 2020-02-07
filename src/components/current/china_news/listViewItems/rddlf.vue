<template>
    <div class="rddlf">
        <van-swipe :loop="false" :width="300" v-if="sectionInfo.dlfType==='lbPic'">
            <van-swipe-item v-for="item in sectionInfo.dlfList">
                <div class="img_wrapper">
                    <img :src="item.picture" alt="">
                    <p>{{item.title}}</p>
                </div>
            </van-swipe-item>
        </van-swipe>
        <div v-if="sectionInfo.dlfType==='videoFourTimes'">
            <h2 class="sectionTitle">{{sectionInfo.title}}</h2>
            <ul>
                <li v-for="item in sectionInfo.dlfList">
                    <img class="pic" :src="item.picture" alt="">
                    <img class="play_img" src="@/assets/image/china_news/play.png" alt="">
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "rddlf",
        props: ["sectionInfo"]
    }
</script>

<style scoped lang="scss">
    .img_wrapper {
        width: 300px;
        height: 160px;
        margin: 0 20px 0 0;
        position: relative;
        padding-right: 10px;

        img {
            width: 100%;
            height: 100%;
            /*padding-right: 10px;*/
        }

        p {
            width: calc(100% - 10px);
            padding: 0 10px;
            background: rgba(0, 0, 0, 0.31);
            color: white;
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }

    ul {
        font-size: .14rem;
        display: flex;
        flex-flow: row wrap;

        li {
            position: relative;
            width: 50%;
            padding: 0 .05rem;

            img.pic {
                width: 100%;
            }

            img.play_img {
                opacity: 0.5;
                width: .5rem;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -100%);
            }
        }
    }
</style>
