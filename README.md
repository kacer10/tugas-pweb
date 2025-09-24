
## Deskripsi
Portfolio website modern dan responsif untuk seorang Full Stack Developer bernama Kacer. Website ini dirancang untuk menampilkan profil profesional, skills, proyek-proyek terbaru, dan kontak dengan desain yang clean, minimalis, dan engaging. Menggunakan teknologi web dasar (HTML5, CSS3, vanilla JavaScript) untuk performa optimal tanpa dependencies eksternal.

Fokus utama:
- **User  Experience**: Smooth scrolling, animasi halus, dan interaktivitas yang membuat pengunjung betah.
- **Responsiveness**: Adaptif di desktop, tablet, dan mobile.
- **Modern Design**: Gradient accents, shadows, dan floating elements untuk tampilan contemporary.

Website ini cocok untuk developer, freelancer, atau siapa saja yang ingin showcase portofolio secara profesional.

## Fitur Utama
- **Navbar Fixed & Mobile-Friendly**: Menu navigasi dengan hamburger toggle untuk mobile, smooth scrolling ke sections.
- **Hero Section**: Greeting dengan foto profil, deskripsi singkat, dan CTA buttons. Dilengkapi floating elements dan scroll indicator.
- **About Section**: Bio, stats counter (animasi angka), dan skills progress bars yang animate on-scroll.
- **Projects Grid**: 6 project cards dengan hover overlays, tech tags, dan links (GitHub). Responsive grid layout.
- **Contact Section**: Info kontak (email, phone, location) dan form sederhana dengan validation (simulasi submit).
- **Footer**: Copyright dan social links.
- **Scroll to Top Button**: Panah otomatis muncul saat scroll down, smooth scroll ke atas.
- **Preloader**: Loading screen sederhana saat page load.
- **Lazy Loading**: Images load on-demand untuk performa lebih baik.
- **Animations**: 
  - Fade-in dan slide-up on-scroll (menggunakan Intersection Observer).
  - Counter animation untuk stats.
  - Progress bar untuk skills.
  - Hover effects pada cards, buttons, dan images.
- **Accessibility**: ARIA labels, semantic HTML, dan contrast ratios yang baik.

## Tech Stack
- **Frontend**: HTML5, CSS3 (Flexbox, Grid, CSS Variables, Animations/Keyframes).
- **Styling**: Custom CSS (no frameworks seperti Bootstrap/Tailwind untuk lightweight).
- **JavaScript**: Vanilla JS (no libraries seperti jQuery/GSAP).
  - Intersection Observer untuk scroll-triggered animations.
  - requestAnimationFrame untuk smooth counters/progress.
- **Fonts**: Google Fonts (Inter - clean sans-serif).
- **Images**: Placeholder dari Pexels (free stock photos; ganti dengan assets pribadi).
- **Browser Support**: Modern browsers (Chrome 76+, Firefox 75+, Safari 12+, Edge 79+). Fallback untuk lazy loading di browser lama.

## Installation & Setup
1. **Clone/Download Proyek**:
   - Download ZIP dari repo ini, atau clone via Git:
     ```
     git clone <your-repo-url>
     cd portfolio-website
     ```

2. **Struktur Folder**:
   ```
   portfolio-website/
   ├── index.html          # File utama
   ├── style.css           # Styles responsif dan modern
   ├── main.js             # Animasi dan interaktivitas
   └── assets/             # 
   ```

3. **Run Locally**:
   - Buka `index.html` langsung di browser (no server diperlukan, karena static).
   - Atau gunakan live server (VS Code extension: Live Server) untuk test full features seperti smooth scrolling.
   - Pastikan koneksi internet untuk load Google Fonts dan Pexels images.

4. **Customization**:
   - **Edit Content**: Ubah nama, bio, projects, skills di `index.html`.
   - **Colors/Themes**: Modifikasi CSS variables di `:root` (e.g., `--primary-color`).
   - **Add Projects**: Duplicate `<div class="project-card">` dan update image/description.
   - **Form Backend**: Ganti JS form submit dengan API (e.g., EmailJS, Netlify Forms, atau backend Node.js).
   - **Deploy**: Upload ke GitHub Pages, Netlify, Vercel, atau hosting gratis lainnya.

## Usage
- **Navigasi**: Klik menu untuk smooth scroll ke sections (Home, About, Projects, Contact).
- **Projects**: Hover cards untuk lihat links (update href ke repo/live site aktual).
- **Contact Form**: Isi dan submit untuk simulasi (alert sukses; integrasikan dengan backend untuk real email).
- **Mobile Testing**: Resize browser atau gunakan dev tools (F12 > Toggle device) untuk cek responsiveness.
- **Performance**: Website ringan (~50KB gzipped), load cepat bahkan di koneksi lambat berkat lazy loading.

## Screenshots
- **Desktop Hero**:
  ![Hero Desktop](https://via.placeholder.com/800x400/6366f1/ffffff?text=Hero+Section+Desktop)
- **Projects Grid**:
  ![Projects](https://via.placeholder.com/800x400/e2e8f0/1e293b?text=Projects+Grid)
- **Mobile View**:
  ![Mobile](https://via.placeholder.com/400x800/f8fafc/1e293b?text=Mobile+View)

*(Tambahkan screenshots aktual di repo untuk visual appeal.)*

## Known Issues & Improvements
- **Form**: Saat ini simulasi only; tambahkan backend untuk real submissions.
- **SEO**: Tambahkan meta tags (title, description, Open Graph) di `<head>` untuk sharing.
- **Analytics**: Integrasikan Google Analytics atau Plausible untuk track visits.
- **PWA**: Tambahkan manifest.json dan service worker untuk offline support.
- **Dark Mode**: Bisa ditambahkan dengan CSS media query (`prefers-color-scheme`).

## Author & Contact
- **Nama**: Kacer
- **Email**: kacer@email.com
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)
- **LinkedIn**: [linkedin.com/in/alexjohnson](https://linkedin.com/in/alexjohnson)



---
