import { Box, Typography, Link, useTheme } from "@mui/material";
import SubIndex from "../components/SubIndex";
const auzoniaSections = [
  { id: "arquitectura", title: "Arquitectura" },
  {
    id: "procesos",
    title: "Procesos Core",
    subSections: [
      { id: "nota-pedido", title: "Generar nota de pedido" },
      { id: "proceso2", title: "Proceso 2" },
      { id: "proceso3", title: "Proceso 3" },
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad",
    subSections: [
      { id: "login", title: "Login/Logout" },
      { id: "permisos", title: "Permisos y perfiles + Patron Composite" },
      { id: "bitacora", title: "Bitácora de Auditoria" },
      { id: "encriptado", title: "Encriptado" },
    ],
  },
  { id: "multidioma", title: "Multidioma + Patron Observer" },
  { id: "casos-prueba", title: "Casos de prueba" },
  {
    id: "deployment",
    title: "Deployment & Soporte",
    subSections: [
      { id: "instalador", title: "Instalador" },
      { id: "ayuda", title: "Ayuda en línea" },
    ],
  },
  {
    id: "documentacion",
    title: "Documentación & Reports",
    subSections: [
      { id: "doc", title: "Documentación" },
      { id: "informes", title: "Informes y exportación PDF" },
      { id: "serializacion", title: "Serialización JSON/XML" },
    ],
  },
  {
    id: "base-datos",
    title: "Base de datos",
    subSections: [
      { id: "integridad", title: "Gestión de Integridad" },
      { id: "backup", title: "Backup / Restore" },
    ],
  },
  { id: "stack", title: "Stack tecnológico" },
];

const AuzoniaProject = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 4, p: 4 }}>
      {/* Contenido principal */}
      <Box sx={{ flex: 1, maxWidth: "800px" }}>
        <Typography variant="h4" gutterBottom>Auzonia - Gestión de Inventario</Typography>        
        <Box
          sx={{
          width: 60,          // ancho del subrayado
          height: 4,          // grosor del subrayado
          bgcolor: theme.palette.primary.main, // color del subrayado
          borderRadius: 2,    // bordes redondeados
          mb: 4               // margen inferior
          }}
        />
        <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>
          <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
            Auzonia es un sistema de gestión de inventario diseñado para empresas mayoristas distribuidoras de neumáticos.
            El sistema abarca todo el flujo de trabajo de compra y distribución de mercadería, ofreciendo como funcionalidad principal la estimación precisa de pedidos a proveedores. Para ello, emplea algoritmos inteligentes de predicción de ventas, que consideran tanto la estacionalidad de los productos como la información contenida en los distintos documentos asociados.
            Además, permite la valuación automática del stock, con la posibilidad de aplicar diferentes métodos de valuación, como FIFO (First In, First Out) y LIFO (Last In, First Out).
          </Typography>
        </Box> 
        <Box sx={{ mb: 2 }}>
          <Link href="#" sx={{ mr: 2 }}>GitHub</Link>
          <Link href="#" sx={{ mr: 2 }}>Documentación</Link>
          <Link href="#">Material de apoyo</Link>
        </Box>

        <Box sx={{ mb: 4 }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Video general"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        {/* Secciones de contenido */}
        {auzoniaSections.map((section) => (
          <Box key={section.id} id={section.id} sx={{ mb: 6 }}>
            <Typography variant="h4" gutterBottom>{section.title}</Typography>
            <Typography paragraph>Contenido detallado de {section.title}.</Typography>

            {section.subSections && section.subSections.map((sub) => (
              <Box key={sub.id} id={sub.id} sx={{ mb: 4, pl: 4 }}>
                <Typography variant="h5" gutterBottom>{sub.title}</Typography>
                <Typography paragraph>Contenido detallado de {sub.title}.</Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      {/* Subíndice fijo a la derecha */}
      <Box
        sx={{
          width: "250px",
          position: "sticky",
          top: 0, // distancia desde el top del viewport
          maxHeight: "110vh",
          overflowY: "auto",
          borderLeft: "1px solid #ccc",
          pl: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>CONTENIDOS</Typography>
        <SubIndex sections={auzoniaSections} />
      </Box>
    </Box>
  );
};

export default AuzoniaProject;
