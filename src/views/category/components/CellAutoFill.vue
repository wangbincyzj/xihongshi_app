<template>
    <div class="cells_auto_fill multi_cell" :style="getWrapStyle()">
        <a v-for="item in sectionInfo.body.items"
           :href="item.action.path" class="exposure items"
           :style="getItemStyle(item, true)"
        >
            <img :src="item.img_url" alt="" :style="getItemStyle(item)">
        </a>
    </div>
</template>

<script>
    export default {
        name: "CellAutoFill",
        props: ["sectionInfo"],
        methods: {
            getItemStyle(item, isDiv) {
                // let width = item.w ? item.w/100 + "rem" : null;
                let width = "100%";
                // let height = item.h ? item.h/100 + "rem" : null;
                let height = "auto";
                let left = item.x ? item.x/100 + "rem" : null;
                let top = item.y ? item.y/100 + "rem" : null;
                let marginLeft = item.marginLeft ? item.marginLeft/100 + "rem": null;
                let marginRight = item.marginRight ? item.marginRight/100 + "rem": null;
                return isDiv? {width, height, left, top, marginLeft, marginRight} : {width, height,  marginLeft, marginRight}
            },
            heightCheck() {

            },
            getWrapStyle(){
                // console.log(this.sectionInfo)
                // let width = this.sectionInfo.body.w ? this.sectionInfo.body.w/100 + "rem": null;
                let width = "100%";
                let height = ".5rem";
                // let height = this.sectionInfo.body.h ? this.sectionInfo.body.h/100 + "rem": null;
                // if (this.sectionInfo.body.h < this.sectionInfo.body.items[0].h){
                //     height = this.sectionInfo.body.items[0].h/100 + "rem"
                // }
                let background = this.sectionInfo.body.bg_color ? this.sectionInfo.body.bg_color : null;
                let style = {width, height, background}
                return style
            }
        }
    }
</script>

<style scoped>
    .cells_auto_fill{
        position: relative;
    }
    .items{
        position: absolute;
        display: block;
    }
    a{
        background-color: transparent;
        outline: 0;

    }
</style>
