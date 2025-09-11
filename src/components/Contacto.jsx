import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button, Alert } from "@mui/material";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !message) {
      setError("Por favor completa todos los campos.");
      return;
    }
    // Aquí podrías enviar los datos a un backend o servicio de email
    console.log({ name, email, message });
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box component="section" sx={{ maxWidth: "900px", mx: "auto", py: 6, px: { xs: 2, sm: 3 } }}>
      <Typography variant="body1" paragraph>
        Si tenés dudas sobre algún tema publicado o considerás que puedo serte útil, no dudes en escribirme.
        Si tenés un proyecto o propuesta a la cual considerás que puedo aportar valor, también podés escribirme.
        Sentite libre de realizar cualquier crítica o sugerencia, me ayuda a mejorar. ¡Gracias!
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {submitted && <Alert severity="success" sx={{ mb: 2 }}>Mensaje enviado con éxito. ¡Gracias!</Alert>}

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Fila 1: Nombre y Email */}
          <Grid item size={{ xs: 12, sm: 6, md: 6 }} >
            <TextField
              label="Nombre"
              required
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 6 }} >
            <TextField
              label="Email"
              type="email"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          {/* Fila 2: Mensaje */}
          <Grid item size={{ xs: 12, }} >
            <TextField
              label="Mensaje"
              multiline
              rows={5}
              required
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>

          {/* Fila 3: Botón */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
