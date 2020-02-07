<template>
    <div class="movie">

        <div class="header">
            <div class="left" @click="$router.push('/home')">返回首页</div>
            <div class="center">西虹市电影</div>
            <div class="right"></div>
        </div>


        <div class="nav">
            <ul @click="">
                <li :class="{active:active===0}" @click="liClick(0)">猫眼电影接口</li>
                <li :class="{active:active===1}" @click="liClick(1)">后台管理接口</li>
            </ul>
        </div>

        <van-list
                v-if="active===0"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <van-cell v-for="item in listItems" :key="item.id"  >
                <MovieListItem :item="item" />
            </van-cell>
        </van-list>
        <van-list
                v-else
                v-model="loading"
                :finished="finished2"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <van-cell v-for="item in nativeListItems" :key="item.id"  >
                <MovieListItem2 :item="item" />
            </van-cell>
        </van-list>
        <div style="height: 50px"></div>
    </div>
</template>

<script>
    import {maoyan} from "@/network/movie_api";
    import {native_movie_api} from "@/network/native_movie";
    import MovieListItem from "@/views/movie/MovieListItem";
    import MovieListItem2 from "@/views/movie/MovieListItem2";
    export default {
        name: "Movie",
        components: {MovieListItem, MovieListItem2},
        created() {
            this.init()
        },
        data() {
            return {
                active: 0,
                loading: true,
                finished: true,
                finished2: true,
                listItems:null,
                nativeListItems:null,
            }
        },
        methods: {
            init() {
                maoyan.getAll().then(ret => {
                    this.listItems = ret.movieList;
                    if (this.listItems.length===0){
                        this.$dialog.alert({
                            title: "猫眼电影接口数据异常,可在程序测试模块提交BUG"
                        })
                    }
                    this.loading = false;
                }).catch(reason => {
                    this.loading = false;
                    this.$dialog.alert({
                        title: "猫眼电影接口数据异常,可在程序测试模块提交BUG"
                    })
                });
                native_movie_api.getAll(1, 50).then(ret=>{
                    this.current++;
                    this.nativeListItems = ret.data;
                })
            },
            liClick(index){
                if (index!==this.active){
                    this.active = index
                }
            },
            onLoad() {
            }
        }
    }
</script>

<style scoped lang="scss">
    div.header {
        color: white;
        font-size: .18rem;
        line-height: .5rem;
        text-align: center;
        background: red;
        width: 100%;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        .left, .right {
            width: 20%;
            font-size: .11rem;
        }

        .center {
            width: 60%;
        }
    }

    div.nav {
        margin-top: .5rem;
        ul {
            border-bottom: .01rem solid var(--el-info);
            width: 100%;
            font-size: .14rem;
            display: flex;
            font-weight: 600;
            justify-content: center;

            li {
                padding: .1rem;
            }

            li.active {
                border-bottom: .03rem solid red;
                color: red;
            }
        }

    }
</style>
