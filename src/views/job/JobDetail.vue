<template>
    <div class="detail" style="overflow: hidden">
        <van-notice-bar text="请勿相信抵押证件,刷单等" left-icon="volume-o" />
        <div class="section1">
            <div class="left">
                <div class="title ellipsis">{{item.name}}</div>
                <p class="company_name">{{item.company_name|companyNameFilter}}</p>
                <div class="require">
                    <span>学历要求 {{item.education}}</span>
                    <span>工作经验 {{item.experience}}</span>
                </div>
            </div>
            <div class="right">
                <div class="salary">{{item.salary}}/月</div>
                <div class="date">{{item.create_time|djangoTimeFormat|time}}</div>
            </div>
        </div>

        <div class="section2">
            <h3>工作地址</h3>
            <p>
                <van-icon name="location-o" />{{item.address}}
            </p>
        </div>

        <div class="section3">
            <div class="responsibilities">
                <h3>岗位介绍</h3>
                <pre>{{item.responsibilities}}</pre>
            </div>
            <div class="requirements">
                <h3>入职要求</h3>
                <pre>{{item.requirements}}</pre>
            </div>
        </div>

        <div class="section4">
            <h3>公司福利</h3>
            <ul>
                <li v-for="f in features">{{f}}</li>
            </ul>
        </div>

        <van-button round type="info" class="btn" @click="btnClick">投递简历</van-button>
    </div>
</template>

<script>
    export default {
        name: "JobDetail",
        data() {
            return {
                item: null,
            }
        },
        computed: {
            features() {
                let str = this.item.features;
                let arr = [...str.match(/'.+?'/g)];
                let ret = arr.map(ret => ret.replace(/'/g, ""))
                return ret.length > 6 ? ret.slice(0, 6) : ret;
            }
        },
        filters: {
            time(val) {
                return val.split(" ")[0]
            },
            companyNameFilter(val) {
                return val.endsWith("公司") ? val : val + "公司"
            }
        },
        created() {
            this.init()
        },
        beforeDestroy() {
            this.$store.state.isShowFooter = true;
        },
        methods:{
            init() {
                this.item = this.$store.state.detailJobItem;
                this.$store.state.isShowFooter = false;
            },
            btnClick() {
                this.$toast.success("投递成功")
            }
        }
    }
</script>

<style scoped lang="scss">
    .detail{
        background: #f2f2f2;
        min-height: 100vh;
        box-sizing: border-box;
        font-size: .14rem;
        >div{
            margin: .05rem;
            border-radius: .05rem;
            padding: .2rem;
            background: white;
        }
        .section1{
            display: flex;
            height: 1rem;
            color: var(--el-info);
            div.left{
                width: 60%;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                .title{
                    color: var(--text-color);
                    font-size: .15rem;
                    margin-bottom: .08rem;
                    font-weight: 600;
                }
                .company_name{
                    margin-bottom: .08rem;
                }
                .require{
                    display: flex;
                    justify-content: space-between;
                }
            }
            div.right{
                width: 40%;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                text-align: right;
                div.salary{
                    font-size: .15rem;
                    color: red;
                }
                div.date{
                    font-size: .12rem;
                    color: var(--el-info);
                    padding: 0 .1rem;
                }
            }
        }

        .section2{
            h3{
                font-size: .15rem;
                font-weight: 600;
                margin-bottom: .1rem;
            }
            p{
                color: var(--el-info);
            }
        }
        .section3{
            color: var(--el-info);
            h3{
                color: var(--text-color);
                font-size: .15rem;
                font-weight: 600;
            }
            pre{
                padding: .02rem;
                margin: .05rem 0;
            }
            div{
                margin-bottom: .1rem;
            }

        }

        .section4{
            h3{
                font-size: .15rem;
                font-weight: 600;
                margin-bottom: .1rem;
            }
            ul{
                display: flex;
                flex-wrap: wrap;
                li{
                    color: #6caac8;
                    margin: .02rem;
                    padding: .05rem;
                    background-color: #e9f8ff;
                }
            }
        }

        .btn{
            width: 100%;
            position: fixed;
            bottom: 0;
            margin-bottom: .03rem;
        }
    }
</style>
