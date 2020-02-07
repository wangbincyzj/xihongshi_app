<template>
    <div class="zw">
        <div class="content" v-if="sectionInfo.showType==='m0'">
            <div class="title">
                <div>{{sectionInfo.title}}</div>
                <div class="author">{{sectionInfo.source}} {{sectionInfo.pubtime|timeFormat}}</div>
            </div>
            <div class="img" >
                <img :src="sectionInfo.picture" alt="">
            </div>
        </div>
        <div  class="content2" v-else>
            <div class="title">
                <div>{{sectionInfo.title}}</div>
            </div>
            <div class="img">
                <div><img :src="sectionInfo.appPic1" alt=""></div>
                <div><img :src="sectionInfo.appPic2" alt=""></div>
                <div><img :src="sectionInfo.appPic3" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "zw",
        props:["sectionInfo"]
    }
</script>

<style  lang="scss">
    .zw{
        div.content{
            justify-content: space-between;
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
        div.content2{
            font-size: .16rem;
            display: flex;
            flex-flow: column;
            div.img{
               display: flex;
                div{
                    width: 33.3%;
                    margin: 0 .03rem;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
