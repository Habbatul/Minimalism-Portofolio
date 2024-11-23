<template>
  <div class="mb-1 2xl:mb-3">
    <h1 class="font-serif text-4xl text-center mt-6">My Project</h1>
    <p class="font-serif text-[0.93rem] leading-[1.3rem] md:text-base max-w-[38rem] text-center mt-4 px-3 mx-auto">
      Some projects I built during my programming journey. You can filter the projects below and visit a project by clicking on its image. Klick the description to see detail of the projects you want to know.
    </p>

    <a
      href="#"
      class="fixed bottom-4 right-4 md:right-8 border-black bg-white border-[0.15rem] text-black py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg text-center cursor-pointer transition duration-100 hover:bg-black hover:text-white z-50 text-[0.8rem] text-base md:text-lg font-serif"
      @click="toggleFilter"
    >
      Filter Project
    </a>

    <FilterComponent
      :categories="categories"
      :showFilter="showFilter"
      @toggle-filter="toggleFilter"
      @filter="applyFilter"
    />


    <div class="md:max-w-6xl mx-auto mt-10">
      <div v-if="initialLoading" class="flex justify-center mt-4">
        <div class="loader"></div>
      </div>

      <div class="flex flex-wrap justify-center">
        <Card
          class="mx-[0.3rem] w-[10.5rem] md:mx-5 mb-7 md:mb-9 md:w-full"
          v-for="project in projects"
          :key="project.id"
          :id="project.id"
          :name="project.name"
          :overview="project.overview"
          :description="project.description"
          :note="project.note"
          :categories="project.categories"
          :tags="project.tags"
          :images="project.images"
          :link="project.url_project"
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
import Card from '../components/project/Card.vue';
import FilterComponent from '../components/project/FilterComponent.vue';

export default {
  name: 'Portofolio',
  components: {
    Card,
    FilterComponent,
  },
  props: {
    baseUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      categories: [],
      portfolios: [],
      projects: [],
      showFilter: false,
      currentCursor: 0,
      itemsPerPage: 6,
      loading: false,
      initialLoading: true,
      hasMore: true,
      selectedCategory: null,
    };
  },
  mounted() {
    this.fetchCategories();
    this.fetchPortfolios();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(`${this.baseUrl}/category/names`);
        this.categories = response.data.categories;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    async fetchPortfolios() {
      if (this.loading) return;

      this.loading = true;
      try {
        const response = await axios.get(`${this.baseUrl}/project`, {
          params: {
            category: this.selectedCategory || '',
            cursor: this.currentCursor,
            limit: this.itemsPerPage,
          },
        });

        const data = response.data.projects || [];
        
        this.hasMore = data.length === this.itemsPerPage;

        this.portfolios = [...this.portfolios, ...data];
        this.projects = this.portfolios;

        this.currentCursor = data.length ? data[data.length - 1].id : this.currentCursor;
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      } finally {
        this.loading = false;
        this.initialLoading = false;
      }
    },
    applyFilter(category) {
      this.selectedCategory = category;
      this.portfolios = [];
      this.projects = []; 
      this.currentCursor = 0; 
      this.hasMore = true; 
      this.fetchPortfolios();
    },
    loadMore() {
      if (!this.loading && this.hasMore) {
        this.fetchPortfolios();
      }
    },
    toggleFilter() {
      this.showFilter = !this.showFilter;
    },
  },
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
