import ProjectCard from "./ProjectCard";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';

const projects = [
  {
    title: "Organización Inteligente de Eventos",
    description: "Marketplace de eventos con filtros avanzados, APIs externas, estimaciones inteligentes y sistema de puntuaciones. Incorpora seguridad robusta, auditoría, soporte multiidioma y documentación completa para despliegue profesional.",
    videoUrl: "https://www.youtube.com/embed/8AHCfZTRGiI",
    path: "/pages/anavi_project",
    github: "https://github.com/usuario/proyecto1",
    logoSrc: "/assets/anavi_portada.png",
    logoAlt: "anavi_portada",
    coverTitle: "Anavi",
    coverSubtitle: "Eventos Corporativos",   
  },
  {
    title: "Plataforma Integral de Gestión de Inventarios",
    description: `
    Sistema que optimiza el inventario con estimación inteligente de pedidos a proveedores:
    • **Flujo de Trabajo Integral**: Abarca todo el proceso de negocio: compras, depósitos y entregas de mercadería.
    • **Arquitectura Robusta**: Incluye control de perfiles de usuario, trazabilidad de operaciones, bitácora de auditoría y funcionalidades de seguridad y cifrado de datos.
    • **Listo para Producción**: Respaldado por documentación técnica detallada, diagramas UML y manuales para su despliegue empresarial.`,
    videoUrl: "https://www.youtube.com/embed/13EifDb4GYs",
    path: "/pages/auzonia_project",
    github: "https://github.com/usuario/proyecto2",
    logoSrc: "/assets/auzonia_portada.png",
    logoAlt: "auzonia_portada",
    coverTitle: "Auzonia",
    coverSubtitle: "Gestión de Inventarios", 
  }
];


export default function Projects() {  
  return (
    <Box component="section" sx={{ maxWidth: "1000px", margin: "0 auto", py: 6, px: { xs: 2, sm: 6 } }}>
      <Typography variant="body1" paragraph>
        Los siguientes proyectos implementan una <strong>arquitectura en capas</strong>, <strong>persistencia de datos</strong> y <strong>patrones de diseño</strong> para resolver desafíos que van mucho más allá de simples ABM:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <SecurityIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography>
                <strong>Lógica de Negocio y Seguridad:</strong> Incluyen funcionalidades complejas, procesos de negocio y sistemas de seguridad.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography>
                <strong>Desarrollo Individual:</strong> Cada proyecto fue realizado <strong>íntegramente de forma individual</strong>, desde el desarrollo hasta la documentación.
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BuildIcon color="action" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography>
                <strong>Enfoque en los Fundamentos:</strong> En ciertos casos se priorizó el desarrollo de funcionalidades manuales sobre el uso de frameworks, con el objetivo de profundizar en los conceptos y la lógica del software.
              </Typography>
            }
          />
        </ListItem>
      </List>

      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </Box>
  );
}
