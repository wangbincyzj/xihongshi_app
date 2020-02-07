<template>
    <div class="cart">

        <div class="header">
            <div class="left" @click="$router.push('/home')">返回首页</div>
            <div class="center">购物车</div>
            <div class="right"></div>
        </div>

        <div class="list" v-if="$store.state.cart.length!==0" style="min-height: 50px">
            <van-card
                    v-if="injectComplete"
                    v-for="item in cart"
                    :num="item.num"
                    :price="item.data.goods_info[0].price"
                    :desc="item.data.product_info.product_desc"
                    :title="item.data.product_info.name"
                    :thumb="item.data.goods_info[0].image_share"
            >
                <template #desc>
                    <div v-html="item.data.product_info.product_desc" class="desc"></div>
                </template>
                <template #footer>
                    <div>总计:{{item.data.goods_info[0].price * item.num}}</div>
                    <div style="margin-top: .04rem">
                        <van-button size="mini" @click="subtractClick(item)">-</van-button>
                        <van-button size="mini" @click="addClick(item)">+</van-button>
                    </div>

                </template>
            </van-card>
        </div>

        <div class="null" v-else>
            <h3>空空如也...</h3>
            <p>
                <router-link class="goShop" to="/category">前去购物吧!</router-link>

            </p>
        </div>

        <van-submit-bar
                :price="totalCount * 100"
                :decimal-length="0"
                button-text="提交订单"
                :disabled="disabled"
                @submit="onSubmit"
        >
            <span @click="$router.push('/category')" style="background: #00AAAA; color: white; padding: 3px">返回商城</span>
        </van-submit-bar>

        <van-overlay :show="show" @click="show = false" z-index="10000">
            <div class="wrapper" @click.stop>
                <van-circle
                        v-if="show"
                        v-model="start"
                        :rate="300"
                        :speed="100"
                        size="200px"
                />
                <van-button  class="button" type="primary" size="normal" @click="commitComplete">提交成功</van-button>
            </div>
        </van-overlay>

    </div>
</template>

<script>
    import {getDetail, commit} from "@/network/xiaomi_mall_api";
    import storage from "good-storage"
    import {mapActions} from "vuex"

    export default {
        name: "Cart",
        data() {
            return {
                cart: null,
                need: 100,
                current: 0,
                show: false,
                start: 0
            }
        },
        computed: {
            injectComplete() {
                return this.current >= this.need
            },
            totalCount() {
                if (this.current >= this.need) {
                    return this.cart.reduce((total, item) => {
                        console.log(total);
                        return total + item.num * (item.data.goods_info[0].price * 1)
                    }, 0)

                } else {
                    return 0
                }
            },
            disabled() {
                return this.cart.length <= 0
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                let cart = storage.get("__cart__");
                this.need = cart.length;
                if (cart) {
                    cart.forEach(item => this.dataInject(item))  // 数据注入
                } else {
                    // 没有cart
                }
                this.cart = cart;
                console.log(this.cart)
            },
            dataInject(item) {
                getDetail(item.pid).then(ret => {
                    this.current++;
                    item.data = ret.data;
                });
            },
            subtractClick(item) {
                if (item.num === 1) {
                    this.$dialog.confirm({
                        title: "删除确认",
                        message: `确定要删除 [${item.data.product_info.name}] 吗?`
                    }).then(ret => {
                        this.goodsSubtract({pid: item.pid});
                        this.cart.splice(this.cart.indexOf(item), 1);
                    }).catch(reason => {

                    })
                } else {
                    this.goodsSubtract({pid: item.pid});
                    item.num--;
                }
            },
            addClick(item) {
                this.goodsAdd({pid: item.pid}).then(ret => {
                    console.log(ret);
                    if (ret) {
                        item.num++
                    } else {
                        this.$toast.fail("该商品限购5件")
                    }
                })
            },
            onSubmit() {
                this.show=true;
                // 为了减少管理系统的数据请求,在这里要把购买详细数据提取出来,而不仅仅post了id和num
                let postOrder = [];
                this.cart.forEach(item=>{
                    postOrder.push({
                        pid: item.pid,
                        num: item.num,
                        price: item.data.goods_info[0].price,
                        picture: item.data.goods_info[0].image_share,
                        name: item.data.product_info.name,
                    })
                });
                if (!this.$store.state.loginStatus){
                    this.$router.push("/login");
                    this.$notify({
                        message:"请先登录"
                    })
                    return
                }
                commit(this.$store.state.username, postOrder, this.$store.state.token).then(ret=>{
                    console.log(ret)
                });
            },
            commitComplete() {
                this.show = false;
                this.$store.state.cart = [];
                this.cart = [];
                localStorage.setItem("__cart__", "[]");
                this.$dialog({
                    message: "订单已提交至后台,查看后台项目请在首页点击程序测试获取地址"
                })
            },
            ...mapActions(["goodsAdd", "goodsSubtract"]),
        }

    }
</script>

<style scoped lang="scss">
    .wrapper {
        display: flex;
        align-items: center;
        flex-flow: column;
        justify-content: center;
        height: 100%;
        .button{
            margin-top: 30px;
        }
    }



    div.header {
        color: white;
        font-size: .18rem;
        line-height: .5rem;
        text-align: center;
        background: #ff6700;
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

    div.list {
        margin-top: .5rem;
        margin-bottom: .5rem;

        .desc {
            margin-top: .03rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    div.null{
        font-size: .14rem;
        margin-top: .5rem;
        h3{
            font-size: .2rem;
            line-height: .5rem;
            text-align: center;
        }
        p{
            text-align: center;
        }
    }


</style>
