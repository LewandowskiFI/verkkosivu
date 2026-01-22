
# One-Page Website for Premium Promotions

This is a code bundle for One-Page Website for Premium Promotions. The original project is available at https://www.figma.com/design/IewEhosh7EElhurmXWZRq1/One-Page-Website-for-Premium-Promotions.

## Kehitysympäristö

### Asennus
```bash
npm install
# tai
pnpm install
```

### Käynnistä kehityspalvelin
```bash
npm run dev
```

Sovellus käynnistyy osoitteessa `http://localhost:5173` (tai Viten määrittämässä portissa).

## Tuotantokäyttöönotto

### Nopea aloitus

1. **Asenna riippuvuudet:**
```bash
npm install --include=dev
```

2. **Rakenna projekti:**
```bash
npm run build
```

3. **Luo `.env`-tiedosto** (katso `.env.example` tai `DEPLOYMENT.md`)

4. **Käynnistä palvelin:**
```bash
npm start
```

### Yksityiskohtaiset ohjeet

Katso **`DEPLOYMENT.md`** tiedostosta yksityiskohtaiset ohjeet:
- PM2:lla hostaaminen
- systemd-palvelun luominen
- Nginx reverse proxy -konfiguraatio
- SSL-sertifikaatin asennus

## Dokumentaatio

- **`DEPLOYMENT.md`** - Yksityiskohtaiset hostausohjeet
- **`SERVER_SETUP.md`** - Tekniset asennusohjeet ja ongelmanratkaisu
  