import { Box, Typography, Grid, } from "@mui/material";

const capas = [
  {
    title: "UI (User Interface)",
    description: "Presentación e interacción con el usuario. Contiene formularios, componentes visuales y validaciones básicas. Llama a BLL Técnica o BLL Negocio para procesar la lógica antes de mostrar resultados.",
  },
  {
    title: "BLL Técnica (Business Logic Layer Técnica)",
    description: "Gestiona reglas técnicas transversales, como logging, validaciones avanzadas o utilidades comunes. Contiene servicios reutilizables y transforma datos para BLL Negocio.",
  },
  {
    title: "BLL Negocio",
    description: "Contiene la lógica principal de negocio: procesos, cálculos y coordinación entre entidades. Consume BE y DAL para ejecutar operaciones y entregar resultados a UI.",
  },
  {
    title: "BE (Business Entities)",
    description: "Modela los datos y objetos del dominio: entidades y modelos de negocio. Es utilizada por BLL y DAL para representar información de manera consistente.",
  },
  {
    title: "DAL (Data Access Layer)",
    description: "Capa de acceso y persistencia de datos. Incluye repositorios, consultas SQL y adaptadores de base de datos. Proporciona información a BLL.",
  }
];


const ArquitecturaAnavi = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 2, sm: 4 } }}>
      <Grid container spacing={4}>
        {capas.map((capa, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography variant="h6" gutterBottom>
                {capa.title}
              </Typography>
              <Typography variant="body2">{capa.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArquitecturaAnavi;
