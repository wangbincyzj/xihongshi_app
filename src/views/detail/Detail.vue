<template>
    <div class="sections">
        <van-nav-bar
                title="商品详情"
                left-arrow
                fixed
                style="margin-bottom: 48px"
                @click-left="leftClick"
                left-text="返回商城"
        >
        </van-nav-bar>
        <div v-for="(item,index) in sections" v-if="checkType(item.view_type)"
             :index="index" :is="getCpnName(item.view_type)" :view="view"
        />
        <van-goods-action>
            <van-goods-action-icon icon="home-o" text="首页" @click="$router.push('/home')"/>
            <van-goods-action-icon icon="cart-o" text="购物车" :info="$store.state.cart.length"
                                   @click="$router.push('/cart')"/>
            <van-goods-action-button type="warning" text="加入购物车" @click="onAddCart"/>
            <van-goods-action-button type="danger" text="立即购买" @click="onBuy"/>
        </van-goods-action>
    </div>
</template>

<script>
    import {getDetail} from "@/network/xiaomi_mall_api";
    import ProductInfoProductGallery from "@/views/detail/sctionItems/ProductInfoProductGallery";
    import ProductInfoProductName from "@/views/detail/sctionItems/ProductInfoProductName";
    import ProductInfoProductDesc from "@/views/detail/sctionItems/ProductInfoProductDesc";
    import ProductInfoProductPrice from "@/views/detail/sctionItems/ProductInfoProductPrice";
    import ProductInfoClassParameters from "@/views/detail/sctionItems/ProductInfoClassParameters";
    import BlankLine from "@/views/detail/sctionItems/BlankLine";
    import ProductInfoChooseVersion from "@/views/detail/sctionItems/ProductInfoChooseVersion";
    import ImageW1080 from "@/views/detail/sectionItems2/ImageW1080";
    import ProductInfoComment from "@/views/detail/sectionItems2/ProductInfoComment";
    import ProductInfoRank from "@/views/detail/sectionItems2/ProductInfoRank";
    import storage from "good-storage"

    export default {
        name: "Detail",
        data() {
            return {
                view: null,
                pid: null,
                activeIndex: 0,
                sections: null,
                detailViewAllowTypes: [
                    "product_info_choose_version",
                    "product_info_class_parameters",
                    "product_info_product_desc",
                    "product_info_product_gallery",
                    "product_info_product_name",
                    "product_info_product_price",
                    "blank_line",
                    "image_w_1080",
                    "product_info_comment",
                    "product_info_rank"
                ],
                cpnName: [
                    "ProductInfoChooseVersion",
                    "ProductInfoClassParameters",
                    "ProductInfoProductDesc",
                    "ProductInfoProductGallery",
                    "ProductInfoProductName",
                    "ProductInfoProductPrice",
                    "BlankLine",
                    "ImageW1080",
                    "ProductInfoComment",
                    "ProductInfoRank"
                ]
            }
        },
        components: {
            ProductInfoProductGallery,
            ProductInfoProductName,
            ProductInfoProductDesc,
            ProductInfoProductPrice,
            ProductInfoClassParameters,
            BlankLine,
            ProductInfoChooseVersion,
            ImageW1080,
            ProductInfoComment,
            ProductInfoRank,
        },
        watch: {
            view(newData) {
                let obj = this.view.data.goods_tpl_datas;
                this.sections = obj[Object.keys(obj)[0]].sections;
            }
        },
        created() {
            this.pid = this.$route.params.id * 1;
            this.$store.state.isShowFooter = false;
            getDetail(this.pid).then(value => {
                this.view = value
            });
            this.$store.state.detailView = this.view;
        },
        mounted() {
            if (!this.$store.state.detailWarning) {
                this.$dialog.alert({
                    message: '所有详情页面仅做展示,学习使用'
                });
                this.$store.state.detailWarning = true;
            }

        },
        beforeDestroy() {
            this.$store.state.isShowFooter = true;
        },

        methods: {
            leftClick() {
                this.$bus.$emit("footerIndexChange", {index: 1});
                this.$router.push('/category');
                // this.$router.back()
            },
            getCpnName(view_type) {
                let index = this.detailViewAllowTypes.indexOf(view_type);
                return this.cpnName[index]
            },
            checkType(view_type) {
                return this.detailViewAllowTypes.includes(view_type);
            },
            onAddCart() {
                let pid = this.view.data.product_info.product_id;
                this.$store.dispatch("goodsAdd", {pid}).then(ret => {
                    if (ret) {
                        this.$toast.success(`添加成功(${ret})`)
                    } else {
                        this.$toast.fail(`添加失败,限购5件`)
                    }
                });


            },
            onBuy() {
                this.$router.push("/cart")
            }
        },
    }
</script>

<style scoped>
    .sections {
        overflow-x: hidden;
    }
</style>
