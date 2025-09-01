import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";

export default function SidebarLayout({ children }) {
  
  const [open, setOpen] = useState(false); // cerrado en mobile por defecto
  const theme = useTheme();
  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg")); // lg o superior

  // Siempre abierto en desktop
  const showSidebar = isLargeUp || open;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: theme.palette.background.default, }}>
      {/* Sidebar */}
      {showSidebar && (
        <Box
          component="aside"
          sx={{
            width: { xs: "250px", md: "300px" },
            bgcolor: theme.palette.sidebar.background,
            color: theme.palette.sidebar.inactive,
            p: 2,
            transition: "0.3s",
          }}
        >
           <Sidebar setOpen={setOpen} />
        </Box>
      )}
      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: theme.palette.background.default, transition: "0.3s", }} >
        {children}
        <Footer/>      
      </Box>
 {/* Botón flotante solo en mobile */}
      {!isLargeUp && (
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            position: "fixed",
            top: 18,
            right: 18,
            bgcolor: theme.palette.primary.main,
            color: theme.palette.background.default,
            "&:hover": { bgcolor: theme.palette.action.hover },
            zIndex: 1300,
          }}
        >                
          {open ? <CloseIcon sx={{ fontSize: 34 }} /> : <MenuIcon sx={{ fontSize: 34 }} />}
        </IconButton>
      )}
   </Box>
  );
}
