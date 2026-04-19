"use client";

import { Box, Typography, Grid, Container } from "@mui/material";
import styles from "./About.module.scss";
import Image from "next/image";
import { values } from "./aboutConfig";

export default function About() {
  return (
    <Box component="section" id="chi-siamo" className={styles.section}>
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
              <span className={styles.headingAccent}>
                nel cuore del Bosco di Gouta
              </span>
            </Typography>

            <Box className={styles.divider} />

            <Typography className={styles.body}>
              Benvenuti al Rifugio Gouta, nel cuore del Bosco di Gouta, a 1.200
              metri di quota sopra Pigna, in quella Val Nervia che profuma
              ancora di resina e silenzio. Tra gli abeti bianchi, i faggi e i
              pini silvestri del Parco Naturale Regionale delle Alpi Liguri,
              troverete un posto dove tirare il fiato, mangiare bene e dormire
              con il rumore del vento tra i rami.
            </Typography>

            <Typography className={styles.body}>
              Che siate escursionisti di passaggio, famiglie in cerca di una
              domenica diversa o ciclisti arrivati fin lassù a forza di gambe,
              siete nel posto giusto. Vi aspettiamo.
            </Typography>

            <Box className={styles.statsRow}>
              <Box className={styles.stat}>
                <Typography className={styles.statNumber}>1.200</Typography>
                <Typography className={styles.statLabel}>m s.l.m.</Typography>
              </Box>
              <Box className={styles.statDivider} />
              <Box className={styles.stat}>
                <Typography className={styles.statNumber}>3</Typography>
                <Typography className={styles.statLabel}>
                  Camerate · 21 posti
                </Typography>
              </Box>
              <Box className={styles.statDivider} />
              <Box className={styles.stat}>
                <Typography className={styles.statNumber}>Pigna</Typography>
                <Typography className={styles.statLabel}>
                  Val Nervia, Liguria
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }} className={styles.imageCol}>
            <Box className={styles.imageWrapper}>
              <Image
                src="/images/about/family1.jpg"
                alt="Famiglia Rifugio Gouta"
                width={1200}
                height={800}
                className={styles.imagePrimary}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3} className={styles.valuesGrid}>
          {values.map((v) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={v.title}>
              <Box className={styles.valueCard}>
                <Typography className={styles.valueIcon}>{v.icon}</Typography>
                <Typography className={styles.valueTitle}>{v.title}</Typography>
                <Typography className={styles.valueDesc}>
                  {v.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}