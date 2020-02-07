<template>
    <div>
        <!--content-->
        <keep-alive include="Category">
            <router-view/>
        </keep-alive>

        <!--footer-->
        <Footer v-if="$store.state.isShowFooter"/>
    </div>
</template>

<script>
    import Footer from "@/views/footer/Footer";
    import {user_api} from "@/network/user";

    export default {
        name: "App.vue",
        components: {Footer},
        created() {
            this.initCart();
            this.initLoinStatus();
        },
        methods:{
            initCart() {  // 初始化购物车
                this.$store.dispatch("initCart")
            },
            initLoinStatus() {
                let local_token = localStorage.getItem("token");
                if (local_token) {
                    user_api.tokenCheck(local_token).then(ret=>{
                        if(ret.code===200){
                            this.$store.state.loginStatus = true;
                            this.$store.state.username = ret.username;
                            this.$store.state.userType = ret.user_type;
                            this.$store.state.avatar = ret.avatar;
                            this.$store.state.token = local_token;
                        }else{
                            localStorage.removeItem("token");
                            this.$notify("您的登录状态已过期,请重新登录")
                        }
                    })
                }else{
                    this.$notify("您暂未登录")
                }
            },

        }
    }
</script>

<style scoped>

</style>
