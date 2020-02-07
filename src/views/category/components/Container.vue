<template>
    <div class="container" ref="container" @scroll="scroll($event)">

        <!--左边菜单栏-->
        <ul class="nav">
            <li v-for="(item,index) in categoryItems" :class="{active: activeIndex===index}" @click="changeIndex(index)">
                {{item.category_name}}
            </li>
        </ul>

        <!--右边商品展示栏-->
        <div class="content" ref="content">
            <category-item :ref="index" :categoryItem="item" v-for="(item,index) in categoryItems"
                           v-if="categoryItems"/>
        </div>
    </div>
</template>

<script>
    import CategoryTitle from "@/views/category/components/CategoryTitle";
    import CategoryGroup from "@/views/category/components/CategoryGroup";
    import CellAutoFill from "@/views/category/components/CellAutoFill";
    import CategoryItem from "@/views/category/components/CategoryItem";

    export default {
        name: "Container",
        props: ["categoryItems"],
        components: {CategoryTitle, CategoryGroup, CellAutoFill, CategoryItem},
        data() {
            return {
                activeIndex: 0,
                scrollMethod: null,

            }
        },
        computed: {
            info() {
                return this.categoryItems[0].category_list[2].body.items
            },
            info2() {
                return this.categoryItems[0].category_list[0]
            }
        },
        methods: {
            scroll(e) {
                let itemsNode = [...this.$refs.content.children];
                let top = itemsNode.map(value => value.offsetTop);
                top.some((value, index) => {
                    if (value >= e.target.scrollTop) {
                        this.activeIndex = index;
                        return true
                    }
                })
            },
            changeIndex(index) {
                this.activeIndex = index;
                let target = this.$refs[index][0].$el;
                this.$refs.container.scrollTo(0, target.offsetTop)
            }
        },

    }
</script>

<style scoped lang="scss">
    .container {
        position: fixed;
        top: .46rem;
        left: 0;
        bottom: 50px;
        /*background: rgba(234, 98, 91, 0.17);*/
        width: 100%;
        overflow-y: auto;

        ul {
            position: fixed;
            top: .46rem;
            left: 0;
            bottom: 50px;
            width: 1rem;
            border-right: 1px solid rgb(239, 239, 239);
            overflow-y: auto;

            &::-webkit-scrollbar {
                display: none;
            }

            li {
                font-size: .14rem;
                color: #3c3c3c;
                overflow: hidden;
                white-space: nowrap;
                display: block;
                line-height: .4rem;
                text-align: center;
                padding: 0 .08rem;
                transition: all 0.1s;
            }

            li.active {
                color: rgb(251, 125, 52);
                font-size: .16rem;
            }
        }

        div.content {
            /*position: relative;*/
            padding-left: 1.1rem;
            padding-right: .32rem;
            text-align: left;
            font-size: .12rem;
        }

    }
</style>
