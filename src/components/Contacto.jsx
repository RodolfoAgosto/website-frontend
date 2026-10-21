import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Alert,
  Link,
  Dialog,
  DialogContent,
  DialogActions,
  useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/moejgpdl";
const LINKEDIN_URL = "https://www.linkedin.com/in/rodolfo-agosto/";

export default function ContactSection() {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [dialog, setDialog] = useState(null); // null | "success" | "error"
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Por favor completá todos los campos.");
      return;
    }

    // Campo trampa: solo los bots lo completan. Se simula éxito sin enviar nada.
    if (honeypot) {
      setDialog("success");
      return;
    }

    setSending(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (response.ok) {
        setDialog("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setDialog("error");
      }
    } catch {
      setDialog("error");
    } finally {
      setSending(false);
    }
  };

  const isSuccess = dialog === "success";
  const Icon = isSuccess ? CheckCircleOutlineIcon : ErrorOutlineIcon;
  const iconColor = isSuccess ? theme.palette.success.main : theme.palette.error.main;

  return (
    <Box component="section" sx={{ maxWidth: "900px", mx: "auto", py: 6, px: { xs: 2, sm: 3 } }}>
      <Typography variant="body1" paragraph>
        Si tenés dudas sobre algún tema publicado o considerás que puedo serte útil, no dudes en escribirme.
        Si tenés un proyecto o propuesta a la cual considerás que puedo aportar valor, también podés escribirme.
        Sentite libre de realizar cualquier crítica o sugerencia, me ayuda a mejorar. ¡Gracias!
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Nombre"
              name="name"
              required
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              slotProps={{ htmlInput: { maxLength: 100 } }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Email"
              name="email"
              type="email"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              slotProps={{ htmlInput: { maxLength: 150 } }}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="Mensaje"
              name="message"
              multiline
              rows={5}
              required
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              slotProps={{ htmlInput: { maxLength: 2000 } }}
            />
          </Grid>

          {/* Campo trampa anti-spam: invisible para personas */}
          <Box sx={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </Box>

          <Grid size={12}>
            <Button type="submit" variant="contained" size="large" disabled={sending}>
              {sending ? "Enviando..." : "Enviar"}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Dialog
        open={dialog !== null}
        onClose={() => setDialog(null)}
        maxWidth="xs"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: theme.palette.background.default,
              border: "1px solid #DABFAE",
              borderRadius: 2,
              textAlign: "center",
              p: 2,
            },
          },
        }}
      >
        <DialogContent>
          <Icon sx={{ fontSize: 64, color: iconColor, mb: 1 }} />
          <Typography variant="h5" gutterBottom>
            {isSuccess ? "¡Mensaje enviado!" : "No se pudo enviar"}
          </Typography>
          <Typography variant="body1">
            {isSuccess ? (
              "Gracias por escribirme. Te voy a responder por email."
            ) : (
              <>
                Probá de nuevo en unos minutos o escribime por{" "}
                <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
                .
              </>
            )}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button variant="contained" onClick={() => setDialog(null)}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}