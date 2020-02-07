<template>
    <div class="product_info_choose_version">
        <div class="wrapper">
            <div class="version">
                <span>已选</span>
                <div class="choose">{{name}} {{version}} {{color}} x{{count}}</div>
            </div>
            <div class="address">
                <span>送至</span>
                <div>北京市 东城区</div>
                <div class="count">现货</div>
            </div>
            <div class="service">
                <ul>
                    <li v-for="(item, index) in serviceInfo" v-if="index<3"><img src="@/assets/image/category/service.png" alt="">{{item.title}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ProductInfoChooseVersion",
        props: ["view"],
        data() {
            return{
                name: null,
                selectVersionIndex: 0,
                selectColorIndex: 0,
                count: 1,
            }
        },
        mounted() {
            this.name = this.view.data.product_info.name
        },
        computed: {
            sectionInfo() {
                return this.view.data.buy_option
            },
            versionInfo() {
                return this.sectionInfo[0]
            },
            colorInfo() {
                return this.sectionInfo[1]
            },
            version() {
                return this.versionInfo.list[this.selectVersionIndex].name
            },
            color() {
                return this.colorInfo.list[this.selectColorIndex].name
            },
            serviceInfo() {
                return this.view.data.goods_info[this.$store.state.detailActiveIndex].service_refound_policy_list.list_new
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper{
        margin: 0 .2rem;
        border-radius: .08rem;
        background: #fafafa;
        font-size: .12rem;
        div.version{
            display: flex;
        }
        div.address{
            display: flex;
            color: #3c3c3c;
            .count{
                color: #ff6700;
                margin-left: .2rem;
            }
        }
        div.service{
            ul{
                display: flex;
                li{
                    margin: 0 .1rem;
                    display: flex;
                    align-items: center;
                    img{
                        margin-right: .02rem;
                        display: inline-block;
                        transform: scale(0.5);
                    }
                }
            }
        }
        >div{
            line-height: 0.4rem;
            text-align: left;
            span{
                color: rgba(0,0,0,.54);
                display: inline-block;
                padding: 0 .5rem 0 .15rem;
            }
            div.choose{
                /*padding-left: .5rem;*/
                display: inline-block;
                color: black;
                font-weight: 600;
            }

        }
        >div:nth-child(1){
            border-bottom: .01rem solid rgba(0, 0, 0, 0.22);
        }
        >div:nth-child(2){
            border-bottom: .01rem solid rgba(0, 0, 0, 0.22);
        }
    }
</style>
