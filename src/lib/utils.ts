
export interface SocialLinks {
  instagram: string;
  facebook: string;
  whatsapp: string;
  legalSeat: string;
  email: string;
};

export const socials:SocialLinks = {
    instagram:"https://www.instagram.com/rifugiogoladigouta/",
    facebook:"https://www.facebook.com/profile.php?id=61587179255889",
    whatsapp:`https://api.whatsapp.com/send?phone=393480305996&text=${encodeURIComponent("Ciao! Vorrei informazioni sui vostri servizi.")}`,
    legalSeat: "Regione Gouta 1, Pigna, Liguria 18037",
    email: "rifugiogoladigouta2026@gmail.com",
}