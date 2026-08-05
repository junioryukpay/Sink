export default defineAppConfig({
  title: 'Shortlink',
  logo: 'https://i.ibb.co.com/Jwq9G740/sdku.png',
  github: '',
  coffee: '',
  twitter: '',
  telegram: '',
  description: 'Platform Pemendek Tautan & Kode QR Internal SD No. 2 Mengwi.',
  image: 'https://i.ibb.co.com/Jwq9G740/sdku.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
