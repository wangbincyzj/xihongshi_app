<template>
    <div class="wrapper">
        <ul>
            <li v-for="item in this.sectionInfo">
                <div class="user_info">
                    <img :src="item.user_avatar" alt="" class="avatar">
                    <div class="time">
                        <span>{{item.user_name}}</span>
                        <span>{{item.add_time}}</span>
                    </div>
                </div>
                <div class="comment_content" v-if="item.comment_content">{{item.comment_content|limit(37)}}</div>
                <div class="comment_img">
                    <div class="img_wrapper" v-for="(j,index) in item.comment_images" v-if="index<3">
                        <img :src="j" alt="" >
                    </div>
                </div>
                <div class="reply" v-if="item.reply_content">
                    <span>官方回复:</span> {{item.reply_content|limit(37)}}
                </div>
            </li>
        </ul>
        <div class="more"><a>查看更多评论&gt;</a></div>
    </div>
</template>

<script>
    export default {
        name: "ProductInfoComment",
        props: ["view", "index"],
        computed: {
            sectionInfo() {
                return this.view.data.goods_share_datas.comments.list
            },
        },
        filters:{
            limit(msg, length){
                return msg.substr(0, length) + "..."
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper{
        font-size: .12rem;
        ul{
            display: flex;
            overflow-x: scroll;
            li{
                flex-shrink: 0;
                width: 3rem;
                height: 2.6rem;
                padding: .16rem;
                background-color: #fafafa;
                border-radius: .1rem;
                overflow: hidden;
                display: flex;
                flex-flow: column nowrap;
                margin-left: .15rem;
                div.user_info{
                    margin-bottom: .1rem;
                    display: flex;
                    img{
                        margin-right: .06rem;
                        width: .16rem;
                        height: .16rem;
                        overflow: hidden;
                        border-radius: 100%;
                    }
                    .time{
                        padding-top: .01rem;
                        display: flex;
                        flex-flow: column;
                        align-items: start;
                        span:nth-child(2){
                            margin-top: .02rem;
                            color: rgba(0,0,0,.54);
                        }
                    }
                }
                div.comment_content{
                    text-align: left;
                    height: .36rem;
                    line-height: .18rem;
                }
                div.comment_img{
                    margin: .3rem 0;
                    text-align: left;
                    display: flex;
                    div.img_wrapper{
                        display: inline-block;
                        width: 0.8rem;
                        height: 0.6rem;
                        margin: 0 .08rem 0 0;
                        border-radius: .16rem;
                        overflow: hidden;
                        position: relative;
                        img{
                            width: 100%;
                            height: auto;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            -webkit-transform: translate(-50%,-50%);
                            transform: translate(-50%,-50%);
                        }
                    }
                }
                div.reply{
                    span{color: #ff6700;}
                    text-align: left;
                    font-size: .14rem!important

                }
            }
        }
        div.more{
            margin-top: .16rem;
            margin-left: .2rem;
            margin-bottom: .2rem;
            color: #4e72a5;
            display: block;
            font-size: .16rem!important;
        }
    }
</style>
