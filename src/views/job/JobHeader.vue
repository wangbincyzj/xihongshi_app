<template>
    <div class="job_header">
        <van-nav-bar
                title="本地招聘"
                left-text="返回"
                left-arrow
                @click-left="$router.back()"
        />
    </div>
</template>

<script>
    export default {
        name: "JobHeader"
    }
</script>

<style scoped>

</style>
