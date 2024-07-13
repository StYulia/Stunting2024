<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/h.png"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-sky-500 dark:text-neutral-300">
        Sistem Pakar Deteksi Stunting
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Deteksi dini atau skrining merupakan upaya pemantauan pemantauan pertumbuhan dan perkembangan balita dan anak prasekolah terutama pada anak sebelum 3 tahun.<wbr /> 
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          to="/signin"
          rel="noopener" class="dark:bg-sky-600"
          >Get Started</LandingLink
        >
      </div>
    </div>
  </main>
</template>
