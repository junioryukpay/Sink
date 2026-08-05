<script setup lang="ts">
import { ArrowRight, CheckCircle2, ChevronDown, Link as LinkIcon, QrCode, Sparkles, Wand2 } from 'lucide-vue-next'

const { title } = useAppConfig()
const router = useRouter()

const longUrl = ref('')
const customSlug = ref('')
const isSubmitting = ref(false)

function handleShorten() {
  if (!longUrl.value)
    return

  isSubmitting.value = true
  const query: Record<string, string> = {
    url: longUrl.value,
  }
  if (customSlug.value) {
    query.slug = customSlug.value
  }

  router.push({
    path: '/dashboard',
    query,
  })
}
</script>

<template>
  <section class="relative overflow-hidden py-12 md:py-20">
    <div class="mx-auto max-w-6xl px-6 space-y-12">
      <!-- Top Hero Section: Headline & CTA on Left, Illustration on Right -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left Hero Text & CTA -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <!-- Top Badge -->
          <div class="flex justify-center lg:justify-start">
            <div class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary shadow-sm">
              <Sparkles class="size-3.5 text-primary" />
              <span>{{ title }} • Khusus Internal SD No. 2 Mengwi</span>
            </div>
          </div>

          <!-- Main Headline & Subtitle -->
          <div class="space-y-4">
            <h1 class="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl">
              Pendekkan Link & Buat Kode QR Dalam Sekejap
            </h1>
            <p class="text-base text-muted-foreground sm:text-lg lg:text-xl">
              Kelola tautan dokumen, kegiatan, dan pengumuman resmi internal SD No. 2 Mengwi secara mudah, cepat, dan terorganisir.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <Button as-child size="lg" variant="default" class="px-8 py-6 rounded-xl text-base font-medium shadow-md">
              <NuxtLink to="/dashboard">
                <span>Buka Dashboard</span>
                <ArrowRight class="size-4 ml-2" />
              </NuxtLink>
            </Button>

            <Button as-child size="lg" variant="outline" class="px-6 py-6 rounded-xl text-base font-medium">
              <a href="#features" class="flex items-center gap-2">
                <span>Lihat Fitur</span>
                <ChevronDown class="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <!-- Right Hero Illustration -->
        <div class="lg:col-span-5 flex items-center justify-center">
          <div class="w-full max-w-[440px] aspect-square flex items-center justify-center pointer-events-none">
            <iframe
              src="https://lottie.host/embed/7fecebee-3068-4feb-9bef-b46165bd8a72/0Ud3qCYKdU.json"
              class="w-full h-full border-0 bg-transparent scale-110"
              title="Shortlink Lottie Animation"
              allowfullscreen
            />
          </div>
        </div>
      </div>

      <!-- Enhanced Bitly-Style Shortener Card Widget -->
      <div class="mx-auto max-w-4xl">
        <div class="relative rounded-3xl border bg-card/95 p-6 shadow-2xl md:p-8 space-y-6 backdrop-blur-xl">
          <!-- Header Bar with Bitly-Style Tabs -->
          <div class="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-2 rounded-xl bg-primary/10 px-3.5 py-1.5 text-sm font-bold text-primary border border-primary/20">
                <LinkIcon class="size-4" />
                <span>Pemendek Tautan</span>
              </div>
              <div class="hidden sm:flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-default">
                <QrCode class="size-4" />
                <span>Kode QR</span>
              </div>
            </div>
            <div class="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/60 px-3 py-1 rounded-lg border">
              <span>short.sdn2mengwi.sch.id</span>
            </div>
          </div>

          <form class="space-y-5" @submit.prevent="handleShorten">
            <!-- Long URL Input -->
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <label for="hero-url" class="text-xs font-bold text-foreground/90 uppercase tracking-wider">URL Asli (Panjang)</label>
                <span class="text-[11px] text-muted-foreground">Wajib diisi</span>
              </div>
              <div class="relative">
                <input
                  id="hero-url"
                  v-model="longUrl"
                  type="url"
                  required
                  placeholder="https://sdn2mengwi.sch.id/kegiatan/pengumuman-kelulusan-2026"
                  class="w-full rounded-xl border bg-background/90 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/40 transition shadow-sm"
                >
              </div>
            </div>

            <!-- Custom Slug Input -->
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <label for="hero-slug" class="text-xs font-bold text-foreground/90 uppercase tracking-wider">Custom Alias / Slug (Opsional)</label>
                <span class="text-[11px] text-muted-foreground">Dibuat acak jika dikosongkan</span>
              </div>
              <div class="flex rounded-xl border bg-background/90 overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 hover:border-primary/40 transition shadow-sm">
                <span class="inline-flex items-center border-r bg-muted/80 px-3.5 text-xs text-muted-foreground font-mono font-medium select-none">
                  short.sdn2mengwi.sch.id/
                </span>
                <input
                  id="hero-slug"
                  v-model="customSlug"
                  type="text"
                  placeholder="pengumuman-2026"
                  class="w-full bg-transparent px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                >
              </div>
            </div>

            <!-- Shorten Submit Button -->
            <Button
              type="submit"
              size="lg"
              class="w-full text-base font-semibold gap-2 rounded-xl py-6 shadow-lg transition-all hover:shadow-primary/20 hover:scale-[1.005]"
              :disabled="isSubmitting"
            >
              <Wand2 class="size-5" />
              <span>Pendekkan Tautan Sekarang</span>
              <ArrowRight class="size-4 ml-auto" />
            </Button>
          </form>

          <!-- Feature highlights under input -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t text-center text-xs font-medium text-muted-foreground">
            <div class="flex items-center justify-center gap-2 bg-muted/30 py-2 px-3 rounded-lg border border-border/40">
              <CheckCircle2 class="size-4 text-emerald-500 shrink-0" />
              <span>Kode QR Otomatis</span>
            </div>
            <div class="flex items-center justify-center gap-2 bg-muted/30 py-2 px-3 rounded-lg border border-border/40">
              <CheckCircle2 class="size-4 text-emerald-500 shrink-0" />
              <span>Analisis Real-time</span>
            </div>
            <div class="flex items-center justify-center gap-2 bg-muted/30 py-2 px-3 rounded-lg border border-border/40">
              <CheckCircle2 class="size-4 text-emerald-500 shrink-0" />
              <span>100% Serverless</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
