<template>
    <div class="list">
        <van-list
                v-model="loading"
                v-if="this.list"
                :finished="finished"
                finished-text="到此为止!"
                @load="onLoad"
        >
            <van-cell v-for="item in list" :key="item.id" @click="click">
                <div
                        v-if="isShow(item.classify)"
                        :is="item.classify"
                        :sectionInfo = "item"
                />
            </van-cell>
        </van-list>
        <div style="height: 50px"></div>
    </div>
</template>

<script>
    import rddlf from "@/components/current/china_news/listViewItems/rddlf";
    import zb from "@/components/current/china_news/listViewItems/zb";
    import zw from "@/components/current/china_news/listViewItems/zw";
    import zwsp from "@/components/current/china_news/listViewItems/zwsp";
    import sp from "@/components/current/china_news/listViewItems/sp";
    import zydlf from "@/components/current/china_news/listViewItems/zydlf";
    import pic from "@/components/current/china_news/listViewItems/pic";
    import {chinanews_api} from "@/network/chinanews_api";

    export default {
        name: "ListView",
        components:{
          rddlf, zb, zw, sp, zydlf, pic, zwsp
        },
        props: {
            tabInfo: {type: Object}
        },
        data() {
            return {
                api: null,
                list: [],
                loading: true,
                finished: false,
                page: 1
            }
        },
        computed: {
            cname() {
                return this.tabInfo.cname
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                // 由于要闻,直播,视频,图片的请求接口不一样,所以要根据cname做条件处理
                switch (this.cname) {
                    case "home":
                        this.api = chinanews_api.getDigest; break;
                    case "zb":
                        this.api = chinanews_api.getLiveList; break;
                    case "sp":
                        this.api = chinanews_api.getVidList; break;
                    default:
                        this.api = chinanews_api.getNewsList(this.cname);
                }
                // 请求注入列表数据
                this.api(this.page).then(ret => {
                    this.page++;
                    this.list = ret.data;
                    this.loading = false;
                })
            },
            onLoad() {
                if (this.page===3){
                    this.finished = true;
                }
                this.loading = true;
                this.api(this.page).then(ret=>{
                    this.page++;
                    this.list = this.list.concat(ret.data);
                    this.loading = false
                })
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求

                // 加载状态结束

                // this.finished = true;
            },
            isShow(name){
                return ["rddlf", "zb", "zw", "sp", "zydlf", "pic", "zwsp"].includes(name)
            },
            click() {
                this.$dialog.alert({
                    "title": "声明",
                    "message": "此列表页仅供学习,数据来源于中国新闻网,如若想浏览,请移步中国新闻网"
                })
            }


        }
    }
</script>

<style scoped>

</style>
