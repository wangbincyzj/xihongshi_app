<template>
    <div class="category_title" >
        <span>{{sectionInfo.body.category_name}}</span>
    </div>
</template>

<script>
    export default {
        name: "CategoryTitle",
        props: ["sectionInfo"]
    }
</script>

<style scoped lang="scss">
    .category_title {
        background: #fff;
        text-align: center;
        font-size: .14rem;
        color: rgb(60, 60, 60);
        height: 1.28rem;
        line-height: 1.28rem;
        /*background: #999999;*/
        margin-top: .2rem;
        width: 100%;

        span {
            position: relative;

            &::before {
                content: "";
                display: block;
                width: .4rem;
                position: absolute;
                left: -.6rem;
                top: 50%;
                border-bottom: 1px solid rgb(224, 224, 224);
            }

            &::after {
                content: "";
                display: block;
                width: .4rem;
                position: absolute;
                right: -.6rem;
                top: 50%;
                border-bottom: 1px solid rgb(224, 224, 224);
            }
        }

    }
</style>
