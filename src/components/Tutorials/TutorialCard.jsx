import { Typography, Button, Card, CardContent, CardMedia, CardActionArea, CardActions, Dialog, DialogContent, IconButton, Chip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

export default function TutorialCard({ title, description, videoUrl, github, logoSrc }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const inProgress = !videoUrl;

  return (
    <>
      <Card sx={(theme) => ({ margin: 0, height: "100%", backgroundColor: theme.palette.background.default })}>
        <CardActionArea onClick={inProgress ? undefined : handleOpen} disabled={inProgress}>
          <CardMedia component="img" height="150" image={logoSrc} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', minHeight: "80px" }}>
              {description}
            </Typography>
            {inProgress && <Chip label="En construcción" size="small" sx={{ mt: 1 }} />}
          </CardContent>
        </CardActionArea>
        {!inProgress && github && (
          <CardActions>
            <Button
              size="large"
              color="primary"
              startIcon={<GitHubIcon />}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código en GitHub"
              sx={{ textTransform: 'none' }}
            >
              GitHub
            </Button>
          </CardActions>
        )}
      </Card>

      {/* Modal con el video */}
      {!inProgress && (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogContent sx={{ position: "relative", p: 0 }}>
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: 8, right: 8, color: "white", zIndex: 1 }}
            >
              <CloseIcon />
            </IconButton>
            <iframe
              width="100%"
              height="480"
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}