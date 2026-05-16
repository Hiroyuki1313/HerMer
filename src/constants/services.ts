import { FileText, Network, Database, Layout, Smartphone, Cloud, Cpu, Share2, Search, Clock, ClipboardList, Zap, type LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  metrics?: string[];
  mockup?: string;
}

export interface BeforeAfter {
  title: string;
  beforeImage: string;
  afterImage: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  slogan?: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  metricsTitle?: string;
  metrics?: { value: string; label: string }[];
  features?: ServiceFeature[];
  projects?: Project[];
  beforeAfters?: BeforeAfter[];
  processes?: ProcessStep[];
  categories?: ServiceFeature[];
  technologies?: { name: string; logo?: string; description: string }[];
  heroImage?: string;
}

export const SERVICES: Service[] = [
  {
    id: "rpa",
    title: "Soluciones tecnológicas, automatización e inteligencia empresarial",
    slogan: "Consultoría tecnológica | Automatización | BI | Software empresarial",
    description: "Diseñamos soluciones digitales que convierten procesos complejos en flujos claros, medibles y escalables.",
    fullDescription: "HERMAR Business Solutions diseña e implementa soluciones que conectan procesos, datos, infraestructura y herramientas digitales para transformar la operación diaria en información accionable, automatizada y escalable.",
    icon: FileText,
    metrics: [
      { value: "+38%", label: "Incremento de productividad" },
      { value: "-45%", label: "Reducción de errores" },
      { value: "+52%", label: "Mayor visibilidad operativa" },
      { value: "-30%", label: "Tiempo operativo" }
    ],
    categories: [
      { title: "INF Infraestructura tecnológica", description: "Diagnóstico, diseño y soporte de infraestructura para continuidad operativa.", icon: Network },
      { title: "AUTO Automatización de procesos", description: "Flujos digitales para reducir tareas manuales, errores, tiempos muertos y retrabajos.", icon: Cpu },
      { title: "BI Dashboards y Business Intelligence", description: "Tableros ejecutivos con indicadores claros para seguimiento operativo y financiero.", icon: Layout },
      { title: "WEB Desarrollo web", description: "Sitios, portales y plataformas web modernas orientadas a negocio y crecimiento.", icon: Layout },
      { title: "APP Aplicaciones móviles", description: "Apps para captura, consulta, evidencia en campo y operación remota.", icon: Smartphone },
      { title: "365 Microsoft 365", description: "Soluciones con Power Automate, SharePoint, Power Apps, Teams y ecosistema Microsoft.", icon: Share2 },
      { title: "AI Inteligencia Artificial aplicada a negocios", description: "Automatización inteligente, extracción de datos, asistentes y análisis apoyado en IA.", icon: Cpu },
      { title: "DB Bases de datos", description: "Modelado, administración, consultas, integración y optimización de datos empresariales.", icon: Database },
      { title: "INT Integraciones empresariales", description: "Conexión entre sistemas, APIs, bases de datos y plataformas de terceros.", icon: Cloud }
    ],
    processes: [
      { number: 1, title: "Levantamiento de requerimientos", description: "Entendimiento de necesidades, dolores operativos, alcance y objetivos del proyecto." },
      { number: 2, title: "Análisis del negocio", description: "Revisión de procesos, datos, usuarios, volumen operativo y oportunidades de mejora." },
      { number: 3, title: "Diseño de solución", description: "Definición de arquitectura, pantallas, flujos, datos, integraciones y experiencia del usuario." },
      { number: 4, title: "Desarrollo", description: "Construcción de la solución con entregables funcionales, iterativos y alineados al alcance." },
      { number: 5, title: "Pruebas y validación", description: "Revisión funcional, validación de reglas, calidad de datos y escenarios operativos." },
      { number: 6, title: "Implementación", description: "Puesta en marcha controlada con ajustes necesarios para asegurar continuidad operativa." },
      { number: 7, title: "Capacitación", description: "Transferencia de conocimiento a usuarios clave mediante guías, sesiones y acompañamiento." },
      { number: 8, title: "Soporte y mejora continua", description: "Seguimiento posterior, ajustes evolutivos y optimización basada en uso real." }
    ],
    features: [
      { title: "⏱ Reducción de tiempos operativos", description: "Procesos más ágiles con menor dependencia manual." },
      { title: "▣ Centralización de información", description: "Datos unificados para operación, control y consulta." },
      { title: "⚙ Automatización de tareas repetitivas", description: "Flujos que eliminan actividades manuales y duplicadas." },
      { title: "◎ Mejor toma de decisiones", description: "Indicadores claros para decisiones oportunas." },
      { title: "$ Mayor control financiero", description: "Seguimiento de costos, ventas, nóminas y rentabilidad." },
      { title: "↗ Escalabilidad", description: "Soluciones preparadas para crecer con el negocio." },
      { title: "☁ Acceso remoto", description: "Consulta y operación desde ubicaciones externas." },
      { title: "▲ Incremento de productividad", description: "Equipos enfocados en actividades de mayor valor." },
      { title: "RT Visualización en tiempo real", description: "KPIs y tableros actualizados para monitoreo ejecutivo." }
    ],
    projects: [
      {
        title: "Cliente: GERPRESS",
        description: "Se estandarizó la información que tenía el cliente, se centralizó y se desarrolló un dashboard en Power BI para el seguimiento de ventas y nóminas.",
        metrics: ["Información estandarizada", "Centralización de datos", "Seguimiento de ventas", "Control de nóminas", "Visualización BI"]
      },
      {
        title: "Cliente: Avalúos Cano",
        description: "Se desarrolló una aplicación móvil para la toma de evidencia en campo y almacenamiento en un repositorio en la nube con acceso remoto.",
        metrics: ["Captura: Evidencia desde campo", "Validación: Datos mínimos completos", "Nube: Respaldo y acceso remoto", "Consulta: Seguimiento administrativo"]
      }
    ],
    technologies: [
      { name: "Power BI", logo: "https://1000marcas.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo-2013.png", description: "Visualización ejecutiva y analítica de datos." },
      { name: "SQL Server", logo: "https://img.icons8.com/color/48/microsoft-sql-server.png", description: "Bases de datos empresariales relacionales." },
      { name: "PostgreSQL", logo: "https://img.icons8.com/color/48/postgreesql.png", description: "Gestión robusta de datos y aplicaciones." },
      { name: "Firebase", logo: "https://img.icons8.com/color/48/firebase.png", description: "Backend, autenticación y servicios móviles." },
      { name: "Azure", logo: "https://img.icons8.com/color/48/azure-1.png", description: "Servicios cloud e infraestructura escalable." },
      { name: "OpenAI", logo: "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png", description: "IA aplicada a procesos y análisis." },
      { name: "Python", logo: "https://img.icons8.com/color/48/python--v1.png", description: "Automatización, datos e integraciones." },
      { name: "UiPath", logo: "https://img.icons8.com/color/48/uipath.png", description: "Automatización robótica de procesos empresarial." },
      { name: "Power Automate", logo: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/microsoft-power-automate-logo-icon-hd.png", description: "Flujos de trabajo y automatización de Microsoft." },
      { name: "React", logo: "https://img.icons8.com/color/48/react-native.png", description: "Interfaces web modernas." },
      { name: "Next.js", logo: "https://img.icons8.com/color/48/nextjs.png", description: "Aplicaciones web de alto rendimiento." },
      { name: "Microsoft 365", logo: "https://images.seeklogo.com/logo-png/62/2/microsoft-365-copilot-logo-png_seeklogo-621257.png", description: "Productividad, colaboración y automatización." }
    ]
  },
  {
    id: "analisis-procesos",
    title: "Análisis y Mejora de Procesos",
    slogan: "Convertimos procesos complejos en flujos claros, eficientes y listos para evolucionar.",
    description: "Analizamos cómo opera tu negocio hoy para identificar oportunidades de mejora, estandarizar actividades y preparar tus procesos para la automatización.",
    fullDescription: "Nuestro enfoque permite tomar decisiones con información real del proceso. Medimos tiempos, volumen, capacidad, retrabajos y esfuerzo operativo para identificar oportunidades con impacto tangible. Analizamos cómo opera tu negocio hoy para identificar oportunidades de mejora, reducir retrabajos, estandarizar actividades y preparar tus procesos para futuras soluciones tecnológicas, digitales o automatizadas.",
    icon: Search,
    metricsTitle: "Indicadores de Análisis",
    metrics: [
      { value: "Tiempos", label: "Tiempo invertido en cada actividad" },
      { value: "Capacidad", label: "Carga de trabajo vs disponibilidad" },
      { value: "Volumen", label: "Frecuencia de casos procesados" },
      { value: "Retrabajos", label: "Errores y pasos innecesarios" },
      { value: "Riesgos", label: "Puntos críticos y dependencias" },
      { value: "Potencial", label: "Actividades para automatizar" },
      { value: "Ahorro", label: "Horas recuperables al mejorar" },
      { value: "Prioridad", label: "Iniciativas por impacto y beneficio" }
    ],
    categories: [
      { title: "Mapeo de procesos", description: "Documentación visual del flujo actual para identificar actividades, responsables y puntos críticos.", icon: Network },
      { title: "Análisis de capacidad", description: "Evaluación de carga de trabajo y disponibilidad para determinar la capacidad real del equipo.", icon: Database },
      { title: "Riesgos y RPA", description: "Identificación de cuellos de botella y oportunidades claras para automatizar o mejorar.", icon: Cpu },
      { title: "Toma de tiempos", description: "Medición precisa del tiempo requerido para cuantificar el esfuerzo e impacto potencial.", icon: Clock },
      { title: "Estandarización", description: "Definición de criterios, pasos y reglas comunes para asegurar la consistencia operativa.", icon: ClipboardList },
      { title: "Documentación formal", description: "Creación de SOPs, flujos y materiales de soporte con controles clave de calidad.", icon: FileText },
      { title: "Valor de Automatización", description: "Evaluación del impacto potencial en términos de ahorro, reducción de errores y escalabilidad.", icon: Zap }
    ],
    features: [
      { title: "Listos para automatización", description: "Preparamos la operación para implementar soluciones RPA, IA o herramientas digitales avanzadas." },
      { title: "Base para software", description: "Identificamos necesidades reales antes de desarrollar sistemas, ERPs personalizados o plataformas web." },
      { title: "Claridad en infraestructura", description: "Ayudamos a definir el soporte físico, red, servidores y equipos que el proceso requiere." },
      { title: "Decisiones basadas en datos", description: "Convertimos la operación diaria en información útil para justificar mejoras y priorizar proyectos." },
      { title: "Reducción de errores", description: "Estandarizamos la forma de trabajar para disminuir variaciones, duplicidad y dependencia individual." },
      { title: "Mayor eficiencia operativa", description: "Simplificamos actividades para que los equipos trabajen con mayor enfoque, control y productividad." }
    ]
  },
  {
    id: "infraestructura-red",
    title: "Infraestructura de Red",
    description: "Diseño e implementación de arquitecturas de red robustas y escalables.",
    fullDescription: "Diseñamos e implementamos la infraestructura de red que tu negocio necesita hoy, considerando el crecimiento del mañana. Conectamos equipos, sistemas y usuarios mediante una arquitectura de red clara, documentada y basada en estándares.",
    icon: Network,
    features: [
      { title: "Topología de red", description: "Visualizamos y optimizamos la arquitectura LAN, WAN y Wi-Fi para eliminar puntos de falla y saturación." },
      { title: "Configuración de activos", description: "Switches, routers y access points configurados con VLANs, ACLs y QoS para máximo rendimiento." },
      { title: "Cableado estructurado", description: "Instalación física confiable, etiquetado profesional y trazabilidad total de la infraestructura." },
      { title: "Documentación técnica", description: "Diagramas, tablas de direccionamiento y guías de soporte para un control administrativo total." }
    ],
    projects: [
      { title: "Red Corporativa Gerpress", description: "Repositorio de datos y arquitectura de red de alta disponibilidad dividida en fases para escalabilidad ordenada." },
      { title: "Optimización Avalúos Cano", description: "Configuración personalizada de equipos de red para garantizar el intercambio seguro de información entre nodos." }
    ]
  },
  {
    id: "software",
    title: "Software y Soluciones Digitales",
    slogan: "Herramientas de alto rendimiento diseñadas para escalar tu operación.",
    description: "Desarrollo de ecosistemas digitales, plataformas web, aplicaciones móviles y arquitecturas cloud a la medida de tus objetivos de negocio.",
    fullDescription: "En HERMAR Business Solutions no vendemos cajas cerradas ni plantillas genéricas. Desarrollamos software a la medida con arquitecturas modernas y escalables que resuelven cuellos de botella específicos. Desde la conceptualización UX/UI hasta el despliegue en la nube, construimos ecosistemas digitales que se adaptan a tu proceso, permitiendo una transición digital fluida hacia una operación más inteligente y rentable.",
    icon: Layout,
    metricsTitle: "Impacto del Software",
    metrics: [
      { value: "99.9%", label: "Uptime y Alta Disponibilidad" },
      { value: "-40%", label: "Tiempo de comercialización" },
      { value: "100%", label: "Propiedad del Código" },
      { value: "+50%", label: "Adopción por parte del usuario" }
    ],
    categories: [
      { title: "Portales Corporativos B2B", description: "Desarrollo de interfaces web seguras para gestión de proveedores, clientes e información ejecutiva.", icon: Layout },
      { title: "Plataformas E-commerce", description: "Soluciones robustas para ventas en línea, catálogos digitales y pasarelas de pago integradas.", icon: Smartphone },
      { title: "Sistemas ERP a la medida", description: "Arquitecturas alineadas exactamente a tus reglas de negocio sin costos de licencias por usuario.", icon: Database },
      { title: "Gestión Inteligente de Inventarios", description: "Plataformas para control de stock en tiempo real, trazabilidad de producto y cálculos de venta.", icon: ClipboardList },
      { title: "Aplicaciones Móviles Nativas", description: "Desarrollo iOS y Android para fuerza de ventas, operación en campo y control logístico.", icon: Smartphone },
      { title: "Arquitectura Cloud & APIs", description: "Infraestructuras escalables (AWS/Azure) y conexión de plataformas (CRM, SAP) para eliminar silos de información.", icon: Cloud }
    ],
    processes: [
      { number: 1, title: "Descubrimiento y Arquitectura", description: "Análisis profundo de requerimientos técnicos, viabilidad y definición de la arquitectura óptima." },
      { number: 2, title: "Diseño UX/UI", description: "Creación de wireframes y prototipos interactivos enfocados en una experiencia de usuario impecable." },
      { number: 3, title: "Desarrollo Ágil", description: "Programación en ciclos iterativos que permiten entregas tempranas y visibilidad constante del progreso." },
      { number: 4, title: "QA y Pruebas", description: "Validación de seguridad, rendimiento bajo carga y eliminación de bugs antes de salir a producción." },
      { number: 5, title: "Despliegue Cloud", description: "Puesta en producción en infraestructuras seguras, escalables y configuradas para alta disponibilidad." },
      { number: 6, title: "Soporte y Evolución", description: "Monitoreo continuo, mantenimiento preventivo y desarrollo de nuevas funcionalidades alineadas al negocio." }
    ],
    features: [
      { title: "Arquitectura Moderna", description: "Construimos sobre frameworks de última generación para asegurar velocidad y longevidad." },
      { title: "Interfaces Intuitivas (UX)", description: "Diseño enfocado en la facilidad de uso para reducir drásticamente la curva de aprendizaje." },
      { title: "Seguridad por Diseño", description: "Protección de datos críticos con estándares modernos de encriptación y control de accesos." },
      { title: "Escalabilidad Cloud", description: "Sistemas elásticos preparados para crecer automáticamente junto con tu volumen operativo." },
      { title: "Ecosistema Conectado", description: "APIs robustas que integran el nuevo software con tus herramientas empresariales actuales." },
      { title: "Transparencia Total", description: "Acceso a repositorios, entornos de prueba y reportes durante todo el ciclo de desarrollo." }
    ],
    technologies: [
      { name: "React / Next.js", logo: "https://img.icons8.com/color/48/nextjs.png", description: "Interfaces web ultrarrápidas y reactivas." },
      { name: "Node.js", logo: "https://img.icons8.com/color/48/nodejs.png", description: "Backends escalables y orientados a eventos." },
      { name: "PostgreSQL", logo: "https://img.icons8.com/color/48/postgreesql.png", description: "Bases de datos relacionales robustas y seguras." },
      { name: "AWS", logo: "https://img.icons8.com/color/48/amazon-web-services.png", description: "Infraestructura cloud de clase mundial." },
      { name: "Docker", logo: "https://img.icons8.com/color/48/docker.png", description: "Contenedores para despliegues consistentes." },
      { name: "TypeScript", logo: "https://img.icons8.com/color/48/typescript.png", description: "Código seguro y estructurado para empresas." }
    ],
    projects: [
      {
        title: "Portal B2B Comercial",
        description: "Plataforma de autogestión para clientes con integración en tiempo real al ERP para consulta de inventario, historial y pedidos.",
        metrics: ["Sincronización ERP", "Catálogo dinámico", "Cotización automática"],
        mockup: "/screencapture-vexa.png"
      },
      {
        title: "App Logística en Ruta",
        description: "App móvil para escaneo de inventario, ruteo inteligente y confirmación de entregas con firmas y coordenadas.",
        metrics: ["Escaneo de códigos", "Ubicación GPS", "Modo offline soportado"],
        mockup: "/screencapture-by-chino.png"
      }
    ],
    beforeAfters: [
      {
        title: "Pantalla Principal",
        beforeImage: "/before 1.png",
        afterImage: "/after 1.png"
      },
      {
        title: "Vista de Detalle",
        beforeImage: "/before 2.png",
        afterImage: "/after 2.png"
      }
    ]
  }
];

export const GLOBAL_METRICS = [
  { value: "99%", label: "Precisión en el procesamiento de datos" },
  { value: "10x", label: "Aceleración en ciclos operativos contables" },
  { value: "24/7", label: "Disponibilidad de procesos robotizados" }
];

export const TECH_STACK = ["Python", "SAP", "Excel Avanzado", "Puppeteer", "Web Automation", "SQL Databases", "RPA Solutions"];
