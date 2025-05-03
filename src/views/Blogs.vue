<template>
  <div class="mx-auto md:p-2 px-5 pt-7 mt-2 md:text-[1.14rem] md:max-w-[53rem] md:mb-4 font-inter font">
    <Package></Package>
  </div>
</template>

<script>
import Article from '../components/other/PakcageContainer.vue';
import Guide from '../components/other/FileDisplay.vue';
import Package from '../components/other/Package.vue';

export default {
  name: 'Other',
  components: {
    Article,
    Guide,
    Package
  }
}
</script>
