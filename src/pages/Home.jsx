import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Seccion from '../components/Seccion';
import Hero from '../components/Home/Hero';
import BackToHome from '../components/BackToHome';
import { useTheme } from "@mui/material/styles";
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import EducationCertifications from '../components/EducationData';
import Projects from '../components/Projects/Projects';
import Tutorials from '../components/Tutorials/Tutorials';
import Blogs from '../components/Blogs/Blogs';
import CV from '../components/CV';
import Contacto from '../components/Contacto';


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
      <Hero id="home"/>

      <Seccion id="sobre-mi" titulo="Sobre mí" bgcolor={theme.palette.background.secondary}>
        <AboutMe />
      </Seccion>

      <Seccion id="competencias" titulo="Competencias" bgcolor={theme.palette.background.default}>
        <Skills/>
      </Seccion>

      <Seccion id="educacion" titulo="Educación  y Certificaciones" bgcolor={theme.palette.background.secondary}>
        <EducationCertifications/>
      </Seccion>

      <Seccion id="proyectos" titulo="Proyectos" bgcolor={theme.palette.background.default}>
        <Projects/>
      </Seccion>

      <Seccion id="tutoriales" titulo="Tutoriales" bgcolor={theme.palette.background.secondary}>
        <Tutorials/>
      </Seccion>

      <Seccion id="blog" titulo="Blogs" bgcolor={theme.palette.background.default}>
        <Blogs/>
      </Seccion>

      <Seccion id="cv" titulo="CV" bgcolor={theme.palette.background.secondary}>
        <CV/>
      </Seccion>

      <Seccion id="contacto" titulo="Contacto" bgcolor={theme.palette.background.default}>
        <Contacto />
      </Seccion>

      <BackToHome />
    </>
  );
}