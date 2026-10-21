// CoverVideo.jsx
import { Box } from "@mui/material";

export default function CoverVideo({ logoSrc, logoAlt, sx }) {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%", ...sx }}>
      <img
        src={logoSrc}
        alt={logoAlt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // ocupa todo el contenedor
        }}
      />
    </Box>
  );
}
