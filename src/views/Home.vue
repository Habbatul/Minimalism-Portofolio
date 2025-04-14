<template>
  <div class="max-w-3xl mx-auto p-7 mt-4 md:text-[1.14rem] md:max-w-[53rem] md:mb-4 font-inter font">
    <h1 class="text-[2.2rem] font-garamond mb-1 md:text-[2.5rem]">About Me</h1>
    <div class="text-[1rem] md:text-[1.18rem] md:leading-[1.8rem]">
      <p class="text-justify mb-2" style="hyphens: auto;-webkit-hyphens: auto;-ms-hyphens: auto;">My name is Habbatul Qolbi Hanifa, aka. <a href="https://www.instagram.com/hq.han/" target="_blank" class="underline underline-offset-3 hover:text-red-600">@hq.han</a>. I enjoy exploring programming & technology in a concrete way but remain aware of the importance of abstraction in its application in the industry, especially since end users always need fast-delivered products and programming teamwork need maintanable code. My interests lie in software engineering, computer graphics, game development, system programming. My primary programming languages are Go and Java.</p>
      <p class="text-justify mb-2" style="hyphens: auto;-webkit-hyphens: auto;-ms-hyphens: auto;">I have expertise in software development. I deploy all my backend projects using an Ubuntu VPS with Docker, Nginx, and Apache. For client-side web applications, I use Vercel and GitHub Pages, leveraging GitHub Actions for automated deployment. You can check out my projects on <a href="https://github.com/Habbatul" class="underline underline-offset-3 hover:text-red-600">GitHub</a> about the software and other projects I've developed.</p>
      <p class="text-justify" style="hyphens: auto;-webkit-hyphens: auto;-ms-hyphens: auto;">I have an interest in computer graphics and game development, which I also enjoy as a hobby. For game development, I usually use Unity with C#, and when developing without a UI-based game engine, I prefer Ebiten with Golang. In computer graphics, I often use WebGL, typically through Three.js, as raw WebGL is too low-level for me. For asset creation, I use Photoshop for 2D graphics and Blender for 3D modeling. Additionally, I enjoy exploring anything related to programming, regardless of the field. Go to the  <router-link to="/project" class="underline underline-offset-3 hover:text-red-600">Project Page</router-link> to view my showcase project.</p>
    </div>
    <p class="mb-8 mt-4 text-gray-800">
        <span class="font-bold text-base md:text-lg text-gray-900">&#10148; Languages & Technologies I used : </span><br>
        <span class="font-semibold italic">Backend:</span> Java, Spring Framework, Go, Fiber, Gorm, MySQL, Postgress;
        <span class="font-semibold italic">Deployment:</span> Docker, Ubuntu, Nginx, Git & GitHub;  
        <span class="font-semibold italic">WebDev:</span> PHP, Tailwind CSS, JavaScript, Vite;  
        <span class="font-semibold italic">Others:</span> Three JS, Unity (C#), Blender, Adobe Photoshop.
    </p>

    <p class="font-garamond text-[1.75rem] md:text-[1.9rem] mb-2">
      My Education
    </p>
    <ul class="list-decimal pl-4 mb-4">
      <li class="mb-3">
        <span class="font-bold">Sarjana Informatika, <a href="https://uad.ac.id/" target="_blank" class="underline underline-offset-4 hover:text-red-600">Universitas Ahmad Dahlan, Indonesia</a></span> (Feb 2020 - Mar 2025)
        <br />
        <span class="font-bold">GPA:</span> 3.97 / 4.00
        <br />
        Specialized coursework: Dynamic Web Programming, Web Engineering, Game Development, Applied Computer Graphics, and Software Quality Assurance.
        <br>
        *9 Semesters due to a delay caused by a subject I had not taken to achieve 144 sks.
        <br />
        &#10148; <a href="https://drive.google.com/file/d/1Cpg-E5taBI22envGrPCF8cEx8NJ9oCuY/view?usp=sharing" target="_blank" class="underline underline-offset-4 hover:text-red-600">Click here for the attachment.</a> 
      </li>
      <li class="mt-1">
        <span class="font-bold">Back End Java, <a href="https://www.binaracademy.com/" target="_blank" class="underline underline-offset-4 hover:text-red-600">Binar Academy (MSIB wave 5), Indonesia</a></span> (Aug - Dec 2023)
        <br />
        <span class="font-bold">Final Score:</span> 4.7 / 5.0
        <br />
        Specialized topics: Restful API, Unit Test, Java 8, and Spring Framework.
        <br />
        Activity: Being the lead of the backend team for the final project.
        <br />
        &#10148; <a href="https://drive.google.com/file/d/1vAnfe2E8op39FulabDXq4812YI_DkFi5/view?usp=sharing" target="_blank" class="underline underline-offset-4 hover:text-red-600">Click here for the attachment.</a> 
      </li>
    </ul>

    <p class="font-garamond text-[1.75rem] md:text-[1.9rem] mt-8 mb-2">
      My Experience
    </p>
    <ul class="list-disc pl-4 mb-4">
      <li>
        <span class="font-bold">Web Developer Freelance</span> at <span class="font-bold"><a href="https://jayadigital.tech/" target="_blank" class="underline underline-offset-4 hover:text-red-600">Jaya Digital</a></span> (Oct - Dec 2024)
        <p class="text-gray-600 text-base">Murung Raya, Kalimantan Tengah</p>
        <ul class="list-decimal pl-4 mb-2 mt-">
          <li>Enhanced and developed new features for content management web.</li>
          <li>Built second version of the web with customer transaction functionality  (currently excluded in production due to unresolved third-party requirements)</li>
          <li>Revamped the architecture and code of Jaya Digital's web to N-Tier (tested with PHPStan + PHPat).</li>
          <li>Implemented the Symfony HttpFoundation and Routing libraries in the application to streamline HTTP handling.</li>
          <li>Implemented the PHP-DI library (PSR-11) to apply dependency injection.</li>
        </ul>
        <span><span class="font-bold">Tech Stack:</span> PHP, Symfony-Component (Routes and HttpFoundation), PHP-DI, Javascript, Tailwind, Postcss, Browsersync, Third-party (Payment Version): Xendit PHP SDK, SMTP, Telegram BotFather</span>
      </li>
    </ul>

    <p class="font-garamond text-[1.75rem] md:text-[1.9rem] mt-8 mb-2">
      My Backend Projects
    </p>
    <ul class="list-decimal pl-4 mb-4">
      <li><span class="font-bold"><a href="https://github.com/Habbatul/ProjectShowcase" target="_blank" class="underline underline-offset-4 hover:text-red-600">Project Showcase</a> :</span> Restful API for making project showcase for your portofolio app using Go, Fiber, Gorm, Swaggo, and Wire.</li>
      <li class="mt-1"><span class="font-bold"><a href="https://github.com/Habbatul/FinalProjectMOOC" target="_blank" class="underline underline-offset-4 hover:text-red-600">MOOC / Online Course Simulation</a> :</span> Restful API for online course app using Spring Framework (Java 8) deployed on Ubuntu server with Nginx and Docker. This project is a submission for the Binar Academy Final Project.</li>
      <li class="mt-1"><span class="font-bold"><a href="https://github.com/Habbatul/BinarFud" target="_blank" class="underline underline-offset-4 hover:text-red-600">Food Shop Simulation</a> :</span> Restful API for Food Shop app using Spring Framework (Java 8) deployed on Ubuntu server with Nginx and Docker. This project is a submission for the Binar Academy Challenge.</li>
      <li class="mt-1"><span class="font-bold"><a href="https://github.com/Habbatul/resumebuilder" target="_blank" class="underline underline-offset-4 hover:text-red-600">Resume Builder</a> :</span> Restful API for making resume builder app using Spring Framework (Java 21) deployed on Ubuntu server with Nginx and Docker.</li>
    </ul>

    <p class="font-garamond text-[1.75rem] md:text-[1.9rem] mt-8 mb-2">
      My Exploration Projects
    </p>
    <ul class="list-decimal pl-4">
      <li class="mt-1"><span class="font-bold"><a href="https://github.com/Habbatul/Indehell" target="_blank" class="underline underline-offset-4 hover:text-red-600">Indehell Profile Web</a> :</span> 3D Website with interactive animation for a clothing brand called <a class="underline underline-offset-2 hover:text-red-600" href="https://www.instagram.com/indehellstudio/">Indehell</a>, built using webgl-threejs (vanilla), .glb compression with draco and meshopt.</li>
      <li class="mt-1"><span class="font-bold"><a href="https://github.com/Habbatul/3D-Nostalgia" target="_blank" class="underline underline-offset-4 hover:text-red-600">3D-Nostalgia</a> :</span> 3D website (like a video game) with webgl-threejs (vanilla) for digital nostalgia featuring a lonely and liminal atmosphere.</li>
      <li class="mt-1"><span class="font-bold"><a href="https://github.com/Habbatul/hanPixel" target="_blank" class="underline underline-offset-4 hover:text-red-600">hanPixel</a> :</span> Portofolio 2D pixel art game, build with go + Ebiten. Built to .wasm file, deployed in Github Pages.</li>
      <li class="mt-1"><span class="font-bold"><a href="https://github.com/Habbatul/JavaFX-ArcadeGames" target="_blank" class="underline underline-offset-4 hover:text-red-600">JavaFx Arcade Games</a> :</span> Arcade games made with JavaFX, this was my first application developed during college (3rd semester). There are two games in this .jar file app.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
