<template>
    <div class="zb">
        <h3>{{sectionInfo.title}}</h3>
        <img :src="sectionInfo.picture" alt="">
        <div class="left_tag">回放</div>
        <div class="right_tag">
            <img src="@/assets/image/china_news/camara.png" alt="">
            <span>LIVE</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "zb",
        props:["sectionInfo"],
        created() {
            console.log(this.sectionInfo)
        }
    }
</script>

<style scoped lang="scss">
    .zb{
        position: relative;
        h3{
            font-weight: 600;
            font-size: .18rem;
            margin-bottom: .1rem;
        }
        >img{
            width: 100%;
            margin-bottom: 30px;
        }
        div.left_tag{
            position: absolute;
            left: 0;
            bottom: -.3rem;
            background: grey;
            color: white;
            padding: 0 .05rem;
            border-radius: .05rem;

        }
        div.right_tag{
            line-height: .2rem;
            height: .2rem;
            border-radius: .05rem;
            padding: .03rem;
            img{
                height: 80%;
                margin: 0 .05rem;
            }
            display: flex;
            align-items: center;
            color: white;
            position: absolute;
            right: .05rem;
            bottom: .05rem;
            background: red;
        }
    }
</style>
