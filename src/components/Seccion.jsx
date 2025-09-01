import { Box, Typography, useTheme } from '@mui/material';

export default function Seccion({ id, titulo, bgcolor, children }) {
  const theme = useTheme();
  return (
    <Box
      id={id}
      sx={{
        py: 2,         // padding vertical
        px: 2,          // padding horizontal
        backgroundColor: bgcolor,
        m: 0,   // margen cero
        minHeight: '100vh',
        scrollMarginTop: '0px', 
      }}
    >
    <Typography variant="h4" gutterBottom>{titulo}</Typography>
    <Box
      sx={{
        width: 60,          // ancho del subrayado
        height: 4,          // grosor del subrayado
        bgcolor: theme.palette.primary.main, // color del subrayado
        borderRadius: 2,    // bordes redondeados
        mb: 4               // margen inferior
      }}
    />
      {children}
    </Box>
  );
}