import tresPLogo from '../assets/logos_colaboradores/3P.jpeg'
import alimentosCentenarioLogo from '../assets/logos_colaboradores/alimentos-centenario.png'
import cadeLogo from '../assets/logos_colaboradores/CADE.svg'
import cedLogo from '../assets/logos_colaboradores/CED.png'
import claehLogo from '../assets/logos_colaboradores/CLAEH.png'
import ecijaLogo from '../assets/logos_colaboradores/ECIJA.jpeg'
import fundacionCulturaUniversitariaLogo from '../assets/logos_colaboradores/fundacion-de-cultura-universitaria.png'
import hogarItalianoLogo from '../assets/logos_colaboradores/Hogar Italiano.jpeg'
import kroserLogo from '../assets/logos_colaboradores/Kroser.png'
import macromercadoLogo from '../assets/logos_colaboradores/Macromercado.jpg'
import reclamaxLogo from '../assets/logos_colaboradores/reclamax.png'
import residencialUmpierrezLogo from '../assets/logos_colaboradores/Residencial Umpiérrez.jpeg'
import barocelliPhoto from '../assets/fotos_expositores/Barocelli.jpg'
import bertoncelloPhoto from '../assets/fotos_expositores/Bertoncello.jpg'
import mansillaPhoto from '../assets/fotos_expositores/Mansilla.jpeg'
import rodriguezPhoto from '../assets/fotos_expositores/Rodríguez.jpg'
import salazarPhoto from '../assets/fotos_expositores/Salazar.jpg'
import szafirPhoto from '../assets/fotos_expositores/Szafir-Dora-1web-1-e1582130949263.jpg'
import tambussiPhoto from '../assets/fotos_expositores/tambussi.jpg'
import traboulsiPhoto from '../assets/fotos_expositores/Traboulsi.jpeg'
import noticia2Image from '../assets/noticia2.jpg'

export const externalLinks = {
  affiliationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSft0FmmnvPZSskVHROxAt4_KieQb3wmrXr6OdGZnXE6Z36poA/viewform',
  instagram: 'https://www.instagram.com/aucu.uy/',
  tiktok: 'https://www.tiktok.com/@aucu64?_r=1&_t=ZS-98uIJ3J4Kkm',
  whatsappChannel: 'https://whatsapp.com/channel/0029VbDTIkiCsU9IwisZyp47',
  x: 'https://x.com/aucuuy?s=11',
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
    id: 'noticia-2',
    date: '30 de noviembre de 2026',
    title: 'Concurso Internacional Colección: Perspectivas Jurídicas Contemporáneas',
    text: 'Convocatoria abierta a docentes, investigadores y profesionales de las ciencias jurídicas.',
    images: [
      {
        src: noticia2Image,
        alt: 'Concurso Internacional Colección: Perspectivas Jurídicas Contemporáneas',
        href: 'https://fcu.edu.uy/coleccionperspectivasjuridicas?utm_source=ActiveCampaign&utm_medium=email&utm_content=Concurso%20Internacional%20Colecci%C3%B3n%3A%20Perspectivas%20Jur%C3%ADdicas%20Contempor%C3%A1neas%20%F0%9F%93%9A&utm_campaign=SEMANA%20ACAD%C3%89MICA%20DE%20DERECHO%20COMERCIAL%20%28Duplicar%29&vgo_ee=AuWWzOO4QRRaiyMD6I%2Fph4L8Uhf8ASU%2BBSJgLGKa50enbA%3D%3D%3AviiA%2BoMsUKWzuA19zJCpn0C%2B77R3%2BoAa',
        portrait: true,
      },
    ],
  },
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
  dateLabel: '22 al 24 de octubre de 2026',
  location: {
    venue: 'Sedes por día',
    city: 'Montevideo y Punta del Este',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Salon%20de%20Eventos%20Especiales%20Palacio%20Legislativo%20Gral.%20Flores%20Montevideo%20Uruguay',
    mapEmbedUrl: 'https://www.google.com/maps?q=Salon%20de%20Eventos%20Especiales%20Palacio%20Legislativo%20Gral.%20Flores%20Montevideo%20Uruguay&output=embed',
    locations: [
      {
        id: 'palacio-legislativo',
        date: '22 de octubre',
        venue: 'Salón de Eventos Especiales',
        address: 'Palacio Legislativo. Ingreso por Gral. Flores.',
        mapUrl:
          'https://www.google.com/maps/search/?api=1&query=Salon%20de%20Eventos%20Especiales%20Palacio%20Legislativo%20Gral.%20Flores%20Montevideo%20Uruguay',
        mapEmbedUrl:
          'https://www.google.com/maps?q=Salon%20de%20Eventos%20Especiales%20Palacio%20Legislativo%20Gral.%20Flores%20Montevideo%20Uruguay&output=embed',
      },
      {
        id: 'claeh-montevideo',
        date: '23 de octubre',
        venue: 'Universidad CLAEH',
        address: 'Mercedes 1776.',
        mapUrl:
          'https://www.google.com/maps/search/?api=1&query=Universidad%20CLAEH%20Mercedes%201776%20Montevideo%20Uruguay',
        mapEmbedUrl:
          'https://www.google.com/maps?q=Universidad%20CLAEH%20Mercedes%201776%20Montevideo%20Uruguay&output=embed',
      },
      {
        id: 'punta-del-este',
        date: '24 de octubre',
        venue: 'Jornada académica en Punta del Este',
        city: 'Punta del Este, Maldonado',
      },
    ],
  },
  intro:
    'Tres días de intercambio, formación y cooperación regional que reunieron a más de 150 participantes en Montevideo y Punta del Este.',
  stats: [
    { value: '3', label: 'días' },
    { value: '+150', label: 'participantes' },
    { value: '4', label: 'países representados' },
    { value: '2', label: 'ciudades' },
  ],
  balance: {
    lead:
      'Durante los días 22, 23 y 24 de octubre, profesionales, autoridades, estudiantes y personas interesadas en la defensa de los consumidores compartieron conocimientos y experiencias de Uruguay, Argentina, Brasil y El Salvador.',
    conclusion:
      'La diversidad de los temas, la calidad de las exposiciones y la cooperación entre instituciones permitieron consolidar un espacio regional de formación y reflexión sobre los desafíos actuales de las relaciones de consumo.',
    page: '/jornadas/balance-2026',
    pdf: '/assets/balance-jornadas-2026.pdf',
    days: [
      {
        date: '22 de octubre',
        title: 'Apertura, sobreendeudamiento y nuevas tecnologías',
        text:
          'La jornada inaugural se realizó en el Palacio Legislativo. Reunió a autoridades y especialistas para abordar el sobreendeudamiento, las fintech y los riesgos de la contratación digital para niñas, niños y adolescentes.',
      },
      {
        date: '23 de octubre',
        title: 'Comercio electrónico, salud, accesibilidad e inteligencia artificial',
        text:
          'En la Universidad CLAEH se desarrollaron paneles sobre plataformas digitales, derechos de los usuarios de servicios de salud, el rol del Estado, accesibilidad tecnológica e inteligencia artificial aplicada a las relaciones de consumo.',
      },
      {
        date: '24 de octubre',
        title: 'Nuevos desafíos del Derecho del Consumo',
        text:
          'Las actividades continuaron en Punta del Este con un encuentro académico organizado por AUCU y la Facultad de Derecho de la Universidad CLAEH. La actividad fue declarada de interés departamental por la Junta Departamental de Maldonado.',
      },
    ],
  },
  agenda: [
    {
      date: 'Jueves 22 de octubre',
      title: 'Primer día',
      locationId: 'palacio-legislativo',
      items: [
        {
          time: '18:00',
          title: 'Himno Nacional / Coro',
          description: '',
        },
        {
          time: '18:20 – 19:00',
          title: 'Mesa de apertura',
          description:
            'Suprema Corte de Justicia · Asociación de Magistrados del Uruguay · Unidad de Defensa del Consumidor · Asociación Uruguaya de Consumidores',
        },
        {
          time: '19:00 – 19:20',
          title: 'Corte',
          description: '',
        },
        {
          time: '19:20 – 21:00',
          title: 'Sobreendeudamiento y Fintech',
          description:
            'Cra. Elisa Vaccaro 🇺🇾: ¿Usura legal? · Dra. Paula Rodríguez 🇦🇷: IA, arquitectura persuasiva e hipervulnerabilidad digital en infancias y adolescentes consumidores. · Dra. Karen Bertoncello 🇧🇷: Tratamiento del sobreendeudamiento en el Poder Judicial brasileño. · Dra. Dora Szafir 🇺🇾: Sobreendeudados, ¿atrapados sin salida?',
        },
      ],
    },
    {
      date: 'Viernes 23 de octubre',
      title: 'Segundo día',
      locationId: 'claeh-montevideo',
      items: [
        {
          time: '9:30 – 11:00',
          title: 'Comercio Electrónico / Plataformas Digitales',
          description:
            'Dra. María Jimena Mansilla 🇦🇷: Publicidad de influencers e inteligencia artificial. Desafíos regulatorios. · Dr. Esc. Gabriel Arias 🇺🇾: Obligaciones y responsabilidades de las plataformas digitales frente a los consumidores. · Dr. Carlos Tambussi 🇦🇷: Comercio electrónico y plataformas de venta. · Dra. Beatriz Rodríguez 🇺🇾: Después del clic, ¿quién responde en la nueva relación de consumo digital?',
        },
        {
          time: '11:00 – 11:15',
          title: 'Corte',
          description: '',
        },
        {
          time: '11:15 – 12:45',
          title: 'Protección del Usuario de Servicios de Salud',
          description:
            'Dr. Ricardo Voelker 🇺🇾: El valor del tiempo para el paciente. · Dr. Carlos Delpiazzo 🇺🇾: La responsabilidad médica a la luz de los principios fundamentales de defensa del consumidor. · Dr. Fernando Tobagliare 🇺🇾: Reflexiones sobre el consentimiento informado en la responsabilidad civil. · Dr. Francisco Majó 🇺🇾: Seguridad y la historia clínica electrónica.',
        },
        {
          time: '18:00 – 19:15',
          title: 'Rol del Estado en la Protección del Consumidor',
          description:
            'Esc. Alejandro Guerrero 🇺🇾: Innovar para incluir. · Dr. Ricardo Salazar 🇸🇻: Acciones estratégicas para expandir la protección al consumidor en El Salvador. · Dr. Carlos Traboulsi 🇦🇷: Deudores morosos. Ausencia estatal.',
        },
        {
          time: '19:15 – 19:40',
          title: 'Corte',
          description: '',
        },
        {
          time: '19:40 – 20:45',
          title: 'Inteligencia Artificial',
          description:
            'Ing. Mariel Feder 🇺🇾: Inteligencia artificial. Qué es y cómo nos va a cambiar. · Dr. Sebastián Barocelli 🇦🇷: Desafíos del mercado de consumo frente a la IA. · Dr. Ricardo Salazar 🇸🇻: Gobernanza digital y servicios seguros. Defensoría del Consumidor en El Salvador. · Juan Pablo de Marco 🇺🇾: Funciones y riesgos en ChatGPT y otras herramientas en el comercio.',
        },
        {
          time: '20:45 – 21:00',
          title: 'Cierre',
          description: '',
        },
      ],
    },
    {
      date: 'Sábado 24 de octubre',
      title: 'Tercer día',
      locationId: 'punta-del-este',
      items: [
        {
          title: 'Contratar y decidir en el entorno digital',
          description:
            'Dr. Carlos Tambussi 🇦🇷 · Dra. María Jimena Mansilla 🇦🇷 · Dr. Sebastián Barocelli 🇦🇷',
        },
        {
          title: 'Fintech y sobreendeudamiento',
          description: 'Dra. Paula Rodríguez 🇦🇷 · Dr. Álvaro Fuentes 🇺🇾',
        },
      ],
    },
  ],
  gallery: [],
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
      name: 'Dra. Paula Eugenia Rodríguez',
      country: 'Argentina',
      flag: '🇦🇷',
      description:
        'Maestranda en Negocios Internacionales-MBA (UCES) y especialista en Magistratura (UNLaM). Profesora de grado y posgrado en UBA, USAL e IUPFA, investigadora adscripta al Instituto Gioja e integrante del Instituto Argentino de Derecho del Consumidor. Actualmente se desempeña en la Secretaría General de Relaciones de Consumo del Ministerio Público de la Defensa de CABA.',
      photo: rodriguezPhoto,
    },
    {
      name: 'Dra. María Jimena Mansilla',
      country: 'Argentina',
      flag: '🇦🇷',
      description:
        'Maestranda en Magistratura, especialista en Administración de Justicia y posgraduada en Derecho del Consumidor. Docente de grado y posgrado en UBA y USAL, coordinadora de la Diplomatura en Derecho del Consumidor de USAL e integrante del Instituto Gioja y del Instituto Argentino de Derecho del Consumidor. Actualmente trabaja en el Departamento de Estudios en Derecho del Consumo del Ministerio Público de la Defensa de CABA.',
      photo: mansillaPhoto,
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
      name: 'Dr. Carlos Lionel Traboulsi',
      country: 'Argentina',
      flag: '🇦🇷',
      description:
        'Abogado; diplomado en Relaciones Internacionales; ex Director General de Defensa y Protección al Consumidor de CABA; vicepresidente de Defensa y Protección al Consumidor de la Organización Demócrata Cristiana de América (ODCA); fundador y presidente de Fundación Argentina Azul.',
      photo: traboulsiPhoto,
    },
    {
      name: 'Lic. Ricardo Salazar',
      country: 'El Salvador',
      flag: '🇸🇻',
      description:
        'Economista por la Universidad José Simeón Cañas (UCA, 2001), con maestría en Administración Pública por la Universidad Dr. José Matías Delgado y especialización en Regulación de Mercado. Cuenta con más de 25 años de experiencia en protección al consumidor y regulación de mercados en El Salvador, con distintos cargos en la Defensoría del Consumidor y el Banco Central de Reserva. Ha representado a El Salvador en organismos internacionales de defensa del consumidor, presidiendo el FIAGC, el Comité de Gestión de la RCSS y el CONCADECO.',
      photo: salazarPhoto,
    },
  ],
  supports: [
    { name: 'Reclamax', logo: reclamaxLogo, url: 'https://reclamax.uy' },
    { name: 'CADE', logo: cadeLogo },
    { name: 'Alimentos Centenario', logo: alimentosCentenarioLogo },
    { name: 'Fundación de Cultura Universitaria', logo: fundacionCulturaUniversitariaLogo },
    { name: 'Macromercado', logo: macromercadoLogo },
    { name: 'Kroser', logo: kroserLogo },
    { name: 'ECIJA', logo: ecijaLogo },
    { name: '3P', logo: tresPLogo },
    { name: 'CED', logo: cedLogo },
    { name: 'CLAEH Universidad', logo: claehLogo },
    { name: 'Hogar Italiano', logo: hogarItalianoLogo },
    { name: 'Residencial Umpiérrez', logo: residencialUmpierrezLogo },
  ],
}
