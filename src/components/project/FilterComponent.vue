<template>
  <div v-if="showFilter" class="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50" @click="handleOutsideClick">
    <div id="card" class="bg-white p-6 rounded shadow-lg max-w-sm w-full mx-10" @click.stop>
      <div class="border-b-[0.1rem] border-black mb-4 mx-3">
        <h1 class="font-serif text-center text-2xl md:text-[1.6rem]">Projects Categories</h1>
        <p class="mb-2 mt-1 text-[0.6rem] md:text-[0.7rem] text-center font-serif">Here are some of my project categories, please select by clicking on the desired category to filter the projects.</p>
      </div>
      <button @click="toggleFilter" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
        &times;
      </button>
      
      <div class="flex flex-wrap items-center justify-center">
        <a
          href="#"
          class="block text-sm md:text-base rounded-lg mx-2 md:mx-3 my-1 p-1 cursor-pointer text-black hover:underline underline-offset-[7px] transition"
          :class="{ 'font-bold': filterKategori === '' }"
          @click="applyFilter('')"
        >
          All Categories
        </a>
        <template v-for="(category, index) in uniqueCategories" :key="index">
          <a
            href="#"
            class="block text-sm md:text-base rounded-lg mx-2 md:mx-3 my-1 p-1 cursor-pointer text-black hover:underline underline-offset-[7px] transition"
            :class="{ 'font-bold': filterKategori === category }"
            @click="applyFilter(category)"
          >
            {{ category }}
          </a>
        </template>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    portfolios: Array,
    showFilter: Boolean
  },
  data() {
    return {
      filterKategori: ''
    };
  },
  computed: {
    uniqueCategories() {
      const categories = this.portfolios.flatMap(portfolio => portfolio.kategori.split(','));
      const uniqueCategories = [...new Set(categories.map(category => category.trim()))];
      const nonEmptyCategories = uniqueCategories.filter(category => category !== '');
      return nonEmptyCategories;
    }
  },
  methods: {
    toggleFilter() {
      this.$emit('toggle-filter');
    },
    applyFilter(category) {
      this.filterKategori = category;
      this.$emit('filter', category);
      this.toggleFilter();
    },
    handleOutsideClick(event) {
      const filterCard = this.$el.querySelector('#card');
      if (filterCard && !filterCard.contains(event.target)) {
        this.toggleFilter();
      }
    }
  },
};
</script>
