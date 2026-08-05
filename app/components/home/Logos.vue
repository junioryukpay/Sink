<script setup lang="ts">
</script>

<template>
  <section class="border-y bg-background py-9">
    <div class="mx-auto max-w-6xl px-6">
      <p class="mb-6 text-center text-xs font-semibold tracking-widest text-muted-foreground/80 uppercase">
        Teknologi Andal Dibalik Shortlink Sdenwangi
      </p>
      <div class="flex flex-wrap items-center justify-center gap-12 md:gap-24">
        <!-- Cloudflare -->
        <div class="flex items-center gap-4 group cursor-default">
          <img
            class="h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            alt="Cloudflare"
            src="@/assets/images/cloudflare.png"
          >
          <div class="text-left">
            <div class="text-sm font-bold text-foreground tracking-tight">
              Cloudflare Workers
            </div>
            <div class="text-xs text-muted-foreground">
              Global Edge & KV Storage
            </div>
          </div>
        </div>

        <!-- Nuxt.js -->
        <div class="flex items-center gap-4 group cursor-default">
          <img
            class="h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            alt="Nuxt.js"
            src="@/assets/images/nuxtjs.png"
          >
          <div class="text-left">
            <div class="text-sm font-bold text-foreground tracking-tight">
              Nuxt 4 Framework
            </div>
            <div class="text-xs text-muted-foreground">
              Speedy Vue 3 Architecture
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
