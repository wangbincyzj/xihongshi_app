<template>
    <div>
        <van-nav-bar
                title="中国新闻网"
                left-text="首页"
                left-arrow
                @click-left="$router.push('/')"
        />
    </div>
</template>

<script>


    export default {
        name: "ChinaNewsHeader",

    }
</script>

<style scoped>

</style>
