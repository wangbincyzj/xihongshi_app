<template>
    <div id="home_main">

        <Swiper style="height: 2.07rem"/>

        <DividerLine line-height=".05rem"/>

        <Nav/>
    </div>
</template>

<script>
    import Swiper from "@/views/home/HomeMainCpn/Swiper";
    import Nav from "@/views/home/HomeMainCpn/Nav";
    import DividerLine from "@/components/common/DividerLine";
    export default {
        name: "Main",
        components:{Swiper, Nav, DividerLine}
    }
</script>

<style scoped>

</style>
