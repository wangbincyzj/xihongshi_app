<template>
    <div class="detail" ref="detail">
        <div class="wrapper" v-if="item">
            <h3 class="title">{{item.title}}</h3>
            <div class="infos">
                <span>{{item.source}}</span>
                <span>{{item.create_time|djangoTimeFormat}}</span>
            </div>
            <p class="content" v-html="item.content"></p>
            <p class="editor">编辑:{{item.pub_user}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NativeNewsDetail",
        data() {
            return{
                item: null,
            }
        },
        created() {
            this.init()
        },
        mounted() {

        },
        methods:{
            init() {
                this.item = this.$store.state.detailItem;
            }
        }
    }
</script>

<style  lang="scss">
    .detail{
        div.wrapper{
            padding: .1rem;
            font-size: .16rem;
            .title{
                font-size: .25rem;
                font-weight: 600;
                margin: .1rem 0 .2rem;
                word-spacing: .1rem;
                line-height: .3rem;
            }
            .infos{
                display: flex;
                color: var(--el-info);
                span{
                    margin-right: .05rem;
                    margin-bottom: .1rem;
                }
            }
            .content{
                p{
                    line-height: .3rem;
                    text-indent: 2em;
                    font-size: .18rem;
                    margin-bottom: 0.2rem;
                    letter-spacing: .01rem;
                    img{
                        width: 100%;
                    }
                }
            }
            .editor{
                text-align: right;
                color: var(--el-info);
                margin-bottom: 1rem;
            }
        }
    }

</style>
