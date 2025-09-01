import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Seccion from '../components/Seccion';
import BackToHome from '../components/BackToHome';
import { useTheme } from "@mui/material/styles";

export default function Home() {

  const theme = useTheme();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <>
      {/* Cada sección se instancia aquí */}
      <Seccion id="home" titulo="Home"  bgcolor={theme.palette.background.default}>
        Contenido de la sección Home
      </Seccion>

      <Seccion id="sobre-mi" titulo="Sobre mí" bgcolor={theme.palette.background.secondary}>
        Contenido de la sección Sobre mí
      </Seccion>

      <Seccion id="habilidades" titulo="Habilidades Técnicas" bgcolor={theme.palette.background.default}>
        Contenido de Habilidades Técnicas
      </Seccion>

      <Seccion id="educacion" titulo="Educación" bgcolor={theme.palette.background.secondary}>
        Contenido de Educación
      </Seccion>

      <Seccion id="proyectos" titulo="Proyectos" bgcolor={theme.palette.background.default}>
        Contenido de Proyectos
      </Seccion>

      <Seccion id="tutoriales" titulo="Tutoriales" bgcolor={theme.palette.background.secondary}>
        Contenido de Tutoriales
      </Seccion>

      <Seccion id="blog" titulo="Blog" bgcolor={theme.palette.background.default}>
        Contenido de Blog
      </Seccion>

      <Seccion id="cv" titulo="CV" bgcolor={theme.palette.background.secondary}>
        Contenido de CV
      </Seccion>

      <Seccion id="contacto" titulo="Contacto" bgcolor={theme.palette.background.default}>
        Contenido de Contacto
      </Seccion>

      <BackToHome />
    </>
  );
}