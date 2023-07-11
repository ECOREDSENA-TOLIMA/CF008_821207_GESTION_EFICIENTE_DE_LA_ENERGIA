export default {
  global: {
    componenteFormativo:
      'Caracterización del potencial energético aprovechable',
    descripcionCurso:
      'Este componente tratará sobre los instrumentos de medición energética más comunes, con los cuales medir las variables para controlar los procesos y determinar el potencial energético. Posteriormente se indicarán las herramientas para la evaluación del potencial de la energía fotovoltaica y la energía eólica en Colombia. Finalmente se mostrarán los principios básicos para el dimensionamiento de un sistema solar fotovoltaico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Instrumentos de medición energética',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Medición de presión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Medición de temperatura',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Medición de nivel',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Medición de radiación solar (piranómetros)',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Medición de velocidad y dirección del viento',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Características generales de los instrumentos de medición',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Calibración de los instrumentos de medición',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Potencial de los sistemas energéticos renovables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Potencial energético de la energía solar',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Potencial energético de la energía eólica',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Reducción de huella de carbono y energías renovables',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Dimensionamiento de un sistema de generación con fuentes renovables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipologías y equipos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Cálculo de la carga instalada y demanda de energía eléctrica',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sombreamiento, inclinación y orientación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ejemplo de Dimensionamiento',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Diseño por Simulación',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_008.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Medición de presión',
      referencia:
        'Galán, L. (2020). Cómo funciona un manómetro. Medida de la presión relativa. [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4dXwxFJPTg8',
    },
    {
      tema: 'Medición de temperatura',
      referencia:
        'WIKA Group (2019). ¿Cómo funciona una termorresistencia? [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dQJpTusWJHA',
    },
    {
      tema: 'Medición de temperatura',
      referencia:
        'WIKA Group (2019). ¿Cómo funciona un termopar? [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1wwAQNECC9A',
    },
    {
      tema: 'Medición de temperatura',
      referencia:
        'Ciencia UNAM. (2020).  Así funcionan los termómetros infrarrojos. [Video] YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=y-Ezb8Q5UW0',
    },
    {
      tema: 'Medición de nivel',
      referencia:
        'WIKA Group (2019). WIKA - Medición de nivel con sensor de flotador de cadena Reed. [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ujPcgh1JDLc',
    },
    {
      tema: 'Medición de nivel',
      referencia:
        'WIKA Group (201927). WIKA - Indicador de nivel con mirilla. [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zlaTXjhaISg',
    },
    {
      tema: 'Medición de nivel',
      referencia:
        'WIKA Group (2019). WIKA - Medición hidrostática de nivel con sensor de presión. [Video] YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YaSW_SIhe4E',
    },
    {
      tema: 'Medición de nivel',
      referencia:
        'VEGA Grieshaber KG (2020). ¿Radar vs ultrasonido - cual es la diferencia entre los dos principios de medición? [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Rq_EPoKHmgo',
    },
    {
      tema: 'Calibración de los instrumentos de medición',
      referencia:
        'Testo Argentina (2021). Certificados de calibración de equipos patrones. ',
      tipo: 'Archivo ejemplo certificado de calibración testo argentina.',
      link:
        'https://www.testo.com/es-AR/Certificados+de+calibraci%C3%B3n+de+equipos+patrones/certpat',
    },
    {
      tema: 'Tipología y equipos',
      referencia:
        'CIAE (s,f). ¿Cuáles son los Componentes de Sistemas Fotovoltaicos Autónomos? [Video] YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9FYhr60VFaU',
    },
    {
      tema: 'Tipología y equipos',
      referencia:
        'Novum Solar (2019). Sistema Fotovoltaico Conectado a Red - On Grid. [Video] YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8EiwNy0vVFI',
    },
  ],
  glosario: [
    {
      termino: 'Huella de carbono',
      significado:
        'Es el total de emisiones de gases de efecto invernadero causados por un individuo, organización, lugar o producto, expresado en toneladas de dióxido de carbono equivalente.',
    },
    {
      termino: 'Plan energético nacional',
      significado:
        'Documento elaborado por la Unidad de Planeación Minero-Energética donde se presentan algunas ideas sobre el desarrollo futuro del sector energético colombiano y sirven de base para los planes nacionales de expansión y transformación energética.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bayod Rújula, Á. A. (2009). Energías renovables: sistemas fotovoltaicos. Prensas de la Universidad de Zaragoza. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/41940',
    },
    {
      referencia:
        'Creus Sole, A. (2008). Instrumentación industrial (7a. ed.). Marcombo. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/45913',
    },
    {
      referencia:
        'Empresa de Energía de Boyacá - EBSA. (2019). Consumo de Electrodomésticos. ',
      link: 'https://www.ebsa.com.co/consumo-de-electrodomesticos/',
    },
    {
      referencia:
        'García Gutiérrez, L. (2014). Instrumentación básica de medida y control. AENOR - Asociación Española de Normalización y Certificación. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53600',
    },
    {
      referencia:
        'IDEAM, UPME. (2006). 	Atlas de viento y energía eólica de Colombia. ',
      link: 'https://bdigital.upme.gov.co/handle/001/22',
    },
    {
      referencia:
        'IDEAM, UPME. (2017). Atlas de radiación solar, ultravioleta y ozono de Colombia. ',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/023775/RADIACION.pdf',
    },
    {
      referencia:
        'Rojano Ramos, S. (2012). Instrumentación y control en instalaciones de procesos, energía y servicios auxiliares (MF0047_2). IC Editorial. ',
      link:
        ' https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/42688',
    },
    {
      referencia:
        'UPME. (2015). Integración de las energías renovables no convencionales en Colombia. ',
      link:
        'http://www.upme.gov.co/Estudios/2015/Integracion_Energias_Renovables/INTEGRACION_ENERGIAS_RENOVANLES_WEB.pdf',
    },
    {
      referencia: 'UPME. (2020). Plan Energético Nacional 2020-2050. ',
      link: 'https://www1.upme.gov.co/DemandayEficiencia/Paginas/PEN.aspx',
    },
    {
      referencia: 'WIKA. (2021). ¿Cómo funcionan los manómetros mecánicos? ',
      link:
        'https://www.bloginstrumentacion.com/instrumentacion/construccin-funcionamiento-de-manmetros-mecnicos/',
    },
    {
      referencia: 'WIKA. (2021). ¿Qué es un transmisor de presión? ',
      link:
        'https://www.bloginstrumentacion.com/knowhow/qu-es-un-transmisor-de-presin/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Marlon Augusto Villamizar Morales',
          cargo: 'Experto Técnico',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Carolina Arias',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
