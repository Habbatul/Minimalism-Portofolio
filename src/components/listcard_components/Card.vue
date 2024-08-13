<template>
  <div>

    <div class="bg-white border border-black max-w-[20rem] rounded overflow-hidden shadow-[0_0px_3px_1.3px_rgba(0,0,0,0.2)]">
      <div class="relative group px-5 cursor-pointer">
        <a :href="link" target="_blank">
          <img class="w-full mx-auto mt-4 border-[#cac8c5] border-[0.2rem]" :src="gambar" :alt="title">
          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-5 px-8 font-semibold">
            Tekan untuk menuju ke project
          </div>
        </a>
      </div>
      <div class="px-5 pb-5 pt-3">
        <div class="font-semibold font-serif text-md mb-3 text-center">{{ title }}</div>
        <div 
          class="select-none text-gray-700 text-[0.9rem] overflow-y-scroll border-[0.3rem] border-r-[0rem] border-[#cac8c5] leading-[1.25rem] px-2 py-1 text-justify"
          :class="{'h-[6.65rem]': !isExpanded, 'h-auto': isExpanded}" 
          @dblclick="toggleExpand"
        >
        {{ description }}
        </div>
      </div>
    </div>

    <div class="relative pt-0 pb-[0.5rem] z-[-1]">
      <div class="absolute inset-0 flex items-center justify-center select-none text-xl">
        |<span class="mx-10">|</span>|<span class="mx-10">|</span>|
      </div>
    </div>


    <div class="bg-white border border-black max-w-[20rem] rounded overflow-hidden shadow-[0_0px_3px_1.3px_rgba(0,0,0,0.2)]">
      <div class="mt-1 mb-[0.7rem] pt-[0.35rem] mx-auto px-6 select-none">
        <p class="mb-[0.58rem] ml-1 font-serif underline underline-offset-4">Tech Stack : </p>
          <div class="flex flex-wrap">
              <div>
              <span class="inline-block bg-gray-200 rounded-lg px-3 py-1 text-[0.7rem] font-semibold text-gray-700 mr-[0.45rem] mb-[0.4rem]" v-for="tech in techStack.split(',')" :key="tech">{{ tech }}</span>
              </div>
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