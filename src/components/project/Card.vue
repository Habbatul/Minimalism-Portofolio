<template>
    <div class="inter bg-white border border-black max-w-[20rem] rounded overflow-hidden shadow-[0_0px_3px_1.3px_rgba(0,0,0,0.2)]">
      <div v-if="images && images[0]" class="relative group px-5 cursor-pointer flex justify-center mt-2 md:mt-5">
        <a :href="link" target="_blank">
          <div class="relative w-[9.25rem] h-[9.25rem] md:w-64 md:h-64 overflow-hidden border-2 border-black"> 
            <img
              class="object-cover w-full"
              :src="images[0]"
              :alt="name"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-8 font-semibold text-sm md:text-base"
            >
              Tekan untuk menuju ke project
            </div>
          </div>
        </a>
      </div>


      <div class="px-5 mb-4 pt-3">
        <div class="mb-2 font-bold leading-[1.1rem] md:leading-5 text-base md:text-xl text-center">{{ name }}</div>
        <div class="text-gray-500 leading-[1.1rem] md:leading-5 text-[0.85rem] md:text-base text-center px-1 md:px-10 inter-thin">{{ overview }}</div>
      </div>

      <a :href="`/project/${id}`" target="_blank">
        <div class="px-3 md:px-5 mb-2 hover:text-red-500 hover:cursor-pointer transition-all">
          <div class="py-1 md:py-2 border-y-[0.1rem] border-black text-[0.8rem] md:text-sm"> <span class="line-clamp-2">{{ description }}</span></div>
        </div>
      </a>  

      <div class="mx-3 md:mx-5 mb-4">
      <p class="mt-1 text-[0.8rem] md:text-sm">
        <span class="font-bold">Category : </span>
        <span v-for="(category, index) in categories" :key="category">
          {{ category }}<span v-if="index < categories.length - 1">, </span>
        </span>
      </p>

      <p class="mb-2 text-[0.8rem] md:text-sm">
        <span class="font-bold">Tags : </span>
        <span v-for="(tag, index) in tags" :key="tag">
          {{ tag }}<span v-if="index < tags.length - 1">, </span>
        </span>
      </p>

        <div v-if="note" class="text-red-500 font-semibold text-[0.8rem] md:text-sm italic">*{{ note }}</div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    overview: String,
    description: String,
    note: String,
    categories: Array,
    tags: Array,
    images: Array,
    link: String,
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap');

.inter {
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-weight: 132;
  font-style: normal;
}

.inter-thin {
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-weight: 120;
  font-style: normal;
}
</style>
