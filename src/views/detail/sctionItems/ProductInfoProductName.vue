<template>
    <div class="product_info_product_name"> <!--index=3-->
        <div class="wrapper">
            <div class="content">{{name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductInfoProductName",
        props:["view"],
        computed:{
            name() {
                return this.view.data.product_info.name
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper{
        padding: .16rem .18rem 0;
        text-align: left;
        background: #fff;
        .content{
            font-size: .25rem;
            line-height: 0.8em;
        }
    }
</style>
