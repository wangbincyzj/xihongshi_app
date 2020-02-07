<template>
    <div class="v-header">
    </div>
</template>

<script>
    export default {
        name: "Header",
        components:{
        }
    }
</script>

<style scoped lang="scss">
    .v-header {
        div.center{
            font-size: .3rem;
            color: #666;
        }
        header {
            background: #f2f2f2;

            div.img{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                img{
                    width: 0.5rem;
                    height: 0.5rem;

                }
                #i2{
                    width: 0.6rem;
                    height: 0.6rem;
                }

            }
        }
    }
</style>
