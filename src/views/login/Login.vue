<template>
    <div class="login">
        <div class="logo">
            <img src="@/assets/image/login/logo.png" alt="">
            <h3>西虹市账号登录</h3>
        </div>

        <div class="form">
            <van-field  label="用户名"  v-model="username" placeholder="请输入用户名"/>
            <van-field label="密码"  type="password" v-model="password" placeholder="请输入用户名"/>
        </div>

        <div class="submit">
            <van-button class="submitBtn" @click="loginClick" :loading="loading" round type="info">登录</van-button>
        </div>
    </div>

</template>

<script>
    import {user_api} from "@/network/user";

    export default {
        name: "Login",
        data() {
            return {
                username: "",
                password: "",
                loading: false
            }
        },
        created() {

        },
        methods: {
            init() {

            },
            loginClick() {
                if (!this.username || !this.password){
                    this.$toast.fail({message: "输入格式不正确"})
                }else{
                    user_api.login(this.username, this.password).then(ret=>{
                        if (ret.code===200){
                            this.$notify({
                                type: "success",
                                message: "登录成功",
                            });
                            localStorage.setItem("token", ret.data.token);
                            this.$store.state.token = ret.data.token;
                            user_api.tokenCheck(ret.data.token).then(ret=>{
                                this.$store.state.loginStatus = true;
                                this.$store.state.username = ret.username;
                                this.$store.state.userType = ret.user_type;
                                this.$store.state.avatar = ret.avatar;
                                this.$router.push("/profile")
                            })
                        }else{
                            this.$notify({
                                type: "warning",
                                message: "用户名密码不正确"
                            })
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .login {
        font-size: .14rem;

        .logo {
            width: 50%;
            margin: .8rem auto 0;
            display: flex;
            flex-flow: column;
            align-items: center;

            img {
                width: 30%;
            }

            h3 {
                color: white;
                font-size: .2rem;
                margin-top: .05rem;
                background: #ff6700;
                padding: .05rem;
                border-radius: .05rem;
            }
        }

        .form{
            margin: .5rem;
            border: 1px solid var(--border-color);
        }
        .submit{
            margin: .5rem;
            .submitBtn{
                width: 100%;
            }
        }
    }
</style>
