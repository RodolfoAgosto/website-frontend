import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
  ListItemIcon,
  Box,
  Stack,
  Avatar,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTube from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import SchoolIcon from "@mui/icons-material/School";
import FolderIcon from "@mui/icons-material/Folder";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";
import DescriptionIcon from "@mui/icons-material/Description";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from '@mui/material';

const menuItems = [
  { text: "Home", id: "home", icon: <HomeIcon /> },
  { text: "Sobre mí", id: "sobre-mi", icon: <PersonIcon /> },
  { text: "Competencias", id: "competencias", icon: <BuildIcon /> },
  { text: "Educación y Certificaciones", id: "educacion", icon: <SchoolIcon /> },
  { text: "Proyectos", id: "proyectos", icon: <FolderIcon /> },
  { text: "Tutoriales", id: "tutoriales", icon: <MenuBookIcon /> },
  { text: "Blog", id: "blog", icon: <ArticleIcon /> },
  { text: "CV", id: "cv", icon: <DescriptionIcon /> },
  { text: "Contacto", id: "contacto", icon: <MailIcon /> },
];

export default function Sidebar({ setOpen}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(menuItems[0]?.id || "");
  const theme = useTheme();

  // Función para hacer scroll suave
  const scrollToSection = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveId(id); // feedback inmediato al click
      }
    }
  };

  // Observa secciones y actualiza el activo al hacer scroll
  useEffect(() => {
    const sections = menuItems
      .map((m) => document.getElementById(m.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      {
        // Marca como activa cuando ~50–60% de la sección es visible
        threshold: 0.2,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const drawerContent = (
    <Box sx={{ textAlign: "center", color: theme.palette.sidebar.inactive }}>
      <Stack direction="column" alignItems="center" spacing={2} sx={{ mt: 4, mb: 2 }}>
        <Avatar
          alt="Rodolfo Agosto"
          src="/assets/Perfil.jpg"
          sx={{
            width: 100,
            height: 100,
            border: `3px solid ${theme.palette.sidebar.inactive}`,
            borderRadius: "50%",
          }}
        />
        <Typography variant="h5">Rodolfo Agosto</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener"
            sx={{ color: theme.palette.sidebar.inactive, "&:hover": { color: theme.palette.sidebar.active } }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener"
            sx={{ color: theme.palette.sidebar.inactive, "&:hover": { color: theme.palette.sidebar.active } }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton 
            component="a"
            href="https://www.youtube.com/@tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.sidebar.inactive, "&:hover": { color: theme.palette.sidebar.active } }}
          >
            <YouTube />
          </IconButton>
        </Stack>
      </Stack>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => scrollToSection(item.id)}
             selected={activeId === item.id} // 👈 marca el activo
            sx={{
               "&.Mui-selected": {
                backgroundColor: theme.palette.sidebar.background,
                color: theme.palette.sidebar.active, 
              },
              "&:not(.Mui-selected)": {
                backgroundColor: theme.palette.sidebar.background,
                color: theme.palette.sidebar.inactive,
              },
              "&:hover": {
                backgroundColor: theme.palette.sidebar.background,
                color: theme.palette.sidebar.active,
              },
            }}
          >
            {item.icon && (
              <ListItemIcon sx={{ color: "inherit", minWidth: 32 }}>
                {item.icon}
              </ListItemIcon>
            )}
            <ListItemText primary={item.text} sx={{ '& .MuiTypography-root': { color: 'inherit' } }}  />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        slotProps={{
        paper: {
          sx: {
            backgroundColor: theme.palette.sidebar.background,
            width: 310,
          },
        },
      }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}