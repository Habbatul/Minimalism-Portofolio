<template>
    <div class="container max-w-lg mx-auto p-7 mt-4 text-lg">
        <div class="w-fit mx-auto px-2">
    <p class="font-garamond text-[1.75rem] 2xl:text-[1.9rem] mb-3">
        Contact Me
        </p>
        <p class="font-garamond text-[1.22rem] leading-[1.5rem]">You can see my content and contact me through several social media below.</p>
        <ul class="list-disc text-[1rem] md:text-[1.08rem] pl-4 my-4">
            <li><a href="https://www.linkedin.com/in/habbatul/" target="_blank" class="font-serif hover:text-red-600">Linkedin : <span class="underline underline-offset-2">Habbatul Qolbi H</span></a></li>
            <li><a href="https://github.com/Habbatul" target="_blank" class="font-serif hover:text-red-600">Github : <span class="underline underline-offset-2">Habbatul</span></a></li>
            <li><a href="https://www.instagram.com/hq.han/" target="_blank" class="font-serif hover:text-red-600">Instagram :<span class="underline underline-offset-2">@hq.han</span> </a></li>
            <li><a href="https://www.youtube.com/@hq-han" target="_blank" class="font-serif hover:text-red-600">Youtube : <span class="underline underline-offset-2">@hq.han</span></a></li>
            <li><a href="https://www.hackerrank.com/profile/habbatul" target="_blank" class="font-serif hover:text-red-600">Hackerrank : <span class="underline underline-offset-2">@habbatul</span></a></li>
        </ul>
        </div>

        <!-- chatbot -->
        <p class="px-2 font-garamond text-[1.75rem] 2xl:text-[1.9rem] mb-3 mt-10 ">Ask Me <span class="text-sm text-[#808080]"></span></p>

        <div class="px-2">
            <p class="font-garamond text-[1.08rem] leading-[1.5rem]">
            Please ask with <span class="font-semibold">Indonesian language</span>.
            This is not an LLM, it's just a simple NLP chatbot using TF-IDF and Cosine Similarity.
            If your question doesn't have an answer, you can ask about "daftar topik" below to see the available topics.
            </p>
        </div>

        <ul class="text-[1.08rem] leading-[1.5rem] mt-4 font-garamond mx-2">
            <li>
                <label for="question" class="font-semibold">Question :</label>
            </li>
            <li class="flex justify-between mt-2">
                <input id="question" name="question" type="text" v-model="question"
                    class="p-1 bg-[#f5e5d3]/80 border border-[#cac8c5] w-full"
                    placeholder="Example: Apa daftar topik yang bisa saya tanyakan?"
                />
                <button @click="askBot" class="bg-[#d9bda5] p-1 px-5 border border-gray-500 hover:bg-[#909090] hover:text-white hover:border-black">
                    Ask
                </button>
            </li>
            <li class="mt-2">
                <label for="answer" class="font-semibold">Answer :</label>
            </li>
            <li>
                <textarea 
                ref="answerBox"
                v-model="answer"
                v-bind:disabled="true"
                :placeholder="loading ? 'Loading...' : 'The answer will be here...'"
                    class="mt-1 p-1 bg-[#f5e5d3]/80 border border-[#cac8c5] w-full overflow-hidden"
                />
            </li>
        </ul>

        <!-- deprecated -->
        <p class="px-2 font-garamond text-[1.75rem] 2xl:text-[1.9rem] mb-3 mt-10 ">More... <span class="text-sm text-[#808080]">(Not Working Again)</span></p>
        <div class="px-2">
            <ul class="list-disc pl-4">
                <li>
                    <p class="font-garamond text-[1.13rem] leading-6 text-black">For more information use curl on Uri like below.</p>
                </li>
                <div class="ml-[-1rem] relative border border-[#cac8c5] bg-[#f5e5d3]/80 rounded-md mt-2 overflow-hidden">
                    <div class="overflow-x-auto">
                        <div class="py-2 m-0 text-gray-900 whitespace-nowrap">
                            <code class="text-sm mx-2">curl https://porto.hqhan.my.id/info/run.php</code>
                        </div>
                    </div>
                </div>
                <li>
                    <p class="font-garamond text-[1.13rem] leading-6 text-black mt-3 md:mt-[0.85rem]">To get specific information use query param 'input'.</p>
                </li>
                <div class="ml-[-1rem] relative border border-[#cac8c5] bg-[#f5e5d3]/80 rounded-md mt-2 overflow-hidden">
                    <div class="overflow-x-auto">
                        <div class="py-2 m-0 text-gray-900 whitespace-nowrap">
                            <code class="text-sm mx-2">curl https://porto.hqhan.my.id/info/run.php?input=1</code>
                        </div>
                    </div>
                </div>
                <li>
                    <p class="font-garamond text-[1.13rem] leading-6 text-black mt-3 md:mt-[0.85rem]">To send me a message, use curl like example below (not working yet).</p>
                </li>
                <div class="ml-[-1rem] relative border border-[#cac8c5] bg-[#f5e5d3]/80 rounded-md mt-2 overflow-hidden">
                    <div class="overflow-x-auto">
                        <div class="py-2 m-0 text-gray-900 whitespace-nowrap">
                            <code class="text-sm mx-2">curl -X POST https://porto.hqhan.my.id/submit-form -H "Content-Type: application/json" -d '{"massage":"write_your_massage"}'</code>
                        </div>
                    </div>
                </div>
                <li>
                    <p class="font-garamond text-[1.13rem] leading-6 text-black mt-3 md:mt-[0.85rem]">If you use powershell in windows, use curl.exe because curl in PowerShell is an alias for Invoke-WebRequest.</p>
                </li>
                <div class="ml-[-1rem] relative border border-[#cac8c5] bg-[#f5e5d3]/80 rounded-md mt-2 overflow-hidden">
                    <div class="overflow-x-auto">
                        <div class="py-2 m-0 text-gray-900 whitespace-nowrap">
                            <code class="text-sm mx-2">curl.exe https://porto.hqhan.my.id/info/run.php</code>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'Contact',
  props: {
    baseUrl: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      question: '', 
      answer: '', 
      loading: false,
    };
  },
  methods: {
    async askBot() {
      this.loading = true;
      
      try {
        const response = await axios.post(this.baseUrl+'/chat', {
          message: this.question
        });

        this.answer = response.data.answer;

        this.$nextTick(() => {
          this.autoResize();
        });

      } catch (error) {
        console.error('There was an error!', error);
        this.answer = 'Sorry, I could not get an answer. Please try again later.';
      } finally {
        this.loading = false;
      }
    },
    autoResize() {
      const textarea = this.$refs.answerBox;
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      }
    }
  }
};

</script>

<style scoped>
/* textarea {
  overflow: hidden;
  transition: height 0.2s ease;
} */

::-webkit-scrollbar {
    width: 0.3rem;
    height:0.35rem;
}
 
::-webkit-scrollbar-track {
    background: #cac8c5;
}
 
::-webkit-scrollbar-thumb {
    background: #979694;
}
 
::-webkit-scrollbar-thumb:hover {
    background: #656462;
}
</style>