import ProjectCard from "./ProjectCard";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

const lirium = {
  title: "Lirium Nutrition Planning",
  featured: true,
  description:
    "Backend que genera planes de alimentación semanales a partir del perfil del paciente, sus restricciones y su condición fisiológica, y mide si el paciente los cumple:\n" +
    "• **Motor de planes**: requerimiento energético, distribución de macronutrientes y selección de alimentos para 7 días × 5 comidas.\n" +
    "• **Seguro por diseño**: ningún plan incluye alimentos excluidos por las restricciones del paciente.\n" +
    "• **Seguridad y calidad**: JWT con refresh tokens, OAuth2 de Google, más de 840 pruebas y 92% de cobertura.",
  videoUrl: "https://www.youtube.com/embed/6zi3zPiI3eM",
  logoSrc: "https://img.youtube.com/vi/6zi3zPiI3eM/maxresdefault.jpg",
  logoAlt: "Presentación de Lirium Nutrition Planning",
  links: [
    { label: "Código", url: "https://github.com/RodolfoAgosto/lirium-nutrition-planning", icon: <GitHubIcon /> },
    { label: "API en vivo", url: "https://lirium-nutrition-planning-api.onrender.com", icon: <OpenInNewIcon /> },
    { label: "Demo", url: "https://lirium-nutrition-frontend-theta.vercel.app/", icon: <OpenInNewIcon /> },
    { label: "Serie de videos", url: "https://www.youtube.com/playlist?list=PLZ2OWG7ilJl0", icon: <PlaylistPlayIcon /> },
  ],
};

const projects = [
  {
    title: "Organización Inteligente de Eventos",
    description: "Marketplace de eventos con filtros avanzados, APIs externas, estimaciones inteligentes y sistema de puntuaciones. Incorpora seguridad robusta, auditoría, soporte multiidioma y documentación completa para despliegue profesional.",
    videoUrl: "https://www.youtube.com/embed/0AEZwfz_MMk",
    path: "/pages/anavi_project",
    links: [
      { label: "Código", url: "https://github.com/RodolfoAgosto/anavi-eventos-corporativos", icon: <GitHubIcon /> },
    ],
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
    videoUrl: "https://www.youtube.com/embed/VhusjG-6ek4",
    path: "/pages/auzonia_project",
    links: [
      { label: "Código", url: "https://github.com/RodolfoAgosto/auzonia-gestion-inventarios", icon: <GitHubIcon /> },
    ],
    logoSrc: "/assets/auzonia_portada.png",
    logoAlt: "auzonia_portada",
    coverTitle: "Auzonia",
    coverSubtitle: "Gestión de Inventarios",
  }
];


export default function Projects() {
  return (
    <Box component="section" sx={{ maxWidth: "1000px", margin: "0 auto", py: 6, px: { xs: 2, sm: 6 } }}>
      {/* Proyecto destacado */}
      <ProjectCard {...lirium} />

      {/* Otros proyectos */}
      <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
        Otros proyectos
      </Typography>

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