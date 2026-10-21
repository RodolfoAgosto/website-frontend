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
        src="/assets/Perfil.jpg"
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
          Mi nombre es Rodolfo, soy <strong>Ingeniero en Sistemas Informáticos</strong> y 
          <strong> desarrollador backend Java</strong>. Encontré mi vocación a los once años, 
          lo que me ha permitido una carrera apasionante y con un enfoque claro.
        </Typography>

        <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
          He forjado mi experiencia tanto en entornos de <strong>startup</strong>, asumiendo múltiples 
          responsabilidades, como en grandes multinacionales como <strong>Renault</strong> y 
          <strong> Santander</strong>, donde adquirí experiencia en procesos estandarizados, 
          cumplimiento de normativas y trabajo por objetivos. Esta versatilidad me permite 
          adaptarme a cualquier tipo de equipo.
        </Typography>

        <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
          Actualmente, me concentro en <strong>certificaciones internacionales</strong> en 
          <strong> Java</strong> y <strong>Spring (OCA, OCP, Spring Professional)</strong> y planeo un 
          <strong> posgrado en Inteligencia Artificial</strong>, integrando mi experiencia en backend 
          con tecnologías de vanguardia.
        </Typography>

        <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
          Creo que ser un buen desarrollador requiere <strong>constancia</strong>, 
          <strong> disciplina</strong> y <strong>enfoque</strong>. Programar no es solo traducir 
          necesidades a código; es agregar valor mediante soluciones efectivas, considerando los 
          problemas desde distintas perspectivas.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          Además, considero que el <strong>desarrollo personal</strong> es clave para el 
          rendimiento profesional. La <strong>gestión emocional</strong>, la <strong>meditación</strong>, 
          el <strong>descanso</strong>, la <strong>buena alimentación</strong> y el 
          <strong> ejercicio físico</strong> fortalecen la claridad, creatividad y constancia en los 
          proyectos complejos, manteniendo un equilibrio entre productividad y bienestar.
        </Typography>
      </Box>
    </Box>
  );
}
