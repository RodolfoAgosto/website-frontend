import { Box, Typography, Grid, Avatar } from "@mui/material";
import {
  SiHtml5,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiReact,
  SiBootstrap,
  SiOracle,
  SiPostgresql,
  SiRedis,
  SiFlyway,
  SiJsonwebtokens,
  SiGit,
  SiGithubactions,
  SiPostman,
  SiDocker,
  SiSonarcloud,
  SiJira,
  SiSharp,
  SiApachemaven,
} from "react-icons/si";
import { FaCubes, FaLayerGroup, FaSitemap, FaPlug, FaDatabase, FaFlask } from "react-icons/fa6";
import { ReactComponent as JavaIcon } from '../assets/icons/java.svg';
import { ReactComponent as Javascript } from '../assets/icons/javascript.svg';
import { ReactComponent as JUnitIcon } from '../assets/icons/junit5.svg';
import { ReactComponent as MockitoIcon } from '../assets/icons/mockito.svg';
import { ReactComponent as MUIIcon } from '../assets/icons/mui.svg';
import { ReactComponent as SQLServerIcon } from '../assets/icons/microsoftsqlserver.svg';
import { ReactComponent as Swagger } from '../assets/icons/swagger.svg';
import { ReactComponent as Scrumkanban } from '../assets/icons/scrumkanban.svg';
import { ReactComponent as CleanCode } from '../assets/icons/cleancode.svg';
import lombokLogo from '../assets/icons/lombok.png';
import mapstructLogo from '../assets/icons/mapstruct.png';
import { ReactComponent as Uml } from '../assets/icons/uml.svg';
import { ReactComponent as PatronesDeDiseño } from '../assets/icons/patrones.svg';

// Skills without an official logo use a generic icon in the site palette (never an invented logo).
const skillIcons = {
  POO: <FaCubes size={26} color="#4F2928" />,
  "Arquitectura en capas": <FaLayerGroup size={26} color="#4F2928" />,
  DDD: <FaSitemap size={26} color="#4F2928" />,
  "APIs REST": <FaPlug size={26} color="#4F2928" />,
  SQL: <FaDatabase size={26} color="#4F2928" />,
  Testcontainers: <FaFlask size={26} color="#4F2928" />,
  Lombok: <img src={lombokLogo} alt="Lombok" style={{ width: 32, height: 32, objectFit: "contain" }} />,
  MapStruct: <img src={mapstructLogo} alt="MapStruct" style={{ width: 32, height: 32, objectFit: "contain" }} />,
  Maven: <SiApachemaven size={32} color="#c71a36" />,
  "Java 21": <JavaIcon style={{ width: 32, height: 32, fill: "#f89820" }} />,
  "Patrones de diseño": <PatronesDeDiseño style={{ width: 180, height: 180, fill: "#f89820" }} />,
  "Clean Code": <CleanCode style={{ width: 50, height: 50, fill: "#f89820" }} />,
  UML: <Uml style={{ width: 40, height: 40, fill: "#f89820" }} />,
  "Spring Boot": <SiSpringboot size={32} color="#6db33f" />,
  "Spring Data JPA": <SiSpring size={32} color="#6db33f" />,
  "Spring Security": <SiSpring size={32} color="#6db33f" />,
  Hibernate: <SiHibernate size={32} color="#59666c" />,
  "OpenAPI/Swagger": <Swagger style={{ width: 32, height: 32, fill: "#85ea2d" }} />,
  Postman: <SiPostman size={32} color="#ff6c37" />,
  "JWT y OAuth2": <SiJsonwebtokens size={32} color="#000000" />,
  PostgreSQL: <SiPostgresql size={32} color="#336791" />,
  "SQL Server": <SQLServerIcon size={32} color="#cc2927" />,
  "Oracle (PL/SQL)": <SiOracle size={32} color="#f80000" />,
  Flyway: <SiFlyway size={32} color="#cc0200" />,
  Redis: <SiRedis size={32} color="#dc382d" />,
  "JUnit 5": <JUnitIcon size={32} color="#a2130b" />,
  Mockito: <MockitoIcon size={32} color="#d71920" />,
  SonarCloud: <SiSonarcloud size={32} color="#f3702a" />,
  "Git y GitHub": <SiGit size={32} color="#f05032" />,
  "GitHub Actions": <SiGithubactions size={32} color="#2088ff" />,
  Docker: <SiDocker size={32} color="#0db7ed" />,
  "Scrum/Kanban": <Scrumkanban style={{ width: 100, height: 100, fill: "#f89820" }} />,
  "Jira y Confluence": <SiJira size={32} color="#0052cc" />,
  "C# y VB.NET": <SiSharp size={32} color="#512bd4" />,
  JavaScript: <Javascript style={{ width: 32, height: 32, fill: "#f7df1e" }} />,
  "HTML y CSS": <SiHtml5 size={32} color="#e34f26" />,
  React: <SiReact size={32} color="#61dafb" />,
  MUI: <MUIIcon size={32} color="#007fff" />,
  Bootstrap: <SiBootstrap size={32} color="#563d7c" />,
};

const skillCategories = [
  {
    category: "Lenguaje y diseño",
    skills: ["Java 21", "POO", "Patrones de diseño", "UML", "Clean Code", "Arquitectura en capas", "DDD"],
  },
  {
    category: "Backend",
    skills: [
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "Hibernate",
      "APIs REST",
      "OpenAPI/Swagger",
      "Postman",
      "JWT y OAuth2",
      "MapStruct",
      "Lombok",
    ],
  },
  {
    category: "Bases de datos",
    skills: ["PostgreSQL", "SQL Server", "Oracle (PL/SQL)", "SQL", "Flyway", "Redis"],
  },
  {
    category: "Pruebas y calidad",
    skills: ["JUnit 5", "Mockito", "Testcontainers", "SonarCloud"],
  },
  {
    category: "Herramientas",
    skills: ["Maven", "Git y GitHub", "GitHub Actions", "Docker", "Scrum/Kanban", "Jira y Confluence"],
  },
  {
    category: "Otros lenguajes",
    skills: ["C# y VB.NET"],
  },
  {
    category: "Frontend (complementario)",
    skills: ["JavaScript", "HTML y CSS", "React", "MUI", "Bootstrap"],
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
                  <Avatar sx={{ width: 56, height: 56, mb: 1, bgcolor: "#F0E6E2", color: "#4F2928", border: "1px solid #4F2928" }}>
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
