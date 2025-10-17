import { Box, Typography, useTheme, Button, Grid, Divider,  } from "@mui/material";
import SubIndex from "../components/SubIndex";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import EAButtonIcon from '../components/EAButtonIcon';
import ArquitecturaAnavi from "../components/Anavi/ArquitecturaAnavi";
import CarouselInterfaces from "../components/Auzonia/CarouselInterfaces";
import { ReactComponent as SQLServerIcon } from '../assets/icons/microsoftsqlserver.svg';
import { ReactComponent as CSharpIcon } from '../assets/icons/CSharp.svg';
import { ReactComponent as DotNetIcon } from '../assets/icons/aspnet.svg';
import { SiBootstrap as BootstrapIcon, } from "react-icons/si";

const anaviSections = [
  { id: "arquitectura", title: "Arquitectura" },
  {
    id: "procesos",
    title: "Procesos Core",
    subSections: [
      { id: "seleccion-proveedores", title: "Flujo de selección de proveedores" },
      { id: "presupuesto-recomendacion", title: "Cálculo dinámico del presupuesto y recomendaciones inteligentes" },
      { id: "calificaciones-reputacion", title: "Sistema de calificaciones y reputación" },
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
  {
    id: "reportes",
    title: "Reportes",
    subSections: [
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
  { id: "interfaz-usuario", title: "Interfaz de Usuario" },
  { id: "stack", title: "Stack tecnológico" },
];



const AnaviProject = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 4, p: 5 }}>
      {/* Contenido principal */}
      <Box sx={{ flex: 1, maxWidth: "800px" }}>
        <Typography variant="h4" gutterBottom>Anavi - Eventos Corporativos</Typography>        
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
            Anavi Eventos es una plataforma web para la organización y gestión de eventos empresariales que 
            conecta clientes con proveedores, permitiendo contratar, administrar y calificar servicios como 
            catering, salones, sonido o entretenimiento. El sistema facilita la búsqueda de proveedores 
            mediante filtros de ubicación geográfica, precios y calificaciones, soporta carga de contenido multimedia, 
            gestiona presupuestos con análisis de costos en tiempo real, y mantiene un registro de 
            actividades y seguimiento de contrataciones.
            Además, incorpora encuestas de conformidad para evaluar proveedores, asegurando trazabilidad y 
            mejora continua. Los principales actores son clientes, proveedores, organizadores y administradores, cada uno con funcionalidades específicas dentro del portal.
          </Typography>
        </Box>         
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6">Documentación</Typography>
        </Box>
        <Grid container spacing={1}>          
          <Grid item size={{ xs: 12, sm: 6, md:4, lg:4, xl:2 }}>
            <Button 
              size="large"
              color="primary"
              startIcon={<DescriptionIcon />}
              href="/docs/DocumentacionTecnica.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textTransform: "none" }}
            >
            Documentación Técnica
            </Button>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md:4, lg:4, xl:2 }}>
            <Button
              startIcon={<EAButtonIcon size={55} />}
              size="large"
              href="https://github.com/tu-usuario/tu-repo"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                p: 0,
                textTransform: "none",
                transition: "all .18s ease",
                color: "text.primary",
                // estilos para el contenedor del startIcon (MUI lo pone en .MuiButton-startIcon)
                "& .MuiButton-startIcon": {
                  p: 0,
                  minWidth: 0,          // evita espacio extra
                  m: 0,                // espacio entre icono y texto
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 47,
                  height: 47,
                  bgcolor: "#F1E2D7",   // fondo normal del icono
                  transition: "background-color .18s, color .18s",
                  // aplicamos color inicial al svg (mejor si SVG usa currentColor)
                    "& svg": {
                      width: "60%",
                      height: "60%",
                      color: "#4F2924",
                      // si el SVG no usa currentColor, forzamos los fills comunes:
                      "& path, & circle, & rect, & polygon": {
                        fill: "#4F2924",
                      },
                    },
                  },
                  // hover del botón: cambia fondo + icono + texto a la vez
                  "&:hover": {
                    bgcolor: "#EBDBD1",
                    color: "primary.main",
                    "& .MuiButton-startIcon": {
                      bgcolor: "#EBDBD1", // fondo del icono en hover
                      "& svg": {
                        color: "primary.main",
                        // forzamos fills a blanco (por si el SVG tiene fill inline)
                        "& path, & circle, & rect, & polygon": {
                        fill: "primary.main !important",
                        },
                      },
                    },
                  },
                }
              }
            >
              UML - Enterprise Architect
            </Button>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md:4, lg:4, xl:2 }}>
            <Button
              size="large"
              color="primary"
              startIcon={<GitHubIcon />}
              href="https://github.com/tu-usuario/tu-repo"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textTransform: "none" }}
            >GitHub
            </Button>
          </Grid>
        </Grid>
        <Box key={anaviSections[0].id} id={anaviSections[0].id} sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>{anaviSections[0].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              La aplicación se diseñó con una arquitectura de cinco capas (UI, BLL Técnica, BLL de Negocio y 
              DAL), con cerca de 100 componentes modularmente organizados. Esta estructura asegura una separación
               clara de responsabilidades, así como una alta escalabilidad y mantenibilidad del sistema.
            </Typography>
          </Box>
          {/* Imagen de la arquitectura */}
          <Box sx={{ mt: 4, ml: 2, display: "flex", justifyContent: "center" }}>
            <img 
              src="/assets/Anavi/Arquitectura_Anavi.png" 
              alt="Arquitectura Anavi" 
              style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
            />
          </Box>
          <ArquitecturaAnavi/>
        </Box>
        {/* Procesos Core*/}
        <Box key={anaviSections[1].id} id={anaviSections[1].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{anaviSections[1].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              A continuación se describen algunos de los procesos core del sistema, seleccionados 
              por su relevancia en la operación del negocio y por reflejar la complejidad técnica 
              y funcional abordada durante el desarrollo.
              El sistema contempla más procesos que pueden consultarse en la documentación completa, 
              pero en este portafolio se muestran aquellos que representan mejor cómo se resuelven 
              problemáticas clave del negocio: generación de eventos, cálculo dinámico del
              presupuesto y sistema de puntuación y valoración.
            </Typography>
          </Box>
          {/* Flujo de elección de proveedores */}
          <Box key={anaviSections[1].subSections[1].id} 
               id={anaviSections[1].subSections[1].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {anaviSections[1].subSections[1].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              A continuación se describe el flujo que sigue un cliente para elegir proveedores dentro de la plataforma:
            </Typography>
            <Box component="ol" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Definición de criterios de búsqueda:</strong> El cliente completa los filtros principales: fecha del evento, cantidad de asistentes, presupuesto estimado, distancia máxima de búsqueda y servicios requeridos.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Generación de listado inicial:</strong> El sistema devuelve un conjunto de resultados que incluye, para cada ítem, los precios mínimos y máximos sugeridos. Cada vez que el usuario selecciona un proveedor, se recalculan dinámicamente los precios sugeridos de los proveedores restantes (este proceso se detalla en la sección Cálculo dinámico del presupuesto).
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Presentación de opciones de proveedores:</strong> Para cada servicio disponible, el sistema muestra:
                <ul>
                  <li>Imágenes del servicio</li>
                  <li>Nombre del proveedor</li>
                  <li>Puntuación general</li>
                  <li>Breve descripción</li>
                  <li>Precio y capacidad</li>
                </ul>
                Además, se aplica lógica de recomendación y ranking inteligente: se marcan como “sugeridos” aquellos proveedores que cumplen con los criterios seleccionados por el usuario y que se encuentran dentro de los rangos de precio sugeridos. Una API de geolocalización permite calcular distancias en tiempo real.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Detalle ampliado del servicio:</strong> El usuario puede acceder a información más específica de cada proveedor:
                <ul>
                  <li>Descripción detallada del servicio</li>
                  <li>Reputación: promedio de puntuaciones y desglose por cantidad de votos en cada nivel de estrellas</li>
                  <li>Reseñas con filtro (positivas, negativas o todas)</li>
                </ul>
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Resumen del evento:</strong> Una vez que el usuario completa su selección, el sistema genera un resumen que incluye: fecha del evento, servicios contratados, importes asociados y un espacio para comentarios adicionales.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Confirmación y contratos:</strong> Si el usuario confirma, el sistema genera automáticamente el evento y los contratos asociados a los proveedores seleccionados.
              </Typography>
            </Box>
            {/* Video de demostración */}
            <Box sx={{ mb: 4, px: { xs: 2, sm: 4, md: 0 } }}>
              <Typography variant="h6" gutterBottom sx={{ mt: 6 }}>
                Demostración del proceso en la aplicación
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Box sx={{ position: "relative", width: "100%", maxWidth: 800, aspectRatio: "16/9" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/p9ws39aj0ZM"
                    title="Video de demostración - Flujo de elección de proveedores"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Cálculo dinámico del presupuesto*/}
          <Box key={anaviSections[1].subSections[1].id} 
               id={anaviSections[1].subSections[1].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {anaviSections[1].subSections[1].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        Para el cálculo dinámico del presupuesto el sistema estima de manera
        automática el monto mínimo y máximo recomendados para cada uno de los
        servicios a contratar. Se ejecuta de forma dinámica, ajustándose cada
        vez que el usuario realiza una modificación en la selección.
      </Typography>

      <Typography variant="body2" paragraph sx={{ fontWeight: 600 }}>
        El cálculo pondera el monto de cada servicio basándose en:
      </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body2" paragraph>
              Presupuesto total o presupuesto pendiente de uso del evento.
            </Typography>
            <Typography component="li" variant="body2" paragraph>
              Cantidad de servicios contratados.
            </Typography>
            <Typography component="li" variant="body2" paragraph>
              Ponderación de cada servicio sobre el total, calculada según el
              porcentaje histórico del servicio en eventos previos.
            </Typography>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para la sugerencia de servicios el sistema aplica lógica de filtrado y
            recomendación para destacar los proveedores más adecuados:
          </Typography>
          <Box component="ol" sx={{ pl: 3 }}>
            <Typography component="li" variant="body2" paragraph>
              <strong>Sugerir por capacidad:</strong> Se actualiza el listado para
              marcar únicamente los servicios que cumplen con la capacidad
              solicitada.
            </Typography>
            <Typography component="li" variant="body2" paragraph>
              <strong>Filtrar por fecha:</strong> Se excluyen aquellos servicios que
              no estén disponibles en la fecha del evento debido a compromisos
              previos.
            </Typography>
            <Typography component="li" variant="body2" paragraph>
              <strong>Sugerir por presupuesto:</strong> Se muestran como sugeridos
              solo los servicios que se encuentren dentro de los rangos de precios
              recomendados por el sistema.
            </Typography>
            <Typography component="li" variant="body2" paragraph>
              <strong>Sugerir por distancia:</strong> Se priorizan únicamente los
              espacios cuya ubicación se encuentre dentro del rango de distancia
              máximo ingresado por el cliente.
            </Typography>
            </Box>  
                        {/* Video de demostración */}
            <Box sx={{ mb: 4, px: { xs: 2, sm: 4, md: 0 } }}>
              <Typography variant="h6" gutterBottom sx={{ mt: 6 }}>
                Demostración del proceso en la aplicación
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Box sx={{ position: "relative", width: "100%", maxWidth: 800, aspectRatio: "16/9" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/p9ws39aj0ZM"
                    title="Video de demostración - Flujo de elección de proveedores"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>   
          {/* Sistema de puntuación y valoración*/}
          <Box key={anaviSections[1].subSections[2].id} 
               id={anaviSections[1].subSections[2].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {anaviSections[1].subSections[2].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        Permite que el cliente califique cada servicio contratado y al
        organizador a cargo del evento.
      </Typography>

      <Typography variant="body2" paragraph sx={{ fontWeight: 600 }}>
        Por cada reputación:
      </Typography>

      <Box component="ul" sx={{ pl: 3 }}>
        <Typography component="li" variant="body2" paragraph>
          Se puede generar varias calificaciones basadas en un puntaje de cinco
          estrellas y una reseña descriptiva.
        </Typography>
        <Typography component="li" variant="body2" paragraph>
          Calcula automáticamente el promedio de las reseñas recibidas.
        </Typography>
        <Typography component="li" variant="body2" paragraph>
          Permite visualizar todas las reseñas o filtrarlas según positivas o
          negativas.
        </Typography>
      </Box>
            <Box sx={{ ml: 0, mb: 4, px: { xs: 2, sm: 4, md: 0 } }} >
              <Typography variant="h6" gutterBottom sx={{mt: 6, pl: 0}}>
                Demostración del Proceso en la Aplicación
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Box sx={{ position: "relative", width: "100%", maxWidth: 800, aspectRatio: "16/9" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/p9ws39aj0ZM"
                    title="Video de demostración - Gestión de Compras"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                  >                
                  </iframe>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box> 
        {/* Seguridad*/}
        <Box key={anaviSections[2].id} id={anaviSections[2].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{anaviSections[2].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              La capa de Seguridad gestiona la autenticación y autorización de usuarios, controlando
               accesos según roles y permisos. Su objetivo es proteger la información y garantizar
                que cada operación sea realizada solo por usuarios habilitados.
            </Typography>
          </Box>
          {/* Login/Logout*/}
          <Box key={anaviSections[2].subSections[0].id} 
               id={anaviSections[2].subSections[0].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {anaviSections[2].subSections[0].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              El proceso de <strong>login/logout</strong> forma parte de la capa de Seguridad. Permite a los usuarios autenticarse de forma segura en el sistema y cerrar sesión, garantizando control de acceso y protección de la información.
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Diferenciación de accesos:</strong> El sistema distingue entre usuario inexistente o contraseña incorrecta y responde según corresponda.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap", mt: 4, mb: 4 }}>
                <Box sx={{ flex: 1, maxWidth: 180 }}>
                  <img
                    src="/assets/Auzonia/Usuario_no_registrado.png" 
                    alt="Usuario no registrado.png"                 
                    style={{ width: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                  />
                </Box>
                <Box sx={{ flex: 1, maxWidth: 180 }}>
                  <img
                    src="/assets/Auzonia/Contrasena_incorrecta.png" 
                    alt="Contrasena incorrecta" 
                    style={{ width: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                  />
                </Box>
              </Box>
              <Typography component="li" variant="body2" paragraph>
               <strong>Bloqueo de usuario:</strong> El usuario es bloqueado tras el tercer intento con contraseña incorrecta.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Encriptación:</strong> El sistema encripta la contraseña para mayor seguridad.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Verificación de integridad:</strong> Antes de otorgar acceso, se comprueba la integridad de la base de datos; solo el administrador puede restaurarla si está corrupta.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Registro de acceso:</strong> El sistema mantiene un registro en la bitácora de cada ingreso.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Actualización de intentos:</strong> Tras un acceso válido, se reinicia el contador de intentos pendientes del usuario.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Actualización del layout:</strong> Se refleja la sesión iniciada, por ejemplo, mostrando el nombre del usuario en el StatusStrip.
              </Typography>
              {/* Imagen usuario logueado */}
              <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
              <img 
                src="/assets/Auzonia/Ingreso_valido.png" 
                alt="Arquitectura Auzonia" 
                style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                />
              </Box>
              <Typography component="li" variant="body2" paragraph>
                <strong>Estados de acceso:</strong> Se utiliza un Enum con las opciones: AccesoValido, Reintentar, UsuarioBloqueado y UsuarioInexistente.
              </Typography>
            </Box> 
          </Box>  
          {/* Permisos y Perfiles + Patron Composite */}
          <Box key={anaviSections[2].subSections[1].id} 
               id={anaviSections[2].subSections[1].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {anaviSections[2].subSections[1].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              El sistema administra el acceso de los usuarios a funcionalidades y datos mediante la
               asignación de permisos. Cada usuario puede recibir uno o más perfiles/permisos, que agrupan 
               varios permisos atómicos. Esta estructura jerárquica permite heredar permisos de 
               manera automática y flexible, utilizando el patrón <strong>Composite</strong> para
                construir perfiles complejos a partir de permisos simples.
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Visualización del árbol de permisos:</strong> Desde el módulo Sistema se puede observar el árbol completo de permisos, incluyendo todas las familias y patentes del sistema, con sus jerarquías detalladas en cada nodo.
              </Typography>
              {/* Imagen Arbol de Permisos */}
              <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
                <img 
                  src="/assets/Auzonia/Arbol_Permisos.png" 
                  alt="Arbol Permisos" 
                  style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                />
              </Box>
              <Typography component="li" variant="body2" paragraph>
                <strong>Control de recursividad:</strong> El sistema impide asignar una familia padre que sea hija de la familia a asignar, evitando bucles infinitos en la estructura.
              </Typography>
              {/* Imagen Recursividad */}
              <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
                <img 
                  src="/assets/Auzonia/Recursividad.png" 
                  alt="Recursividad" 
                  style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                />
              </Box>
              <Typography component="li" variant="body2" paragraph>
                <strong>Uso del patrón Composite:</strong> Se implementa el patrón Composite para permitir construir perfiles complejos a partir de permisos simples, facilitando la herencia y composición de permisos.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Asignación múltiple de permisos:</strong> Cada usuario puede recibir más de un permiso o familia, lo que permite definir accesos flexibles y personalizados.
              </Typography>
              {/* Administracion Perfiles */}
              <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
                <img 
                  src="/assets/Auzonia/Administracion_Perfiles.png" 
                  alt="Administracion Perfiles" 
                  style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                />
              </Box>
              <Typography component="li" variant="body2" paragraph>
                <strong>Niveles de acceso:</strong> El sistema contempla distintos niveles de autorización, ya sea por módulo completo o por funcionalidades específicas dentro de cada módulo.
              </Typography>
              <Box sx={{ ml: 0, mb: 4, px: { xs: 2, sm: 4, md: 0 } }} >
                <Typography variant="h6" gutterBottom sx={{mt: 6, pl: 0}}>
                  Demostración del Proceso en la Aplicación
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Box sx={{ position: "relative", width: "100%", maxWidth: 800, aspectRatio: "16/9" }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/p9ws39aj0ZM"
                      title="Video de demostración - Gestión de Compras"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                    >                
                    </iframe>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>        
          {/* Bitacora de auditoria */}
          <Box key={anaviSections[2].subSections[2].id} 
               id={anaviSections[2].subSections[2].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {anaviSections[2].subSections[2].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              La <strong>bitácora de auditoría</strong> tiene como objetivo central registrar y poner
               a disposición del usuario todos los movimientos relevantes del sistema, incluyendo 
               también los errores ocurridos durante la ejecución.
              Cuando el usuario desea realizar una consulta, el sistema despliega una ventana de 
              búsqueda donde se pueden aplicar filtros por el usuario implicado, fecha o tipo de evento.
               Una vez seleccionados los criterios, el sistema procesa la solicitud y devuelve 
               un listado con los registros que cumplen las condiciones especificadas.
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Control de cambios:</strong> Desde el módulo <em>Sistema</em>, en la opción 
                <em> Administración de Perfiles de Usuarios</em>, se pueden visualizar todos los cambios 
                realizados sobre cualquier usuario. La bitácora de cambios también registra la 
                <em> fecha de la modificación</em> y el <em>usuario responsable</em>.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Bitácora de auditoría:</strong> La bitácora clasifica los registros en tres tipos principales:
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Actualización:</strong> Operaciones como alta, baja o modificación.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Evento:</strong> Acciones como inicio y cierre de sesión.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Excepción:</strong> Errores del sistema (ej.: <code>System.Exception</code>), 
                  problemas de conexión o excepciones controladas.
                </Typography>
              </Box>
              <Typography component="li" variant="body2" paragraph>
                <strong>Filtros de consulta:</strong> Es posible filtrar registros por fecha, tipo de evento 
                 y/o campos específicos como Código de Usuario, Código de Bitácora, Tipo de Objeto 
                e Identificador de Objeto.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Campos de cada registro:</strong> Cada registro de la bitácora incluye:
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Código de Usuario:</strong> Usuario logueado que generó el registro.
                </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Fecha:</strong> Momento en que ocurrió el evento.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
               <strong>Tipo:</strong> Actualización, Evento o Excepción.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Código de Bitácora:</strong> Identificador interno del registro.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Detalle:</strong> Breve descripción asociada al código de bitácora.
              </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Información:</strong> Descripción detallada del registro.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Objeto:</strong> Tipo de objeto relacionado (Backup, Sesión o Genérico).
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Identificador:</strong> Componente del software que generó el registro 
                  (ej.: <code>BackUp_DAL</code> o <code>FormBackUp</code>).
                </Typography>
              </Box>
            </Box> 
          </Box>
          {/* Encriptado */}
          <Box key={anaviSections[2].subSections[3].id} 
               id={anaviSections[2].subSections[3].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {anaviSections[2].subSections[3].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              <strong>Gestión de encriptado:</strong> Es la responsable de implementar los algoritmos de encriptación 
              que protegen los datos sensibles del sistema, garantizando tanto la <em>seguridad de acceso </em> 
              como la <em>integridad de la base de datos</em>.
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Clase de seguridad:</strong> En la capa de seguridad se define una clase 
                especializada que expone dos servicios principales.
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Comparación:</strong> recibe dos cadenas de caracteres. El sistema aplica el algoritmo 
                  de encriptación a la primera cadena y, si el resultado coincide con la segunda, devuelve 
                  <code>True</code>; de lo contrario devuelve <code>False</code>.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  <strong>Hash (SHA1):</strong> permite enviar una cadena de caracteres para que el objeto 
                  la procese mediante el algoritmo de encriptación <code>SHA1</code> y devuelva la cadena resultante. 
                  Este mecanismo se utiliza tanto para el <em>control de acceso</em> como para la 
                  <em>verificación de integridad de la base de datos</em>.
                </Typography>
              </Box>
            </Box>
          </Box>
      </Box>
      {/* Multidioma + Patron Observer */}
      <Box key={anaviSections[3].id} id={anaviSections[3].id} sx={{ mt: 0 }}>
        <Typography variant="h4" gutterBottom>{anaviSections[3].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              El sistema permite cambiar dinámicamente el idioma de todas las leyendas y títulos de
               la interfaz. Al cargar un nuevo idioma, lo guarda con traducciones iniciales en 
               español y registra el alta en la bitácora. Solo puede habilitarse cuando todas las 
               leyendas estén traducidas; de lo contrario, permanece deshabilitado hasta completar
                las traducciones. Una vez finalizadas, el idioma se habilita y el sistema notifica
                 el éxito de la operación.
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                La traducción abarca todos los formularios del sistema, incluyendo formularios hijos.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                El sistema cuenta con 244 mensajes traducibles.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                Actualmente soporta inglés y español, con la opción de agregar nuevos idiomas.
              </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              <strong>Patrón Observer aplicado a Multiidioma:</strong> Permite que todos los formularios actualicen dinámicamente sus leyendas y títulos 
              según el idioma seleccionado, manteniendo la interfaz consistente.
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Interfaz IObservador:</strong> Define la propiedad <code>Idioma</code> y el método <code>Actualizar()</code>, 
                que todos los formularios implementan para gestionar sus textos.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Formularios como observadores:</strong> Cada formulario implementa <code>IObservador</code> y actualiza sus leyendas 
                y títulos al ejecutar <code>Actualizar()</code> utilizando la propiedad <code>Idioma</code>.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Formulario MDIPrincipal (sujeto):</strong> Mantiene la lista de observadores con los métodos <code>Agregar()</code> y <code>Quitar()</code>. 
                Al seleccionar un nuevo idioma, el método <code>ActualizarIdioma(idioma)</code> notifica a todos los observadores para actualizar la interfaz.
              </Typography>
            </Box>
            {/* Imagen Arbol de Permisos */}
            <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
              <img 
                src="/assets/Auzonia/Arbol_Permisos.png" 
                alt="Arbol Permisos" 
                style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
              />
            </Box>
          </Box>
        </Box>
        {/* Reportes */}
        <Box key={anaviSections[4].id} id={anaviSections[4].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{anaviSections[4].title}</Typography>
          {/* Informes y exportación Pdf */}
          <Box key={anaviSections[4].subSections[0].id} 
               id={anaviSections[4].subSections[0].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              El sistema incorpora un <strong>módulo de reportes dinámicos</strong> con filtros por rango de fechas,
              ofreciendo visualización interactiva y exportación a formatos estándar.
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Resumen por servicio:</strong> Panel con gráfico de torta que muestra la facturación total
                segmentada por cada tipo de servicio contratado.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Resumen por organizador:</strong> Dashboard con gráfico de barras que refleja la facturación total
                atribuida a cada organizador o vendedor de la empresa.
              </Typography>
            </Box>
            {/* Imagen Arbol de Permisos */}
            <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
              <img 
                src="/assets/Auzonia/Arbol_Permisos.png" 
                alt="Arbol Permisos" 
                style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
              />
            </Box>
          </Box>
        </Box>
        {/* Base de datos */}
        <Box key={anaviSections[5].id} id={anaviSections[5].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{anaviSections[5].title}</Typography>
            <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
                    <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
                      El sistema de base de datos garantiza la seguridad y continuidad de la información a través de dos pilares fundamentales: un gestor de integridad, 
                      que valida de forma automática y proactiva la consistencia de los datos críticos, y un módulo de Backup/Restore, que asegura la recuperación ante 
                      incidentes mediante respaldos trazables y gestionados según permisos. En conjunto, ambas funciones fortalecen la confiabilidad y resiliencia del 
                      sistema.
                    </Typography>
                  </Box>
                  {/* Gestión de Integridad */}
                  <Box key={anaviSections[5].subSections[0].id} 
                       id={anaviSections[5].subSections[0].id} 
                       sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
                  >
                    <Typography variant="h5" gutterBottom>
                      {anaviSections[5].subSections[0].title}
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
                      El sistema incorpora un mecanismo robusto de control de integridad basado
                      en las tablas <em>Usuario</em> —por su criticidad— y{" "}
                      <em>Dígito_Verificador_Vertical</em>. Desde el módulo <em>Sistema</em> es
                      posible ejecutar la función <em>Verificar Integridad</em>, que permite
                      auditar el estado de la base sin necesidad de modificar, agregar ni
                      eliminar registros.
                    </Typography>
                    <Box component="ul" sx={{ pl: 3 }}>
                      <Typography component="li" variant="body2" paragraph>
                        Esta verificación se dispara automáticamente en dos escenarios:
                      <Box component="ul" sx={{ pl: 3, mt: 3 }}>
                        <Typography component="li" variant="body2" paragraph>
                          Al momento del logIn.
                        </Typography>
                        <Typography component="li" variant="body2" paragraph>
                          Ante cambios en tablas críticas.
                        </Typography>
                      </Box>
                    </Typography>
                    <Typography component="li" variant="body2" paragraph>
                      Si se detecta un problema de integridad, la reacción del sistema se ajusta al tipo de usuario:
                      <Box component="ul" sx={{ pl: 3, mt: 3 }}>
                        <Typography component="li" variant="body2" paragraph>
                          Usuarios con permisos de restauración reciben mensajes habilitantes para ejecutar la recuperación.
                        </Typography>
                        <Typography component="li" variant="body2" paragraph>
                          Usuarios sin permisos son notificados y el sistema se cierra automáticamente para garantizar la seguridad de la información.
                        </Typography>
                      </Box>
                    </Typography>
                    <Typography component="li" variant="body2" paragraph>
                      En caso de error, solo un usuario con permisos de restauración podrá acceder y actuar sobre la base.
                    </Typography>
                  </Box>
                  {/* Imagen Arbol de Permisos */}
                  <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
                    <img 
                      src="/assets/Auzonia/Arbol_Permisos.png" 
                      alt="Arbol Permisos" 
                      style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                    />
                  </Box>
                </Box>
              </Box>    
              {/* Backup / Restore */}
              <Box key={anaviSections[5].subSections[1].id} 
                id={anaviSections[5].subSections[1].id} 
                  sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
              >
                <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
                  El sistema gestiona la continuidad de datos mediante un módulo de
                  Backup/Restore que facilita la administración y recuperación de
                  información:
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                  <Typography component="li" variant="body2" paragraph>
                    Se presenta un listado con el historial completo de respaldos, mostrando
                    directorio de destino y fecha de ejecución, permitiendo restaurar la
                    base directamente desde uno de esos registros.
                  </Typography>
                  <Typography component="li" variant="body2" paragraph>
                    Alternativamente, el usuario puede seleccionar manualmente un archivo
                    de backup desde cualquier ubicación específica.
                  </Typography>
                  <Typography component="li" variant="body2" paragraph>
                    La gestión de respaldos respeta un esquema de permisos granulares:
                      <Box component="ul" sx={{ pl: 3, mt: 3 }}>
                        <Typography component="li" variant="body2" paragraph>
                          Permiso de módulo.
                        </Typography>
                        <Typography component="li" variant="body2" paragraph>
                          Permiso para realizar backups.
                        </Typography>
                        <Typography component="li" variant="body2" paragraph>
                          Permiso para restaurar la base.
                        </Typography>
                      </Box>
                    </Typography>
                    <Typography component="li" variant="body2" paragraph>
                      El sistema contempla y gestiona errores derivados de permisos del sistema operativo en la carpeta destino del backup, garantizando la
                      trazabilidad del proceso.
                    </Typography>
                  </Box>
                  {/* Imagen Arbol de Permisos */}
                  <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
                    <img 
                      src="/assets/Auzonia/Arbol_Permisos.png" 
                      alt="Arbol Permisos" 
                      style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                    />
                  </Box>
                </Box>
        
        {/* Interfaz de usuario */}
        <Box key={anaviSections[6].id} id={anaviSections[6].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{anaviSections[6].title}</Typography>
          <Box sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }} >
            <Box component="ul" sx={{ pl: 0 }}>
              <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        El sistema incorpora íconos intuitivos que permiten identificar de manera clara cada módulo, mejorando la navegación y usabilidad.
        En todos los <strong>DataGrid</strong> se realizaron ajustes orientados a la legibilidad y la experiencia del usuario:
      </Typography>

      <Box component="ul" sx={{ pl: 3 }}>
        <Typography component="li" variant="body2" paragraph>
          Los encabezados fueron normalizados para respetar espacios, acentos y descripciones.
        </Typography>
        <Typography component="li" variant="body2" paragraph>
          Se centraron los títulos de columnas para favorecer la lectura.
        </Typography>
        <Typography component="li" variant="body2" paragraph>
          Las columnas se dimensionan automáticamente en función del contenido.
        </Typography>
        <Typography component="li" variant="body2" paragraph>
          Se organizó la disposición evitando espacios grises innecesarios entre los datos y el contenedor.
        </Typography>
        <Typography component="li" variant="body2" paragraph>
          Se centró el contenido en determinadas columnas para mantener una vista equilibrada.
        </Typography>
        <Typography component="li" variant="body2" paragraph>
          Se aplicó un código visual consistente: campos editables en celeste, registros no editables en gris y color rojo reservado exclusivamente para situaciones críticas.
        </Typography>
      </Box>

      <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        Además, el sistema es <strong>totalmente responsive</strong>, asegurando una visualización y usabilidad óptimas tanto en equipos de escritorio como en dispositivos móviles.
      </Typography>
              <Typography variant="h5" gutterBottom>
                Mapa de navegación
              </Typography>
              {/* Imagen Arbol de Permisos */}
              <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
                <img 
                  src="/assets/Auzonia/Arbol_Permisos.png" 
                  alt="Arbol Permisos" 
                  style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                />
              </Box>
                <Typography variant="h5" gutterBottom>
                Interfaces del sistema
                </Typography>
              <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
                <CarouselInterfaces/>
              </Box>
            </Box>
          </Box>
        </Box>    
        {/* Stack Tecnologico */}
        <Box key={anaviSections[7].id} id={anaviSections[7].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{anaviSections[7].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              Haber tenido práctica y experiencia con varios lenguajes de programación me brindó una visión más amplia para abordar problemas desde distintos paradigmas y estilos, además de fortalecer mi capacidad de adaptación frente a nuevas tecnologías. La industria del software evoluciona constantemente, y esa versatilidad me permite asimilar cambios con rapidez y aplicar las mejores prácticas sin importar la herramienta. No obstante, mi foco principal está en Java, donde profundizo mis conocimientos y busco especializarme como backend developer, potenciando lo aprendido en otros lenguajes para enriquecer mi forma de programar en el ecosistema Java.
            </Typography>
            {/* Stack tecnológico con iconos */}
            <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mt: 3 }}>
              {[
                { name: "ASP.NET", iconType: "component", icon: DotNetIcon, size: 55, color: "#512BD4" },
                { name: "Bootstrap", iconType: "component", icon: BootstrapIcon, size: 48, color: "#563d7c" },
                { name: "C#", iconType: "component", icon: CSharpIcon, size: 55, color: "#239120" },
                { name: "SQL Server", iconType: "component", icon: SQLServerIcon, size: 65, color: "#CC2927" },      
              ].map((tech) => (
              <Box key={tech.name} sx={{ textAlign: "center" }}>
                {tech.iconType === "img" && (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  style={{
                    width: tech.size || 60,
                    height: tech.size || 60,
                    objectFit: "contain",
                  }}
                />
                )}
                {tech.iconType === "text" && (
                <Typography
                  variant="h4"
                  sx={{ mt: 0, fontSize: tech.size || 30, color: tech.color || "inherit" }}
                >
                  {tech.icon}
                </Typography>
                 )}
                {tech.iconType === "component" && (
                <tech.icon
                style={{
                  fontSize: tech.size || 30,
                  color: tech.color || "inherit",
                }}
                />
                )}
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                 {tech.name}
                </Typography>
              </Box>
              ))}
            </Box>
          </Box>
        </Box>
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
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography variant="h6" gutterBottom>CONTENIDOS</Typography>
        <SubIndex sections={anaviSections} />
      </Box>
    </Box>
  );
};

export default AnaviProject;