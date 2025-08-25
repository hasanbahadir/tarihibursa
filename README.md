
  # Bursa Tarihi Turizm Rehberi Websitesi

  ## Yayınlama (GitHub Pages + Özel Alan Adı)

  Bu repo, `main` dalına push edildiğinde Vite ile derlenir ve GitHub Pages’a otomatik olarak deploy edilir.

  - Workflow: `.github/workflows/deploy-pages.yml`
  - Çıktı klasörü: `dist`
  - SPA fallback: `404.html` (build sonrası `index.html` kopyası)
  - Özel alan adı: `tarihibursa.com` (CNAME dosyası build artefact’ına eklenir)

  DNS yapılandırması:
  - `tarihibursa.com` için bir A kaydı ekleyip GitHub Pages IP’lerine yöneltin veya `www` için CNAME’i `<kullanıcı>.github.io`’ya yönlendirin.
  - Repo ayarlarında Pages altında “Custom domain” alanına `tarihibursa.com` yazıp kaydedin (GitHub otomatik SSL sağlar).

  This is a code bundle for Bursa Tarihi Turizm Rehberi Websitesi. The original project is available at https://www.figma.com/design/ddvwmsRZDzt8jMZpE6B36J/Bursa-Tarihi-Turizm-Rehberi-Websitesi.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  