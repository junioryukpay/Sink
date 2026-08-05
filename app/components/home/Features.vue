<script setup lang="ts">
import {
  AreaChart,
  FileJson,
  Link,
  Lock,
  Paintbrush,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-vue-next'

const features = [
  {
    title: 'Pemendek URL & Custom Slug',
    description: 'Ringkas tautan panjang menjadi singkat dengan domain kustom short.sdn2mengwi.sch.id dan slug pilihan Anda.',
    icon: Link,
    badge: 'Utama',
  },
  {
    title: 'Kode QR Otomatis',
    description: 'Setiap shortlink langsung dilengkapi Kode QR yang dapat diunduh dan disesuaikan warnanya.',
    icon: QrCode,
    badge: 'Siap Cetak',
  },
  {
    title: 'Analitik Klik Real-time',
    description: 'Pantau jumlah kunjungan, statistik geografis, dan perangkat pengunjung secara langsung.',
    icon: AreaChart,
    badge: 'Live',
  },
  {
    title: 'Asisten AI Pintar',
    description: 'Generate slug kreatif dan metadata OpenGraph otomatis menggunakan kecerdasan buatan.',
    icon: Sparkles,
    badge: 'AI Powered',
  },
  {
    title: 'Keamanan & Proteksi Kata Sandi',
    description: 'Lindungi akses tautan dengan kata sandi, atur tanggal kedaluwarsa, dan cegah tautan berbahaya.',
    icon: Lock,
    badge: 'Aman',
  },
  {
    title: 'Routing Perangkat & Negara',
    description: 'Arahkan pengunjung secara otomatis sesuai jenis perangkat (iOS/Android) atau lokasi negara.',
    icon: Smartphone,
    badge: 'Smart Redirect',
  },
  {
    title: 'Pratinjau Sosial (OpenGraph)',
    description: 'Atur judul, deskripsi, dan gambar pratinjau menarik saat tautan dibagikan di WhatsApp/Medsos.',
    icon: Paintbrush,
    badge: 'Social Preview',
  },
  {
    title: '100% Serverless',
    description: 'Dijalankan secara serverless tanpa membutuhkan server fisik dengan kecepatan tinggi.',
    icon: Zap,
    badge: 'Super Cepat',
  },
  {
    title: 'Ekspor & Impor Data',
    description: 'Dukung ekspor laporan statistik ke file CSV serta cadangan tautan berbasis JSON.',
    icon: FileJson,
    badge: 'CSV / JSON',
  },
]
</script>

<template>
  <section id="features" class="scroll-mt-20 border-t bg-muted/30 py-16 md:py-24">
    <div class="mx-auto max-w-6xl space-y-12 px-6">
      <!-- Section Header -->
      <div class="mx-auto max-w-2xl space-y-4 text-center">
        <div class="inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          <ShieldCheck class="size-3.5 text-primary" />
          <span>Fitur Lengkap</span>
        </div>
        <h2 class="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Solusi Pemendek Tautan Terpadu
        </h2>
        <p class="text-base text-muted-foreground sm:text-lg">
          Semua fitur kelas profesional untuk mengelola tautan digital sekolah dan organisasi Anda.
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in features"
          :key="item.title"
          class="group relative flex flex-col justify-between space-y-4 rounded-2xl border bg-card p-6 shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md"
        >
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <component :is="item.icon" class="size-5" />
              </div>
              <span class="rounded-full border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                {{ item.badge }}
              </span>
            </div>
            <h3 class="text-base font-semibold text-foreground">
              {{ item.title }}
            </h3>
            <p class="text-sm leading-relaxed text-muted-foreground">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
