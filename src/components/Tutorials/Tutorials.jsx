import TutorialCard from "./TutorialCard";
import { Box, Grid, Typography, } from "@mui/material";

const tutorials = [
  {
    title: "Principios SOLID",
    description: "Buenas prácticas de diseño orientado a objetos para código mantenible y escalable.",
    logoSrc: "/assets/principios_solid.jpeg",
    logoAlt: "anavi_portada",
  },
  {
    title: "Patrón Observer",
    description: "Comunicación eficiente entre objetos mediante suscripción y notificación automática.",
    logoSrc: "/assets/patron_observe.jpg",
    logoAlt: "auzonia_portada",
  },
  {
    title: "Patrón Composite",
    description: "Manejo uniforme de estructuras jerárquicas de objetos mediante composición recursiva.",
    logoSrc: "/assets/patron_composite.jpg",
    logoAlt: "auzonia_portada",
  }
];

export default function Tutorials() {  
  return (
    <Box component="section" sx={{ maxWidth: "1000px", margin: "0 auto", py: 2, px: { xs: 2, sm: 2 } }}>    
    <Typography variant="body1" paragraph>
      Estoy preparando una serie de tutoriales de ingeniería de software, con video y código. Estos son los primeros temas.
      Cada tutorial incluirá un video explicativo y, cuando corresponda, el código disponible en el repositorio.
    </Typography> 
      <Grid container spacing={2} >
        {tutorials.map((p, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>     
            <TutorialCard  {...p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}