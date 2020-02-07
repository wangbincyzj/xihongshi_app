<template>
    <div class="divider_line" ref="dividerLine"></div>
</template>

<script>
    export default {
        name: "DividerLine",
        props:{
            color: {type: String, default: "#F5F5F5"},
            lineHeight: {type: String, default: ".1rem"}
        },
        mounted() {
            let el = this.$refs.dividerLine;
            el.style.height = this.lineHeight;
            el.style.backgroundColor = this.color
        }

    }
</script>

<style scoped>

</style>
