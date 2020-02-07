<template>
    <div id="native_news">

        <NativeNewsHeader style="position: fixed; top: 0; left: 0; right: 0"/>

        <NativeNewsMain style="margin-top: 40px"/>
    </div>
</template>

<script>
    import NativeNewsHeader from "@/views/native_news/NativeNewsHeader";
    import NativeNewsMain from "@/views/native_news/NativeNewsMain";
    export default {
        name: "NativeNews",
        components:{
            NativeNewsHeader, NativeNewsMain
        },
        // beforeRouteEnter(to, from, next) {
        //     next(vm=>{
        //         vm.$store.state.isShowFooter = false;
        //     })
        // },
        // beforeRouteLeave(to, from, next){
        //     this.$store.state.isShowFooter = true;
        //     next()
        // }
    }
</script>

<style scoped>

</style>
