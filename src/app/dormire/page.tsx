import AccommodationContent from "@/components/accomodation/accomodationContent/AccommodationContent";
import AccommodationHero from "@/components/accomodation/accomodationhero/AccommodationHero";
import { Box } from "@mui/material";


export const metadata = {
  title: "Dormire — Rifugio Gouta",
  description:
    "3 camerate da 7 posti nel cuore del Bosco di Gouta. Doccia calda gratuita, Wi-Fi, letti a castello. Pigna (IM), 1.200 m s.l.m.",
};

export default function DormirePage() {
  return (
    <Box component="main">
      <AccommodationHero />
      <AccommodationContent />
    </Box>
  );
}
