<template>
    <div>
        <ul>
            <li v-for="item in sectionInfo.body.items" @click="goDetail(item)">
                <a href="#" style="color: grey">
                    <img :src="item.img_url" alt="">
                    <div class="name">
                        {{item.product_name}}
                    </div>
                </a>

            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "CategoryGroup",
        props: ["sectionInfo"],
        methods:{
            goDetail(item){
                // console.log(item.action.path)
                this.$router.push("/goods_detail/" + item.action.path)
            }
        }
    }
</script>

<style scoped lang="scss">
    ul {
        width: 100%;
        display: flex;
        flex-flow: row wrap;

        li {
            padding-bottom: .3rem;
            width: 33.333%;
            a{
                display: flex;
                flex-flow: column;
                align-items: center;
            }
            img {
                width: 50%;
            }
            .name{
                text-align: center;
                width: 90%;
                margin-top: .28rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>
