import { Box } from "@mui/material";
import styles from "./ImageWrapper.module.scss";

export default function ImageWrapper() {
  return (
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
    </Box>
  );
}
