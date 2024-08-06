<template>
  <div class="max-w-[20rem] rounded overflow-hidden shadow-[0_0px_3px_1.5px_rgba(0,0,0,0.2)]">
    <div class="relative group px-5 cursor-pointer">
      <a :href="link" target="_blank">
        <img class="w-full mx-auto mt-4 border-[#cac8c5] border-[0.2rem]" :src="gambar" :alt="title">
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-5 px-8 font-semibold">
          Tekan untuk menuju ke project
        </div>
      </a>
    </div>
    <div class="px-5 pb-2 pt-3">
      <div class="font-semibold font-serif text-md mb-3 text-center">{{ title }}</div>
      <div 
        class="select-none text-gray-700 text-justify text-[0.9rem] overflow-y-scroll border-[0.3rem] border-r-[0rem] border-[#cac8c5] p-2" 
        :class="{'h-[7.1rem]': !isExpanded, 'h-auto': isExpanded}" 
        @dblclick="toggleExpand"
      >
        {{ description }}
      </div>
    </div>
    <div class="my-2 pb-2 mx-auto px-6 select-none">
        <div class="flex flex-wrap">
            <div>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-[0.7rem] font-semibold text-gray-700 mr-2 mb-2" v-for="tech in techStack.split(',')" :key="tech">{{ tech }}</span>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    gambar: String,
    techStack: String,
    link: String,
  },
  data() {
    return {
      isExpanded: false,
      tapCount:0,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>