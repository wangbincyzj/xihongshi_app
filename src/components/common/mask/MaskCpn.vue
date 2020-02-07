<template>
    <div class="mask">
        <div class="hide"></div>
        <div class="content">
            <slot/>
            <div class="confirm-wrapper">
                <div class="confirm">完成</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "MaskCpn"
    }
</script>

<style scoped lang="scss">
    div.mask {

        .hide {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 999;
            background: rgba(0, 0, 0, .8)
        }

        .content{
            overflow-y: scroll;
            position: fixed;
            z-index: 1000;
            left: 0;
            right: 0;
            bottom: 0;
            width: 7.2rem;
            height: 9.92rem;
            color: black;
            background: white;
            border-top-left-radius: .1rem;
            border-top-right-radius: .1rem;
            padding: 0 .32rem 1.27rem;
            div.confirm-wrapper{
                position: fixed;
                bottom: 0;
                left: 0;
                background: white;
                width: 100%;
                height: 1.2rem;
                padding: .3rem .5rem;
                div.confirm{
                    width: 100%;
                    height: .65rem;
                    line-height: .65rem;
                    color: white;
                    border-radius: .3rem;
                    background: #ff6700;
                }

            }
        }
    }
</style>
