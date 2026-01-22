# Verkkosivun hostausohjeet

Tämä ohje selittää, miten voit hostata tämän verkkosivun palvelimella.

## Nopea aloitus

### 1. Asenna riippuvuudet

```bash
npm install
# tai
pnpm install
```

**TÄRKEÄÄ**: Varmista, että asennat myös dev-riippuvuudet (ne tarvitaan build-prosessissa):
```bash
npm install --include=dev
```

### 2. Rakenna projekti tuotantoversioksi

```bash
npm run build
```

Tämä luo `dist`-kansion, joka sisältää valmiin tuotantoversion.

### 3. Konfiguroi ympäristömuuttujat

Luo `.env`-tiedosto projektin juureen:

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

**Huomio Gmailille**: Sinun täytyy käyttää "App Password" eikä tavallista salasanaa. 
- Mene: https://myaccount.google.com/apppasswords
- Luo uusi App Password
- Käytä sitä `EMAIL_PASS`-kentässä

### 4. Käynnistä palvelin

```bash
npm start
```

Sovellus on nyt käynnissä osoitteessa `http://localhost:3000` (tai määrittämäsi portissa).

## Tuotantokäyttöönotto

### Vaihtoehto 1: PM2 (suositeltu)

PM2 on Node.js-sovellusten process manager, joka pitää sovelluksen käynnissä ja käynnistää sen uudelleen, jos se kaatuu.

1. **Asenna PM2:**
```bash
npm install -g pm2
```

2. **Rakenna ja käynnistä:**
```bash
npm run build
pm2 start server.js --name verkkosivu
```

3. **Tallenna konfiguraatio (jotta sovellus käynnistyy automaattisesti uudelleenkäynnistyksen jälkeen):**
```bash
pm2 save
pm2 startup
```

4. **Hyödyllisiä PM2-komentoja:**
```bash
pm2 status          # Näytä kaikki prosessit
pm2 logs verkkosivu # Näytä lokit
pm2 restart verkkosivu # Käynnistä uudelleen
pm2 stop verkkosivu    # Pysäytä
pm2 delete verkkosivu  # Poista
```

### Vaihtoehto 2: systemd (Linux-palvelimet)

Luo palvelutiedosto `/etc/systemd/system/verkkosivu.service`:

```ini
[Unit]
Description=Verkkosivu Node.js App
After=network.target

[Service]
Type=simple
User=your-username
WorkingDirectory=/path/to/your/project
ExecStart=/usr/bin/node server.js
Restart=always
Environment=NODE_ENV=production
EnvironmentFile=/path/to/your/project/.env

[Install]
WantedBy=multi-user.target
```

Käynnistä palvelu:
```bash
sudo systemctl enable verkkosivu
sudo systemctl start verkkosivu
sudo systemctl status verkkosivu
```

### Vaihtoehto 3: Nginx reverse proxy (suositeltu tuotannossa)

Jos haluat käyttää Nginxiä reverse proxynä (esim. portti 80/443):

1. **Asenna Nginx:**
```bash
sudo apt update
sudo apt install nginx
```

2. **Luo Nginx-konfiguraatio** `/etc/nginx/sites-available/verkkosivu`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

3. **Ota konfiguraatio käyttöön:**
```bash
sudo ln -s /etc/nginx/sites-available/verkkosivu /etc/nginx/sites-enabled/
sudo nginx -t  # Testaa konfiguraatio
sudo systemctl restart nginx
```

4. **SSL-sertifikaatti (Let's Encrypt):**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Tarkistuslista ennen tuotantoon viemistä

- [ ] Kaikki riippuvuudet asennettu (`npm install --include=dev`)
- [ ] Build onnistuu ilman virheitä (`npm run build`)
- [ ] `.env`-tiedosto luotu ja konfiguroitu
- [ ] Palvelin käynnistyy ilman virheitä (`npm start`)
- [ ] CSS-tyylit näkyvät oikein selaimessa
- [ ] Yhteydenottolomake toimii (testaa lähettämällä viesti)

## Yleisiä ongelmia

### Build epäonnistuu
```bash
# Poista node_modules ja asenna uudelleen
rm -rf node_modules package-lock.json
npm install --include=dev
npm run build
```

### CSS-tyylit eivät näy
- Varmista, että `tailwindcss` on asennettuna: `npm list tailwindcss`
- Jos ei, asenna: `npm install tailwindcss@4.1.12`
- Rakenna uudelleen: `npm run build`

### Portti on jo käytössä
- Vaihda portti `.env`-tiedostossa: `PORT=3001`
- Tai pysäytä toinen prosessi, joka käyttää samaa porttia

## Tuki

Katso lisätietoja `SERVER_SETUP.md`-tiedostosta.
