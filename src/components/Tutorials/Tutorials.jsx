import TutorialCard from "./TutorialCard";
import { Box, Grid, Typography, } from "@mui/material";

const tutorials = [
  {
    title: "Principios SOLID",
    description: "Buenas prácticas de diseño orientado a objetos para código mantenible y escalable.",
    videoUrl: "https://www.youtube.com/embed/8AHCfZTRGiI",
    github: "https://github.com/usuario/proyecto1",
    logoSrc: "/assets/principios_solid.jpeg",
    logoAlt: "anavi_portada",
    coverTitle: "Anavi",
    coverSubtitle: "Eventos Corporativos",   
  },
  {
    title: "Patrón Observer",
    description: "Comunicación eficiente entre objetos mediante suscripción y notificación automática.",
    videoUrl: "https://www.youtube.com/embed/13EifDb4GYs",
    github: "https://github.com/usuario/proyecto2",
    logoSrc: "/assets/patron_observe.jpg",
    logoAlt: "auzonia_portada",
    coverTitle: "Auzonia",
    coverSubtitle: "Gestión de Inventarios", 
  },
  {
    title: "Patrón Composite",
    description: "Manejo uniforme de estructuras jerárquicas de objetos mediante composición recursiva.",
    videoUrl: "https://www.youtube.com/embed/13EifDb4GYs",
    github: "https://github.com/usuario/proyecto2",
    logoSrc: "/assets/patron_composite.jpg",
    logoAlt: "auzonia_portada",
    coverTitle: "Auzonia",
    coverSubtitle: "Gestión de Inventarios", 
  }
];

export default function Tutorials() {  
  return (
    <Box component="section" sx={{ maxWidth: "1000px", margin: "0 auto", py: 2, px: { xs: 2, sm: 2 } }}>    
    <Typography variant="body1" paragraph>
        Cada tutorial incluye un video explicativo y, cuando corresponde, el código disponible en el repositorio.
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