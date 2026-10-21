import { Box, Button, Grid, TextField, Typography, Link } from "@mui/material";

export default function CV() {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        py: 6,
        px: { xs: 2, sm: 3 },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Imagen del CV difuminada */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src="/assets/cv_difuminado.png" 
            alt="Vista previa del CV"
            sx={{
              width: "100%",
              borderRadius: 2,
              boxShadow: 3,
              objectFit: "cover",
              filter: "blur(1px)",  
              opacity: 0.99,
            }}
          />
        </Grid>

        {/* Texto + formulario */}
        <Grid item xs={12} md={7}>
          <Typography variant="h4" gutterBottom>
            Curriculum Vitae
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, maxWidth: "500px" }}>
            Ingresa el email que registraste para acceder al currículum online.  
            Si no tenés acceso, podés solicitarlo desde la sección{" "}
            <Link href="#contacto" underline="hover">
              Contacto
            </Link>.
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
              maxWidth: "400px",
            }}
          >
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              size="small"
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ minWidth: { xs: "100%", sm: "120px" } }}
            >
              Acceder
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
