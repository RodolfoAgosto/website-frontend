import { Box, Typography, Grid, Avatar } from "@mui/material";
import {
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiSpring,
  SiReact,
  SiBootstrap,
  SiOracle,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiDocker,
  SiKubernetes,
  SiSonarqube,
  SiJira,
  SiConfluence,
} from "react-icons/si";
import { ReactComponent as JavaIcon } from '../assets/icons/java.svg';
import { ReactComponent as Javascript } from '../assets/icons/javascript.svg';
import { ReactComponent as JUnitIcon } from '../assets/icons/junit5.svg';
import { ReactComponent as MockitoIcon } from '../assets/icons/mockito.svg';
import { ReactComponent as MUIIcon } from '../assets/icons/mui.svg';
import { ReactComponent as SQLServerIcon } from '../assets/icons/microsoftsqlserver.svg';
import { ReactComponent as Swagger } from '../assets/icons/swagger.svg';
import { ReactComponent as Tdd } from '../assets/icons/tdd.svg';
import { ReactComponent as CleanCode } from '../assets/icons/cleancode.svg';
import { ReactComponent as Cicd } from '../assets/icons/cicd.svg';
import { ReactComponent as Scrumkanban } from '../assets/icons/scrumkanban.svg';
import { ReactComponent as ComunicacionEfectiva } from '../assets/icons/comunicacionefectiva.svg';
import { ReactComponent as ResolucionDeProblemas } from '../assets/icons/resoluciondeproblemas.svg';
import { ReactComponent as TrabajoEnEquipo } from '../assets/icons/trabajoenequipo.svg';
import { ReactComponent as Uml } from '../assets/icons/uml.svg';
import { ReactComponent as ArquitecturaLimpia } from '../assets/icons/cleanarchitecture.svg';
import { ReactComponent as PatronesDeDiseño } from '../assets/icons/patrones.svg';


const skillIcons = {
  Java: <JavaIcon style={{ width: 32, height: 32, fill: "#f89820" }} />, 
  JavaScript: <Javascript style={{ width: 32, height: 32, fill: "#f7df1e" }} />,
  HTML5: <SiHtml5 size={32} color="#e34f26" />,
  CSS3: <SiCss3 size={32} color="#264de4" />,
  "Spring Boot": <SiSpringboot size={32} color="#6db33f" />,
  "Spring Data": <SiSpring size={32} color="#6db33f" />,
  "Spring Security": <SiSpring size={32} color="#6db33f" />,
  JPA: <SiSpring size={32} color="#6db33f" />,
  React: <SiReact size={32} color="#61dafb" />,
  JUnit: <JUnitIcon size={32} color="#a2130b" />,
  Mockito: <MockitoIcon size={32} color="#d71920" />,
  Bootstrap: <SiBootstrap size={32} color="#563d7c" />,
  MUI: <MUIIcon size={32} color="#007fff" />,
  Swagger: <Swagger style={{ width: 32, height: 32, fill: "#85ea2d" }} />, 
  Oracle: <SiOracle size={32} color="#f80000" />,
  PostgreSQL: <SiPostgresql size={32} color="#336791" />,
  "SQL Server": <SQLServerIcon size={32} color="#cc2927" />,
  Git: <SiGit size={32} color="#f05032" />,
  TDD: <Tdd style={{ width: 50, height: 50, fill: "#f89820" }} />,
  "Clean Code": <CleanCode style={{ width: 50, height: 50, fill: "#f89820" }} />,
  "UML":<Uml style={{ width: 40, height: 40, fill: "#f89820" }} />,  
  Postman: <SiPostman size={32} color="#ff6c37" />,
  Docker: <SiDocker size={32} color="#0db7ed" />,
  Kubernetes: <SiKubernetes size={32} color="#326ce5" />,
  "CI/CD": <Cicd style={{ width: 100, height: 100, fill: "#f89820" }} />,
  SonarQube: <SiSonarqube size={32} color="#4e9f3d" />,
  Jira: <SiJira size={32} color="#0052cc" />,
  Confluence: <SiConfluence size={32} color="#172b4d" />,
  "Scrum/Kanban": <Scrumkanban style={{ width: 100, height: 100, fill: "#f89820" }} />,
  "Comunicación efectiva": <ComunicacionEfectiva style={{ width: 40, height: 40, fill: "#f89820" }} />,
  "Resolución de problemas": <ResolucionDeProblemas style={{ width: 40, height: 40, fill: "#f89820" }} />,
  "Trabajo en equipo":<TrabajoEnEquipo style={{ width: 40, height: 40, fill: "#f89820" }} />,
  "Arquitectura limpia":<ArquitecturaLimpia   style={{
    width: 180,
    height: "auto",
    transform: "scale(2)",
    transformOrigin: "center"
  }}  />,
  "Patrones de diseño":<PatronesDeDiseño style={{ width: 180, height: 180, fill: "#f89820" }} />,
  
};

const skillCategories = [
  {
    category: "Lenguajes de programación",
    skills: ["Java", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks y librerías",
    skills: [
      "Spring Boot",
      "Spring Data",
      "Spring Security",
      "JPA",
      "React",
      "JUnit",
      "Mockito",
      "Bootstrap",
      "MUI",
      "Swagger",
    ],
  },
  {
    category: "Bases de datos",
    skills: ["Oracle", "PostgreSQL", "SQL Server"],
  },
  {
    category: "Prácticas y herramientas",
    skills: [
      "Git",
      "TDD",
      "Clean Code",
      "Arquitectura limpia",
      "Patrones de diseño",
      "UML",
      "Postman",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "SonarQube",
      "Jira",
      "Confluence",
      "Scrum/Kanban",
    ],
  },
  {
    category: "Habilidades Blandas",
    skills: ["Comunicación efectiva", "Resolución de problemas", "Trabajo en equipo"],
  },
];

export default function Skills() {
  return (
    <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 6, px: { xs: 2, sm: 6 } }}>
      {skillCategories.map((category) => (
        <Box key={category.category} sx={{ mb: 5 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            {category.category}
          </Typography>
          <Grid container spacing={3}>
            {category.skills.map((skill) => (
              <Grid
                item
                xs={6}
                sm={3}
                md={2}
                key={skill}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Avatar sx={{ width: 56, height: 56, mb: 1, bgcolor: "#F0E6E2", border: "1px solid #4F2928" }}>
                    {skillIcons[skill] || skill[0]}
                  </Avatar>
                  <Typography variant="caption" sx={{ wordWrap: "break-word" }}>
                    {skill}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
