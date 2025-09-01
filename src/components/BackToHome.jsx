import { Fab, useTheme } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from "react";

export default function BackToHome() {
  const [show, setShow] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (!homeSection) return;

      // Mostrar botón si top de home está por encima de la pantalla
      const top = homeSection.getBoundingClientRect().top;
      setShow(top < -250);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // chequea al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHome = () => {
    const home = document.getElementById("home");
    if (home) home.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fab
      color="primary"
      onClick={scrollToHome}
      sx={{
        width: 50,
        height: 50,
        minHeight: 50,
        fontSize: 34,
        position: "fixed",
        bottom: 18,
        right: 18,
        backgroundColor: theme.palette.primary.main,
        "&:hover": { bgcolor: theme.palette.action.hover },
        transition: "all 0.3s ease",
        transform: show ? "scale(1)" : "scale(0.5)",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none", // desactiva clicks cuando no se ve
      }}
      aria-label="Ir a Home"
    >
      <ArrowUpwardIcon />
    </Fab>
  );
}
