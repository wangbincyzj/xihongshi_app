<template>
    <div id="china_news">

        <ChinaNewsHeader />

        <ChinaNewsMain />
    </div>


</template>

<script>
    import ChinaNewsHeader from "@/views/china_news/ChinaNewsHeader";
    import ChinaNewsMain from "@/views/china_news/ChinaNewsMain";

    export default {
        name: "ChinaNews",
        components: {ChinaNewsHeader, ChinaNewsMain}
    }
</script>

<style scoped>

</style>
