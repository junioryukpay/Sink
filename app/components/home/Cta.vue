<script setup lang="ts">
import { ArrowRight, LayoutDashboard, Sparkles } from 'lucide-vue-next'
</script>

<template>
  <section class="border-t bg-background py-16 md:py-24">
    <div class="mx-auto max-w-5xl px-6">
      <div class="space-y-6 rounded-3xl border bg-card p-8 text-center shadow-xl md:p-12">
        <div class="mx-auto inline-flex items-center gap-1.5 rounded-full border bg-muted/60 px-3.5 py-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          <Sparkles class="size-3.5 text-primary" />
          <span>Mulai Sekarang</span>
        </div>

        <h2 class="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Siap Mengelola Tautan Dengan Cepat Dan Aman?
        </h2>

        <p class="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
          Gunakan Shortlink Sdenwangi untuk memendekkan tautan, membuat Kode QR, dan memantau analitik secara instan.
        </p>

        <div class="flex justify-center pt-2">
          <Button as-child size="lg" class="rounded-xl px-8 py-6 text-base font-semibold shadow-md">
            <NuxtLink to="/dashboard">
              <LayoutDashboard class="mr-2 size-5" />
              <span>Buka Dashboard</span>
              <ArrowRight class="ml-2 size-4" />
            </NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
