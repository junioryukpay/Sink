<script setup lang="ts">
import { ChevronDown, HelpCircle } from 'lucide-vue-next'

const faqs = [
  {
    question: 'Apa itu Shortlink Sdenwangi?',
    answer: 'Shortlink Sdenwangi adalah aplikasi pemendek URL dan pembuat Kode QR resmi yang dirancang khusus untuk internal SD No. 2 Mengwi guna mempermudah pembagian tautan dokumen, kegiatan, dan pengumuman sekolah.',
  },
  {
    question: 'Siapa yang dapat menggunakan layanan ini?',
    answer: 'Layanan ini dikhususkan bagi guru, staf, dan tim internal SD No. 2 Mengwi untuk mengelola dan membagikan tautan resmi sekolah secara aman.',
  },
  {
    question: 'Mengapa menggunakan domain short.sdn2mengwi.sch.id?',
    answer: 'Menggunakan domain instansi resmi menjamin otentisitas tautan yang dibagikan sehingga pengguna dan wali murid terhindar dari risiko penipuan atau phishing dari tautan asing.',
  },
  {
    question: 'Bagaimana cara membuat tautan dengan nama kustom (custom alias)?',
    answer: 'Cukup tempel URL panjang pada kolom form utama di atas, isi bagian "Custom Alias / Slug" dengan kata pilihan Anda (misalnya: pengumuman-2026 atau rapor-semester), lalu klik "Pendekkan Tautan Sekarang".',
  },
  {
    question: 'Apakah tersedia fitur statistik klik dan Kode QR?',
    answer: 'Ya! Setiap tautan yang dipendekkan secara otomatis dilengkapi statistik jumlah klik pengunjung real-time serta fitur unduh Kode QR resolusi tinggi yang siap dicetak untuk selebaran atau brosur sekolah.',
  },
  {
    question: 'Apakah tautan pendek bisa diberi proteksi kata sandi?',
    answer: 'Tentu. Anda dapat menambahkan proteksi kata sandi melalui pengaturan tautan di Dashboard sehingga dokumen atau halaman penting hanya dapat diakses oleh pihak tertentu.',
  },
  {
    question: 'Apakah tautan memiliki batas masa berlaku (kedaluwarsa)?',
    answer: 'Secara bawaan tautan aktif secara permanen. Namun, Anda juga bisa menetapkan tanggal kedaluwarsa jika tautan tersebut hanya ditujukan untuk pendaftaran atau kegiatan sementara.',
  },
  {
    question: 'Bagaimana cara melihat laporan analitik pengunjung?',
    answer: 'Melalui Dashboard internal, Anda dapat memantau grafik kunjungan harian/bulanan, persebaran lokasi pengunjung, serta jenis perangkat (HP/Laptop) secara langsung.',
  },
]

const openIndex = ref<number | null>(0)

function toggleFaq(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="border-t bg-muted/20 py-16 md:py-24">
    <div class="mx-auto max-w-4xl space-y-10 px-6">
      <!-- Section Title -->
      <div class="space-y-3 text-center">
        <div class="inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          <HelpCircle class="size-3.5 text-primary" />
          <span>Pertanyaan Umum</span>
        </div>
        <h2 class="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Pertanyaan Sering Diajukan (FAQ)
        </h2>
        <p class="mx-auto max-w-xl text-muted-foreground">
          Temukan jawaban atas pertanyaan yang sering diajukan mengenai penggunaan Shortlink Sdenwangi.
        </p>
      </div>

      <!-- FAQ Accordions -->
      <div class="space-y-3">
        <div
          v-for="(item, idx) in faqs"
          :key="idx"
          class="overflow-hidden rounded-xl border bg-card shadow-sm transition-all"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between p-5 text-left font-semibold text-foreground transition-colors hover:bg-muted/40"
            @click="toggleFaq(idx)"
          >
            <span class="text-base sm:text-lg pr-4">{{ item.question }}</span>
            <ChevronDown
              class="size-5 shrink-0 text-muted-foreground transition-transform duration-200"
              :class="openIndex === idx ? 'rotate-180 text-primary' : ''"
            />
          </button>
          <div
            v-show="openIndex === idx"
            class="border-t bg-muted/10 px-5 pt-4 pb-5 text-sm leading-relaxed text-muted-foreground"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
