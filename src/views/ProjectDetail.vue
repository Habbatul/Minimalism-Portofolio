<template>

  <div class="flex justify-center w-full mb-8">
    <div class="max-w-4xl px-7 md:px-20 w-full mt-5">
        <a class="text-md hover:text-red-500 underline underline-offset-2 font-garamond text-xl ml-[-0.5rem] md:ml-[2rem] xl:ml-[1.5rem]" :href="`/project`">Back to List </a>

        <div class="mb-5 mt-3 mx-[-0.5rem] md:mx-[0.6rem] rounded-3xl border-2 border-black bg-[#f5f0e6]">
            <swiper
                :modules="modules"
                :slides-per-view="1"
                navigation
                :pagination="{ clickable: true }"
                class="w-full h-64 md:h-96 mx-auto rounded-2xl"
            >
                <swiper-slide 
                v-for="(image, index) in project.images" 
                :key="index" 
                class="flex items-center justify-center"
                >
                <img 
                    :src="image" 
                    :alt="'Image ' + index" 
                    class="h-full max-h-full w-auto object-contain"
                    style="user-select: none;-ms-user-select: none;-webkit-user-select: none;"
                >
                </swiper-slide>
            </swiper>

        </div>
                
        <p> <span class="text-3xl font-bold font-garamond">{{ project.name }}</span></p>
        <p class="font-garamond text-[1.1rem] font-medium mb-1">{{ project.overview }}</p>
        <a :href="project.url_project" target="_blank" class="text-red-800 hover:text-red-500 underline font-medium font-garamond text-lg">Visit The Project</a>
        <div class="my-4">
        <h2 class="text-2xl font-semibold font-garamond">About this project:</h2>
        <p class="font-garamond text-lg mt-2">{{ project.description }}</p>
        </div>

        <div class="mb-4 mt-6">

            <p class="mb-1 ">
                <span class="font-bold font-garamond text-lg">Tags : </span>
                <span class="font-garamond font-medium" v-for="(tag, index) in project.tags" :key="tag">
                {{ tag }}<span v-if="index < project.tags.length - 1">, </span>
                </span>
            </p>

            <p>
                <span class="font-bold font-garamond text-lg">Category : </span>
                <span class="font-garamond font-medium" v-for="(category, index) in project.categories" :key="category">
                {{ category }}<span v-if="index < project.categories.length - 1">, </span>
                </span>
            </p>

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
  props: {
    baseUrl: {
      type: String,
      required: true,
    }
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
      const response = await axios.get(`${this.baseUrl}/project/${id}`);
      this.project = response.data;

    } catch (error) {
      console.error('Failed to fetch project:', error);
    }
  },
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
    color: rgb(84, 84, 84)  !important;
    font-weight: 800;
}
.swiper-pagination-bullet-active{
    background: white !important;
    opacity: 1 !important;
}
.swiper-pagination-bullet{
    opacity: 0.5;
    background: rgb(255, 255, 255);
    border: 1px solid black;
}
</style>
