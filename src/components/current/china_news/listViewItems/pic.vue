<template>
    <div class="pic">
        <h3>{{sectionInfo.title}}</h3>
        <ul class="pics">
            <li>
                <img :src="sectionInfo.appPic1" alt="">
            </li>
            <li>
                <img :src="sectionInfo.appPic2" alt="">
            </li>
            <li>
                <img :src="sectionInfo.appPic3" alt="">
                <div class="nums">
                    <img src="@/assets/image/china_news/pics.png" alt="">
                    <span>3</span>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "pic",
        props:["sectionInfo"],
        created() {
            console.log(this.sectionInfo)
        }
    }
</script>

<style scoped lang="scss">
    .pic{
        h3{
            font-size: .16rem;
            margin-bottom: .1rem;
        }
        ul.pics{
            display: flex;
            li{
                position: relative;
                flex: 1;
                padding: 0 .05rem;
                img:nth-child(1){
                    width: 100%;
                }
                div.nums{
                    width: .4rem;
                    position: absolute;
                    right: .05rem;
                    bottom: 0;
                    display: flex;
                    img{
                        width: 100%;
                    }
                    span{
                        position: absolute;
                        right: 0;
                        color: white;
                    }
                }

            }

        }
    }
</style>
