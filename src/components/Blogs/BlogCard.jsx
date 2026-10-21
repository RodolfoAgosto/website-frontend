import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

export default function BlogCardHorizontal({ title, subtitle, imageSrc, url }) {
  return (
    <Card sx={{ boxShadow: "none", backgroundColor: "transparent",mt:2, mb: 2, }}>
      <CardActionArea
        component="a"
        href={url}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // XS apilado, SM+ horizontal
          textDecoration: "none",
        }}
      >
        {/* Imagen */}
        <CardMedia
          component="img"
          image={imageSrc}
          alt={title}
          sx={{
            minHeight: 150,
            width: { xs: "100%", sm: "25%" },
            height: { xs: 180, sm: "auto" },
            objectFit: "cover",
            flexShrink: 0,
            borderRadius: 1,
          }}
        />

        {/* Texto */}
        <CardContent sx={{ width: { xs: "100%", sm: "75%" } }}>
          <Typography component="h2" variant="h6">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
