<script setup lang="ts">
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { SwiperItems, type ISwiperItem } from "./index";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const slides = SwiperItems;

const onSwiper = () => {};
const onSlideChange = () => {};

const modules = [Navigation, Pagination, Scrollbar];
</script>

<template>
  <div class="carousel">
    <swiper
        :loop="true"
        :modules="modules"
        :navigation="true"
        :slides-per-view="1"
        :space-between="150"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
        :pagination="true"
        :draggable="true"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
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
