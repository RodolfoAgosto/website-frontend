import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import SubIndex from "../components/SubIndex";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import BuildIcon from "@mui/icons-material/Build";
import EAButtonIcon from '../components/EAButtonIcon';
import ArquitecturaAuzonia from "../components/Auzonia/ArquitecturaAuzonia";
import InterfacesImageList from "../components/Auzonia/InterfacesImageList";
import { ReactComponent as VBNetIcon } from '../assets/icons/visualbasic.svg';
import { ReactComponent as DotNetIcon } from '../assets/icons/donet.svg';
import { ReactComponent as SQLServerIcon } from '../assets/icons/microsoftsqlserver.svg';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const auzoniaSections = [
  { id: "arquitectura", title: "Arquitectura" },
  {
    id: "procesos",
    title: "Procesos Core",
    subSections: [
      { id: "nota-pedido", title: "Gestión de Compras" },
      { id: "gestion-de-entregas", title: "Gestión de Entregas" },
      { id: "valuacion-de-inventario", title: "Valuación de Inventario" },
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad",
    subSections: [
      { id: "login", title: "Login/Logout" },
      { id: "permisos", title: "Permisos y Perfiles + Patrón Composite" },
      { id: "bitacora", title: "Bitácora de Auditoria" },
      { id: "encriptado", title: "Encriptado" },
    ],
  },
  { id: "multidioma", title: "Multidioma + Patrón Observer" },
  { id: "casos-prueba", title: "Casos de Prueba" },
  {
    id: "despliegue",
    title: "Despliegue y Soporte",
    subSections: [
      { id: "instalador", title: "Instalador" },
      { id: "ayuda", title: "Ayuda en Línea" },
    ],
  },
  {
    id: "reportes",
    title: "Reportes",
    subSections: [
      { id: "informes", title: "Informes y Exportación PDF" },
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



const AuzoniaProject = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 4, p: 5 }}>
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
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6">Documentación</Typography>
        </Box>
        <Grid container spacing={0}>          
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
            <Button size="large"
                    color="primary"
                    startIcon={<BuildIcon />}
                    href="/docs/ManualInstalacion.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: "none" }}
            >Manual de Instalación
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
        <Box key={auzoniaSections[0].id} id={auzoniaSections[0].id} sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>{auzoniaSections[0].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              La aplicación está diseñada con una arquitectura en siete capas (UI, BLL Técnica, BLL Negocio, Seguridad, BE, DAL e Interfaces),
              con más de cien clases organizadas modularmente. Esta estructura garantiza la separación de responsabilidades, la escalabilidad y
              la mantenibilidad del sistema.
            </Typography>
          </Box>
          {/* Imagen de la arquitectura */}
          <Box sx={{ mt: 4, ml: 2, display: "flex", justifyContent: "center" }}>
            <img 
              src="/assets/Auzonia/Arquitectura_Auzonia.png" 
              alt="Arquitectura Auzonia" 
              style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
            />
          </Box>
          <ArquitecturaAuzonia/>
        </Box>
        {/* Procesos Core*/}
        <Box key={auzoniaSections[1].id} id={auzoniaSections[1].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{auzoniaSections[1].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              A continuación se describen algunos de los procesos core del sistema, seleccionados 
              por su relevancia en la operación del negocio y por reflejar la complejidad técnica 
              y funcional abordada durante el desarrollo.
              El sistema contempla más procesos que pueden consultarse en la documentación completa, 
              pero en este portafolio se muestran aquellos que representan mejor cómo se resuelven 
              problemáticas clave del negocio: gestión de pedidos, control de stock y ventas.
            </Typography>
          </Box>
          {/* Gestión de Compras*/}
          <Box key={auzoniaSections[1].subSections[0].id} 
               id={auzoniaSections[1].subSections[0].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {auzoniaSections[1].subSections[0].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              El proceso de <strong>Gestión de Compras</strong> garantiza el abastecimiento de artículos mediante un
              circuito de control y validación que involucra a diferentes áreas del negocio.
            </Typography>
            <Box component="ol" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Generación de nota de pedido:</strong> El gerente general crea la nota de pedido, estimando
                las cantidades necesarias en función de pedidos anteriores, pedidos de clientes y el stock mínimo
                definido. La nota incluye cantidades, fecha y un número identificador.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Recepción por parte del proveedor:</strong> El proveedor recibe la nota de pedido y genera el
                 remito con las cantidades a enviar según su disponibilidad de stock.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Ingreso del remito:</strong> El jefe de ventas registra en el sistema el remito recibido del
               proveedor.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Control en depósito:</strong> El encargado de depósito verifica que la mercadería física
                coincida con lo detallado en el remito e ingresa las cantidades reales recibidas.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Ajuste de diferencias:</strong> El jefe de ventas controla que las cantidades enviadas
                correspondan a las solicitadas y ajusta las diferencias detectadas.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Confirmación final:</strong> Una vez validadas las cantidades ingresadas al depósito, el jefe
                de ventas confirma la generación del remito en el sistema.
              </Typography>
            </Box>
            {/* Imagen del diagram del proceso */}
            <Box sx={{ mt: 4, ml: 2, display: "flex", justifyContent: "center" }}>
              <img 
                src="/assets/Auzonia/Diagrama_Proceso_Gestion_Compras.png" 
                alt="Arquitectura Auzonia" 
                style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
              />
            </Box>          
            <Box sx={{ mb: 4, px: { xs: 2, sm: 4, md: 0 } }} >
              <Typography variant="h6" gutterBottom sx={{mt: 6, pl: 0}}>
                Demostración del Proceso en la Aplicación
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Box sx={{ position: "relative", width: "100%", maxWidth: 800, aspectRatio: "16/9" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ssGL0uKugoQ"
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
          {/* Gestión de Entregas*/}
          <Box key={auzoniaSections[1].subSections[1].id} 
               id={auzoniaSections[1].subSections[1].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {auzoniaSections[1].subSections[1].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              La <strong>Gestión de Entregas</strong> contempla todas las actividades necesarias 
              para que los pedidos de los clientes se preparen, verifiquen y finalmente se entreguen
              de manera ordenada y controlada. El proceso involucra distintas áreas (ventas y 
              depósito), asegurando la trazabilidad de la mercadería y la conformidad del cliente.
            </Typography>
            {/* Detalle del proceso */}
            <Box component="ol" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Solicitud del pedido:</strong> El cliente solicita un pedido detallando las cantidades requeridas 
                para cada artículo. El vendedor registra esta información generando un <em>Pedido de Cliente</em>.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Revisión inicial:</strong> El jefe de ventas revisa el pedido para verificar la disponibilidad 
                de stock y determinar si corresponde aplicar medidas especiales.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Organización de entregas:</strong> El vendedor revisa los pedidos pendientes de entrega 
                y organiza la mercadería correspondiente para planificar el viaje.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Autorización:</strong> El jefe de ventas confirma la existencia en stock y autoriza la salida de mercadería.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Verificación en depósito:</strong> El jefe de depósito controla la existencia física de la mercadería 
                antes de la preparación.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Generación de entrega y remitos:</strong> El jefe de ventas registra en el sistema la <em>Entrega</em>, 
                detallando las cantidades de cada artículo, y emite los <em>Remitos</em>.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Preparación de mercadería:</strong> El encargado de depósito prepara la mercadería según lo autorizado.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Carga de transporte:</strong> El vendedor carga la mercadería en el transporte asignado.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Entrega al cliente:</strong> Finalmente, el vendedor realiza la entrega de la mercadería al cliente.
              </Typography>
            </Box>
            {/* Imagen del diagram del proceso */}
            <Box sx={{ mt: 4, ml: 2, display: "flex", justifyContent: "center" }}>
              <img 
                src="/assets/Auzonia/Diagrama_Proceso_Gestion_Entregas.png" 
                alt="Arquitectura Auzonia" 
                style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
              />
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
                    src="https://www.youtube.com/embed/OQP8eX4zHcA"
                    title="Video de demostración - Gestión de Entregas"
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
          {/* Valuación de Inventario*/}
          <Box key={auzoniaSections[1].subSections[2].id} 
               id={auzoniaSections[1].subSections[2].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {auzoniaSections[1].subSections[2].title}
            </Typography>
            <Typography paragraph sx={{ textAlign: "justify" }}>
              La valuación de inventario permite conocer el valor económico de los artículos disponibles en el depósito para su registro contable y toma de decisiones. 
              En este proceso se aplican métodos de valoración como <strong>FIFO (First In, First Out)</strong> y <strong>LIFO (Last In, First Out)</strong>. La elección del método influye en la valoración del stock y en el resultado financiero de la empresa.
            </Typography>
            <Typography paragraph sx={{ textAlign: "justify" }}>
              <strong>FIFO</strong> asume que los primeros artículos ingresados al depósito son los primeros en salir, reflejando un costo más antiguo en la valuación del inventario. 
              <strong> LIFO</strong>, en cambio, considera que los últimos artículos ingresados son los primeros en salir, lo que puede reflejar un costo más reciente en la valoración. 
              Estos métodos permiten a la empresa ajustar la contabilidad según la rotación de stock y las condiciones de mercado.
            </Typography>
            <Box component="ol" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Recepción de lista de precios:</strong> El proveedor envía un listado con los precios vigentes de cada artículo junto con la fecha de validez.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Actualización en el sistema:</strong> El jefe de ventas carga y actualiza en el sistema el listado recibido, asegurando que los precios estén vigentes.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Valuación de mercadería:</strong> El gerente general realiza la valorización de los artículos en inventario aplicando métodos de valuación 
                como <em>FIFO (First In, First Out)</em> o <em>LIFO (Last In, First Out)</em>, según la política contable definida.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Comunicación del resultado:</strong> El gerente general informa a contaduría los resultados de la valuación para el registro contable correspondiente.
              </Typography>
            </Box>
            {/* Imagen del diagram del proceso */}
            <Box sx={{ mt: 4, ml: 2, display: "flex", justifyContent: "center" }}>
              <img 
                src="/assets/Auzonia/Diagrama_Valuacion_Inventario.png" 
                alt="Arquitectura Auzonia" 
                style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
              />
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
                    src="https://www.youtube.com/embed/Ox8pG_Y2T2U"
                    title="Video de demostración - Valuación de Inventarios"
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
        <Box key={auzoniaSections[2].id} id={auzoniaSections[2].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{auzoniaSections[2].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              La capa de Seguridad gestiona la autenticación y autorización de usuarios, controlando
               accesos según roles y permisos. Su objetivo es proteger la información y garantizar
                que cada operación sea realizada solo por usuarios habilitados.
            </Typography>
          </Box>
          {/* Login/Logout*/}
          <Box key={auzoniaSections[2].subSections[0].id} 
               id={auzoniaSections[2].subSections[0].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {auzoniaSections[2].subSections[0].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              El proceso de <strong>login/logout</strong> forma parte de la capa de Seguridad. Permite a los usuarios autenticarse de forma segura en el sistema y cerrar sesión, garantizando control de acceso y protección de la información.
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Diferenciación de accesos:</strong> El sistema distingue entre usuario inexistente o contraseña incorrecta y responde según corresponda.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap", mt: 4, mb: 4 }}>
                <Box sx={{ flex: 1, maxWidth: 500 }}>
                  <Card sx={{ maxWidth: 500, boxShadow: 3, borderRadius: 1 }}>
                    <CardMedia
                      component="img"
                      image="/assets/Auzonia/Usuario_no_registrado.png"
                      alt="Usuario no registrado"
                    />
                  </Card>
                </Box>
                <Box sx={{ flex: 1, maxWidth: 400 }}>
                  <Card sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 1 }}>
                    <CardMedia
                      component="img"
                      image="/assets/Auzonia/Contrasena_incorrecta.png"
                      alt="Contrasena incorrecta" 
                    />
                  </Card>
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
              <Box sx={{ flex: 1, maxWidth: 500, mb: 4 }}>
                <Card sx={{ maxWidth: 500, boxShadow: 3, borderRadius: 1 }}>
                  <CardMedia
                    component="img"
                    image="/assets/Auzonia/Ingreso_valido.png"
                    alt="Arquitectura Auzonia"
                  />
                </Card>
              </Box>
              <Typography component="li" variant="body2" paragraph>
                <strong>Estados de acceso:</strong> Se utiliza un Enum con las opciones: AccesoValido, Reintentar, UsuarioBloqueado y UsuarioInexistente.
              </Typography>
            </Box> 
          </Box>  
          {/* Permisos y Perfiles + Patron Composite */}
          <Box key={auzoniaSections[2].subSections[1].id} 
               id={auzoniaSections[2].subSections[1].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {auzoniaSections[2].subSections[1].title}
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
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", mt: 0 , mb:0 }} >
                <Card sx={{ maxWidth: 500, boxShadow: 3, borderRadius: 1 }}>
                  <CardMedia
                    component="img"
                    image="/assets/Auzonia/Arbol_Permisos.png"
                    alt="Arbol Permisos"
                    sx={{ width: "100%", height: "auto" }}
                  />
                </Card>
              </Box>
              <Typography component="li" variant="body2" paragraph>
                <strong>Control de recursividad:</strong> El sistema impide asignar una familia padre que sea hija de la familia a asignar, evitando bucles infinitos en la estructura.
              </Typography>
              {/* Imagen Recursividad */}  
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", mt:0, mb:0 }} >
                <Card sx={{ maxWidth: 600, boxShadow: 3, borderRadius: 1 }}>
                  <CardMedia
                    component="img"
                    image="/assets/Auzonia/Recursividad.png" 
                    alt="Recursividad" 
                    sx={{ width: "100%", height: "auto" }}
                  />
                </Card>
              </Box> 
              <Typography component="li" variant="body2" paragraph>
                <strong>Uso del patrón Composite:</strong> Se implementa el patrón Composite para permitir construir perfiles complejos a partir de permisos simples, facilitando la herencia y composición de permisos.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                <strong>Asignación múltiple de permisos:</strong> Cada usuario puede recibir más de un permiso o familia, lo que permite definir accesos flexibles y personalizados.
              </Typography>
              {/* Administracion Perfiles */}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", mt:0, mb:0 }} >
                <Card sx={{ maxWidth: 600, boxShadow: 3, borderRadius: 1 }}>
                  <CardMedia
                    component="img"
                    image="/assets/Auzonia/Administracion_Perfiles.png" 
                    alt="Administracion Perfiles" 
                    sx={{ width: "100%", height: "auto" }}
                  />
                </Card>
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
                      src="https://www.youtube.com/embed/hZbOHes4YaQ"
                      title="Video de demostración - Multidioma + Observer"
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
          <Box key={auzoniaSections[2].subSections[2].id} 
               id={auzoniaSections[2].subSections[2].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {auzoniaSections[2].subSections[2].title}
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
                {/* Bitácora de Auditoria */}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", mt:0, mb:0 }} >
                  <Card sx={{ maxWidth: 600, boxShadow: 3, borderRadius: 1 }}>
                    <CardMedia
                      component="img"
                      image="/assets/Auzonia/Bitacora_Auditoria.png" 
                      alt="Bitacora de Auditoria" 
                      sx={{ width: "100%", height: "auto" }}
                    />
                  </Card>
                </Box> 
              </Box>
            </Box> 
          </Box>
          {/* Encriptado */}
          <Box key={auzoniaSections[2].subSections[3].id} 
               id={auzoniaSections[2].subSections[3].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {auzoniaSections[2].subSections[3].title}
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
      <Box key={auzoniaSections[3].id} id={auzoniaSections[3].id} sx={{ mt: 0 }}>
        <Typography variant="h4" gutterBottom>{auzoniaSections[3].title}</Typography>
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
            {/* Multiidioma */}
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", mt:0, mb:0 }} >
              <Card sx={{ maxWidth: 600, boxShadow: 3, borderRadius: 1 }}>
                <CardMedia
                  component="img"
                  image="/assets/Auzonia/Multidioma.png" 
                  alt="Multidioma" 
                  sx={{ width: "100%", height: "auto" }}
                />
              </Card>
            </Box> 
          </Box>
        </Box>
        {/* Casos de prueba */}
        <Box key={auzoniaSections[4].id} id={auzoniaSections[4].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{auzoniaSections[4].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              Los <strong>casos de prueba</strong> definen los escenarios y condiciones utilizados para verificar que cada funcionalidad del sistema cumpla con los requisitos especificados, asegurando la calidad y estabilidad del software.
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Ejemplo de <strong>test unitario</strong> para validar el procedimiento de encriptación:
            </Typography>
            {/* Test */}
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", mt:0, mb:0 }} >
              <Card sx={{ maxWidth: 600, boxShadow: 3, borderRadius: 1 }}>
                <CardMedia
                  component="img"
                  image="/assets/Auzonia/Test.png" 
                  alt="Multidioma" 
                  sx={{ width: "100%", height: "auto" }}
                />
              </Card>
            </Box> 
          </Box>
        </Box>
        {/* Despliegue y Soporte */}
        <Box key={auzoniaSections[5].id} id={auzoniaSections[5].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{auzoniaSections[5].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              El sistema cuenta con un instalador que facilita su implementación, acompañado de un 
              manual de usuario. Además, ofrece una sección de ayuda en línea para consultas 
              rápidas y soporte continuo.
            </Typography>
          </Box>
          {/* Instalador*/}
          <Box key={auzoniaSections[5].subSections[0].id} 
               id={auzoniaSections[5].subSections[0].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {auzoniaSections[5].subSections[0].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              El sistema incluye un instalador con documentación y asistente (wizard) que guía al usuario en todo el proceso. La instalación integra automáticamente el framework correspondiente, el motor de base de datos con su esquema y la carga inicial de información necesaria. Al finalizar, el sistema queda listo para su uso inmediato.
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                <strong>Prerequisitos del Entorno: </strong>
                El sistema valida que se cumplan los prerequisitos necesarios antes de iniciar el proceso. De ser requerido, instala automáticamente el software adicional y dependencias, asegurando que el entorno quede correctamente configurado y listo para su uso.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
               <strong>Instalación:</strong> El sistema guía al usuario durante todo el proceso, ejecutando la instalación del script de base de datos, la carga de datos iniciales y el despliegue del software de la aplicación ya compilado, dejando el entorno listo para su funcionamiento.
              </Typography>
              {/* Intalador */}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", mt:0, mb:4 }} >
                <Card sx={{ maxWidth: 600, boxShadow: 3, borderRadius: 1 }}>
                  <CardMedia
                    component="img"
                    image="/assets/Auzonia/Instalador1.png" 
                    alt="Instalador2" 
                    sx={{ width: "100%", height: "auto" }}
                  />
                </Card>
              </Box> 
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", mt:0, mb:4 }} >
                <Card sx={{ maxWidth: 600, boxShadow: 3, borderRadius: 1 }}>
                  <CardMedia
                    component="img"
                    image="/assets/Auzonia/Instalador2.png" 
                    alt="Instalador2" 
                    sx={{ width: "100%", height: "auto" }}
                  />
                </Card>
              </Box> 
            </Box> 
          </Box>  
          {/* Ayuda en línea */}
          <Box key={auzoniaSections[5].subSections[1].id} 
               id={auzoniaSections[5].subSections[1].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {auzoniaSections[5].subSections[1].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              El sistema ofrece asistencia inmediata al usuario a través de ToolTips en todos los 
              formularios y controles, con íconos claros que indican el tipo de mensaje. Además, 
              cuenta con una ayuda en línea con navegación tipo árbol, facilitando el acceso rápido
               y sencillo a la información.
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                El sistema incorpora ToolTips (mensajes emergentes de ayuda) en todos los formularios para guiar al usuario.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                Cada ToolTip muestra un ícono acorde al tipo de mensaje: Información, Error o Advertencia.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                Los mensajes ToolTip están disponibles en botones, campos de texto y, cuando es necesario, en las columnas de los DataGridView.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                Además, el sistema incluye una ayuda en línea organizada mediante un árbol de navegación, lo que permite acceder rápidamente a cualquier sección del documento.
              </Typography>
              {/* Ayuda */}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", mt:0, mb:4 }} >
                <Card sx={{ maxWidth: 600, boxShadow: 3, borderRadius: 1 }}>
                  <CardMedia
                    component="img"
                    image="/assets/Auzonia/Ayuda.png" 
                    alt="Ayuda" 
                    sx={{ width: "100%", height: "auto" }}
                  />
                </Card>
              </Box> 
            </Box>
          </Box>        
        </Box>                
        {/* Reportes */}
        <Box key={auzoniaSections[6].id} id={auzoniaSections[6].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{auzoniaSections[6].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              Esta sección describe las funcionalidades de generación de informes y archivos que el sistema ofrece para apoyar la gestión del negocio.
            </Typography>
          </Box>
          {/* Informes y exportación Pdf */}
          <Box key={auzoniaSections[6].subSections[0].id} 
               id={auzoniaSections[6].subSections[0].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {auzoniaSections[6].subSections[0].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              El sistema permite generar informes visualmente agradables y personalizados según las necesidades del usuario.
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                Se contemplan varios tipos de informes según la información requerida.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                Algunos informes permiten aplicar filtros de entrada para ajustar los resultados a los requerimientos específicos.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                Los informes presentan un diseño cuidado, con márgenes, centrado, encabezados, logos y cuadrillas, garantizando una visualización profesional.
              </Typography>
              {/* Reportes */}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", mt:0, mb:4 }} >
                <Card sx={{ maxWidth: 600, boxShadow: 3, borderRadius: 1 }}>
                  <CardMedia
                    component="img"
                    image="/assets/Auzonia/Reportes.png" 
                    alt="Reportes" 
                    sx={{ width: "100%", height: "auto" }}
                  />
                </Card>
              </Box> 
            </Box>
          </Box>    
          {/* Serialización JSON/XML */}
          <Box key={auzoniaSections[6].subSections[1].id} 
               id={auzoniaSections[6].subSections[1].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {auzoniaSections[6].subSections[1].title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              El sistema facilita la generación de archivos en formatos estándar para la integración con sistemas de proveedores.
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                Para la generación de archivos, el sistema simula el envío automático de la nota de pedido de compra al proveedor en formato JSON o XML, según corresponda, al generar el pedido desde el módulo Compras → función Notas de Pedido.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                Los archivos se guardan con un nombre y directorio predeterminados en la PC local, listos para ser enviados.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                Se contemplan ambos formatos: JSON y XML, garantizando compatibilidad con distintos sistemas de proveedores.
              </Typography>
            </Box>
          </Box>            
        </Box>
        {/* Base de datos */}
        <Box key={auzoniaSections[7].id} id={auzoniaSections[7].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{auzoniaSections[7].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              Ela sistema de base de datos garantiza la seguridad y continuidad de la información a través de dos pilares fundamentales: un gestor de integridad, 
              que valida de forma automática y proactiva la consistencia de los datos críticos, y un módulo de Backup/Restore, que asegura la recuperación ante 
              incidentes mediante respaldos trazables y gestionados según permisos. En conjunto, ambas funciones fortalecen la confiabilidad y resiliencia del 
              sistema.
            </Typography>
          </Box>
          {/* Gestión de Integridad */}
          <Box key={auzoniaSections[7].subSections[0].id} 
               id={auzoniaSections[7].subSections[0].id} 
               sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h5" gutterBottom>
              {auzoniaSections[7].subSections[0].title}
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
        </Box>
      </Box>    
      {/* Backup / Restore */}
      <Box key={auzoniaSections[7].subSections[1].id} 
        id={auzoniaSections[7].subSections[1].id} 
          sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }}
      >
        <Typography variant="h5" gutterBottom>
          {auzoniaSections[7].subSections[1].title}
        </Typography>
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
          {/* Imagen Backup Restore */}
          <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
            <img 
              src="/assets/Auzonia/Backup_Restore.png" 
              alt="Backup Restore" 
              style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
            />
          </Box>
        </Box>
        {/* Interfaz de usuario */}
        <Box key={auzoniaSections[8].id} id={auzoniaSections[8].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{auzoniaSections[8].title}</Typography>
          <Box sx={{ mb: 4, px: { xs: 2, sm: 4, md: 6 } }} >
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" paragraph>
                Se incorporaron íconos intuitivos para identificar claramente cada módulo del sistema.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                En todos los DataGridView del sistema:
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" variant="body2" paragraph>
                  Se ajustaron los encabezados para respetar espacios, acentos y descripciones.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Los encabezados se centraron para mejorar la lectura.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Las columnas se dimensionaron según el contenido.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Se organizaron las columnas evitando espacios grises entre los datos y el contenedor.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Se centró el contenido de algunas columnas para lograr una vista más equilibrada.
                </Typography>
                <Typography component="li" variant="body2" paragraph>
                  Se aplicó color celeste en los campos editables y gris en los registros no editables.
                </Typography>
              </Box>
              <Typography component="li" variant="body2" paragraph>
                El color rojo se reservó exclusivamente para situaciones críticas, garantizando claridad y consistencia en la interfaz.
              </Typography>
              <Typography component="li" variant="body2" paragraph>
                En caso de error de integridad, solo los usuarios con permisos de restauración pueden acceder al sistema.
              </Typography>
              <Typography variant="h5" gutterBottom>
                Mapa de navegación
              </Typography>
              {/* Mapa de Navegacion */}
              <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
                <img 
                  src="/assets/Auzonia/Mapa_Navegacion.png" 
                  alt="Arbol Permisos" 
                  style={{ maxWidth: "100%", height: "auto", borderRadius: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                />
              </Box>
                <Typography variant="h5" gutterBottom>
                Interfaces del sistema
                </Typography>
              <Box sx={{ mt: 4, mb: 4, ml: 2, display: "flex", justifyContent: "center" }}>
                <InterfacesImageList/>
              </Box>
            </Box>
          </Box>
        </Box>    
        {/* Stack Tecnologico */}
        <Box key={auzoniaSections[9].id} id={auzoniaSections[9].id} sx={{ mt: 0 }}>
          <Typography variant="h4" gutterBottom>{auzoniaSections[9].title}</Typography>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 1, px: { xs: 2, sm: 6 } }}>        
            <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}> 
              Haber tenido práctica y experiencia con varios lenguajes de programación me brindó una visión más amplia para abordar problemas desde distintos paradigmas y estilos, además de fortalecer mi capacidad de adaptación frente a nuevas tecnologías. La industria del software evoluciona constantemente, y esa versatilidad me permite asimilar cambios con rapidez y aplicar las mejores prácticas sin importar la herramienta. No obstante, mi foco principal está en Java, donde profundizo mis conocimientos y busco especializarme como backend developer, potenciando lo aprendido en otros lenguajes para enriquecer mi forma de programar en el ecosistema Java.
            </Typography>
            {/* Stack tecnológico con iconos */}
<Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 3 }}>
  {/* VB.NET */}
  <Box sx={{ textAlign: "center" }}>
    <VBNetIcon
      style={{
        fontSize: 25,
        color: "#8A2BE2",
        marginTop: "3px",
      }}
    />
    <Typography variant="subtitle1" sx={{ mt: 1.2, fontSize: 14 }}>
      VB.NET
    </Typography>
  </Box>

  {/* .NET Framework */}
  <Box sx={{ textAlign: "center" }}>
    <DotNetIcon
      style={{
        fontSize: 30,
        color: "#512BD4",
      }}
    />
    <Typography variant="subtitle1" sx={{ mt: 0, fontSize: 14 }}>
      .NET Framework
    </Typography>
  </Box>

  {/* SQL Server */}
  <Box sx={{ textAlign: "center" }}>
    <SQLServerIcon
      style={{
        fontSize: 38,
        color: "#CC2927",
        marginTop: "5px",
      }}
    />
    <Typography variant="subtitle1" sx={{ mt: 1.1, fontSize: 14 }}>
      SQL Server
    </Typography>
  </Box>
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
        <SubIndex sections={auzoniaSections} />
      </Box>
    </Box>
  );
};

export default AuzoniaProject;
