<template>
    <div class="profile">
        <header class="hd">
            <div class="user">
                <div class="img">
                    <img v-if="!$store.state.loginStatus" src="@/assets/image/profile/avatar.png">
                    <img v-else :src="$store.state.avatar">
                </div>
                <div class="name" v-if="!$store.state.loginStatus" @click="$router.push('/login')">登录/注册</div>
                <div v-else>欢迎您 {{$store.state.username}}</div>
            </div>
        </header>
        <div class="info">
            <ul>
                <li>
                    <van-icon name="manager"/>
                    用 户 名 : {{username}}
                </li>
                <li>
                    <van-icon name="vip-card"/>
                    用户等级: {{userType}}
                </li>
                <li>
                    <van-icon name="gem"/>
                    登录状态: {{loginStatus}}
                </li>
            </ul>
        </div>
        <div class="admin">
            <ul>
                <li @click="click(0)">后台发表新闻 ></li>
                <li @click="click(1)">后台发表招聘 ></li>
                <li @click="click(2)">后台订单创建 ></li>
            </ul>
        </div>

        <div class="submit">
            <van-button
                    v-if="!$store.state.loginStatus"
                    class="submitBtn"
                    size="small"
                    @click="$router.push('/login')"
                    :loading="loading"
                    round type="info">
                登录
            </van-button>
            <van-button class="submitBtn" size="small" @click="logout" :loading="loading" round type="info" v-else>
                注销
            </van-button>
        </div>

        <van-popup
                v-model="show"
                position="bottom"
                :style="style"
        >
            <ul class="pop_ul">
                <li class="ellipsis"  v-for="(item,index) in this.pop_list">{{index+1}}.{{item.title}}</li>
            </ul>
        </van-popup>
    </div>
</template>

<script>
    import {native_news_api} from "@/network/native_news_api";

    export default {
        name: "Profile",
        data() {
            return {
                loading: false,
                show: false,
                style: {
                    height: "50%",
                },
                pop_list: null
            }
        },
        computed: {
            username() {
                return this.$store.state.username ? this.$store.state.username : "未登录"
            },
            userType() {
                let type = this.$store.state.userType;
                console.log(type)
                if (!type) {
                    return "未登录"
                } else {
                    return type === 1? "超级管理员" : "普通管理员"
                }
            },
            loginStatus() {
                return this.$store.state.loginStatus ? this.$store.state.loginStatus : "未登录"
            },
        },
        created() {

        },
        beforeRouteEnter(to, form ,next){
            next(vm=>{
                vm.$bus.$emit("footerIndexChange", {index:3});
            })
        },
        methods: {
            init() {

            },
            logout() {
                this.$store.state.loginStatus = false;
                this.$store.state.username = null;
                this.$store.state.userType = null;
                localStorage.removeItem("token")
            },
            click(index){
                if (!this.$store.state.loginStatus) {
                    this.$notify({
                        type: "warning",
                        message: "请先登录"
                    })
                }else{
                    if (index===0){
                        native_news_api.getByUsername(this.$store.state.username).then(ret=>{
                            this.pop_list = ret.data;
                            this.show = true
                        })
                    }
                }
            }
        }

    }
</script>

<style scoped lang="scss">
    div.profile {
        height: 100vh;
        font-size: .14rem;
        background: #f5f5f5;
    }

    .hd {
        font-size: .14rem;
        background: url(~@/assets/image/profile/bg.png) center 0 #f37d0f;
        background-size: auto 100%;
        padding: .20rem 0;
        margin-bottom: .3rem;

        .user {
            display: flex;
            align-items: center;
            color: white;

            .img {
                width: .5rem;
                height: .5rem;
                margin: 0 .1rem 0 .2rem;
                border: 3px solid hsla(0, 0%, 100%, .4);
                border-radius: 50%;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
        }
    }

    .info, .admin {
        font-size: .16rem;
        background: white;
        margin: .1rem;
        padding: .2rem;
        border-radius: .05rem;
        margin-bottom: .3rem;

        ul > li {
            padding-bottom: .1rem;
            margin: .08rem 0;
            border-bottom: 1px solid var(--border-color);

        }
    }

    .admin {
        color: var(--el-success);
    }

    .pop_ul{
        padding: .3rem;
        li{
            line-height: .3rem;
            font-weight: 600;
        }
    }

    .submit {
        width: 80%;
        margin: 0 auto;

        .submitBtn {
            width: 100%;
        }
    }


</style>
