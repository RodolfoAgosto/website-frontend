import { useState } from "react";
import { Box, Typography, Button, Card, Grid, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CoverVideo from "../CoverVideo"; 
import { Link } from 'react-router-dom';

export default function ProjectCard({ 
  title,
  description,
  videoUrl,
  logoSrc,
  logoAlt = "Logo",
  path,
  coverTitle,
  coverSubtitle, 
}) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => setPlaying(true);

  return (
    <Card
      sx={{
        my: 4,
        p: 2,
        boxShadow: 1,
        borderRadius: 1,
        backgroundColor: "#E8D7C5",
        border: "1px solid #DABFAE",
        minHeight: 270,
      }}
    >
      <Grid container spacing={2}>
        {/* Texto a la izquierda */}
        <Grid size={{ xs: 12, md: 6 }}>
          <div>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" component="div" sx={{ textAlign: "justify" }} >
              {description.split("\n").map((line, i) => (
                <span key={i}>
                  {line.split("**").map((part, index) =>
                    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
                  )}
                  <br />
                </span>
              ))}
            </Typography>
          </div>
          <Box sx={{ mt: 2, display: "flex",
    justifyContent: {
      xs: "flex-end",  // en pantallas chicas y medianas → derecha
      md: "flex-start" // en pantallas grandes → izquierda
    }, }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4F2928",
                color: "#F0E6E2",
                "&:hover": { backgroundColor: "#3b1f22" },
              }}
              component={Link} 
              to={path} 
            >
              Ver detalle
            </Button>
          </Box>
        </Grid>

        {/* Video a la derecha */}
        <Grid size={{ xs: 12, md: 6 }} >
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%" /* 16:9 */,
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
                  borderRadius: "8px",
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* Overlay CoverVideo + botón play */}
            {!playing && (
              <Box
                onClick={handlePlay}
                sx={{
                  cursor: "pointer",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "rgba(0,0,0,0.2)",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <CoverVideo
                  logoSrc={logoSrc}
                  logoAlt={logoAlt}
                  title={coverTitle}
                  subtitle={coverSubtitle}
                />

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
    </Card>
  );
}
