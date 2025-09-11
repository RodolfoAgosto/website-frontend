import { Box, Typography } from "@mui/material";

export default function CoverVideo({
  logoSrc,
  logoAlt = "Logo",
  title,
  subtitle,
}) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 0,
      }}
    >
      {/* Logo */}
      {logoSrc && (
        <Box
            component="img"
            src={logoSrc}
            alt={logoAlt}
            sx={{
                width: { xs: "50px", sm: "60px", md: "80px" }, // siempre mismo ancho
                height: "auto", // mantiene proporción
                mb: 2,
                objectFit: "contain", // se ajusta sin deformar
            }}
        />
      )}

      {/* Título */}
      {title && (
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
      )}

      {/* Subtítulo */}
      {subtitle && (
        <Typography variant="h3" color="primary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
