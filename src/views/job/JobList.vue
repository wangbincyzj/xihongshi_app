<template>
    <div class="list">
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有数据了"
                @load="onLoad"
        >
            <van-cell v-for="item in newsList" :key="item.id" @click="itemClick(item)">
                <JobListViewItem :item="item"/>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
    import JobListViewItem from "@/views/job/JobListViewItem";
    import {job_api} from "@/network/job_api";

    export default {
        name: "JobList",
        components:{
            JobListViewItem
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
            },
            onLoad(){
                job_api.getAll(this.page, 10).then(ret=>{
                    this.newsList = this.newsList.concat(ret.data);
                    this.loading=false;
                    if(ret.num_pages === this.page){
                        this.finished = true;
                    }

                    this.page++;
                })
            },
            itemClick(item){
                this.$router.push("/job/detail");
                this.$store.state.detailJobItem = item;
            }
        }
    }
</script>

<style scoped>

</style>
