<template>
    <div class="product_info_product_price">
        <div class="wrapper">
            <div class="price">
                ¥{{sectionInfo.price}}
                <del class="ord_price">
                    ¥{{sectionInfo.market_price}}
                </del>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductInfoProductPrice",
        props: ["view"],
        mounted() {
        },
        computed: {
            sectionInfo() {
                return this.view.data.goods_info[this.$store.state.detailActiveIndex]
            }
        }
    }
</script>

<style scoped lang="scss">
    div.wrapper {
        padding: 0 .16rem .16rem;
        background: #ffffff;

        div.price {
            text-align: left;
            font-size: .24rem;
            color: #ff6700;
            del{
                color: rgba(0,0,0,.54);
                font-size: .15rem;
            }
        }
    }
</style>
