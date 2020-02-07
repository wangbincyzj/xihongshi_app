import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import storage from "good-storage"

export default new Vuex.Store({
    state: {
        // 是否显示底部
        isShowFooter: true,

        // 本地新闻的数据
        detailItem: null,

        // job的数据
        detailJobItem: null,

        // 小米商城使用数据
        detailActiveIndex: 0,
        detailView: null,
        categoryWarning: false,
        detailWarning: false,
        cartNum: null,  // 购物车数目总和
        cart: [],

        // 用户账户数据
        userType: 0,  /* 0未登录,1超级管理员(增删查改) 2普通管理员 */
        loginStatus: false,  /*登录状态*/
        token: null, /*token提供给headers使用*/
        username: null, /*登录成功注入的用户名*/
        avatar: null
    },
    mutations: {
        goodsNumAdd(state, {index}) {  // 购物车商品数量增加
            state.cart[index].num += 1;
            storage.set("__cart__", state.cart)
        },
        goodsAdd(state, {pid}) {
            state.cart.push({pid: pid, num: 1});
            storage.set("__cart__", state.cart);
        },
        goodsNumSubtract(state, {index}) {  // 购物车商品数量减少
            state.cart[index].num -= 1;
            if(state.cart[index].num===0){
                let ret = state.cart.splice(index, 1);
            }
            storage.set("__cart__", state.cart);
        },

    },
    actions: {
        initCart({state}) {  // 初始化购物车
            let cart = storage.get("__cart__");
            if (cart) {
                state.cart = cart;
            } else {
                state.cart = [];
                storage.set("__cart__", state.cart)
            }
            console.log("购物车初始化成功", state.cart)
        },
        goodsAdd({state, commit}, {pid}) {  // 购物车增加
            // 查看是否有此商品
            let index = state.cart.findIndex(item => {
                return item.pid === pid
            });
            if (index !== -1) {  // 有此商品
                if (state.cart[index].num >= 5) {
                    return false
                } else {
                    commit("goodsNumAdd", {index});
                    return state.cart[index].num
                }
            } else {  // 没有商品
                commit("goodsAdd", {pid});
                return 1;
            }
        },
        goodsSubtract({state, commit}, {pid}) {
            console.log(pid);
            console.log(state.cart)
            let index = state.cart.findIndex(item => {
                return item.pid === pid
            });
            commit("goodsNumSubtract", {index});
        }
    },
    modules: {}
})
