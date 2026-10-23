// Contenido de la página de detalle de Lirium Nutrition Planning.
// Cada sección y subsección tiene un id (ancla del índice lateral), un título y su texto.
// En los textos, lo que va entre ** ** se muestra en negrita.
//
// Imágenes: los diagramas y las capturas están en public/assets/lirium/.
// Las capturas ya están declaradas más abajo (images). Si el archivo todavía no existe,
// la imagen no se muestra; en cuanto guardes el archivo con ese nombre en esa carpeta, aparece sola.
//
// Videos: cada sección o subsección puede llevar video: { id: "ID_DE_YOUTUBE", title: "..." }.

export const liriumSections = [
  {
    id: "vision-general",
    title: "Visión general",
    subSections: [
      {
        id: "que-resuelve",
        title: "Qué resuelve",
        video: { id: "6zi3zPiI3eM", title: "Presentación: un planificador nutricional backend con Java y Spring Boot" },
        paragraphs: [
          "Un nutricionista necesita armar un plan semanal que respete el objetivo, la condición fisiológica y las restricciones de cada paciente, y después saber si el paciente realmente lo sigue. Lirium resuelve las dos cosas: **genera el plan** a partir del perfil del paciente y **mide la adherencia**, comparando lo que el paciente registró con lo que el plan prescribía.",
          "El producto es el **backend**: una API REST documentada con OpenAPI. El cliente web que se muestra en la demo es un cliente de demostración de esa API.",
        ],
      },
      {
        id: "casos-de-uso",
        title: "Casos de uso",
        paragraphs: ["El sistema cubre tres casos de uso, cada uno con su documentación en el repositorio:"],
        bullets: [
          "**Gestionar el plan (nutricionista):** generarlo desde cero o desde una plantilla, editar comidas y porciones, activarlo y completarlo.",
          "**Registrar la ingesta diaria (paciente):** se abre el día precargado con el plan activo y se ajusta a lo que realmente se comió.",
          "**Consultar la adherencia (paciente o nutricionista):** comidas registradas contra las esperadas, y calorías y macronutrientes consumidos contra los planificados, día por día.",
        ],
      },
      {
        id: "ciclo-de-vida",
        title: "Ciclo de vida del plan",
        paragraphs: [
          "Un plan pasa por tres estados. Un paciente tiene como máximo un plan en borrador (**DRAFT**) y uno activo (**ACTIVE**). Solo los borradores se pueden editar o activar. Los planes inactivos (**INACTIVE**) no se reactivan: se genera uno nuevo.",
        ],
        image: {
          src: "/assets/lirium/lirium_lifecycle.svg",
          alt: "Diagrama de estados del plan: DRAFT, ACTIVE e INACTIVE",
          caption: "Ciclo de vida de un plan nutricional.",
        },
      },
      {
        id: "demo-api",
        title: "Demo y API en vivo",
        images: [
          { src: "/assets/lirium/lirium_swagger.png", alt: "Swagger UI de la API de Lirium con sus grupos de endpoints", caption: "Documentación interactiva de la API (Swagger UI)." },
        ],
        paragraphs: [
          "La API está publicada con su documentación interactiva (Swagger UI) y tiene más de 50 endpoints. Para probarla se inicia sesión con **POST /api/auth/login**, se pega el token en **Authorize** y se sigue el flujo: generar un plan, activarlo, registrar un día y consultar la adherencia. Los usuarios de prueba están en el README del repositorio.",
          "Está alojada en una instancia gratuita: de lunes a viernes responde de inmediato, y los fines de semana la instancia se duerme, por lo que la primera solicitud puede tardar unos minutos.",
        ],
      },
    ],
  },
  {
    id: "motor-planes",
    video: { id: "MXA3aHKbDR0", title: "Cómo nace un plan" },
    title: "Motor de generación de planes",
    subSections: [
      {
        id: "requerimiento-energetico",
        title: "Requerimiento energético",
        paragraphs: [
          "El motor parte de la tasa metabólica basal calculada con **Mifflin-St Jeor**, la multiplica por el factor de actividad y la ajusta según el objetivo (por ejemplo, −20 % para bajar de peso o +15 % para ganar masa muscular) y según cada condición fisiológica, como embarazo, lactancia o menopausia.",
        ],
        image: {
          src: "/assets/lirium/lirium_engine.svg",
          alt: "Flujo del motor de generación: del perfil del paciente al plan en borrador",
          caption: "Del perfil del paciente a un plan en borrador.",
        },
      },
      {
        id: "distribucion-macros",
        title: "Distribución de macronutrientes",
        paragraphs: [
          "Desde cero, la proteína se fija en gramos por kilo y la grasa como porcentaje de las calorías, según sexo y nivel de actividad. Los carbohidratos toman las calorías restantes. Si el plan se genera desde una plantilla, se usa la distribución de proteína, carbohidratos y grasa de esa plantilla.",
        ],
      },
      {
        id: "armado-semanal",
        title: "Armado semanal",
        paragraphs: [
          "El plan abarca **7 días × 5 comidas**. Cada comida usa solo alimentos aptos para su tipo y porciones dentro del mínimo y el máximo de cada alimento. Cada comida recibe su parte del presupuesto diario, y cualquier desvío se traslada a la comida siguiente. Un alimento no se repite dentro de un mismo día, y cada alimento tiene un límite de frecuencia semanal.",
        ],
      },
      {
        id: "restricciones",
        title: "Restricciones seguras por diseño",
        paragraphs: [
          "Los alimentos marcados como excluidos por cualquier restricción del paciente (sin gluten, sin lactosa, bajo en sodio…) o por la plantilla **nunca se seleccionan**, y tampoco los alimentos inactivos. Esta garantía se verifica de punta a punta contra una base PostgreSQL real, con los datos de demostración.",
          "Si el perfil del paciente está incompleto (peso, altura, actividad, objetivo, sexo o fecha de nacimiento), la solicitud se rechaza con un error 422 que lista todos los campos faltantes.",
        ],
      },
    ],
  },
  {
    id: "arquitectura-dominio",
    title: "Arquitectura y modelo de dominio",
    subSections: [
      {
        id: "capas",
        title: "Arquitectura por capas",
        paragraphs: [
          "Es una aplicación Spring Boot en capas: **controller**, **service**, **repository**, **model**, **dto**, **mapper** (MapStruct), **infrastructure** (seguridad y configuración) y **exception**. Las reglas de dependencia entre capas no son solo una convención: las verifica **ArchUnit** en cada build. Ninguna capa depende de los controllers, el modelo de dominio no depende de las capas externas, los componentes de seguridad no dependen de los servicios, y las convenciones de nombres y paquetes también se comprueban.",
        ],
        image: {
          src: "/assets/lirium/lirium_architecture.svg",
          alt: "Diagrama de las capas de la aplicación y sus dependencias",
          caption: "Capas y dependencias principales.",
        },
      },
      {
        id: "modelo-ddd",
        title: "Modelo de dominio (DDD)",
        paragraphs: [
          "El dominio sigue un enfoque **DDD**: los **agregados** (`NutritionPlan`, `PlanMeal` y `DailyRecord`) son los dueños de sus reglas, y los **value objects** (`Weight`, `Height`, `Calories`, `MacroDistribution`…) reemplazan a los tipos primitivos. Los servicios orquestan, pero no pueden saltearse las reglas del dominio.",
          "Por ejemplo, `NutritionPlan.activate()` y `complete()` controlan el ciclo de vida, `DailyPlan.addMeal()` rechaza una segunda comida del mismo tipo en un día, y `PlanMeal` rechaza un alimento duplicado.",
        ],
        image: {
          src: "/assets/lirium/lirium_domain.svg",
          alt: "Diagrama de clases del dominio: usuario, perfil, plan, comidas y registros",
          caption: "Modelo de dominio (hacer clic para ampliar).",
        },
      },
      {
        id: "errores",
        title: "Errores como parte de la API",
        paragraphs: [
          "Un manejador global de excepciones convierte cada falla en una respuesta `ApiError` consistente, con el código HTTP correcto: **404** para recursos inexistentes, **409** para conflictos (por ejemplo, un borrador duplicado o una comida repetida), **422** para violaciones de reglas de dominio, y mensajes de validación que nombran el campo con problema.",
        ],
      },
    ],
  },
  {
    id: "seguridad",
    video: { id: "LagzZ9IPijc", title: "Seguridad" },
    title: "Seguridad",
    subSections: [
      {
        id: "jwt",
        title: "JWT con refresh tokens",
        paragraphs: [
          "La autenticación es sin estado, con tokens de acceso **JWT** de 8 horas y **refresh tokens** de 7 días. Al cerrar sesión se revocan.",
        ],
      },
      {
        id: "oauth2",
        title: "Login con Google (OAuth2)",
        paragraphs: [
          "También se puede ingresar con Google. El resultado del login se intercambia por los JWT de la aplicación mediante un código de autorización de un solo uso y de corta duración.",
        ],
      },
      {
        id: "autorizacion",
        title: "Autorización en dos capas",
        paragraphs: [
          "La autorización funciona en dos niveles: reglas por URL en el `SecurityFilterChain` y `@PreAuthorize` en cada endpoint, con **control de propiedad**, de modo que un paciente solo accede a su propio perfil, planes y registros.",
          "Hay tres roles (**ADMIN**, **NUTRITIONIST** y **PATIENT**), construidos a partir de permisos granulares como `plan.write` o `record.read`. Las contraseñas se almacenan con BCrypt y CORS está restringido a los orígenes configurados.",
        ],
      },
      {
        id: "redis",
        title: "Revocación de sesión con Redis",
        paragraphs: [
          "Al cerrar sesión se revoca el refresh token y se agrega el identificador (`jti`) del token de acceso a una **lista negra en Redis**, con una duración igual al tiempo que le queda de vida.",
          "Si Redis no responde, el sistema **falla abierto**: acepta los tokens válidos en lugar de rechazar todas las solicitudes. Un token de una sesión cerrada que siga vivo hasta vencer es un riesgo menor que una caída completa de la API cada vez que Redis tiene un problema.",
        ],
      },
    ],
  },
  {
    id: "reportes",
    video: { id: "pDCE0HRs3zA", title: "El lado del paciente: registro diario y reportes de adherencia" },
    title: "Seguimiento y reportes",
    subSections: [
      {
        id: "registro-diario",
        title: "Registro diario de ingesta",
        paragraphs: [
          "Hay un registro por paciente y por fecha, que se abre precargado con el plan activo. No se admiten fechas futuras ni anteriores al inicio del plan. Una comida puede marcarse como modificada si no se comió según lo planificado, y lo registrado es independiente de ediciones posteriores del plan.",
        ],
      },
      {
        id: "adherencia",
        title: "Reporte de adherencia",
        paragraphs: [
          "Mide cuántas de las comidas planificadas siguió el paciente, día por día. Las comidas esperadas salen del plan vigente en cada fecha, y las seguidas son las que se comieron sin cambios.",
          "Un día sin registro **no es cero**: se informa como un día sin datos. El resumen separa dos cosas distintas: la adherencia general y la adherencia en los días en que el paciente sí registró, junto con la cantidad de días registrados sobre el total. Sin fechas, el reporte cubre los últimos 30 días.",
        ],
      },
      {
        id: "comparacion-nutricional",
        title: "Comparación nutricional",
        images: [
          { src: "/assets/lirium/lirium_reporte.png", alt: "Respuesta del reporte de comparación nutricional", caption: "Respuesta del reporte de comparación nutricional." },
        ],
        paragraphs: [
          "Compara, día por día, lo que el paciente registró con lo que el plan prescribía para ese día en calorías, proteínas, carbohidratos y grasas. Cada nutriente recibe un puntaje de cercanía de 0 a 100, que baja igual por comer de menos que de más, y hay un puntaje global ponderado (calorías 40 %, cada macronutriente 20 %; son ponderaciones ilustrativas, no clínicas).",
          "Los promedios se calculan solo sobre los días con datos, y los días sin registro devuelven un valor nulo, nunca cero.",
        ],
      },
      {
        id: "decision-reportes",
        title: "Una decisión documentada",
        paragraphs: [
          "Los dos reportes se rediseñaron según una decisión de arquitectura registrada en el repositorio (ADR 0001). La primera versión podía engañar a un nutricionista: un día sin registro parecía cero de ingesta, y el puntaje comparaba contra los objetivos teóricos, de modo que un paciente que comía exactamente lo que el plan prescribía igual perdía puntos, porque el generador solo aproxima esos objetivos.",
          "La decisión fue puntuar **contra lo planificado**, nutriente por nutriente, usar nulos para los datos ausentes, y calcular los promedios en el backend. La fórmula vive en un único método del dominio. Así, la precisión del generador se ve por separado y no recae sobre el paciente.",
        ],
      },
    ],
  },
  {
    id: "calidad",
    title: "Calidad y pruebas",
    subSections: [
      {
        id: "estrategia-pruebas",
        title: "Estrategia de pruebas",
        images: [
          { src: "/assets/lirium/lirium_cobertura.png", alt: "Reporte de cobertura de JaCoCo", caption: "Reporte de cobertura unificado (JaCoCo)." },
        ],
        paragraphs: [
          "El proyecto tiene **más de 840 pruebas**: unitarias, de repositorios con `@DataJpaTest`, de integración con el contexto completo de Spring y de arquitectura con ArchUnit. La cobertura unificada (unitarias más integración) es de **92 % de instrucciones y 82 % de ramas**.",
        ],
      },
      {
        id: "testcontainers",
        title: "Base de datos real en las pruebas",
        paragraphs: [
          "Las pruebas de integración corren con **Testcontainers** sobre PostgreSQL 16, la misma imagen que producción. El esquema se construye con las migraciones reales de Flyway y `ddl-auto=validate`, así que cualquier diferencia entre las entidades y el esquema rompe el build.",
          "El motor de generación se prueba de punta a punta contra la base con los datos de demostración, incluida la regla de que ningún plan contiene un alimento excluido.",
        ],
      },
      {
        id: "analisis-estatico",
        title: "Análisis estático y estilo",
        images: [
          { src: "/assets/lirium/lirium_sonar.png", alt: "Panel de SonarCloud con el Quality Gate aprobado", caption: "Panel de SonarCloud." },
        ],
        paragraphs: [
          "**SonarCloud** tiene el Quality Gate aprobado, con calificación **A** en seguridad, confiabilidad y mantenibilidad, y 0,5 % de duplicación. El estilo de código es uniforme gracias a **Spotless** con google-java-format, que se verifica en la integración continua.",
        ],
      },
    ],
  },
  {
    id: "observabilidad",
    title: "Observabilidad",
    subSections: [
      {
        id: "actuator",
        title: "Spring Boot Actuator",
        paragraphs: [
          "El endpoint `/actuator/health` es público, para los chequeos de salud de la plataforma de despliegue. Los detalles y el resto de los endpoints de Actuator requieren el rol ADMIN.",
        ],
      },
      {
        id: "logs",
        title: "Registro de solicitudes",
        paragraphs: [
          "Un interceptor registra las solicitudes HTTP, y la configuración de Logback es específica por perfil (desarrollo y producción).",
        ],
      },
      {
        id: "auditoria",
        title: "Auditoría con JPA",
        paragraphs: [
          "Las fechas de creación y modificación, junto con quién creó y modificó cada registro, se completan automáticamente en las entidades principales: usuarios, perfiles, planes, plantillas y registros diarios.",
        ],
      },
    ],
  },
  {
    id: "base-datos",
    title: "Base de datos",
    paragraphs: [
      "La persistencia usa **PostgreSQL 16** con Spring Data JPA e Hibernate. El esquema está versionado con **Flyway**: una migración crea las tablas y otra carga los datos de demostración. Hibernate corre con validación de esquema, de modo que el código nunca se desincroniza de la base. En producción se usa Neon (PostgreSQL serverless), y Redis se usa para la lista negra de tokens.",
    ],
  },
  {
    id: "cicd-despliegue",
    video: { id: "q3pP0iDBJ-0", title: "Del commit a producción" },
    title: "CI/CD y despliegue",
    subSections: [
      {
        id: "pipeline",
        title: "Pipeline de integración continua",
        paragraphs: [
          "Cada push y cada pull request ejecutan dos tareas en GitHub Actions. **build-and-test** corre `mvn verify` (pruebas unitarias y de integración), genera los reportes de JaCoCo y analiza con SonarCloud: si el Quality Gate no pasa, el build falla. **flyway-check** verifica el formato del código y que las migraciones se apliquen limpias sobre un PostgreSQL real.",
          "Cuando los cambios llegan a la rama principal, se publica la imagen en Docker Hub y un deploy hook hace que Render la descargue.",
        ],
        images: [
          { src: "/assets/lirium/lirium_cicd.svg", alt: "Diagrama del pipeline de integración y despliegue continuo", caption: "Del push al despliegue." },
          { src: "/assets/lirium/lirium_pipeline.png", alt: "Una corrida del pipeline en GitHub Actions", caption: "Una corrida real del pipeline en GitHub Actions." },
        ],
      },
      {
        id: "despliegue",
        title: "Despliegue y ejecución local",
        paragraphs: [
          "La aplicación se empaqueta en una imagen Docker de dos etapas: se compila con Maven sobre Java 21 y se ejecuta sobre un JRE liviano. La imagen se publica en **Docker Hub** (`rodoagosto/lirium-nutrition-planning`) en cada cambio a la rama principal. En producción corre en **Render**, con la base en **Neon** y Redis en Render Key Value.",
          "Para probarla localmente alcanza con `docker compose up` dentro de la carpeta del proyecto: levanta la API, PostgreSQL y Redis, con los datos de demostración ya cargados.",
        ],
      },
    ],
  },
  {
    id: "decisiones-diseno",
    title: "Decisiones de diseño",
    subSections: [
      {
        id: "reglas-en-agregado",
        title: "Reglas dentro del agregado",
        paragraphs: [
          "Algunas reglas vivían en servicios que podían saltearlas. Al moverlas al agregado salió a la luz un problema: la reactivación de planes dejaba planes con una fecha de fin anterior a la de inicio. Esa funcionalidad se eliminó, y hoy un plan inactivo no se reactiva: se genera uno nuevo.",
        ],
      },
      {
        id: "testcontainers-vs-h2",
        title: "Testcontainers en lugar de H2",
        paragraphs: [
          "Tras migrar las pruebas, fallaron tres tests que verificaban el orden de los planes de un paciente. La causa: **H2 y PostgreSQL ordenan los nulos de forma distinta** en `ORDER BY … DESC`. Los tests comprobaban un orden que nunca ocurría en producción. Desde entonces la suite corre contra el motor real y con las migraciones reales.",
        ],
      },
      {
        id: "blacklist-abierta",
        title: "Lista negra que falla abierta",
        paragraphs: [
          "Si Redis no está disponible, se aceptan los tokens válidos en vez de rechazar todas las solicitudes. Se prefiere tolerar que un token cerrado viva hasta vencer antes que tener una caída total de la API.",
        ],
      },
      {
        id: "patient-id",
        title: "patientId igual a userId",
        paragraphs: [
          "`PatientProfile` comparte su clave primaria con `User` mediante `@MapsId`. No hay un segundo identificador para mapear ni para exponer, y los controles de propiedad (`#patientId == authentication.principal.id`) comparan un único valor.",
        ],
      },
    ],
  },
  {
    id: "stack",
    title: "Stack tecnológico",
    stack: [
      { name: "Java 21", icon: "java" },
      { name: "Spring Boot 3.3", icon: "springboot" },
      { name: "Spring Data JPA", icon: "spring" },
      { name: "Hibernate", icon: "hibernate" },
      { name: "Spring Security", icon: "springsecurity" },
      { name: "JWT", icon: "jwt" },
      { name: "OAuth2 (Google)", icon: "google" },
      { name: "BCrypt" },
      { name: "PostgreSQL 16", icon: "postgresql" },
      { name: "Flyway", icon: "flyway" },
      { name: "Redis", icon: "redis" },
      { name: "MapStruct" },
      { name: "Lombok" },
      { name: "Bean Validation" },
      { name: "OpenAPI / Swagger UI", icon: "swagger" },
      { name: "Spring Actuator", icon: "spring" },
      { name: "Logback" },
      { name: "JUnit 5", icon: "junit" },
      { name: "Mockito" },
      { name: "Testcontainers" },
      { name: "ArchUnit" },
      { name: "JaCoCo" },
      { name: "SonarCloud", icon: "sonarcloud" },
      { name: "Spotless" },
      { name: "Maven", icon: "maven" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Render", icon: "render" },
      { name: "Neon" },
    ],
  },
  {
    id: "videos",
    title: "Serie de videos",
    paragraphs: [
      "El proyecto se presenta en una serie de cinco videos: el primero ofrece la visión general y los siguientes detallan cada parte.",
    ],
    videoLinks: [
      { title: "Presentación: un planificador nutricional backend con Java y Spring Boot", url: "https://www.youtube.com/watch?v=6zi3zPiI3eM" },
      { title: "Cómo nace un plan", url: "https://www.youtube.com/watch?v=MXA3aHKbDR0" },
      { title: "El lado del paciente: registro diario y reportes de adherencia", url: "https://www.youtube.com/watch?v=pDCE0HRs3zA" },
      { title: "Seguridad", url: "https://www.youtube.com/watch?v=LagzZ9IPijc" },
      { title: "Del commit a producción", url: "https://www.youtube.com/watch?v=q3pP0iDBJ-0" },
    ],
    playlistUrl: "https://www.youtube.com/playlist?list=PLZ2OWG7ilJl0",
  },
];

export const liriumLinks = [
  { label: "Código", url: "https://github.com/RodolfoAgosto/lirium-nutrition-planning", icon: "github" },
  { label: "API en vivo", url: "https://lirium-nutrition-planning-api.onrender.com", icon: "link" },
  { label: "Demo", url: "https://lirium-nutrition-frontend-theta.vercel.app/", icon: "link" },
  { label: "Serie de videos", url: "https://www.youtube.com/playlist?list=PLZ2OWG7ilJl0", icon: "playlist" },
  { label: "Docker Hub", url: "https://hub.docker.com/r/rodoagosto/lirium-nutrition-planning", icon: "docker", card: false },
];
