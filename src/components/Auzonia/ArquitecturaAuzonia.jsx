import { Box, Typography, Grid, } from "@mui/material";

const capas = [
  {
    title: "UI (User Interface)",
    description: "Presentación y entrada de datos; interacción con el usuario. Contiene formularios, componentes visuales y validaciones básicas. Llama a BLL Técnica o BLL Negocio para procesar la lógica antes de mostrar resultados.",
  },
  {
    title: "BLL Técnica (Business Logic Layer Técnica)",
    description: "Gestión de reglas transversales y técnicas (ej. seguridad, logging, validaciones avanzadas). Contiene servicios técnicos reutilizables y transformación de datos. Consume la capa BE y se comunica con BLL Negocio.",
  },
  {
    title: "BLL Negocio",
    description: "Contiene la lógica de negocio principal de la aplicación. Incluye procesos de negocio, cálculos y coordinación entre entidades y persistencia. Consume BE y DAL para ejecutar operaciones de negocio.",
  },
  {
    title: "Seguridad",
    description: "Gestiona permisos, roles y políticas de acceso. Contiene objetos de seguridad y es usada por BLL Técnica y BLL Negocio para validar operaciones y proteger datos.",
  },
  {
    title: "BE (Business Entities)",
    description: "Representación de los datos y objetos del dominio del negocio. Contiene clases de entidad, modelos de datos y DTOs. Consumida por BLL y DAL para procesar y persistir información.",
  },
  {
    title: "DAL (Data Access Layer)",
    description: "Capa de persistencia y acceso a la base de datos. Incluye repositorios, consultas SQL y adaptadores de base de datos. Trabaja con BE y sirve datos a BLL.",
  },
  {
    title: "Interfaces",
    description: "Contratos, API y servicios externos. Contiene interfaces y adaptadores a sistemas externos, permitiendo comunicación con otros sistemas sin acoplar la lógica interna.",
  },
];

const ArquitecturaAuzonia = () => {
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

export default ArquitecturaAuzonia;
