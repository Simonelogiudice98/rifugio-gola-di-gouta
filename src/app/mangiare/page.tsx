import { Box } from "@mui/material";
import DiningHero from "@/components/dining/DiningHero";
import DiningContent from "@/components/dining/DiningContent";

export const metadata = {
  title: "Mangiare — Rifugio Gouta",
  description:
    "Cucina di montagna genuina nel Bosco di Gouta. Menu completo sabato e domenica, su prenotazione durante la settimana. Pranzo al sacco disponibile.",
};

export default function MangiarePage() {
  return (
    <Box component="main">
      <DiningHero />
      <DiningContent />
    </Box>
  );
}
