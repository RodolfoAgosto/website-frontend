import { Box, Divider, Grid } from "@mui/material";
import BlogCard from "./BlogCard";
import React from "react"; 

const blogs = [
  {
    title: "Mi experiencia en certificación oficial OCA de Oracle",
    subtitle: "OCA es una de las primeras certificaciones Java. En este blog te cuento cómo me preparé, los pros y los contras.",
    imageSrc: "/assets/portada_blog_oca.jpg",     
  },
  {
    title: "Reseña Clean Architecture",
    subtitle: "Un repaso del clásico de Robert C. Martin donde explico los conceptos principales y cómo aplicarlos en proyectos reales.",
    imageSrc: "/assets/portada_blog_clean_architecture.jpg",
  },
  {
    title: "Reseña Clean Code",
    subtitle: "Analizo las lecciones más importantes del libro que marcó un antes y un después en la forma de escribir código legible y mantenible.",
    imageSrc: "/assets/portada_blog_clean_code.jpeg",
  },
];

export default function BlogList() {
  return (
    <Box component="section" sx={{ maxWidth: "1000px", margin: "0 auto", py: 2, px: { xs: 2, sm: 2 } }}>
      <Grid container spacing={2}>
        {blogs.map((p, i) => (
          <React.Fragment key={i}>
            <Grid size={{ xs: 12 }}>
              <BlogCard {...p} />
            </Grid>
            {/* Separador */}
            {i < blogs.length - 1 && (
              <Grid size={{ xs: 12 }}>
                <Divider  
                    sx={{ mt: 2, mb: 2, borderColor: 'rgba(0,0,0,0.2)', 
                    borderWidth: '1px', mx: { xs: 0, sm: 2 } }} 
                />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}
