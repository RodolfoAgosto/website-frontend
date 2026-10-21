import { useState } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function VideoThumbnail({ 
  title,
  videoUrl,
  logoSrc,
  logoAlt = "Logo",
}) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => setPlaying(true);

  return (
      <Grid container spacing={0}>
        {/* Video / Imagen a la derecha */}
        <Grid size={{ xs: 12, md: 12 }}>
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%", // mantiene 16:9
              borderRadius: 1,
              overflow: "hidden",
              bgcolor: "background.default",
              border: "1px solid #4F2928",
            }}
          >
            {/* Iframe solo si se está reproduciendo */}
            {playing && (
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title={title}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "1px",
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* Overlay solo con imagen y botón play */}
            {!playing && (
              <Box
                onClick={handlePlay}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                {/* Imagen ocupa todo el contenedor */}
                <img
                  src={logoSrc}
                  alt={logoAlt}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // llena todo el cuadro
                  }}
                />

                {/* Botón play centrado */}
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "primary.main",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                    fontSize: 64,
                  }}
                >
                  <PlayArrowIcon fontSize="inherit" />
                </IconButton>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
  );
}
