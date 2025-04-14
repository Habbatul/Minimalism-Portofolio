<template>
  <div v-if="showFilter" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="handleOutsideClick">
    <div id="card" class="bg-[#f6eee3] p-6 rounded shadow-lg max-w-sm w-full mx-10" @click.stop>
      <div class="border-b-[0.1rem] border-black mb-4 mx-3">
        <h1 class="font-serif text-center text-2xl md:text-[1.6rem]">Projects Categories</h1>
        <p class="mb-2 mt-1 text-[0.6rem] md:text-[0.7rem] text-center font-serif">
          Here are some of my project categories, please select by clicking on the desired category to filter the projects.
        </p>
      </div>
      <button @click="toggleFilter" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
        &times;
      </button>
      
      <div class="flex flex-wrap items-center justify-center">
        <a
          href="#"
          class="block text-sm md:text-base rounded-lg mx-2 md:mx-3 my-1 p-1 cursor-pointer text-black hover:underline underline-offset-[7px] transition"
          :class="{ 'font-bold': filterKategori === '' }"
          @click.prevent="applyFilter('')"
        >
          All Categories
        </a>
        <template v-for="(category, index) in uniqueCategories" :key="index">
          <a
            href="#"
            class="block text-sm md:text-base rounded-lg mx-2 md:mx-3 my-1 p-1 cursor-pointer text-black hover:underline underline-offset-[7px] transition"
            :class="{ 'font-bold': filterKategori === category }"
            @click.prevent="applyFilter(category)"
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
    showFilter: Boolean, // Menentukan apakah filter dialog ditampilkan
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filterKategori: '', // Kategori yang dipilih, default 'All Categories'
    };
  },
  computed: {
    // Menghasilkan daftar kategori unik dari props categories
    uniqueCategories() {
      return [...new Set(this.categories)];
    },
  },
methods: {
  toggleFilter() {
    this.$emit('toggle-filter');
  },
  applyFilter(category) {
    this.filterKategori = category; // Update kategori yang dipilih
    this.$emit('filter', category); // Emit filter yang dipilih ke parent
    this.toggleFilter();
  },
  handleOutsideClick(event) {
    // Menutup filter jika pengguna klik di luar card
    if (event.target.id !== 'card') {
      this.toggleFilter();
    }
  },
},


};
</script>
