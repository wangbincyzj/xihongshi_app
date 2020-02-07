<template>
    <div class="blank_line" :style="sectionStyle"></div>
</template>

<script>
    export default {
        name: "BlankLine",
        props: ["view", "index"],
        mounted() {
        },
        computed: {
            sectionInfo() {
                let obj = this.view.data.goods_tpl_datas;
                return obj[Object.keys(obj)[0]].sections[this.index];

            },
            sectionStyle() {
                let height = this.sectionInfo.body.line_height / 100/4 + "rem";
                let background = this.sectionInfo.body.bg_color ? this.sectionInfo.body.bg_color : null;
                return {height, background}
            }
        }
    }
</script>

<style scoped>
    .blank_line {

    }
</style>
