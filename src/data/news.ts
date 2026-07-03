import type { NewsArticle } from '@/types'

/** Where the "See More" / "Read" links point. */
export const NEWS_SITE = 'https://news.sarga.co/'

const base = 'https://news.sarga.co'

/**
 * Latest news, mirrored from news.sarga.co. Cover images are stored under
 * public/news/ (the CMS blocks hotlinking); article links open the live site.
 */
export const news: NewsArticle[] = [
  {
    id: 'news-1',
    title:
      'Mengenal Senior Triple Crown Jepang, Mahkota Bergengsi yang Lebih Sulit dari Triple Crown Klasik',
    excerpt:
      'Selain Triple Crown klasik, Jepang memiliki Autumn dan Spring Senior Triple Crown untuk kuda senior. Salah satunya bahkan belum pernah dimenangkan hingga kini.',
    category: 'Triple Crown Jepang',
    date: '2026-07-02',
    image: '/news/news-1.webp',
    href:
      base +
      '/id/news/mengenal-senior-triple-crown-jepang-mahkota-bergengsi-yang-lebih-sulit-dari-triple-crown-klasik-mvk.html',
  },
  {
    id: 'news-2',
    title: 'Mikki Fight Jadi Juara Bertahan Teio Sho 2026, Jagoan Baru Kuda Dirt Jepang',
    excerpt:
      'Kemenangan ini menjadi penyejuk setelah tahun lalu kalah dari Forever Young di Japan Dirt Classic serta mengakui keunggulan Diktaean pada Tokyo Daishoten.',
    category: 'G1 Jepang',
    date: '2026-07-02',
    image: '/news/news-2.webp',
    href:
      base +
      '/id/news/mikki-fight-jadi-juara-bertahan-teio-sho-2026-jagoan-baru-kuda-dirt-jepang-mvk.html',
  },
  {
    id: 'news-3',
    title: 'Anak Flightline Mulai Buktikan Kualitas, Flight Command Menang Telak pada Debut Perdana',
    excerpt:
      'Flight Command menjadi pemenang pertama keturunan Flightline di Amerika Serikat setelah menang 10 panjang kuda pada debutnya di Aqueduct Racetrack.',
    category: 'Kuda Pacuan Amerika',
    date: '2026-07-02',
    image: '/news/news-3.webp',
    href:
      base +
      '/id/news/anak-flightline-mulai-buktikan-kualitas-flight-command-menang-telak-pada-debut-perdana-mvk.html',
  },
  {
    id: 'news-4',
    title: 'Titleholder, Kuda Bernama Juara yang Menulis Takdirnya Sendiri',
    excerpt:
      'Titleholder resmi hadir di Uma Musume: Pretty Derby. Simak kisah kuda juara Jepang yang mengukir sejarah, dari Kikuka Sho hingga dijuluki Emperor of Hanshin.',
    category: 'Kuda Jepang',
    date: '2026-07-01',
    image: '/news/news-4.webp',
    href:
      base +
      '/id/news/titleholder-kuda-bernama-juara-yang-menulis-takdirnya-sendiri-mvk.html',
  },
  {
    id: 'news-5',
    title: 'Duel Hingga Garis Finis, Berkahsari Juarai Kelas Lokal DIY 1.000 Meter',
    excerpt:
      'Galeri foto duel sengit Berkahsari dan Masih Rindu 99 di Kelas Lokal DIY 1.000 meter. Berkahsari mencuri keunggulan di tikungan terakhir sebelum memastikan kemenangan.',
    category: 'Galeri Foto',
    date: '2026-07-01',
    image: '/news/news-5.webp',
    href:
      base +
      '/id/news/duel-hingga-garis-finis-berkahsari-juarai-kelas-lokal-diy-1000-meter-mvk.html',
  },
  {
    id: 'news-6',
    title: 'Juara Japanese Dirt Double Crown Finger Bidik Debut Amerika Serikat di Pacific Classic',
    excerpt:
      'Juara Japanese Dirt Double Crown 2026, Finger, dipastikan menjalani debut di Amerika Serikat dengan membidik Pacific Classic sebelum melaju ke Breeders’ Cup Classic.',
    category: 'G1 Jepang',
    date: '2026-07-01',
    image: '/news/news-6.webp',
    href:
      base +
      '/id/news/juara-japanese-dirt-double-crown-finger-bidik-debut-amerika-serikat-di-pacific-classic-mvk.html',
  },
]
