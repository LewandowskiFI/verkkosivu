import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Määritellään __dirname ES module -ympäristössä
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewaret
app.use(cors());
app.use(express.json());

// Sähköpostiasetukset
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API-reitti
app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Täytä kaikki pakolliset kentät.' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `Uusi yhteydenotto: ${name} (${company || 'Ei yritystä'})`,
    text: `Nimi: ${name}\nSähköposti: ${email}\nYritys: ${company || '-'}\n\nViesti:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Viesti lähetetty!' });
  } catch (error) {
    console.error('Virhe sähköpostissa:', error);
    res.status(500).json({ error: 'Lähetys epäonnistui.' });
  }
});

// Tarjoile React-sovellus (kun rakennettu)
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveri käynnissä portissa ${PORT}`);
});
