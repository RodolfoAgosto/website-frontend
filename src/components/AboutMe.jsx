import { Box, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        gap: 4,
        flexWrap: { xs: "wrap", sm: "nowrap" },
        p: 2,
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      {/* Imagen responsive */}
      <Box
        component="img"
        src="/assets/Perfil.webp"
        alt="Rodolfo Agosto"
        sx={{
          width: { xs: "100%", sm: 280, md: 320 },
          height: { xs: "auto", sm: 280, md: 320 },
          borderRadius: 2,
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      {/* Texto */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
          Soy <strong>Ingeniero en Sistemas Informáticos</strong> y 
          <strong> desarrollador backend Java</strong>, con foco en <strong>Spring Boot</strong> y 
          el diseño de <strong>APIs REST</strong>.
        </Typography>

        <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
          Mi principal proyecto es <strong>Lirium Nutrition</strong>, un backend con 
          <strong> Java 21</strong> y <strong>Spring Boot</strong> que genera planes alimentarios 
          semanales a partir del perfil del paciente, garantizando que ningún plan incluya alimentos 
          excluidos por sus restricciones. Lo construí con arquitectura por capas y principios de 
          <strong> DDD</strong>, autenticación con <strong>JWT</strong> y <strong>OAuth2</strong>, 
          más de <strong>840 pruebas</strong> (92% de cobertura) con <strong>PostgreSQL</strong> real 
          mediante <strong>Testcontainers</strong>, y despliegue continuo. También desarrollé 
          proyectos con <strong>C#</strong> y <strong>VB.NET</strong>, experiencias que ampliaron mi 
          perspectiva sobre distintas tecnologías y formas de resolver problemas.
        </Typography>

        <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
          Cuento con la certificación <strong>Oracle Certified Associate (OCA)</strong> y con 
          trayectoria en entornos corporativos como <strong>Renault</strong> y 
          <strong> Santander Tecnología</strong>, donde conocí dinámicas de trabajo, procesos 
          estandarizados y colaboración en equipos. Actualmente me preparo para la 
          <strong> Oracle Certified Professional (OCP)</strong> de Java y para alcanzar el nivel 
          <strong> B2 de inglés</strong>. Complemento mi formación con la lectura de libros de 
          ingeniería de software, aplicando sus conceptos directamente en mis proyectos, y estoy 
          preparando un espacio de tutoriales de ingeniería para compartir y asimilar conocimiento.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          Me interesa diseñar soluciones mantenibles, comprender el dominio antes de implementar y 
          participar en equipos donde la calidad técnica y la mejora continua sean parte del trabajo.
        </Typography>
      </Box>
    </Box>
  );
}
