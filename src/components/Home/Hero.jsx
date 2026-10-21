import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const phrases = [
  " working software, but also well-crafted software »",
  " responding to change, but also steadily adding value »",
  " individuals and interactions, but also a community of professionals »",
  " customer collaboration, but also productive partnerships »",
];

export default function Hero({ id }) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const currentPhrase = phrases[index];

      if (!deleting && charIndex < currentPhrase.length) {
        // Escribiendo
        setDisplayedText(currentPhrase.slice(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(type, 40);
      } else if (!deleting && charIndex === currentPhrase.length) {
        // Espera antes de borrar
        timeout = setTimeout(() => {
          deleting = true;
          type();
        }, 3200);
      } else if (deleting && charIndex > 0) {
        // Borrando
        setDisplayedText(currentPhrase.slice(0, charIndex - 1));
        charIndex--;
        timeout = setTimeout(type, 25); // borrar más rápido
      } else if (deleting && charIndex === 0) {
        // Cambio de frase
        deleting = false;
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    timeout = setTimeout(type, 500);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <Box
      id={id}
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url("/assets/Home.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "center right 20%", sm: "center" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        px: 6,
        color: "white",
        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
      }}
    >
      {/* Overlay oscuro */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: 1,
        }}
      />
      {/* Contenido */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h1"
          sx={{
            color: "#F0E6E2",
            fontSize: { xs: "2.1rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
          }}
        >
          Rodolfo Agosto
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Ingeniero en Sistemas Informáticos <br /> Desarrollador Backend Java
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "baseline" }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
              fontStyle: "italic",
              mr: 0.5,
              height: { xs: 40, sm: 40, md: "auto" },
            }}
          >
            « Not only
            <Typography
              component="span"
              variant="h5"
              sx={{
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textUnderlineOffset: "4px",
                fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
                fontStyle: "italic",
                transition: "opacity 0.3s",
              }}
            >
              {displayedText}
              <Box
                component="span"
                sx={{
                  animation: "blink 1s infinite",
                }}
              >
                |
              </Box>
            </Typography>
          </Typography>
        </Box>
      </Box>

      <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </Box>
  );
}
