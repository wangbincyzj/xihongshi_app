<template>
    <swiper>
        <swiper-item v-for="item in sectionInfo" :key="item.img_url">
            <img :src="item.img_url" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
    import Swiper from "@/components/common/swiper/Swiper";
    import SwiperItem from "@/components/common/swiper/SwiperItem";
    export default {
        name: "ProductInfoProductGallery",
        components:{Swiper, SwiperItem},
        props:["view"],
        created() {
            // console.log(this.view);
            // console.log(this.$parent);
        },
        computed:{
            sectionInfo() {
                let ret =  this.view.data.goods_info[this.$store.state.detailActiveIndex].gallery_v3;
                ret.shift();
                return ret
            }
        }
    }
</script>

<style scoped>

</style>
