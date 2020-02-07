<template>
    <div class="list">
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="到此为止!"
                @load="onLoad"
        >
            <van-cell v-for="item in newsList" :key="item.id" @click="itemClick(item)">
                <ListVIewItem :item="item"/>
            </van-cell>
        </van-list>
        <div style="height: 50px"></div>
    </div>
</template>

<script>
    import {native_news_api} from "@/network/native_news_api";
    import ListVIewItem from "@/views/native_news/ListVIewItem";
    export default {
        name: "NativeNewsList",
        components:{
            ListVIewItem
        },
        data() {
            return{
                loading: true,
                newsList:[],
                page: 1,
                finished: false
            }
        },
        created() {
            this.init()
        },
        methods:{
            init() {
                this.onLoad();

                console.log(this.$store.state.isShowFooter)
            },
            onLoad(){
                console.log(this.page);
                native_news_api.getAll(this.page, 10).then(ret=>{
                    this.newsList = this.newsList.concat(ret.data);
                    this.loading=false;
                    if(ret.num_pages === this.page){
                        this.finished = true;
                    }

                    this.page++;
                })
            },
            itemClick(item){
                this.$router.push("/native_news/detail");
                this.$store.state.detailItem = item;
            }
        }
    }
</script>

<style scoped>

</style>
