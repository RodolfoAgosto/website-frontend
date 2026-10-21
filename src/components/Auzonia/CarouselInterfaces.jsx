import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function CarouselInterfaces() {
  const items = [
    "/assets/principios_solid.jpeg",
    "/assets/portada_blog_oca.jpg",
    "/assets/patron_observe.jpg",
  ];
  const [index, setIndex] = useState(0);

  return (
    <Box sx={{ position: "relative", width: 500, height: 300, mx: "auto" }}>
      <Box
        component="img"
        src={items[index]}
        alt={`Pantalla ${index + 1}`}
        sx={{ width: "100%", height: "100%", borderRadius: 1 }}
      />

      <IconButton
        onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
        sx={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)" }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={() => setIndex((i) => (i + 1) % items.length)}
        sx={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)" }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
}
