"use client";

import { Box, Typography, Container } from "@mui/material";
import styles from "./AccommodationHero.module.scss";

export default function AccommodationHero() {
  return (
    <Box component="section" className={styles.hero}>
      {/* Immagine di sfondo */}
      <Box
        className={styles.heroBg}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80)",
        }}
      />
      <Box className={styles.heroOverlay} />
      <Box className={styles.grain} />

      <Box className={styles.mountainSilhouette}>
        <svg viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,300 L0,200 L120,120 L200,160 L320,60 L420,140 L520,80 L620,150 L720,40 L820,130 L920,70 L1020,160 L1120,90 L1240,170 L1340,100 L1440,150 L1440,300 Z"
            fill="rgba(74,173,170,0.06)"
          />
          <path
            d="M0,300 L0,240 L180,170 L280,210 L400,130 L500,190 L600,110 L700,180 L800,100 L900,170 L1000,120 L1100,190 L1200,140 L1320,200 L1440,160 L1440,300 Z"
            fill="rgba(13,92,99,0.22)"
          />
        </svg>
      </Box>

      <Container maxWidth="xl" className={styles.container}>
        <Box className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <Typography className={styles.eyebrowText}>Pernottamento</Typography>
          <span className={styles.eyebrowLine} />
        </Box>

        <Typography variant="h1" className={styles.heading}>
          Dormire
          <br />
          <span className={styles.headingAccent}>al Rifugio Gouta</span>
        </Typography>

        <Typography className={styles.subheading}>
          Tre camerate accoglienti a 1.200 m s.l.m., nel cuore del Bosco di Gouta.
          <br />
          Letti a castello, doccia calda gratuita e il silenzio dei pini silvestri.
        </Typography>

        <Box className={styles.pills}>
          <span className={styles.pill}>🛏️ 3 Camerate · 7 posti ciascuna</span>
          <span className={styles.pill}>🚿 Doccia calda gratuita</span>
          <span className={styles.pill}>📶 Wi-Fi incluso</span>
        </Box>
      </Container>
    </Box>
  );
}
