import { useState } from "react";
import { Box, Typography, Button, Chip, IconButton, Link as MuiLink, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  SiSpringboot,
  SiSpring,
  SiSpringsecurity,
  SiHibernate,
  SiJsonwebtokens,
  SiGoogle,
  SiPostgresql,
  SiFlyway,
  SiRedis,
  SiSwagger,
  SiJunit5,
  SiSonarcloud,
  SiApachemaven,
  SiDocker,
  SiGithubactions,
  SiRender,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SubIndex from "../components/SubIndex";
import { liriumSections, liriumLinks } from "../data/liriumSections";

const linkIcons = {
  github: <GitHubIcon />,
  link: <OpenInNewIcon />,
  playlist: <PlaylistPlayIcon />,
  docker: <SiDocker size={18} />,
};

// Íconos del stack tecnológico. Las tecnologías sin ícono se muestran solo con texto.
const stackIcons = {
  java: FaJava,
  springboot: SiSpringboot,
  spring: SiSpring,
  springsecurity: SiSpringsecurity,
  hibernate: SiHibernate,
  jwt: SiJsonwebtokens,
  google: SiGoogle,
  postgresql: SiPostgresql,
  flyway: SiFlyway,
  redis: SiRedis,
  swagger: SiSwagger,
  junit: SiJunit5,
  sonarcloud: SiSonarcloud,
  maven: SiApachemaven,
  docker: SiDocker,
  githubactions: SiGithubactions,
  render: SiRender,
};

// Convierte **negrita** y `código` dentro de un texto en elementos de React.
function renderRich(text) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <Box
          key={i}
          component="code"
          sx={{ fontFamily: "monospace", fontSize: "0.9em", bgcolor: "rgba(79,41,40,0.08)", px: 0.5, borderRadius: 0.5 }}
        >
          {part.slice(1, -1)}
        </Box>
      );
    }
    return part;
  });
}

function Paragraphs({ items }) {
  return (
    <>
      {items?.map((text, i) => (
        <Typography key={i} variant="body1" paragraph sx={{ textAlign: "justify" }}>
          {renderRich(text)}
        </Typography>
      ))}
    </>
  );
}

function Bullets({ items }) {
  if (!items) return null;
  return (
    <Box component="ul" sx={{ pl: 3, mt: 0, mb: 2 }}>
      {items.map((text, i) => (
        <Typography key={i} component="li" variant="body1" sx={{ textAlign: "justify", mb: 1 }}>
          {renderRich(text)}
        </Typography>
      ))}
    </Box>
  );
}

// Imagen con pie. Si el archivo todavía no existe, no se muestra nada.
function Figure({ image }) {
  const [missing, setMissing] = useState(false);
  if (!image || missing) return null;
  return (
    <Box component="figure" sx={{ m: 0, mt: 2, mb: 3, textAlign: "center" }}>
      <a href={image.src} target="_blank" rel="noopener noreferrer">
        <Box
          component="img"
          src={image.src}
          alt={image.alt}
          onError={() => setMissing(true)}
          sx={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: 1,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        />
      </a>
      {image.caption && (
        <Typography component="figcaption" variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
          {image.caption}
        </Typography>
      )}
    </Box>
  );
}

// Video de YouTube con miniatura: el reproductor se carga recién al hacer clic.
function VideoEmbed({ video }) {
  const [playing, setPlaying] = useState(false);
  if (!video) return null;
  return (
    <Box sx={{ mt: 2, mb: 3 }}>
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%",
          borderRadius: 1,
          overflow: "hidden",
          border: "1px solid #4F2928",
          bgcolor: "background.default",
        }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Box
            onClick={() => setPlaying(true)}
            sx={{ position: "absolute", inset: 0, cursor: "pointer" }}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <IconButton
              aria-label={`Reproducir: ${video.title}`}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "primary.main",
                backgroundColor: "rgba(255,255,255,0.3)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.45)" },
                fontSize: 64,
              }}
            >
              <PlayArrowIcon fontSize="inherit" />
            </IconButton>
          </Box>
        )}
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
        Video: {video.title}
      </Typography>
    </Box>
  );
}

function Media({ item }) {
  const images = item.images || (item.image ? [item.image] : []);
  return (
    <>
      <VideoEmbed video={item.video} />
      {images.map((img) => (
        <Figure key={img.src} image={img} />
      ))}
    </>
  );
}

const LiriumProject = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 4, p: 5 }}>
      {/* Contenido principal */}
      <Box sx={{ flex: 1, maxWidth: "800px" }}>
        <Typography variant="h4" gutterBottom>
          Lirium Nutrition Planning
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 4,
            bgcolor: theme.palette.primary.main,
            borderRadius: 2,
            mb: 4,
          }}
        />

        <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Backend en Java y Spring Boot que genera planes de alimentación semanales a partir del perfil del paciente,
            garantiza que ningún plan incluya alimentos excluidos por sus restricciones, y mide si el paciente
            realmente los cumple. Es mi proyecto principal y el que mejor representa cómo trabajo.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 6 }}>
          {liriumLinks.map((l) => (
            <Button
              key={l.label}
              size="small"
              variant="outlined"
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={linkIcons[l.icon]}
              sx={{ textTransform: "none" }}
            >
              {l.label}
            </Button>
          ))}
        </Box>

        {liriumSections.map((section) => (
          <Box key={section.id} id={section.id} sx={{ mb: 6 }}>
            <Typography variant="h4" gutterBottom>
              {section.title}
            </Typography>
            <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>
              <Paragraphs items={section.paragraphs} />
              <Media item={section} />

              {section.stack && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {section.stack.map((tech) => {
                    const Icon = stackIcons[tech.icon];
                    return (
                      <Chip
                        key={tech.name}
                        label={tech.name}
                        variant="outlined"
                        icon={Icon ? <Icon size={16} /> : undefined}
                      />
                    );
                  })}
                </Box>
              )}

              {section.videoLinks && (
                <>
                  <Box component="ul" sx={{ pl: 3, mt: 0, mb: 2 }}>
                    {section.videoLinks.map((v) => (
                      <Typography key={v.url} component="li" variant="body1" sx={{ mb: 1 }}>
                        <MuiLink href={v.url} target="_blank" rel="noopener noreferrer" underline="hover" color="primary">
                          {v.title}
                        </MuiLink>
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    variant="outlined"
                    href={section.playlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<PlaylistPlayIcon />}
                    sx={{ textTransform: "none" }}
                  >
                    Ver la serie completa
                  </Button>
                </>
              )}

              {section.subSections?.map((sub) => (
                <Box key={sub.id} id={sub.id} sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    {sub.title}
                  </Typography>
                  <Paragraphs items={sub.paragraphs} />
                  <Bullets items={sub.bullets} />
                  <Media item={sub} />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Subíndice fijo a la derecha */}
      <Box
        sx={{
          width: "250px",
          position: "sticky",
          top: 0,
          maxHeight: "110vh",
          overflowY: "auto",
          borderLeft: "1px solid #ccc",
          pl: 2,
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography variant="h6" gutterBottom>
          CONTENIDOS
        </Typography>
        <SubIndex sections={liriumSections} />
      </Box>
    </Box>
  );
};

export default LiriumProject;
