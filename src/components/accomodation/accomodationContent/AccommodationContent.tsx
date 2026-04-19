"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import styles from "./AccommodationContent.module.scss";
import { biancheria, carouselSlides, kit, prezziPubblico, servizi, tariffePernotto } from "../accomodationConfig";
import { socials } from "@/lib/utils";



function RoomCarousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (transitioning || index === current) return;
    setTransitioning(true);
    setPrev(current);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
      setPrev(null);
    }, 700);
  }, [current, transitioning]);

  const goNext = useCallback(() => goTo((current + 1) % carouselSlides.length), [current, goTo]);
  const goPrev = useCallback(() => goTo((current - 1 + carouselSlides.length) % carouselSlides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(goNext, 5000);
    return () => clearInterval(t);
  }, [goNext]);

  return (
    <Box className={styles.carousel}>
      {carouselSlides.map((slide, i) => (
        <Box
          key={slide.src}
          className={`${styles.carouselSlide} ${i === current ? styles.carouselActive : ""} ${i === prev && transitioning ? styles.carouselLeaving : ""}`}
          style={{ backgroundImage: `url(${slide.src})` }}
        />
      ))}

      <Box className={styles.carouselOverlay} />

      <Box className={styles.carouselSilhouette}>
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,160 L0,100 L180,60 L280,90 L400,30 L500,80 L600,20 L700,70 L800,10 L900,60 L1000,30 L1100,80 L1200,50 L1320,90 L1440,60 L1440,160 Z"
            fill="rgba(13,92,99,0.25)"
          />
        </svg>
      </Box>

      <Box className={styles.carouselInfo}>
        <Typography className={styles.carouselTag}>Camerate</Typography>
        <Typography className={styles.carouselTitle}>3 camerate · 7 posti ciascuna</Typography>
      </Box>

      <button className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`} onClick={goPrev} aria-label="Precedente">‹</button>
      <button className={`${styles.carouselArrow} ${styles.carouselArrowRight}`} onClick={goNext} aria-label="Successiva">›</button>

      <Box className={styles.carouselDots}>
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            className={`${styles.carouselDot} ${i === current ? styles.carouselDotActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function AccommodationContent() {
  return (
    <Box component="section" className={styles.section}>
      <Box className={styles.bgTexture} />
      <Container maxWidth="xl" className={styles.container}>

        <Box className={styles.labelRow}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Le camerate</Typography>
          <span className={styles.labelLine} />
        </Box>

        <Grid container spacing={5} className={styles.camerateGrid} sx={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box className={styles.camerataCard}>
              <Box className={styles.camerataBody}>
                <Typography className={styles.camerataTitle}>Camerate 1 · 2 · 3</Typography>
                <Typography className={styles.camerataDesc}>
                  Tre camerate accoglienti, ciascuna con 7 posti letto a castello comodi e caldi.
                  Strutture semplici e curate, pensate per il vero escursionista: tutto quello che
                  serve per riposare bene dopo una giornata intensa tra i sentieri del Parco Alpi
                  Liguri. Le camerate sono pulite, silenziose e immerse nel bosco di pini silvestri
                  a 1.200 m s.l.m.
                  Il posto giusto per ricaricarsi prima della prossima tappa.
                </Typography>
                <Box className={styles.camerataMeta}>
                  <span className={styles.metaTag}>3 camerate</span>
                  <span className={styles.metaTag}>7 posti ciascuna</span>
                  <span className={styles.metaTag}>Letti a castello</span>
                  <span className={styles.metaTag}>Lettino bimbi disponibile</span>
                </Box>
                <Box className={styles.bambiniNote}>
                  <Typography className={styles.bambiniText}>
                    🍼 <strong>Con bambini piccoli?</strong> È possibile richiedere un lettino
                    supplementare al momento della prenotazione.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <RoomCarousel />
          </Grid>
        </Grid>

        <Box className={styles.labelRow} sx={{ marginTop: "clamp(3.5rem, 7vw, 6rem) !important" }}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Tariffe pernotto</Typography>
          <span className={styles.labelLine} />
        </Box>
        <Box className={styles.prezziBlock} sx={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          <Box className={styles.prezziGlow} />
          <Box className={styles.prezziTable}>
            {tariffePernotto.map((p, i) => (
              <Box key={p.voce} className={`${styles.prezziRow} ${i === tariffePernotto.length - 1 ? styles.prezziRowLast : ""}`}>
                <Box>
                  <Typography className={styles.prezziVoce}>{p.voce}</Typography>
                  {p.note && <Typography className={styles.prezziNoteInline}>{p.note}</Typography>}
                </Box>
                <Typography className={styles.prezziPrezzo}>{p.prezzo}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className={styles.gifBanner}>
          <Box className={styles.gifBg} style={{ backgroundImage: "url(/images/accommodation/camerata.gif)" }} />
          <Box className={styles.gifOverlay} />
          <Box className={styles.gifContent}>
            <Typography className={styles.gifLabel}>Il rifugio vi aspetta</Typography>
            <Typography className={styles.gifHeading}>
              La camerata,
              <br />
              <span className={styles.gifAccent}>il vostro nido in quota</span>
            </Typography>
          </Box>
        </Box>

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

        <Box className={styles.labelRow} sx={{ marginTop: "clamp(3.5rem, 7vw, 6rem) !important" }}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Kit noleggio biancheria</Typography>
          <span className={styles.labelLine} />
        </Box>
        <Box className={styles.prezziBlock} sx={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          <Box className={styles.prezziGlow} />
          <Box className={styles.prezziTable}>
            {kit.map((p, i) => (
              <Box key={p.voce} className={`${styles.prezziRow} ${i === kit.length - 1 ? styles.prezziRowLast : ""} ${i === kit.length - 1 ? styles.prezziRowHighlight : ""}`}>
                <Box>
                  <Typography className={styles.prezziVoce}>{p.voce}</Typography>
                  {p.note && <Typography className={styles.prezziNoteInline}>{p.note}</Typography>}
                </Box>
                <Typography className={styles.prezziPrezzo}>{p.prezzo}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className={styles.labelRow} sx={{ marginTop: "clamp(3.5rem, 7vw, 6rem) !important" }}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Prezzi al pubblico</Typography>
          <span className={styles.labelLine} />
        </Box>
        <Box className={styles.prezziBlock}>
          <Box className={styles.prezziGlow} />
          <Box className={styles.prezziTable}>
            {prezziPubblico.map((p, i) => (
              <Box key={p.voce} className={`${styles.prezziRow} ${i === prezziPubblico.length - 1 ? styles.prezziRowLast : ""}`}>
                <Typography className={styles.prezziVoce}>{p.voce}</Typography>
                <Typography className={styles.prezziPrezzo}>{p.prezzo}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

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
              <Link href={socials.whatsapp} target="_blank" rel="noreferrer" className={styles.ctaBtnPrimary}>
                💬 Scrivici su WhatsApp
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
