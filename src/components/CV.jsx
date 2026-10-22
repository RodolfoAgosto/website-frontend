import { Box, Button, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

export default function CV() {
  const goToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      sx={{
        maxWidth: "700px",
        margin: "0 auto",
        py: 6,
        px: { xs: 2, sm: 3 },
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Curriculum Vitae
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Mi CV se adapta a cada oportunidad: destaco la experiencia y las tecnologías más
        relevantes para el puesto. Si querés recibirlo, escribime y te lo envío.
      </Typography>

      <Button
        variant="contained"
        size="large"
        startIcon={<DescriptionIcon />}
        onClick={goToContact}
      >
        Pedime mi CV
      </Button>
    </Box>
  );
}