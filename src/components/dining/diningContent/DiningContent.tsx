"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import Link from "next/link";
import styles from "./DiningContent.module.scss";
import { menuEsempio, quando, valoriCucina } from "../DiningConfig";
import { socials } from "@/lib/utils";


export default function DiningContent() {
  return (
    <Box component="section" className={styles.section}>
      <Box className={styles.bgTexture} />

      <Container maxWidth="xl" className={styles.container}>
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
            genuina di chi vive la montagna tutto l&apos;anno. Non troverete
            menu fissi stampati, quello che c&apos;è dipende dal giorno, dalla
            stagione e da quello che il territorio ha da offrire.
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

        <Box className={styles.pranzoNote}>
          <Typography className={styles.pranzoText}>
            🎒 <strong>Zaino in spalla e senza pensieri:</strong> su prenotazione, prepariamo i
            vostri panini per il pranzo al sacco del giorno dopo! Ordinali il giorno prima e
            ritirali pronti per la tua escursione.
          </Typography>
        </Box>

        {/* ── Menu stagionale ── */}
        <Box className={styles.labelRow} sx={{ marginTop: "clamp(3.5rem, 7vw, 6rem) !important" }}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Menu stagionale</Typography>
          <span className={styles.labelLine} />
        </Box>

        <Box className={styles.menuNotice}>
          <Typography className={styles.menuNoticeText}>
            📋 Il menu cambia ogni settimana in base ai prodotti disponibili.
            Quello che segue è un esempio indicativo — per il menu aggiornato
            contattateci prima della visita.
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

        <Box className={styles.intoleranceNote}>
          <Typography className={styles.intoleranceText}>
            🌾 <strong>Intolleranze e diete speciali</strong> — Segnalate sempre
            le vostre esigenze alimentari al momento della prenotazione. Faremo
            del nostro meglio per venirvi incontro.
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
                href={socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={styles.ctaBtnPrimary}
              >
                💬 Prenota su WhatsApp
              </Link>
              <Link href="/#footer" className={styles.ctaBtnSecondary}>
                Tutti i contatti →
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
