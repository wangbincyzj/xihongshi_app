<template>
    <div class="job">
        <JobHeader style="position: fixed; left: 0; top: 0; right: 0; z-index: 100;"/>

        <JobMain style="margin-top: 48px"/>
    </div>
</template>

<script>
    import JobHeader from "@/views/job/JobHeader";
    import JobMain from "@/views/job/JobMain";
    export default {
        name: "Job",
        components: {JobMain, JobHeader}
    }
</script>

<style scoped>

</style>
