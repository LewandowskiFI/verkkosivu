# Server-asennusohjeet

Tämä dokumentti sisältää ohjeet projektin asentamiseen ja käynnistämiseen palvelimella.

## Korjatut ongelmat

1. ✅ **Tailwind CSS import-ongelma**: `tailwindcss` on nyt siirretty `dependencies`-osiin, jotta se on saatavilla build-prosessissa
2. ✅ **CSS-importit**: Kaikki CSS-importit ovat nyt oikein konfiguroituja

## Vaatimukset

- Node.js (versio 18 tai uudempi)
- npm tai pnpm (projekti tukee molempia)
- Git (jos kloonaat repositorion)

## Asennusvaiheet

### 1. Siirry projektikansioon

```bash
cd /home/server/verkkosivu
```

### 2. Asenna riippuvuudet

**Jos käytät npm:**
```bash
npm install
```

**Jos käytät pnpm:**
```bash
pnpm install
```

**TÄRKEÄÄ**: Varmista, että **kaikki** riippuvuudet asennetaan, mukaan lukien `devDependencies`. Tämä on välttämätöntä, koska build-prosessi tarvitsee `@tailwindcss/vite` ja `vite`-paketit.

Jos npm asentaa vain production-riippuvuudet, käytä:
```bash
npm install --include=dev
```

### 3. Tarkista asennus

Varmista, että `tailwindcss` on asennettuna:
```bash
npm list tailwindcss
# tai
pnpm list tailwindcss
```

Jos komento palauttaa virheen, asenna paketti uudelleen:
```bash
npm install tailwindcss@4.1.12
```

### 4. Rakenna projekti

Rakenna projekti tuotantoversioksi:
```bash
npm run build
# tai
pnpm build
```

Tämä luo `dist`-kansion, joka sisältää valmiin tuotantoversion.

### 5. Konfiguroi ympäristömuuttujat

Luo `.env`-tiedosto projektin juureen (jos sitä ei vielä ole):
```bash
nano .env
```

Lisää seuraavat muuttujat:
```
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECEIVER=recipient@example.com
```

**Huomio**: Gmailin kohdalla sinun täytyy käyttää "App Password" eikä tavallista salasanaa. Katso ohjeet: https://support.google.com/accounts/answer/185833

### 6. Käynnistä palvelin

**Kehitysympäristössä:**
```bash
npm run dev
```

**Tuotantoympäristössä:**
```bash
npm run build
npm start
```

## Ongelmanratkaisu

### Ongelma: "Can't resolve 'tailwindcss'"

**Ratkaisu:**
1. Varmista, että `tailwindcss` on asennettuna:
   ```bash
   npm list tailwindcss
   ```

2. Jos pakettia ei löydy, asenna se:
   ```bash
   npm install tailwindcss@4.1.12
   ```

3. Poista `node_modules` ja `package-lock.json` (tai `pnpm-lock.yaml`), ja asenna uudelleen:
   ```bash
   rm -rf node_modules package-lock.json pnpm-lock.yaml
   npm install
   ```

4. Varmista, että käytät oikeaa Node.js-versiota (18+):
   ```bash
   node --version
   ```

### Ongelma: "Cannot find module '@tailwindcss/vite'"

**Ratkaisu:**
1. Asenna devDependencies:
   ```bash
   npm install --include=dev
   ```

2. Tarkista, että `@tailwindcss/vite` on `devDependencies`-osiossa `package.json`-tiedostossa.

### Ongelma: Build epäonnistuu

**Ratkaisu:**
1. Varmista, että kaikki riippuvuudet on asennettu:
   ```bash
   npm install --include=dev
   ```

2. Tarkista, että `vite.config.ts` on oikein konfiguroitu.

3. Yritä rakentaa uudelleen:
   ```bash
   npm run build
   ```

### Ongelma: CSS-tyylit eivät toimi

**Ratkaisu:**
1. Varmista, että `src/styles/index.css` sisältää:
   ```css
   @import "tailwindcss";
   ```

2. Tarkista, että `vite.config.ts` sisältää `tailwindcss()`-pluginin.

3. Rakenna projekti uudelleen:
   ```bash
   npm run build
   ```

## Tuotantokäyttöönotto

### PM2:lla (suositeltu)

1. Asenna PM2:
   ```bash
   npm install -g pm2
   ```

2. Käynnistä sovellus:
   ```bash
   npm run build
   pm2 start server.js --name verkkosivu
   ```

3. Tallenna PM2-konfiguraatio:
   ```bash
   pm2 save
   pm2 startup
   ```

### systemd:lla

Luo `/etc/systemd/system/verkkosivu.service`:
```ini
[Unit]
Description=Verkkosivu Node.js App
After=network.target

[Service]
Type=simple
User=server
WorkingDirectory=/home/server/verkkosivu
ExecStart=/usr/bin/node server.js
Restart=always
Environment=NODE_ENV=production
EnvironmentFile=/home/server/verkkosivu/.env

[Install]
WantedBy=multi-user.target
```

Käynnistä palvelu:
```bash
sudo systemctl enable verkkosivu
sudo systemctl start verkkosivu
```

## Tarkistuslista

Ennen kuin sovellus on valmis tuotantoon, varmista:

- [ ] Kaikki riippuvuudet on asennettu (`npm install --include=dev`)
- [ ] `tailwindcss` on asennettuna ja löytyy (`npm list tailwindcss`)
- [ ] Build onnistuu ilman virheitä (`npm run build`)
- [ ] `.env`-tiedosto on luotu ja konfiguroitu
- [ ] Palvelin käynnistyy ilman virheitä (`npm start`)
- [ ] CSS-tyylit näkyvät oikein selaimessa

## Yhteydenotto

Jos kohtaat ongelmia, tarkista:
1. Node.js-versio (`node --version` - pitäisi olla 18+)
2. Riippuvuuksien asennus (`npm list`)
3. Build-lokit (`npm run build`)

---

**Päivitetty**: Korjattu Tailwind CSS import-ongelma ja siirretty `tailwindcss` dependencies-osiin.
