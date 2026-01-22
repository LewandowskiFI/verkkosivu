{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import express from 'express';\
import cors from 'cors';\
import nodemailer from 'nodemailer';\
import dotenv from 'dotenv';\
import path from 'path';\
import \{ fileURLToPath \} from 'url';\
\
dotenv.config();\
\
const app = express();\
const PORT = process.env.PORT || 3000;\
\
// M\'e4\'e4ritell\'e4\'e4n __dirname ES module -ymp\'e4rist\'f6ss\'e4\
const __filename = fileURLToPath(import.meta.url);\
const __dirname = path.dirname(__filename);\
\
// Middlewaret\
app.use(cors());\
app.use(express.json());\
\
// S\'e4hk\'f6postiasetukset\
const transporter = nodemailer.createTransport(\{\
  service: 'gmail',\
  auth: \{\
    user: process.env.EMAIL_USER,\
    pass: process.env.EMAIL_PASS,\
  \},\
\});\
\
// API-reitti\
app.post('/api/contact', async (req, res) => \{\
  const \{ name, email, company, message \} = req.body;\
\
  if (!name || !email || !message) \{\
    return res.status(400).json(\{ error: 'T\'e4yt\'e4 kaikki pakolliset kent\'e4t.' \});\
  \}\
\
  const mailOptions = \{\
    from: process.env.EMAIL_USER,\
    to: process.env.EMAIL_RECEIVER,\
    subject: `Uusi yhteydenotto: $\{name\} ($\{company || 'Ei yrityst\'e4'\})`,\
    text: `Nimi: $\{name\}\\nS\'e4hk\'f6posti: $\{email\}\\nYritys: $\{company || '-'\}\\n\\nViesti:\\n$\{message\}`,\
  \};\
\
  try \{\
    await transporter.sendMail(mailOptions);\
    res.status(200).json(\{ success: true, message: 'Viesti l\'e4hetetty!' \});\
  \} catch (error) \{\
    console.error('Virhe s\'e4hk\'f6postissa:', error);\
    res.status(500).json(\{ error: 'L\'e4hetys ep\'e4onnistui.' \});\
  \}\
\});\
\
// Tarjoile React-sovellus (kun rakennettu)\
app.use(express.static(path.join(__dirname, 'dist')));\
\
app.get('*', (req, res) => \{\
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));\
\});\
\
app.listen(PORT, () => \{\
  console.log(`Serveri k\'e4ynniss\'e4 portissa $\{PORT\}`);\
\});}