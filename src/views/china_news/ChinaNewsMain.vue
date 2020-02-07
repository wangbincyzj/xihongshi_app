<template>
    <div class="main">
        <van-tabs
                :animated="true"
                :sticky="true">
            <van-tab v-for="tab in tabData" :title="tab.name" >
                <ListView :tabInfo="tab"/>
            </van-tab>
        </van-tabs>
    </div>

</template>

<script>
    import {chinanews_api} from "@/network/chinanews_api";
    import ListView from "@/components/current/china_news/ListView";
    export default {
        name: "ChinaNewsMain",
        components: {ListView},
        data() {
            return {
                tabData: null
            }
        },
        created() {
            this.init()
        },
        methods:{
            init() {
                chinanews_api.getChannelList().then(ret=>{
                    this.tabData = ret.data;
                    console.log(this.tabData)
                })
            }
        }
    }
</script>

<style scoped>

</style>
