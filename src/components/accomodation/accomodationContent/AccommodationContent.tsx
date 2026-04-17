"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import Link from "next/link";
import styles from "./AccommodationContent.module.scss";
import { biancheria, kit, prezziPubblico, servizi, tariffePernotto } from "../accomodationConfig";


export default function AccommodationContent() {
  return (
    <Box component="section" className={styles.section}>
      <Box className={styles.bgTexture} />
      <Container maxWidth="xl" className={styles.container}>

        {/* ── Camerate ── */}
        <Box className={styles.labelRow}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Le camerate</Typography>
          <span className={styles.labelLine} />
        </Box>
        <Grid container spacing={4} className={styles.camerateGrid}>
          {[1, 2, 3].map((n) => (
            <Grid size={{ xs: 12, md: 4 }} key={n}>
              <Box className={styles.camerataCard}>
                <Box className={styles.camerataNumber}>{`0${n}`}</Box>
                <Box className={styles.camerataBody}>
                  <Typography className={styles.camerataTitle}>
                    Camerata {n === 1 ? "A" : n === 2 ? "B" : "C"}
                  </Typography>
                  <Typography className={styles.camerataDesc}>
                    7 posti letto con letti a castello comodi e caldi. Il posto perfetto per chi
                    cerca un riparo autentico dopo una giornata tra i sentieri del Parco Alpi Liguri.
                  </Typography>
                  <Box className={styles.camerataMeta}>
                    <span className={styles.metaTag}>7 posti</span>
                    <span className={styles.metaTag}>Letti a castello</span>
                    {n === 1 && <span className={styles.metaTag}>Lettino bimbi disponibile</span>}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ── Tariffe pernotto ── */}
        <Box className={styles.labelRow} sx={{ marginTop: "clamp(3.5rem, 7vw, 6rem) !important" }}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Tariffe pernotto</Typography>
          <span className={styles.labelLine} />
        </Box>
        <Box className={styles.prezziBlock} sx={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          <Box className={styles.prezziGlow} />
          <Box className={styles.prezziTable}>
            {tariffePernotto.map((p, i) => (
              <Box
                key={p.voce}
                className={`${styles.prezziRow} ${i === tariffePernotto.length - 1 ? styles.prezziRowLast : ""}`}
              >
                <Box>
                  <Typography className={styles.prezziVoce}>{p.voce}</Typography>
                  {p.note && <Typography className={styles.prezziNoteInline}>{p.note}</Typography>}
                </Box>
                <Typography className={styles.prezziPrezzo}>{p.prezzo}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Cosa portare ── */}
        <Box className={styles.labelRow} sx={{ marginTop: "clamp(3.5rem, 7vw, 6rem) !important" }}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Cosa portare</Typography>
          <span className={styles.labelLine} />
        </Box>
        <Grid container spacing={4} sx={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          {biancheria.map((item) => (
            <Grid size={{ xs: 12, md: 6 }} key={item.title}>
              <Box className={styles.bianqueriaCard}>
                <Typography className={styles.bianqueriaIcon}>{item.icon}</Typography>
                <Box>
                  <Typography className={styles.bianqueriaTitle}>{item.title}</Typography>
                  <Typography className={styles.bianqueriaDesc}>{item.desc}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ── Kit noleggio ── */}
        <Box className={styles.labelRow} sx={{ marginTop: "clamp(3.5rem, 7vw, 6rem) !important" }}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Kit noleggio biancheria</Typography>
          <span className={styles.labelLine} />
        </Box>
        <Box className={styles.prezziBlock} sx={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          <Box className={styles.prezziGlow} />
          <Box className={styles.prezziTable}>
            {kit.map((p, i) => (
              <Box
                key={p.voce}
                className={`${styles.prezziRow} ${i === kit.length - 1 ? styles.prezziRowLast : ""} ${i === kit.length - 1 ? styles.prezziRowHighlight : ""}`}
              >
                <Box>
                  <Typography className={styles.prezziVoce}>{p.voce}</Typography>
                  {p.note && <Typography className={styles.prezziNoteInline}>{p.note}</Typography>}
                </Box>
                <Typography className={styles.prezziPrezzo}>{p.prezzo}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Prezzi al pubblico ── */}
        <Box className={styles.labelRow} sx={{ marginTop: "clamp(3.5rem, 7vw, 6rem) !important" }}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Prezzi al pubblico</Typography>
          <span className={styles.labelLine} />
        </Box>
        <Box className={styles.prezziBlock}>
          <Box className={styles.prezziGlow} />
          <Box className={styles.prezziTable}>
            {prezziPubblico.map((p, i) => (
              <Box
                key={p.voce}
                className={`${styles.prezziRow} ${i === prezziPubblico.length - 1 ? styles.prezziRowLast : ""}`}
              >
                <Typography className={styles.prezziVoce}>{p.voce}</Typography>
                <Typography className={styles.prezziPrezzo}>{p.prezzo}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Servizi ── */}
        <Box className={styles.labelRow} sx={{ marginTop: "clamp(3.5rem, 7vw, 6rem) !important" }}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Servizi inclusi</Typography>
          <span className={styles.labelLine} />
        </Box>
        <Grid container spacing={3} sx={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          {servizi.map((s) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={s.title}>
              <Box className={styles.servizioCard}>
                <Typography className={styles.servizioIcon}>{s.icon}</Typography>
                <Typography className={styles.servizioTitle}>{s.title}</Typography>
                <Typography className={styles.servizioDesc}>{s.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ── CTA ── */}
        <Box className={styles.ctaBlock}>
          <Box className={styles.ctaGlow} />
          <Box className={styles.ctaContent}>
            <Typography className={styles.ctaLabel}>Prenotazioni</Typography>
            <Typography className={styles.ctaHeading}>
              Pronti a passare la notte
              <br />
              <span className={styles.ctaAccent}>tra i pini silvestri?</span>
            </Typography>
            <Typography className={styles.ctaBody}>
              Per prenotare il vostro posto letto, contattateci direttamente su WhatsApp. Indicate
              numero di persone, date e eventuali esigenze (lettino bimbi, biancheria a noleggio,
              intolleranze alimentari, pranzo al sacco).
            </Typography>
            <Box className={styles.ctaButtons}>
              <Link
                href="https://wa.me/390000000000"
                target="_blank"
                rel="noreferrer"
                className={styles.ctaBtnPrimary}
              >
                💬 Scrivici su WhatsApp
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
