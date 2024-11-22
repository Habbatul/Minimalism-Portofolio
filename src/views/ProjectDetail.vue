<template>

  <div class="flex justify-center w-full">
    <div class="max-w-2xl px-7 md:px-20 w-full mt-10">
        <div class="mb-5 mt-2">
            <swiper
                :modules="modules"
                :slides-per-view="1"
                navigation
                :pagination="{ clickable: true }"
                class="w-full max-w-lg h-64 md:h-96 mx-auto bg-black"
            >
                <swiper-slide 
                v-for="(image, index) in project.images" 
                :key="index" 
                class="flex items-center justify-center"
                >
                <img 
                    :src="image" 
                    :alt="'Image ' + index" 
                    class="h-full max-h-full w-auto object-contain bg-black"
                >
                </swiper-slide>
            </swiper>

        </div>
        
        <p> <span class="text-2xl font-bold">{{ project.name }}</span></p>
        <p>{{ project.overview }}</p>
        <a :href="project.url_project" target="_blank" class="text-red-500 underline">Visit Project</a>
        <div class="my-4">
        <h2 class="text-xl font-semibold">About this project:</h2>
        <p>{{ project.description }}</p>
        </div>
        <div class="mb-4">

        </div>
        <div class="mb-4">

            <p class="mb-1">
                <span class="font-semibold">Tags : </span>
                <span v-for="(tag, index) in project.tags" :key="tag">
                {{ tag }}<span v-if="index < project.tags.length - 1">, </span>
                </span>
            </p>

            <p>
                <span class="font-semibold">Category : </span>
                <span v-for="(category, index) in project.categories" :key="category">
                {{ category }}<span v-if="index < project.categories.length - 1">, </span>
                </span>
            </p>

        </div>
        <div class="mt-4">

        </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  name: 'DetailProject',
  components: {
    Swiper,
    SwiperSlide,
  },
    setup() {
        return {
            modules: [Navigation, Pagination],
        };
    },
  data() {
    return {
      project: {
        categories: [],
        description: '',
        id: 0,
        images: [],
        name: '',
        note: '',
        overview: '',
        tags: [],
        url_project: '',
      },
    };
  },
  async mounted() {
    const { id } = this.$route.params;
    try {
      const response = await axios.get(`http://dontknow/project/${id}`);
      this.project = response.data;
      console.log(this.project.images);
    } catch (error) {
      console.error('Failed to fetch project:', error);
    }
  },
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
    color: white  !important;
}
.swiper-pagination-bullet-active{
    background: white !important;
    opacity: 1 !important;
}
.swiper-pagination-bullet{
    opacity: 0.5;
    background: rgb(255, 255, 255);
}
</style>
