<template>
    <div id="home">
        <HomeHeader/>
        <HomeMain/>
    </div>
</template>

<script>
    import HomeHeader from "@/views/home/HomeHeader";
    import HomeMain from "@/views/home/HomeMain";
    export default {
        name: "Home",
        components: {HomeMain, HomeHeader},
        created() {
            this.$bus.$emit("footerIndexChange", {index:0});
        }

    }
</script>

<style scoped>

</style>
