<template>
    <div class="container max-w-lg mx-auto p-3 mt-4 text-lg">
        <div class="w-fit mx-auto px-2">
        <p class="font-serif text-[1.65rem] mb-2 2xl:text-[1.75rem] 2xl:mb-[0.65rem]">
        Contact Me
        </p>
        <p class="font-serif text-[1.08rem] leading-[1.5rem]">You can see my content and contact me through several social media below.</p>
        <ul class="list-disc text-[1rem] md:text-[1.08rem] pl-4 my-4">
            <li><a href="https://www.linkedin.com/in/habbatul/" target="_blank" class="font-serif hover:text-red-600">Linkedin : <span class="underline underline-offset-2">Habbatul Qolbi H</span></a></li>
            <li><a href="https://github.com/Habbatul" target="_blank" class="font-serif hover:text-red-600">Github : <span class="underline underline-offset-2">Habbatul</span></a></li>
            <li><a href="https://www.instagram.com/hq.han/" target="_blank" class="font-serif hover:text-red-600">Instagram :<span class="underline underline-offset-2">@hq.han</span> </a></li>
            <li><a href="https://www.youtube.com/@hq-han" target="_blank" class="font-serif hover:text-red-600">Youtube : <span class="underline underline-offset-2">@hq.han</span></a></li>
        </ul>
        </div>

        <p class="px-2 font-serif text-[1.65rem] 2xl:text-[1.75rem] mb-3 mt-10 ">More...</p>
        <div class="px-2">
            <ul class="list-disc pl-4">
                <li>
                    <p class="font-serif text-[0.9rem] leading-5 text-black">For more information use curl on Uri like below.</p>
                </li>
                <div class="ml-[-1rem] relative border border-[#cac8c5] bg-gray-100 rounded-md mt-2 overflow-hidden">
                    <div class="overflow-x-auto">
                        <div class="py-2 m-0 text-gray-900 whitespace-nowrap">
                            <code class="text-sm mx-2">curl https://porto.hqhan.my.id/info/run.php</code>
                        </div>
                    </div>
                </div>
                <li>
                    <p class="font-serif text-[0.9rem] leading-5 text-black mt-3 md:mt-[0.85rem]">To get specific information use query param 'input'.</p>
                </li>
                <div class="ml-[-1rem] relative border border-[#cac8c5] bg-gray-100 rounded-md mt-2 overflow-hidden">
                    <div class="overflow-x-auto">
                        <div class="py-2 m-0 text-gray-900 whitespace-nowrap">
                            <code class="text-sm mx-2">curl https://porto.hqhan.my.id/info/run.php?input=1</code>
                        </div>
                    </div>
                </div>
                <li>
                    <p class="font-serif text-[0.9rem] leading-5 text-black mt-3 md:mt-[0.85rem]">To send me a message, use curl like example below (not working yet).</p>
                </li>
                <div class="ml-[-1rem] relative border border-[#cac8c5] bg-gray-100 rounded-md mt-2 overflow-hidden">
                    <div class="overflow-x-auto">
                        <div class="py-2 m-0 text-gray-900 whitespace-nowrap">
                            <code class="text-sm mx-2">curl -X POST https://porto.hqhan.my.id/submit-form -H "Content-Type: application/json" -d '{"massage":"write_your_massage"}'</code>
                        </div>
                    </div>
                </div>
                <li>
                    <p class="font-serif text-[0.9rem] leading-5 text-black mt-3 md:mt-[0.85rem]">If you use powershell in windows, use curl.exe because curl in PowerShell is an alias for Invoke-WebRequest.</p>
                </li>
                <div class="ml-[-1rem] relative border border-[#cac8c5] bg-gray-100 rounded-md mt-2 overflow-hidden">
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
export default {
  name: 'Contact',
}
</script>

<style scoped>
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