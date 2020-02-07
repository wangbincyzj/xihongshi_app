<template>
    <div class="category_item">
        <div :is="getCpnName(item)" :sectionInfo="item" v-for="item in categoryItem.category_list"></div>
    </div>
</template>

<script>
    import CategoryGroup from "@/views/category/components/CategoryGroup";
    import CellAutoFill from "@/views/category/components/CellAutoFill";
    import CategoryTitle from "@/views/category/components/CategoryTitle";

    export default {
        name: "CategoryItem",
        components: {
            CategoryTitle, CellAutoFill, CategoryGroup
        },
        props: ["categoryItem", "activeIndex"],
        methods: {
            getCpnName(item) {
                if (item.view_type === "cells_auto_fill") return "CellAutoFill";
                if (item.view_type === "category_title") return "CategoryTitle";
                if (item.view_type === "category_group") return "CategoryGroup";
            }
        },
    }
</script>

<style scoped>

</style>
