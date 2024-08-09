<template>
  <div class="mb-1 2xl:mb-3">
    <h1 class="font-serif text-4xl text-center mt-6">My Project</h1>
    <p class="font-serif text-[0.93rem] leading-[1.3rem] md:text-base max-w-[38rem] text-center mt-4 px-3 mx-auto">
      Some projects I built during my programming journey include hobbies, portfolios, and professional work. You can filter the projects below and visit a project by clicking on its image. Double-click or double-tap the project description to expand it and read it fully without scrolling.
    </p>
    
    <a
      href="#"
      class="fixed bottom-4 right-4 md:right-8 border-black bg-white border-[0.15rem] text-black py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg text-center cursor-pointer transition duration-100 hover:bg-black hover:text-white z-50 text-[0.8rem] text-base md:text-lg font-serif"
      @click="toggleFilter"
    >
      Filter Project
    </a>

    <FilterComponent :portfolios="portfolios" :showFilter="showFilter" @toggle-filter="toggleFilter" @filter="applyFilter" />

    <div class="max-w-6xl mx-auto mt-10">
      <div v-if="initialLoading" class="flex justify-center mt-4">
        <div class="loader"></div>
      </div>

      <div class="flex flex-wrap justify-center">
        <Card
          class="mx-5 mb-5 md:mb-9"
          v-for="item in displayedPortfolios"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :gambar="`https://hqhan.my.id/upload/${item.gambar}`"
          :techStack="item.techStack"
          :link="item.link"
        />
      </div>

      <div v-if="loading && !initialLoading" class="flex justify-center mt-4">
        <div class="loader"></div>
      </div>

      <div v-if="!loading && hasMore && !initialLoading" class="flex justify-center mt-2">
        <button
          class="bg-white border border-black text-black py-2 px-4 hover:text-white hover:bg-black transition duration-100 text-xl md:text-2xl font-serif"
          @click="loadMore"
        >
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from '../components/listcard_components/Card.vue';
import FilterComponent from '../components/listcard_components/FilterComponent.vue';

export default {
  name: 'Portofolio',
  components: {
    Card,
    FilterComponent
  },
  data() {
    return {
      portfolios: [],
      filteredPortfolios: [],
      displayedPortfolios: [],
      showFilter: false,
      currentPage: 1,
      itemsPerPage: 6,
      loading: false,
      initialLoading: true,
      hasMore: true
    };
  },
  mounted() {
    this.fetchPortfolios();
  },
  methods: {
    async fetchPortfolios() {
      try {
        const response = await axios.get('https://hqhan.my.id/api/portofolio');
        if (response.data && response.data.status === 'success') {
          this.portfolios = response.data.data;
          this.filteredPortfolios = this.portfolios;
          this.updateDisplayedPortfolios();
        }
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      } finally {
        this.initialLoading = false;
      }
    },
    applyFilter(category) {
      if (category === '') {
        this.filteredPortfolios = this.portfolios;
      } else {
        this.filteredPortfolios = this.portfolios.filter(item =>
          item.kategori.split(',').map(c => c.trim()).includes(category)
        );
      }
      this.currentPage = 1;
      this.updateDisplayedPortfolios();
    },
    updateDisplayedPortfolios() {
      const nextItems = this.filteredPortfolios.slice(0, this.currentPage * this.itemsPerPage);
      this.displayedPortfolios = nextItems;
      this.hasMore = this.filteredPortfolios.length > this.displayedPortfolios.length;
    },
    async loadMore() {
      this.loading = true;
      await new Promise(resolve => setTimeout(resolve, 10));

      const start = this.currentPage * this.itemsPerPage;
      const end = (this.currentPage + 1) * this.itemsPerPage;
      const nextItems = this.filteredPortfolios.slice(start, end);

      if (nextItems.length > 0) {
        this.displayedPortfolios = [
          ...this.displayedPortfolios,
          ...nextItems
        ];
        this.currentPage += 1;
        this.hasMore = this.filteredPortfolios.length > this.displayedPortfolios.length;
      } else {
        this.hasMore = false;
      }
      
      this.loading = false;
    },
    toggleFilter() {
      this.showFilter = !this.showFilter;
    }
  }
};
</script>

<style scoped>
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid black;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
