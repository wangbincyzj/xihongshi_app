<template>
    <div class="item">
        <div class="left">
            <img :src="imgSrc" alt="">
        </div>
        <div class="center">
            <h3 class="title">{{item.nm}}</h3>
            <div class="sc">观众评分: <span class="rate">{{item.sc|scFilter}}</span></div>
            <div class="star ellipsis">{{item.star}}</div>
            <div class="showInfo">{{item.showInfo}}</div>
        </div>
        <div class="right">
            <van-button type="danger" round size="mini" @click="buyClick" :loading="loading">购票</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MovieListItem",
        props: ["item"],
        data() {
            return {
                loading: false
            }
        },
        computed: {
            imgSrc() {
                return this.item.img.replace("w.h", "128.80")
            }
        },
        filters: {
            scFilter(val) {
                return val === 0 ? "暂无评分" : val;
            }
        },
        methods: {
            buyClick() {
                this.loading = true;
                setTimeout(function () {
                    this.loading = false;
                    this.$toast.fail("购票失败,请检查您的网络")
                }.bind(this), 1500)
            }
        }
    }
</script>

<style scoped lang="scss">
    .item {
        display: flex;

        div.left {
            width: 20%;
            display: flex;
            align-items: center;
        }

        div.center {
            width: 60%;

            .title {
                font-weight: 600;
                font-size: .18rem;
            }

            .sc, .star, .showInfo {
                color: var(--el-info);
            }

            .sc .rate {
                color: #faaf00;
                font-weight: 600;
            }
        }

        div.right {
            width: 20%;
            display: flex;
            align-items: center;
        }
    }
</style>
