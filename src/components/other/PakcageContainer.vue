<template>
  <div class="px-4 w-full">
    <div class="w-full max-w-md bg-[#f5e5d3] border border-black shadow-md p-4 mb-8 mx-auto">
      <!--Article Folder-->
      <div>
        <div 
          @click="$emit('toggle-folder', 'article')"
          class="flex items-center gap-2 p-2 hover:bg-[#e2cbb7] rounded cursor-pointer"
        >
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#E99287] transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M22 8v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7h19a1 1 0 0 1 1 1zm-9.586-3H2V4a1 1 0 0 1 1-1h7.414l2 2z"></path>
            </g>
          </svg>
          <span>Article</span>
        </div>
        <div v-if="openFolders.article" class="ml-6 mt-0 space-y-1">
          <div 
            v-for="file in articleFiles" 
            :key="file.path"
            @click="$emit('select-file', file)"
            class="flex items-center gap-2 p-1 text-sm hover:bg-[#e2cbb7] rounded cursor-pointer"
            :class="{ 'text-red-700': selectedFile?.path === file.path }"
          >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <title></title>
              <path d="M22.269 19.385H1.731a1.73 1.73 0 0 1-1.73-1.73V6.345a1.73 1.73 0 0 1 1.73-1.73h20.538a1.73 1.73 0 0 1 1.73 1.73v11.308a1.73 1.73 0 0 1-1.73 1.731zm-16.5-3.462v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.461v7.847zM21.231 12h-2.308V8.077h-2.307V12h-2.308l3.461 4.039z"></path>
            </svg>
            <span>{{ file.name }}</span>
          </div>
        </div>
      </div>

      <!--Guide Folder-->
      <div class="mb-3">
        <div 
          @click="$emit('toggle-folder', 'guide')"
          class="flex items-center gap-2 p-2 hover:bg-[#e2cbb7] rounded cursor-pointer"
        >
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#E99287] transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M22 8v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7h19a1 1 0 0 1 1 1zm-9.586-3H2V4a1 1 0 0 1 1-1h7.414l2 2z"></path>
            </g>
          </svg>
          <span>Guide</span>
        </div>
        <div v-if="openFolders.guide" class="ml-6 mt-0 space-y-1">
          <div 
            v-for="file in guideFiles" 
            :key="file.path"
            @click="$emit('select-file', file)"
            class="flex items-center gap-2 p-1 text-sm hover:bg-[#e2cbb7] rounded cursor-pointer"
            :class="{ 'text-red-700': selectedFile?.path === file.path }"
          >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <title></title>
              <path d="M22.269 19.385H1.731a1.73 1.73 0 0 1-1.73-1.73V6.345a1.73 1.73 0 0 1 1.73-1.73h20.538a1.73 1.73 0 0 1 1.73 1.73v11.308a1.73 1.73 0 0 1-1.73 1.731zm-16.5-3.462v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.461v7.847zM21.231 12h-2.308V8.077h-2.307V12h-2.308l3.461 4.039z"></path>
            </svg>
            <span>{{ file.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guideFiles: {
      type: Array,
      required: true
    },
    articleFiles: {
      type: Array,
      required: true
    },
    openFolders: {
      type: Object,
      required: true
    },
    selectedFile: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
/* buat styling markdown */
.prose h1, .prose h2, .prose h3 {
  @apply mt-4 mb-2 font-bold;
}
.prose h1 { @apply text-2xl; }
.prose h2 { @apply text-xl; }
.prose h3 { @apply text-lg; }
.prose p { @apply my-2 text-lg; }
.prose ul { @apply list-disc pl-5 pt-1; }
.prose li { @apply pb-1; }
.prose ol { @apply list-decimal pl-5; }
.prose code { @apply bg-[#e2cbb7] px-1 rounded text-base font-medium;}
.prose pre { @apply bg-[#e2cbb7] border border-black p-2 rounded overflow-x-auto my-2; }
.prose a { @apply text-red-700 hover:underline; }

::-webkit-scrollbar {
    width: 0.3rem;
    height:0.35rem;
     border-radius: 5rem;
}
 
::-webkit-scrollbar-track {
    background: #cac8c5;
         border-radius: 5rem;
}
 
::-webkit-scrollbar-thumb {
    background: #979694;
     border-radius: 5rem;
}
 
::-webkit-scrollbar-thumb:hover {
    background: #656462;
         border-radius: 5rem;
}
</style>