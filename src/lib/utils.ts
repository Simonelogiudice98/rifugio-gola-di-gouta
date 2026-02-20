
export interface SocialLinks {
  instagram: string;
  facebook: string;
  whatsapp: string;
  legalSeat: string;
  email: string;
};

export const socials:SocialLinks = {
    instagram:"https://www.instagram.com/rifugiogoladigouta/",
    facebook:"https://www.facebook.com/share/185YcowfMS/",
    whatsapp:`https://api.whatsapp.com/send?phone=41792096881&text=${encodeURIComponent("Ciao! Vorrei informazioni sui vostri servizi.")}`,
    legalSeat: "Sede legale: Via del Sole 8, 6963 PREGASSONA (CH)",
    email: "pkt.kartteam@gmail.com",
}