"use client";

import { Box, Typography, Grid, Container } from "@mui/material";
import styles from "./About.module.scss";

const values = [
  {
    icon: "🏡",
    title: "Gestione Familiare",
    description:
      "Un rifugio a conduzione familiare dove ogni ospite è trattato come a casa propria. Calore umano e autenticità in ogni momento.",
  },
  {
    icon: "🍽️",
    title: "Cucina Tipica",
    description:
      "Piatti della tradizione ligure e piemontese preparati con prodotti locali e stagionali. Sapori genuini di montagna.",
  },
  {
    icon: "🛏️",
    title: "Camere Accoglienti",
    description:
      "Sistemazioni confortevoli per rigenerarsi dopo una giornata tra i sentieri. Semplicità alpina e tutto il necessario.",
  },
  {
    icon: "🏔️",
    title: "Natura Incontaminata",
    description:
      "Immersi nel cuore delle Alpi Liguri, a Gouta di Pigna, un angolo selvaggio e autentico tra boschi e vette.",
  },
];

export default function About() {
  return (
    <Box component="section" className={styles.section}>
      <Box className={styles.bgTexture} />

      <Container maxWidth="xl" className={styles.container}>
        <Box className={styles.labelRow}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>La nostra storia</Typography>
          <span className={styles.labelLine} />
        </Box>

        <Grid container spacing={0} className={styles.grid}>
          <Grid size={{ xs: 12, lg: 6 }} className={styles.textCol}>
            <Typography variant="h2" className={styles.heading}>
              Un rifugio di famiglia
              <br />
              <span className={styles.headingAccent}>nel cuore delle Alpi Liguri</span>
            </Typography>

            <Box className={styles.divider} />

            <Typography className={styles.body}>
              Siamo una famiglia innamorata della montagna e di questo angolo
              straordinario delle Alpi Liguri. Il Rifugio Gola di Gouta nasce
              dal desiderio di condividere la bellezza di questi luoghi con chi
              cerca autenticità, silenzio e buona tavola.
            </Typography>

            <Typography className={styles.body}>
              Situati a Gouta, nel comune di Pigna (IM), vi accogliamo con la
              semplicità e il calore tipici della nostra terra: cucina
              genuina, camere confortevoli e la voglia di farvi sentire
              a casa, anche a 1.840 metri di quota.
            </Typography>

            <Box className={styles.statsRow}>
              <Box className={styles.stat}>
                <Typography className={styles.statNumber}>1.840</Typography>
                <Typography className={styles.statLabel}>m s.l.m.</Typography>
              </Box>
              <Box className={styles.statDivider} />
              <Box className={styles.stat}>
                <Typography className={styles.statNumber}>100%</Typography>
                <Typography className={styles.statLabel}>Familiare</Typography>
              </Box>
              <Box className={styles.statDivider} />
              <Box className={styles.stat}>
                <Typography className={styles.statNumber}>Pigna</Typography>
                <Typography className={styles.statLabel}>Imperia, Liguria</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }} className={styles.imageCol}>
            <Box className={styles.imageWrapper}>
              <Box
                className={styles.imagePrimary}
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=900&q=80)",
                }}
              />
              <Box
                className={styles.imageSecondary}
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80)",
                }}
              />
              <Box className={styles.badge}>
                <Typography className={styles.badgeText}>
                  Alpi<br />Liguri
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3} className={styles.valuesGrid}>
          {values.map((v) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={v.title}>
              <Box className={styles.valueCard}>
                <Typography className={styles.valueIcon}>{v.icon}</Typography>
                <Typography className={styles.valueTitle}>{v.title}</Typography>
                <Typography className={styles.valueDesc}>{v.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
