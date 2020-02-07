<template>
    <div class="item">
        <div class="left">
            <div class="title">{{item.name}}</div>
            <div class="require">
                <span>学历 {{item.education}}</span>
                <span>经验 {{item.experience}}</span>
            </div>
            <ul class="features">
                <li v-for="f in features">{{f}}</li>
            </ul>

            <div class="address ellipsis">地址:{{item.address}}</div>
        </div>
        <div class="right">
            <div class="salary">{{item.salary}}/每月</div>
            <div class="data">{{item.create_time|djangoTimeFormat|time}}</div>
            <div class="pub_user">{{item.pub_user}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListViewItem",
        props: ["item"],
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
            }
        },
        created() {
            console.log(this.item)
        }
    }
</script>

<style scoped lang="scss">
    .item {
        border-radius: .05rem;
        border: 1px solid rgba(192, 192, 192, 0.27);
        padding: .03rem;
        display: flex;
        justify-content: space-between;

        .left {
            width: 60%;
            display: flex;
            flex-flow: column;
            .title {
                font-weight: 600;
            }

            .require {
                color: var(--el-info);
                display: flex;
                justify-content: space-between;
            }

            ul.features {
                display: flex;
                flex-flow: row wrap;
                justify-content: left;

                li {
                    background: var(--el-success);
                    border-radius: .05rem;
                    color: white;
                    margin: .03rem .03rem .03rem 0;
                    line-height: 1;
                    padding: .01rem .03rem;
                }
            }
        }

        .right {
            color: var(--el-info);
            text-align: right;

        }

    }
</style>
