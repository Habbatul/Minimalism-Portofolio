<template>
        <nav class="px-5 2xl:text-[1.08rem]">
      <div class="mt-3 border-b-[0.1rem] max-w-md 2xl:max-w-[29rem] mx-auto border-black text-black p-4">
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
      <slot></slot>
    </div>

    <footer class="px-5">
      <div class="text-sm 2xl:text-[0.9rem] text-center mt-3 border-t-[0.1rem] max-w-lg mx-auto border-black text-black p-4 my-4">
        <span class="cursor-pointer hover:underline underline-offset-4">© Habbatul Qolbi Hanifa</span> 2024 – {{ getCurrentYear() }} |  <a href="https://github.com/Habbatul" class="hover:underline underline-offset-4">Github</a> |  <a href="https://www.instagram.com/hq.han/" class="hover:underline underline-offset-4">Instagram</a>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    getCurrentYear() {
      const currentYear = new Date().getFullYear();
      return currentYear;
    }
  }
}
</script>