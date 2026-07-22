import alimentosCentenarioLogo from '../assets/logos_colaboradores/alimentos-centenario.png'
import cadeLogo from '../assets/logos_colaboradores/CADE.svg'
import fundacionCulturaUniversitariaLogo from '../assets/logos_colaboradores/fundacion-de-cultura-universitaria.png'
import reclamaxLogo from '../assets/logos_colaboradores/reclamax.png'
import barocelliPhoto from '../assets/fotos_expositores/Barocelli.jpg'
import bertoncelloPhoto from '../assets/fotos_expositores/Bertoncello.jpg'
import martinaRojoPhoto from '../assets/fotos_expositores/martina-rojo___6266ad62e7f395001bd56bc9.png'
import muinoPhoto from '../assets/fotos_expositores/muino.jpg'
import szafirPhoto from '../assets/fotos_expositores/Szafir-Dora-1web-1-e1582130949263.jpg'
import tambussiPhoto from '../assets/fotos_expositores/tambussi.jpg'
import traboulsiPhoto from '../assets/fotos_expositores/Traboulsi.jpeg'

export const externalLinks = {
  affiliationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSft0FmmnvPZSskVHROxAt4_KieQb3wmrXr6OdGZnXE6Z36poA/viewform',
  instagram: 'https://www.instagram.com/aucu.uy/',
  whatsappChannel: 'https://whatsapp.com/channel/0029VbDTIkiCsU9IwisZyp47',
}

export const assets = {
  logo: '/assets/logo-aucu.svg',
  banner: '/assets/banner-jornadas.png',
}

export const organization = {
  name: 'AUCU',
  fullName: 'Asociación Uruguaya de Consumidores Unidos',
  tagline: 'Consumidores informados y organizados.',
  mission:
    'Promover, defender y representar los derechos de los consumidores en Uruguay, impulsando información clara, participación ciudadana y prácticas responsables.',
  vision:
    'Ser una referencia nacional en educación, incidencia y articulación social para construir relaciones de consumo más justas y transparentes.',
  whoWeAre:
    'Somos una asociación civil uruguaya orientada a reunir consumidores, profesionales y aliados institucionales para fortalecer la defensa colectiva de derechos.',
  whatWeDo: [
    'Educación y difusión sobre derechos de consumidores.',
    'Jornadas, espacios académicos y actividades abiertas.',
    'Articulación con instituciones públicas, privadas y sociales.',
    'Orientación inicial y promoción de buenas prácticas de consumo.',
  ],
  affiliation:
    'Participá y acompañá el crecimiento de AUCU.',
  whatsappChannel:
    'Unite a nuestro canal de WhatsApp para recibir novedades, actividades y comunicaciones de AUCU de forma directa.',
  boardPeriod: '2026 - 2029',
  boardMembers: [
    { name: 'Dra. Dora Szafir', role: 'Presidenta' },
    { name: 'Esc. Alejandro Guerrero', role: 'Secretario' },
    { name: 'Genaro Stack', role: 'Vicepresidente' },
    { name: 'Cra. Elisa Vaccaro', role: 'Tesorera' },
    { name: 'Dra. Marina Sperindé', role: 'Vocal' },
  ],
}

// Agregá cada novedad nueva al comienzo de esta lista para que aparezca primero.
// Las imágenes se guardan en public/assets/novedades/ y se referencian desde
// aquí como "/assets/novedades/nombre-del-archivo.jpg".
export const newsPosts = [
  {
    id: 'proteccion-deudores-bajos-recursos',
    date: '26 de junio de 2026',
    title: 'AUCU fue recibido por la Comisión de Hacienda de la Cámara de Representantes para el análisis del proyecto de ley de Protección de Deudores de Bajos Recursos',
    text: `Fuimos recibidos por la Comisión de Hacienda de la Cámara de Representantes para el análisis del proyecto de ley de Protección de Deudores de Bajos Recursos.

Algunos datos del diagnóstico que presentamos:
📌 Más de 1 millón de uruguayos están en el Clearing de Informes.
📌 Más de 600.000 están en categorías 4 o 5 del Banco Central.
📌 Una deuda de $27.000 puede crecer a $1.341.000 en 7 años — sin violar la ley de usura vigente.

El problema no es la irresponsabilidad de los deudores. Es un sistema donde los intereses capitalizan mensualmente y la tasa de mora la fijan los propios acreedores.

El proyecto protege a familias con ingresos menores a $80.000/mes que cayeron en deuda por causas ajenas a su voluntad: enfermedad, pérdida de empleo, pandemia.

Apoyamos la iniciativa. Y señalamos lo que falta: atacar la capitalización mensual y dotar de recursos reales al organismo de control UDECO.

El debate del sobreendeudamiento viene desde 2007. Esperar más no es una opción — es una decisión política con consecuencias reales para quienes hoy no pueden pagar el alquiler, no acceden a crédito, y no tienen salida.`,
    images: [
      {
        src: '/assets/novedades/noticia1.1.jpeg',
        alt: 'AUCU ante la Comisión de Hacienda de la Cámara de Representantes',
      },
      {
        src: '/assets/novedades/noticia1.2.jpeg',
        alt: 'Presentación de AUCU sobre la protección de deudores de bajos recursos',
      },
      {
        src: '/assets/novedades/noticia1.3.jpeg',
        alt: 'Reunión por el proyecto de ley de Protección de Deudores de Bajos Recursos',
      },
    ],
  },
]

export const event = {
  title: 'II Jornadas Internacionales de Defensa del Consumidor',
  dateLabel: '22 y 23 de octubre',
  targetDate: '2026-10-22T18:00:00-03:00',
  location: {
    venue: 'Sala Acuña de Figueroa',
    city: 'Montevideo, Uruguay',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sala%20Acuna%20de%20Figueroa%20Palacio%20Legislativo%20Montevideo%20Uruguay',
    mapEmbedUrl: 'https://www.google.com/maps?q=Sala%20Acuna%20de%20Figueroa%20Palacio%20Legislativo%20Montevideo%20Uruguay&output=embed',
  },
  intro:
    'Un encuentro para intercambiar perspectivas académicas, institucionales y ciudadanas sobre relaciones de consumo.',
  agenda: [
    {
      date: 'Jueves 22 de octubre',
      title: 'Primer día',
      items: [
        {
          time: '18:00',
          title: 'Himno Nacional',
          description: 'Coro del Sodre',
        },
        {
          time: '18:20 – 19:00',
          title: 'Mesa de apertura',
          description: 'Acto inaugural',
        },
        {
          time: '19:15 – 19:30',
          title: 'Corte',
          description: '',
        },
        {
          time: '19:45 – 21:00',
          title: 'Sobreendeudamiento y Fintech',
          description: 'Mesa temática',
        },
      ],
    },
    {
      date: 'Viernes 23 de octubre',
      title: 'Segundo día',
      items: [
        {
          time: '9:30 – 11:00',
          title: 'Comercio electrónico y plataformas digitales',
          description: 'Mesa temática',
        },
        {
          time: '11:00 – 11:15',
          title: 'Corte',
          description: '',
        },
        {
          time: '11:15 – 12:45',
          title: 'Protección del usuario de servicios de salud',
          description: 'Mesa temática',
        },
        {
          time: '',
          title: 'Receso · tarde libre',
          description: '',
        },
        {
          time: '18:00 – 19:00',
          title: 'El rol del Estado en la protección del consumidor',
          description: 'Mesa temática',
        },
        {
          time: '19:00 – 19:15',
          title: 'Corte',
          description: '',
        },
        {
          time: '19:15 – 20:45',
          title: 'Inteligencia Artificial',
          description: 'Mesa temática',
        },
        {
          time: '20:45 – 21:00',
          title: 'Cierre',
          description: 'Palabras finales',
        },
      ],
    },
  ],
  speakers: [
    {
      name: 'Dr. Carlos Eduardo Tambussi',
      country: 'Argentina',
      flag: '🇦🇷',
      description:
        'Juez de primera instancia de la Justicia en las Relaciones de Consumo de la Ciudad Autónoma de Buenos Aires. Profesor regular en la Facultad de Derecho de la Universidad de Buenos Aires (UBA). Autor de libros y artículos sobre derecho del consumidor en publicaciones nacionales y extranjeras.',
      photo: tambussiPhoto,
    },
    {
      name: 'Dr. Sebastián Barocelli',
      country: 'Argentina',
      flag: '🇦🇷',
      description:
        'Director de la carrera de Abogacía en la Universidad del Salvador (USAL) y profesor en la Universidad de Buenos Aires (UBA). Vicepresidente de la Asociación Internacional de Derecho del Consumidor (IACL) y ex Director Nacional de Defensa del Consumidor de Argentina.',
      photo: barocelliPhoto,
    },
    {
      name: 'Dra. Karen Bertoncello',
      country: 'Brasil',
      flag: '🇧🇷',
      description:
        'Jueza del Tribunal de Justiça de Rio Grande do Sul (TJRS), coordinadora del Núcleo de Gestión del Sobreendeudamiento y Doctora por la UFRGS.',
      photo: bertoncelloPhoto,
    },
    {
      name: 'Dra. Martina Rojo',
      country: 'Argentina',
      flag: '🇦🇷',
      description:
        'Profesora titular de Derecho Económico Internacional y directora de la carrera de Abogacía (Programa Franco-Argentino) en la Universidad del Salvador (USAL). Directora del Máster en Derecho de los Negocios Internacionales América Latina-Europa (Universidad Paris 1 Panthéon-Sorbonne, sede Argentina). Experta en Derecho Internacional del Consumidor, integra el Grupo de Expertos en Derecho y Política del Consumidor de la UNCTAD (ONU).',
      photo: martinaRojoPhoto,
    },
    {
      name: 'Dra. Dora Szafir',
      country: 'Uruguay',
      flag: '🇺🇾',
      description:
        'Profesora titular de Derecho Civil II y III en la Universidad de la Empresa, y ex profesora de Relaciones de Consumo en la Universidad de la República (hasta 2019). Ex jueza letrada en lo Civil y Presidenta de la Asociación Uruguaya de Consumidores Unidos (A.U.C.U.). Delegada en la elaboración de las leyes 17.250 (Relaciones de Consumo) y 18.507 (Pequeñas Causas), y autora de obras sobre responsabilidad médica, decenal y relaciones de consumo.',
      photo: szafirPhoto,
    },
    {
      name: 'Dr. Fernando M. Blanco Muiño',
      country: 'Argentina',
      flag: '🇦🇷',
      description:
        'Abogado (UBA) con posgrado en la Universidad de Salamanca (España). Profesor adjunto de Derecho Constitucional en la UBA y docente de posgrados en Derecho del Consumidor en universidades de Argentina y el exterior. Fue presidente de la Unión de Consumidores de Argentina, Director Nacional de Defensa del Consumidor (2015-2019) y representante ante la OCDE, la OEA y la UNCTAD, entre otros organismos internacionales. Desde el 10 de diciembre de 2023 es Subsecretario de Defensa del Consumidor y Lealtad Comercial de la Nación.',
      photo: muinoPhoto,
    },
    {
      name: 'Dr. Carlos Lionel Traboulsi',
      country: 'Argentina',
      flag: '🇦🇷',
      description:
        'Abogado; diplomado en Relaciones Internacionales; ex Director General de Defensa y Protección al Consumidor de CABA; vicepresidente de Defensa y Protección al Consumidor de la Organización Demócrata Cristiana de América (ODCA); fundador y presidente de Fundación Argentina Azul.',
      photo: traboulsiPhoto,
    },
  ],
  supports: [
    { name: 'Reclamax', logo: reclamaxLogo },
    { name: 'CADE', logo: cadeLogo },
    { name: 'Alimentos Centenario', logo: alimentosCentenarioLogo },
    { name: 'Fundación de Cultura Universitaria', logo: fundacionCulturaUniversitariaLogo },
  ],
}
