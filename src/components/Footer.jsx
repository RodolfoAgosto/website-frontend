import { Box, Typography, useTheme } from "@mui/material";
import reactIcon from "../assets/icons/react-original.svg";
import postgreSQLIcon from "../assets/icons/postgresql-original.svg";
import javaIcon from "../assets/icons/java-original.svg";
import springIcon from "../assets/icons/spring-original.svg";
import materialUIIcon from "../assets/icons/materialui-original.svg";

// Logos de tecnologías
const logos = [
  { name: "React", src: reactIcon },
  { name: "Material UI", src: materialUIIcon },
  { name: "Spring", src: springIcon },
  { name: "Java", src: javaIcon },
  { name: "PostgreSQL", src: postgreSQLIcon },
];

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 4,
        mt: 6,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.primary }}>
        Hecho con:
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {logos.map((logo) => (
          <Box
            key={logo.name}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Box
              component="img"
              src={logo.src}
              alt={logo.name}
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              {logo.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography
        variant="caption"
        display="block"
        sx={{ mt: 3, color: theme.palette.text.secondary }}
      >
        © {new Date().getFullYear()} Rodolfo Agosto · Todos los derechos reservados
      </Typography>
    </Box>
  );
}