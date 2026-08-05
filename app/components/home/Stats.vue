<script setup lang="ts">
import { BookOpen, Link2, PencilLine, QrCode, Share2 } from 'lucide-vue-next'

const steps = [
  {
    number: '01',
    title: 'Tempel Link Panjang',
    description: 'Salin dan tempelkan URL dokumen, formulir, atau halaman kegiatan sekolah yang ingin Anda persingkat.',
    icon: Link2,
  },
  {
    number: '02',
    title: 'Buat Custom Alias',
    description: 'Tentukan nama alias kustom yang singkat dan mudah diingat (contoh: pengumuman-2026 atau rapor-semester).',
    icon: PencilLine,
  },
  {
    number: '03',
    title: 'Bagikan & Cetak Kode QR',
    description: 'Bagikan tautan pendek atau unduh Kode QR otomatis untuk ditempel pada brosur dan pengumuman sekolah.',
    icon: QrCode,
  },
]
</script>

<template>
  <section class="border-t bg-background py-16 md:py-24">
    <div class="mx-auto max-w-6xl space-y-12 px-6">
      <!-- Section Header -->
      <div class="mx-auto max-w-xl space-y-3 text-center">
        <div class="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase shadow-sm">
          <BookOpen class="size-3.5 text-primary" />
          <span>Panduan Penggunaan</span>
        </div>
        <h2 class="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          3 Langkah Mudah Pembuatan Tautan
        </h2>
        <p class="text-muted-foreground text-base">
          Cara cepat memendekkan tautan dan membuat Kode QR resmi sekolah.
        </p>
      </div>

      <!-- 3 Steps Grid -->
      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="(step, idx) in steps"
          :key="idx"
          class="group relative space-y-4 rounded-2xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/40"
        >
          <div class="flex items-center justify-between">
            <div class="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <component :is="step.icon" class="size-6" />
            </div>
            <span class="font-mono text-2xl font-black text-muted-foreground/30 group-hover:text-primary/40 transition-colors">
              {{ step.number }}
            </span>
          </div>

          <div class="space-y-2">
            <h3 class="text-lg font-bold text-foreground">
              {{ step.title }}
            </h3>
            <p class="text-sm leading-relaxed text-muted-foreground">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
