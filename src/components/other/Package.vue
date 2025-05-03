<template>
  <div class="flex flex-col items-center min-h-screen font-garamond">
    <!--package container view-->
     <div class="px-4 w-full">
        <div class="w-full max-w-md bg-[#f5e5d3] border border-black shadow-md p-4 mb-8 mx-auto">
          <!--artikel folder-->
          <div>
            <div 
              @click="toggleFolder('article')"
              class="flex items-center gap-2 p-2 hover:bg-[#e2cbb7] rounded cursor-pointer">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#E99287] transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 8v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7h19a1 1 0 0 1 1 1zm-9.586-3H2V4a1 1 0 0 1 1-1h7.414l2 2z"></path></g></svg>
              <span>Article</span>
            </div>
            <div v-if="openFolders.article" class="ml-6 mt-0 space-y-1">
              <div 
                v-for="file in articleFiles" 
                :key="file.path"
                @click="selectFile(file)"
                class="flex items-center gap-2 p-1 text-sm hover:bg-[#e2cbb7] rounded cursor-pointer"
                :class="{ 'text-blue-600': selectedFile?.path === file.path }"
              >
                <span>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M22.269 19.385H1.731a1.73 1.73 0 0 1-1.73-1.73V6.345a1.73 1.73 0 0 1 1.73-1.73h20.538a1.73 1.73 0 0 1 1.73 1.73v11.308a1.73 1.73 0 0 1-1.73 1.731zm-16.5-3.462v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.461v7.847zM21.231 12h-2.308V8.077h-2.307V12h-2.308l3.461 4.039z"></path></svg>
                </span>
                <span>{{ file.name }}</span>
              </div>
            </div>
          </div>

          <!--guide folder-->
          <div class="mb-3">
            <div 
              @click="toggleFolder('guide')"
              class="flex items-center gap-2 p-2 hover:bg-[#e2cbb7]  rounded cursor-pointer"
            >
              <span class="text-yellow-500">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#E99287] transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 8v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7h19a1 1 0 0 1 1 1zm-9.586-3H2V4a1 1 0 0 1 1-1h7.414l2 2z"></path></g></svg>
              </span>
              <span>Guide</span>
            </div>
            <div v-if="openFolders.guide" class="ml-6 mt-0 space-y-1">
              <div 
                v-for="file in guideFiles" 
                :key="file.path"
                @click="selectFile(file)"
                class="flex items-center gap-2 p-1 text-sm hover:bg-[#e2cbb7] rounded cursor-pointer"
                :class="{ 'text-blue-600': selectedFile?.path === file.path }"
              >
                <span>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M22.269 19.385H1.731a1.73 1.73 0 0 1-1.73-1.73V6.345a1.73 1.73 0 0 1 1.73-1.73h20.538a1.73 1.73 0 0 1 1.73 1.73v11.308a1.73 1.73 0 0 1-1.73 1.731zm-16.5-3.462v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.461v7.847zM21.231 12h-2.308V8.077h-2.307V12h-2.308l3.461 4.039z"></path></svg>
                </span>
                <span>{{ file.name }}</span>
              </div>
            </div>
          </div>

        </div>
    </div>

    <!--file display-->
     <div class="border-t-2 w-full max-w-2xl border-black py-4 mb-5">
      <div v-if="selectedFile" class="mt-4">
        <h3 class="font-mono text-lg mb-2">{{ selectedFile.name }}</h3>
        <div v-if="loading" class="text-center py-4">
          Loading...
        </div>
        <div v-else class="prose max-w-none" v-html="fileContent"></div>
      </div>
      <div v-else class="text-black text-center border-2 border-black py-2">
        Select a file to view its content !
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked';

export default {
  data() {
    return {
      openFolders: {
        guide: true,
        article: true
      },
      selectedFile: null,
      fileContent: '',
      loading: false,
      guideFiles: [],
      articleFiles: []
    }
  },
  async created() {
    //fetch list markdown dari GitHub (ketika komponen sudah dibuat)
    await this.fetchRepoFiles();
  },
  methods: {
    toggleFolder(folder) {
      this.openFolders[folder] = !this.openFolders[folder];
    },
    async selectFile(file) {
      this.selectedFile = file;
      this.loading = true;
            console.log(file.download_url)
      try {
        const response = await fetch(file.download_url);
        const markdown = await response.text();
        this.fileContent = marked.parse(markdown);
      } catch (error) {
        console.error('Error fetching file:', error);
        this.fileContent = `<p>Error loading file: ${error.message}</p>`;
      } finally {
        this.loading = false;
      }
    },
    async fetchRepoFiles() {
      try {
        const guideResponse = await fetch('https://api.github.com/repos/Habbatul/Guide-Documentation-NgulikPribadi/contents/');
        const guideContents = await guideResponse.json();
        
        //filter .md doang
        this.guideFiles = guideContents
          .filter(file => file.name.endsWith('.md'))
          .map(file => ({
            name: file.name,
            path: file.path,
            download_url: file.download_url
          }));
          
        //kosong dlu
        this.articleFiles = [
          { name: 'Belum Ada', path: 'no-article', download_url: '' }
        ];
      } catch (error) {
        console.error('Error fetching repo contents:', error);
        this.guideFiles = [
          { 
            name: 'README.md', 
            path: 'README.md',
            download_url: 'https://raw.githubusercontent.com/Habbatul/Guide-Documentation-NgulikPribadi/main/README.md'
          }
        ];
        this.articleFiles = [
          { name: 'Belum Ada', path: 'no-article', download_url: '' }
        ];
      }
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
.prose a { @apply text-blue-600 hover:underline; }

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