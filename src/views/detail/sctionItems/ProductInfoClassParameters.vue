<template>
    <div class="prodct_info_class_parameters">
        <ul class="wrapper">
            <li v-for="item in sectionInfo" v-if="item.is_page_show">
                <img :src="item.icon" alt="">
                <div class="name">{{item.top_title}}</div>
                <div class="desc">{{item.value}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import MaskCpn from "@/components/common/mask/MaskCpn";

    export default {
        name: "ProductInfoClassParameters",
        props: ["view"],
        components: {MaskCpn},
        mounted() {
            // console.log(this.view);
            // console.log(this.sectionInfo);
            // console.log(this.maskInfo)
        },
        computed: {
            sectionInfo() {
                return this.view.data.goods_info[this.$store.state.detailActiveIndex].class_parameters.list
            },
            maskInfo() {
                return this.view.data.goods_info[this.$store.state.detailActiveIndex].class_parameters
            }
        }
    }
</script>

<style scoped lang="scss">

    .wrapper {
        display: flex;
        padding-bottom: .1rem;
        overflow-x: auto;

        li {
            text-align: center;
            min-width: 1rem;
            padding: 0 .08rem;
            display: flex;
            flex-flow: column;
            align-items: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: .15rem;
            color: #3c3c3c;
            border-right: 1px solid rgba(60, 60, 60, 0.13);

            &:last-child {
                border-right: none;
            }

            div {
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            img {
                width: 30%;
                margin-bottom: .02rem;
            }
        }
    }

    .mask-wrapper {
        .cpn-title {
            border-bottom: 1px solid #999999;
            font-size: .32rem;
            padding: .3rem;
        }

        .cpn-content {
            ul {
                li {
                    font-size: .28rem;
                    margin: .3rem 0;
                    display: flex;
                    text-align: left;

                    span {
                        display: inline-block;
                    }

                    span:nth-child(1) {
                        width: 2.5rem;
                        margin-left: .3rem;
                        color: rgba(0, 0, 0, 0.54);
                    }

                    span:nth-child(2) {
                        width: 3rem;
                    }
                }
            }
        }
    }
</style>
