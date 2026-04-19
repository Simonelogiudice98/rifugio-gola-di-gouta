"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import Link from "next/link";
import styles from "./DiningContent.module.scss";
import { quando, valoriCucina } from "../DiningConfig";
import { socials } from "@/lib/utils";
import Image from "next/image";

const menuSezioni = [
  {
    categoria: "Antipasto del Rifugiato",
    icon: "🧀",
    desc: "Il nostro benvenuto, sempre pronto per voi. Un tagliere generoso di salumi e formaggi selezionati dal territorio, da accompagnare con le nostre birre artigianali bionda e rossa o con i vini dei Poderi La Collina.",
    piatti: [
      {
        nome: "Tagliere di salumi e formaggi d'alpeggio",
        desc: "Selezione dal territorio · km zero",
      },
      { nome: "Birra artigianale bionda o rossa", desc: "Produzione locale" },
      {
        nome: "Vini Poderi La Collina",
        desc: "Dogliani DOCG · Anna e Piergiorgio Marengo",
      },
    ],
  },
  {
    categoria: "I Nostri Vini",
    icon: "🍷",
    desc: "Dalle Langhe di Dogliani alle bollicine dell'Oltrepò: una selezione curata per accompagnare la vostra sosta al rifugio.",
    piatti: [
      { nome: "Dogliani DOCG", desc: "Poderi La Collina · Langhe" },
      {
        nome: "Via Bianco & Via Rosé frizzante",
        desc: "Pinot Nero · Cantina Giorgi · Oltrepò Pavese",
      },
      {
        nome: "Spumante Crudo Bianco & Rosé",
        desc: "Metodo Charmat · Cantina Giorgi · extra dry",
      },
      {
        nome: "Vino Sfuso Sangiovese",
        desc: "Schietto e sincero · per una sosta in allegria",
      },
    ],
  },
  {
    categoria: "I Nostri Panini",
    icon: "🥪",
    desc: "Semplici, ma con carattere. Preparati al momento con pane fragrante e gli stessi salumi e formaggi d'alpeggio del nostro tagliere. Il compagno ideale per la prossima vetta.",
    piatti: [
      {
        nome: "Panino con salumi d'alpeggio",
        desc: "Pane fragrante · ingredienti del territorio",
      },
      {
        nome: "Panino con formaggi locali",
        desc: "Pane fragrante · formaggi a km zero",
      },
    ],
  },
  {
    categoria: "Cucina del Rifugio",
    icon: "🍲",
    desc: "A Gouta la cucina celebra la nostra terra, tra boschi di abeti e aria di vetta. Pasta fresca, selvaggina secondo tradizione e una ricercata selezione di salumi liguri.",
    piatti: [
      {
        nome: "Primi con pasta fresca",
        desc: "Preparati con cura e passione · stagionale",
      },
      {
        nome: "Selvaggina secondo tradizione",
        desc: "Cucina tipica del territorio",
      },
      {
        nome: "Salumi liguri e formaggi d'alpeggio",
        desc: "Norcineria locale e nazionale · km zero",
      },
    ],
  },
];

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
            A Gouta la cucina celebra la nostra terra, tra boschi di abeti e
            aria di vetta. Prodotti locali, stagionali, preparati con la
            semplicità genuina di chi vive la montagna tutto l&apos;anno. Pasta
            fresca, selvaggina secondo tradizione e una ricercata selezione di
            salumi liguri e formaggi d&apos;alpeggio.
          </Typography>
        </Box>

        {/* ── Quando siamo aperti ── */}
        <Box className={styles.labelRow}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Quando siamo aperti</Typography>
          <span className={styles.labelLine} />
        </Box>

        <Grid
          container
          spacing={4}
          sx={{ marginBottom: "clamp(3.5rem, 7vw, 6rem)" }}
        >
          {quando.map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.title}>
              <Box
                className={`${styles.quandoCard} ${item.highlight ? styles.quandoCardHighlight : ""}`}
              >
                <Typography className={styles.quandoIcon}>
                  {item.icon}
                </Typography>
                <Typography className={styles.quandoTitle}>
                  {item.title}
                </Typography>
                <Typography className={styles.quandoDesc}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ── Food banner ── */}
        <Box className={styles.foodBanner}>
          <Image
            src="/images/dining/dining-banner1.jpeg"
            alt="La tavola del Rifugio Gouta"
            fill
            style={{ objectFit: "cover", objectPosition: "center 90%"  }}
            sizes="100vw"
          />
          <Box className={styles.foodOverlay} />
          <Box className={styles.foodContent}>
            <Typography className={styles.foodLabel}>
              La nostra tavola
            </Typography>
            <Typography className={styles.foodHeading}>
              Sapori autentici
              <br />
              <span className={styles.foodAccent}>a 1.200 m s.l.m.</span>
            </Typography>
          </Box>
        </Box>

        <Box className={styles.pranzoNote}>
          <Typography className={styles.pranzoText}>
            🎒 <strong>Zaino in spalla e senza pensieri:</strong> su
            prenotazione, prepariamo i vostri panini per il pranzo al sacco del
            giorno dopo! Ordinali il giorno prima e ritirali pronti per la tua
            escursione.
          </Typography>
        </Box>

        {/* ── Menu ── */}
        <Box
          className={styles.labelRow}
          sx={{ marginTop: "clamp(3.5rem, 7vw, 6rem) !important" }}
        >
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Cosa troverete</Typography>
          <span className={styles.labelLine} />
        </Box>

        <Box className={styles.menuNotice}>
          <Typography className={styles.menuNoticeText}>
            📢 <strong>Menu in evoluzione</strong> — La nostra cucina segue il
            ritmo della natura e l&apos;estro del giorno. Seguici sui social per
            scoprire cosa bolle in pentola questo weekend!
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{ marginBottom: "clamp(3rem, 6vw, 5.5rem)" }}
        >
          {menuSezioni.map((sezione) => (
            <Grid size={{ xs: 12, sm: 6 }} key={sezione.categoria}>
              <Box className={styles.menuCard}>
                <Box className={styles.menuCardHeader}>
                  <Typography className={styles.menuIconEl}>
                    {sezione.icon}
                  </Typography>
                  <Typography className={styles.menuCategoria}>
                    {sezione.categoria}
                  </Typography>
                </Box>
                <Typography className={styles.menuCardDesc}>
                  {sezione.desc}
                </Typography>
                <Box className={styles.menuDivider} />
                {sezione.piatti.map((piatto, i) => (
                  <Box key={i} className={styles.menuPiatto}>
                    <Typography className={styles.menuPiattoNome}>
                      {piatto.nome}
                    </Typography>
                    <Typography className={styles.menuPiattoDesc}>
                      {piatto.desc}
                    </Typography>
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

        <Grid
          container
          spacing={3}
          sx={{ marginBottom: "clamp(3rem, 6vw, 5.5rem)" }}
        >
          {valoriCucina.map((v) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={v.title}>
              <Box className={styles.valoreCard}>
                <Typography className={styles.valoreIcon}>{v.icon}</Typography>
                <Typography className={styles.valoreTitle}>
                  {v.title}
                </Typography>
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
            <Typography className={styles.ctaLabel}>
              Prenotazioni tavola
            </Typography>
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
