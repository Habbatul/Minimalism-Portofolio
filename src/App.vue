<template>
  <div id="app">
    <nav class="px-5">
      <div class="mt-3 border-b-[0.1rem] max-w-md mx-auto border-black text-black p-4">
        <ul class="flex space-x-4 justify-center font-serif">
          <li>
            <router-link to="/" class="hover:underline">Home</router-link>
          </li>
          <li>
            <router-link to="/project" class="hover:underline">Project</router-link>
          </li>
          <li>
            <a href="https://github.com/Habbatul/Guide-Documentation-NgulikPribadi" target="_blank" class="hover:underline">Tutorial</a>
          </li>
          <li>
            <router-link to="/contact" class="hover:underline">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="p-4">
      <router-view />
    </div>

    <footer class="px-5">
      <div class="text-sm text-center mt-3 border-t-[0.1rem] max-w-lg mx-auto border-black text-black p-4 my-4">
        <span class="cursor-pointer hover:underline underline-offset-4">© Habbatul Qolbi Hanifa</span> 2024 – {{ getCurrentYear() }} |  <a href="https://github.com/Habbatul" class="hover:underline underline-offset-4">Github</a> |  <a href="https://www.instagram.com/hq.han/" class="hover:underline underline-offset-4">Instagram</a>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getCurrentYear() {
      const currentYear = new Date().getFullYear();
      return currentYear;
    }
  }
}
</script>

