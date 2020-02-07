<template>
    <div class="zydlf">
        <div class="type1" v-if="sectionInfo.dlfType==='general'" >
            <h1><span>热点</span>{{sectionInfo.dlfTitle}}</h1>
            <div
                    class="zydlf_items"
                    v-for="item in sectionInfo.dlfList"
                    :is="item.classify"
                    :sectionInfo="item"
                    v-if="isShow(item.classify)"
            />
            <div class="more">查看更多&gt;&gt;</div>
            <DividerLine/>
        </div>
        <div class="type2" v-else-if="sectionInfo.dlfType==='transverse'" >
            <h1><span>专题</span>{{sectionInfo.dlfTitle}}</h1>
            <van-swipe :loop="false" :width="150" :show-indicators="false"	 >
                <van-swipe-item v-for="item in sectionInfo.dlfList">
                    <div class="img_wrapper">
                        <img :src="item.picture" alt="">
                        <p>{{item.title}}</p>
                        <div>{{item.source}}</div>
                    </div>

                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
    import DividerLine from "@/components/common/DividerLine";
    import zw from "@/components/current/china_news/listViewItems/zw";
    import zb from "@/components/current/china_news/listViewItems/zb";
    import sp from "@/components/current/china_news/listViewItems/sp";
    import zwsp from "@/components/current/china_news/listViewItems/zwsp";

    export default {
        name: "zydlf",
        components: {
          zw, zb, sp, zwsp, DividerLine
        },
        props: ["sectionInfo"],
        methods:{
            isShow(name){
                return ["rddlf", "zb", "zw", "sp", "zydlf", "zwsp"].includes(name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .zydlf{
        .type1{
            h1{
                font-size: .2rem;
                font-weight: 600;
                span{
                    font-size: .12rem;
                    background: red;
                    color: white;
                    padding: 0 .05rem;
                    margin-right: .1rem;
                    border-radius: .05rem;
                }
            }
            .zydlf_items{
                padding: 10px 0;
                border-bottom: .01rem dashed rgba(50, 50, 51, 0.24);;
            }
            div.more{
                font-size: .16rem;
                margin: .1rem 0;
            }
        }
        .type2{
            h1{
                font-size: .2rem;
                font-weight: 600;
                span{
                    font-size: .12rem;
                    background: red;
                    color: white;
                    padding: 0 .05rem;
                    margin-right: .1rem;
                    border-radius: .05rem;
                }
            }
            .img_wrapper{
                position: relative;
                margin: .03rem;
                height: 1.7rem;
                border: 1px solid rgba(153, 153, 153, 0.47);
                p{
                    padding: .02rem;
                    line-height: 1.3;
                }
                img{
                    width: 100%;
                    height: 80px;
                }
                div{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding: 0.02rem;
                    color: var(--el-info);
                    font-size: .12rem;
                }
            }

        }

    }

</style>
