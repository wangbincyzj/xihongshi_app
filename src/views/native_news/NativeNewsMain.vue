<template>
    <div class="native_news">
        <keep-alive include="NativeNewsList">
            <router-view/>
        </keep-alive>

    </div>
</template>

<script>
    export default {
        name: "NativeNewsMain",
    }
</script>

<style scoped>

</style>
