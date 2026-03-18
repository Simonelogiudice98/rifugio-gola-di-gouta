"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import Link from "next/link";
import styles from "./DiningContent.module.scss";

const quando = [
  {
    icon: "📅",
    title: "Sabato e domenica",
    desc: "Menu completo disponibile per tutti gli ospiti e i visitatori di passaggio. Prenotazione gradita per organizzarci al meglio.",
    highlight: true,
  },
  {
    icon: "📞",
    title: "Durante la settimana",
    desc: "Su prenotazione. Comitiva, gruppo o voglia di una serata in montagna — contattateci e organizziamo noi.",
    highlight: false,
  },
  {
    icon: "🎉",
    title: "Occasioni speciali",
    desc: "Compleanni, ricorrenze, ritiri di gruppo. Su prenotazione, con anticipo. Scriveteci e costruiamo qualcosa insieme.",
    highlight: false,
  },
];

// Piatti di esempio — da aggiornare con il menu reale
const menuEsempio = [
  {
    categoria: "Antipasti",
    piatti: [
      { nome: "[Piatto da definire]", desc: "Prodotto locale · stagionale" },
      { nome: "[Piatto da definire]", desc: "Prodotto locale · stagionale" },
    ],
  },
  {
    categoria: "Primi",
    piatti: [
      { nome: "[Piatto da definire]", desc: "Prodotto locale · stagionale" },
      { nome: "[Piatto da definire]", desc: "Prodotto locale · stagionale" },
      { nome: "[Piatto da definire]", desc: "Prodotto locale · stagionale" },
    ],
  },
  {
    categoria: "Secondi",
    piatti: [
      { nome: "[Piatto da definire]", desc: "Prodotto locale · stagionale" },
      { nome: "[Piatto da definire]", desc: "Prodotto locale · stagionale" },
    ],
  },
  {
    categoria: "Dolci",
    piatti: [
      { nome: "[Piatto da definire]", desc: "Prodotto locale · stagionale" },
      { nome: "[Piatto da definire]", desc: "Prodotto locale · stagionale" },
    ],
  },
];

const valoriCucina = [
  {
    icon: "🌿",
    title: "Prodotti locali",
    desc: "Ingredienti del territorio ligure, scelti in base alla stagione e alla disponibilità dei produttori della Val Nervia.",
  },
  {
    icon: "🔄",
    title: "Menu stagionale",
    desc: "Il menu cambia perché cambiano i prodotti e le stagioni. La cura con cui prepariamo ogni piatto resta sempre la stessa.",
  },
  {
    icon: "🌾",
    title: "Intolleranze",
    desc: "Stiamo lavorando per offrire opzioni per celiaci. Segnalate qualsiasi intolleranza al momento della prenotazione.",
  },
  {
    icon: "🎒",
    title: "Pranzo al sacco",
    desc: "Ripartite di buon mattino? Su richiesta prepariamo panini e kit energetici. Basta dircelo la sera prima.",
  },
];

export default function DiningContent() {
  return (
    <Box component="section" className={styles.section}>
      <Box className={styles.bgTexture} />

      <Container maxWidth="xl" className={styles.container}>

        {/* ── Intro ── */}
        <Box className={styles.introBlock}>
          <Box className={styles.labelRow}>
            <span className={styles.labelLine} />
            <Typography className={styles.label}>La nostra cucina</Typography>
            <span className={styles.labelLine} />
          </Box>
          <Typography className={styles.introHeading}>
            Una cucina che sa
            <br />
            <span className={styles.introAccent}>dove si trova</span>
          </Typography>
          <Typography className={styles.introBody}>
            In cucina cerchiamo di portarvi il meglio di questo angolo di
            Liguria. Prodotti locali, stagionali, preparati con la semplicità
            genuina di chi vive la montagna tutto l'anno. Non troverete menu
            fissi stampati — quello che c'è dipende dal giorno, dalla stagione
            e da quello che il territorio ha da offrire.
          </Typography>
        </Box>

        {/* ── Quando siamo aperti ── */}
        <Box className={styles.labelRow}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Quando siamo aperti</Typography>
          <span className={styles.labelLine} />
        </Box>

        <Grid container spacing={4} sx={{ marginBottom: "clamp(3.5rem, 7vw, 6rem)" }}>
          {quando.map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.title}>
              <Box className={`${styles.quandoCard} ${item.highlight ? styles.quandoCardHighlight : ""}`}>
                <Typography className={styles.quandoIcon}>{item.icon}</Typography>
                <Typography className={styles.quandoTitle}>{item.title}</Typography>
                <Typography className={styles.quandoDesc}>{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ── Menu di esempio ── */}
        <Box className={styles.labelRow}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Menu stagionale</Typography>
          <span className={styles.labelLine} />
        </Box>

        <Box className={styles.menuNotice}>
          <Typography className={styles.menuNoticeText}>
            📋 Il menu cambia ogni settimana in base ai prodotti disponibili. Quello che segue è
            un esempio indicativo — per il menu aggiornato contattateci prima della visita.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ marginBottom: "clamp(3rem, 6vw, 5.5rem)" }}>
          {menuEsempio.map((sezione) => (
            <Grid size={{ xs: 12, sm: 6 }} key={sezione.categoria}>
              <Box className={styles.menuCard}>
                <Typography className={styles.menuCategoria}>{sezione.categoria}</Typography>
                <Box className={styles.menuDivider} />
                {sezione.piatti.map((piatto, i) => (
                  <Box key={i} className={styles.menuPiatto}>
                    <Typography className={styles.menuPiattoNome}>{piatto.nome}</Typography>
                    <Typography className={styles.menuPiattoDesc}>{piatto.desc}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ── Come cuciniamo ── */}
        <Box className={styles.labelRow}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Come cuciniamo</Typography>
          <span className={styles.labelLine} />
        </Box>

        <Grid container spacing={3} sx={{ marginBottom: "clamp(3rem, 6vw, 5.5rem)" }}>
          {valoriCucina.map((v) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={v.title}>
              <Box className={styles.valoreCard}>
                <Typography className={styles.valoreIcon}>{v.icon}</Typography>
                <Typography className={styles.valoreTitle}>{v.title}</Typography>
                <Typography className={styles.valoreDesc}>{v.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ── Intolleranze ── */}
        <Box className={styles.intoleranceNote}>
          <Typography className={styles.intoleranceText}>
            🌾 <strong>Intolleranze e diete speciali</strong> — Segnalate sempre le vostre
            esigenze alimentari al momento della prenotazione. Faremo del nostro meglio
            per venirvi incontro.
          </Typography>
        </Box>

        {/* ── CTA ── */}
        <Box className={styles.ctaBlock}>
          <Box className={styles.ctaGlow} />
          <Box className={styles.ctaContent}>
            <Typography className={styles.ctaLabel}>Prenotazioni tavola</Typography>
            <Typography className={styles.ctaHeading}>
              Venite a mangiare
              <br />
              <span className={styles.ctaAccent}>con noi?</span>
            </Typography>
            <Typography className={styles.ctaBody}>
              Per prenotare un pranzo o una cena, ordinare un pranzo al sacco o
              organizzare un evento, scriveteci su WhatsApp. Indicate data,
              numero di persone ed eventuali esigenze alimentari.
            </Typography>
            <Box className={styles.ctaButtons}>
              <Link
                href="https://wa.me/390000000000"
                target="_blank"
                rel="noreferrer"
                className={styles.ctaBtnPrimary}
              >
                💬 Prenota su WhatsApp
              </Link>
              <Link href="/#contatti" className={styles.ctaBtnSecondary}>
                Tutti i contatti →
              </Link>
            </Box>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
