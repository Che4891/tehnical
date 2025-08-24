<script setup lang="ts">
import {Navigation, Pagination, Scrollbar, Autoplay, EffectFade} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export interface ISwiperItem {
  name: string;
  image: string;
  url?: string;
}

interface SwiperProps {
  slides: ISwiperItem[];
  slidesPerView?: number;
  spaceBetween?: number;
  pagination?: boolean;
  loop?: boolean;
}

const props = withDefaults(defineProps<SwiperProps>(), {
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: true,
  loop: false
});

const onSwiper = (swiper: any) => {
  console.log("Swiper instance:", swiper);
};
const onSlideChange = () => {
  console.log("Slide changed");
};

const modules = [Navigation, Pagination, Scrollbar, Autoplay, EffectFade];
</script>

<template>
  <div class="carousel">
    <swiper
        :loop="props.loop"
        :modules="modules"
        :navigation="true"
        :slides-per-view="props.slidesPerView"
        :space-between="props.spaceBetween"
        :pagination="props.pagination"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :speed="1000"
        :draggable="true"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
    >
      <swiper-slide v-for="(slide, index) in props.slides" :key="index">
        <div class="swiper-item">
          <img
              loading="lazy"
              :alt="slide.name"
              :src="slide.image"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
