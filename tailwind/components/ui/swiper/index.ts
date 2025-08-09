export { default as Swiper } from './Swiper.vue'

interface ISwiperItem {
    name: string
    img: string
    url?: string
}

export const SwiperItems: ISwiperItem[] = [
    {
        image: "image_url_1",
        name: 'image_name_1'
    },
    {
        image: "image_url_2",
        name: 'image_name_2'
    },
    {
        image: "image_url_3",
        name: 'image_name_3'
    },
    {
        image: "image_url_4",
        name: 'image_name_4'
    },
]