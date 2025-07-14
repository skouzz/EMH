import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone || ''}\nEntreprise: ${company || ''}\n\nMessage:\n${message}`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
  }
});

app.post('/api/devis', async (req, res) => {
  const { email, product, category } = req.body;
  if (!email || !product) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Votre devis pour ${product}`,
      text: `Bonjour,\n\nVoici votre devis pour le produit : ${product}\nCatégorie : ${category || ''}\n\nNotre équipe vous contactera prochainement pour plus de détails.\n\nCordialement,\nEMH` ,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'envoi du devis." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 