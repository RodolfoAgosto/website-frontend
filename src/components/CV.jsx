import { Box, Button, Stack, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import DownloadIcon from "@mui/icons-material/Download";

export const CV_PATH = "/docs/CV-Rodolfo-Agosto.pdf";

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
        Podés descargar mi CV base en PDF. Si necesitás una versión adaptada a un puesto o a
        una tecnología en particular, escribime y te la envío.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
        <Button
          variant="contained"
          size="large"
          startIcon={<DownloadIcon />}
          component="a"
          href={CV_PATH}
          download="CV-Rodolfo-Agosto.pdf"
        >
          Descargar CV (PDF)
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<DescriptionIcon />}
          onClick={goToContact}
        >
          Pedime una versión adaptada
        </Button>
      </Stack>
    </Box>
  );
}
