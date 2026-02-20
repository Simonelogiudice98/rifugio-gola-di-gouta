"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import styles from "./Hero.module.scss";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    alt: "Panorama alpino al tramonto",
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80",
    alt: "Sentiero di montagna",
  },
  {
    url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=80",
    alt: "Rifugio di montagna",
  },
  {
    url: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1600&q=80",
    alt: "Paesaggio invernale alpino",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setPrev(current);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setTransitioning(false);
        setPrev(null);
      }, 1200);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <Box component="section" className={styles.hero}>
      {slides.map((slide, i) => (
        <Box
          key={slide.url}
          className={`${styles.slide} ${i === current ? styles.active : ""} ${
            i === prev && transitioning ? styles.leaving : ""
          }`}
          style={{ backgroundImage: `url(${slide.url})` }}
        />
      ))}

      <Box className={styles.overlay} />

      <Box className={styles.diagonalAccent} />

      <Box className={styles.content}>
        <Box className={styles.eyebrow}>
          <span className={styles.line} />
          <Typography variant="overline" className={styles.eyebrowText}>
            Alpi Liguri · 1.840 m s.l.m.
          </Typography>
          <span className={styles.line} />
        </Box>

        <Typography variant="h1" className={styles.title}>
          Rifugio
          <br />
          <span className={styles.titleAccent}>Gola di Gouta</span>
        </Typography>

        <Typography variant="body1" className={styles.subtitle}>
          Dove la montagna incontra il silenzio.
          <br />
          Un rifugio autentico tra vette e tradizione.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} className={styles.ctas}>
          <Button variant="contained" size="large" className={styles.btnPrimary}>
            Prenota il tuo soggiorno
          </Button>
          <Button variant="outlined" size="large" className={styles.btnSecondary}>
            Scopri le escursioni
          </Button>
        </Stack>
      </Box>

      <Box className={styles.indicators}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </Box>

      <Box className={styles.scrollCue}>
        <span className={styles.scrollLine} />
        <Typography variant="caption" className={styles.scrollText}>
          Scorri
        </Typography>
      </Box>
    </Box>
  );
}
