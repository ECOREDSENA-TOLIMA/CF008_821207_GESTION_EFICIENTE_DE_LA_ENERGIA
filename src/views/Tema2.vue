<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Potencial de los sistemas energéticos renovables

    p.mb-4(data-aos="fade-down") Las energías renovables se distinguen porque su aprovechamiento tiene un impacto ambiental mínimo. Además, no genera residuos, y son fuentes de energía inagotables, también conocidas como fuentes de energía ilimitadas, ya que no se agotan con su uso. Más información acerca de su potencial, a continuación: 

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Potencial de los sistemas energéticos renovables.
            p Actualmente existen varias tecnologías que permiten la obtención de energía final en forma de electricidad, calor y combustibles a partir de las Fuentes de Energía Renovable. A través de los años varias de estas tecnologías han madurado y se convirtieron en soluciones técnicas y comerciales para las necesidades energéticas de los países. En Colombia, se han implementado proyectos de generación con tecnologías solar fotovoltaica, solar térmica, también el uso del bagazo de caña como fuente primaria para efectos de cogeneración, y en el desarrollo de proyectos de generación de electricidad con energía eólica.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-01.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 El potencial de generación para cada una de las tecnologías con fuentes renovables es diferente, ya que depende de las siguientes condiciones en el lugar de instalación:
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-bolt(style="color:#AD84FF")
                | Disponibilidad del recurso natural a utilizar.
              li.mb-0
                i.fas.fa-bolt(style="color:#AD84FF")
                | Condiciones climáticas.
              li.mb-0
                i.fas.fa-bolt(style="color:#AD84FF")
                | Condiciones ambientales.
              li.mb-0
                i.fas.fa-bolt(style="color:#AD84FF")
                | Condiciones geográficas.
              li.mb-0
                i.fas.fa-bolt(style="color:#AD84FF")
                | Condiciones de logística para acceso al lugar.
              li.mb-0
                i.fas.fa-bolt(style="color:#AD84FF")
                | Información meteorológica disponible.
              li.mb-0
                i.fas.fa-bolt(style="color:#AD84FF")
                | Condiciones culturales y sociales.
              li.mb-0
                i.fas.fa-bolt(style="color:#AD84FF")
                | Condiciones de interconexión con redes de suministro existentes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-02.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Debido a lo anterior
            p En Colombia se han elaborado diferentes documentos que recopilan toda la información requerida para la evaluación del potencial de diferentes fuentes de energía en las regiones del país. Estos documentos se denominan con el nombre “Atlas” y se encuentran publicados en las páginas web del Instituto de Hidrología, Meteorología y Estudios Ambientales - IDEAM y de la Unidad de Planeación Minero Energética-UPME.  A través de estos Atlas se facilita la identificación de regiones que resultan estratégicas por los potenciales recursos para la solución de necesidades energéticas de la población. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-03.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 De manera general, la información consignada en los Atlas se compone de:
            p Conjunto de mapas climatológicos con la información de la distribución promedio mensual y anual de las variables de interés.
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-bolt(style="color:#AD84FF")
                | Aspectos teóricos y observaciones para la interpretación de los datos consignados en los mapas.
              li.mb-0
                i.fas.fa-bolt(style="color:#AD84FF")
                | Anexos con documentación de interés. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-04.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Cabe resaltar:
            p Que la información consignada en los Atlas sirve como referencia para analizar el potencial general del uso de cierta tecnología que utiliza como fuente primaria la energía renovable.
            p Cuando se decide realizar un proyecto en particular, se deben realizar mediciones en sitio con instrumentos de medida con una duración en tiempos especificados por el proyecto. Adicionalmente se deben tener en cuenta de manera particular las condiciones del lugar de instalación mencionadas anteriormente.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-05.png', alt='')

    p.mb-4(data-aos="fade-down") A continuación, se describe el potencial de generación en dos fuentes de energía renovable no convencional: energía solar y energía eólica.

    Separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 Potencial Energético de la Energía solar

    p.mb-4(data-aos="fade-down") El potencial energético de la energía solar es extremadamente alto. La radiación solar que llega a la Tierra en tan solo una hora es suficiente para cubrir las necesidades energéticas de la humanidad durante un año entero.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente enlace encontrara un video que lo ilustrara sobre la medición de la radiación solar. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Zo2y8HNi3X4" target="_blank")
                    span Ver video
                    i.fas.fa-video

    p.mb-4(data-aos="fade-down") Se estima que el potencial teórico de la energía solar supera con creces la demanda mundial de energía. Sin embargo, es importante tener en cuenta que el potencial efectivo de la energía solar varía según la ubicación geográfica, las condiciones climáticas y los sistemas de captación utilizados, como se explica a continuación:
    
    p.mb-4(data-aos="fade-down") El aprovechamiento de la energía solar generalmente se da en dos aplicaciones: energía solar fotovoltaica y energía solar térmica. A través de la aplicación solar fotovoltaica se aprovecha la energía del sol para generar electricidad, y por medio de las aplicaciones solares térmicas es posible elevar la temperatura del agua u otros fluidos de tal forma que se pueda aprovechar esa temperatura en diferentes usos de la energía.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-12.col-md-4.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/tema2-20.png', alt='')
      .col-12.col-md-8.col-lg-9
        p.mb-4(data-aos="fade-down") De acuerdo con IDEAM, UPME (2017), la energía que proviene del sol llega a la tierra en forma de radiación solar, la cual se define como la energía emitida por el sol, que se propaga en todas las direcciones a través del espacio mediante ondas electromagnéticas y es generada en las reacciones del hidrógeno en el núcleo del sol por fusión nuclear. Este tipo de energía determina la dinámica de los procesos atmosféricos y el clima. 
        p.mb-4(data-aos="fade-down") Además de ser fuente de energía, la radiación solar brinda para los seres vivos los siguientes efectos fisiológicos positivos: 
        ul.lista-ul.mb-2.px-3
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Estimula la síntesis de vitamina D, que previene el raquitismo y la osteoporosis.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Favorece la circulación sanguínea. 
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Estimula la síntesis de los neurotransmisores cerebrales responsables del estado anímico.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Para conocer más detalles acerca de los aspectos teóricos del sol y la radiación se debe consultar el material complementario elaborado por el IDEAM (2016): 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/2_1_1_MC_Teoria Radiacion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-4(data-aos="fade-down") Para la evaluación del potencial energético de la radiación solar, existen dos variables fundamentales:

    .row.align-self-stretch.justify-content-center.align-items-center
      .col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tema2-06.svg' alt='AvatarTop' style="width:60%")
          .tarjeta.color-acento-contenido
            .p-4
              p.mb-0 #[b Irradiancia global] sobre una superficie horizontal: se trata de la medida del total de la radiación directa y difusa que recibe un área específica. Es decir, equivale a nombrar la potencia en el área eléctrica. La unidad de medida más utilizada a nivel mundial es el KW/m².
      .col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tema2-07.svg' alt='AvatarTop' style="width:60%")
          .tarjeta.color-acento-contenido
            .p-4
              p.mb-0 #[b Irradiación global] sobre una superficie horizontal: es la medida de la radiación directa y difusa que recibe un área específica, por unidad de tiempo. Corresponde a nombrar la energía en el área eléctrica. La unidad de medida más utilizada a nivel mundial es el KWh/m². 

    p.mb-4(data-aos="fade-down") Aunque sus nombres son parecidos, no se debe confundir los valores de la irradiancia con los valores de la irradiación. Haciendo un ejercicio mental con el equivalente eléctrico (físicamente no tienen equivalencia es solo para una mejor interpretación de los conceptos), la irradiancia puede asemejarse a la potencia eléctrica en cualquier dispositivo como por ejemplo un bombillo LED de 10 Vatios (10 W).

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | Más información respecto a este tema podrá consultarla en el siguiente recurso:

    TabsA.color-acento-botones.mb-5
      .tarjeta.tarjeta--azul.p-4(titulo="Cantidad de energía consumida")
        h4 Cantidad de energía consumida
        p Si se desea conocer la energía consumida (equivalente a la Irradiación) por el bombillo se debe multiplicar la potencia (en este caso 10 W) por el número de horas que se mantiene encendido. Si el bombillo se enciende durante 8 horas al día, la energía consumida por el bombillo será de 80 vatios hora (80 Wh) al día [𝑊ℎ/𝑑í𝑎]. Ahora bien, si se quiere conocer la energía consumida por el bombillo durante todo el año, se debe multiplicar la potencia por el número de horas que se mantiene encendido en el año que pueden ser 2920 horas al año, con lo cual la energía total anual consumida por el bombillo es de 29.200 vatios hora [𝑊ℎ/𝑎ñ𝑜].   
      .tarjeta.tarjeta--azul.p-4(titulo="Valor de referencia")
        h4 Valor de referencia 
        p En la práctica, el valor que se toma como referencia para la evaluación inicial del potencial energético del sol es la irradiación global diaria sobre una superficie horizontal. La razón es que esta variable indica directamente la energía que se puede aprovechar del sol y la escala de tiempo diaria permite de forma rápida el cálculo de las Horas Solares Pico (HSP) que corresponden a las horas al día en que la irradiación global diaria sobre una superficie horizontal hipotéticamente se mantiene en un valor constante de 1000 Wh/m#[sup 2] o 1 kWh/m#[sup 2]. 
      .tarjeta.tarjeta--azul.p-4(titulo="Cálculo de generación de electricidad")
        h4 Cálculo de generación de electricidad 
        p Esta variable es muy útil para los cálculos de generación de electricidad con tecnología solar fotovoltaica. Teniendo en cuenta lo anterior, las Horas Solares Pico (HSP) se calcula dividiendo el valor de la irradiación global diaria sobre una superficie horizontal entre 1 𝑘𝑊ℎ/𝑚#[sup 2].
      .tarjeta.tarjeta--azul.p-4(titulo="Contexto Nacional del Potencial Energético de la Energía Solar")
        h4 Contexto Nacional del Potencial Energético de la Energía Solar 
        p En Colombia se han realizado varios estudios donde se recopila la información de diferentes estaciones meteorológicas públicas y privadas con el fin de determinar los valores promedio para el uso en estudios de evaluación de potencial energético. En Colombia el IDEAM es la entidad oficial encargada de hacer el seguimiento a la radiación y cuenta con la red más grande de estaciones y de mayor cobertura. 
        p De acuerdo con UPME (2015) el país cuenta con una irradiación global horizontal diaria promedio de 4,5 kWh / m#[sup 2] la cual está por encima del promedio mundial de 3,9 kWh / m#[sup 2].
        p Adicionalmente el valor promedio presente en el país es superior al promedio  presente en Alemania (3,0 kWh / m#[sup 2]), país líder a nivel mundial en la implementación de la energía solar Fotovoltaica. 
      
    p.mb-4(data-aos="fade-down") Para la determinación de la irradiación global horizontal diaria en alguna zona específica del país, se tienen varias opciones dentro de las cuales se destacan las siguientes:

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong A. Atlas Solar de Radiación Solar, Ultravioleta y Ozono de Colombia (opción 1):]

    p.mb-4(data-aos="fade-down") Según IDEAM, UPME. (2017) el Atlas de Radiación Solar, Ultravioleta y Ozono de Colombia es una herramienta fundamental para la valoración de la disponibilidad de la energía solar en el territorio nacional y para conocer el comportamiento de la radiación ultravioleta, el ozono y sus relaciones, que contribuyen a entender sus efectos en la salud humana.  El atlas contiene un conjunto de mapas climatológicos en donde se representan la distribución promedio mensual y anual de las siguientes variables: irradiación solar global horizontal, brillo solar, número de días al mes sin brillo solar, radiación ultravioleta y la columna total de ozono, acompañadas de análisis regionales del comportamiento promedio anual y a lo largo del año de estas variables. También contiene datos teóricos acerca del comportamiento del sol, información acerca de las fuentes de información e instrumentos de medición, y anexos con información adicional. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-12.col-md-4.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/tema2-21.png', alt='')
      .col-12.col-md-8.mb-4.mb-md-0
        .cajon.tarjeta--azul.p-3
          p #[b Existen dos formas para consultar la documentación del atlas.] Una de ellas es utilizar la herramienta en línea desarrollada por el IDEAM accediendo al siguiente enlace: #[a(href="http://atlas.ideam.gov.co/visorAtlasRadiacion.html" target="_blank") #[b http://atlas.ideam.gov.co/visorAtlasRadiacion.html]] #[b y descargando los mapas y tablas que allí reposan.] 
          .row.justify-content-center.align-items-center
            .col-12.mb-4.mb-md-0(data-aos="fade-left")
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/temas/descargar.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.text-small En caso de que no esté disponible la página web de IDEAM por mantenimiento, se puede descargar el documento completo del siguiente enlace: 
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/2_1_2_MC_Atlas_Solar_Colombia.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-12.mb-4.mb-md-0
        p Para ambos casos, se puede obtener la siguiente información: 
      .col-12.cajon.color-acento-botones.p-4
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Mapa nacional multianual de irradiación global horizontal medio diario anual. (Página 74 del documento IDEAM, UPME. (2017)). En este mapa se representa a través de una escala de colores el comportamiento del promedio anual de todos los meses del año de la irradiación global horizontal diaria.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Mapa nacional mensual de irradiación global horizontal medio diario. (Páginas 68 a 73 del documento IDEAM, UPME. (2017)). En total son doce (12) mapas (uno por cada mes del año) donde se representa a través de una escala de colores el comportamiento del promedio mensual de la irradiación global horizontal diaria.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Tablas de datos con información de los promedios horarios mensuales de irradiación global horizontal media para algunas ciudades del país.  (Páginas 139 a 143 del documento IDEAM, UPME. (2017)).

    p.mb-4.text-center(data-aos="fade-down-left") #[strong ¿Qué información y cómo se determina el valor de la irradiación global horizontal?] 

    .row.justify-content-center.align-items-center.color-two.mb-5.p-3(data-aos="fade-down-left")
      .col-12.mb-4.mb-md-0
        h5.mb-3(data-aos="fade-down-right") A través de los mapas: 
        p.mb-4(data-aos="fade-down-right") Una vez se tenga descargado el Mapa nacional multianual de irradiación global horizontal medio diario anual, se debe ubicar las convenciones en dicho mapa donde aparecerá lo siguiente:
      .col-12.col-md-11.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-08.png', alt='') 
      .col-12.mt-2
        p.text-end.mb-1 Nota. IDEAM, UPME (2017).


    //- .row.mb-5.align-self-stretch.justify-content-center.align-items-center

    .row.mb-5.justify-content-center.align-items-center.cajon.tarjeta--azul.py-3
      .col-12.col-md-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/Imagen_48.png', alt='') 
      .col-12.col-md-9(data-aos="fade-right")
        p.mb-3(data-aos="fade-down-right") En la parte Leyenda, se encuentra una barra de colores con los rangos de valores de la irradiación global horizontal. Cada color corresponde a un rango específico. Luego se procede a ubicar la zona de interés dentro del mapa observando el color que corresponda. A manera de ejemplo se tiene la siguiente imagen donde aparecen indicadas las ciudades de Cartagena, Barranquilla y Sincelejo. Se observa que las áreas donde están ubicadas las ciudades de Barranquilla y Cartagena tienen color naranja mientras que el área de la ciudad de Sincelejo tiene un color amarillo oscuro. Regresando a las convenciones, se observa que el color naranja corresponde a un rango de irradiación global horizontal diaria entre 5 y 5,5 (kWh )/m#[sup 2], mientras que el color amarillo oscuro corresponde a un rango de irradiación global horizontal diaria entre 4,5 y 5 (kWh )/m#[sup 2]. 
        p(data-aos="fade-down-right") Para efectos de diseño de un sistema de generación con energía solar, normalmente se toma el valor más pequeño del rango.
        p.text-end.mb-1 Nota. IDEAM, UPME (2017).
    p.mb-3(data-aos="fade-down-right") #[b Teniendo en cuenta los datos anteriores, se puede afirmar que para la ciudad de Sincelejo el valor de la irradiación global horizontal promedio diario durante el año es de 4,5 kWh/m#[sup 2] díatomando el valor mínimo del rango.] Si se requiere calcular las Horas Solares Pico (HSP) en esa ciudad, se divide el valor anterior por 1kWh/m#[sup 2], lo cual da como resultado que las horas solares promedio anual diario es de 4,5 horas. Si realiza este mismo ejercicio para las demás ciudades, se concluye que el potencial de generación con energía solar es mayor en las ciudades de Barranquilla y Cartagena que en Sincelejo. 

    .row.justify-content-center.align-items-center.color-two.mb-5.p-3(data-aos="fade-down-left")
      .col-12.mb-4.mb-md-0
        h5.mb-3(data-aos="fade-down-right") A través de las tablas de datos: 
        p.mb-3(data-aos="fade-down-right") Las tablas de datos son una herramienta útil si se requiere un valor determinado y no un rango de valores para la irradiación global horizontal diaria. Se debe tener en cuenta que esta información se tiene solo para algunas ciudades, de tal forma que si se requiere un valor determinado para una zona donde no existe tabla, se debe recurrir al método con el mapa o a otras herramientas de información climática que más adelante se describirán. Cada una de las tablas de datos poseen la siguiente información: ciudad de referencia, estación meteorológica utilizada, horas del día (desde las 0 hasta las 24 horas), mes del año, valor promedio horario de la irradiación global horizontal, valor promedio diario de la irradiación global horizontal.
        p.mb-5(data-aos="fade-down-right") Este último valor corresponde al valor promedio diario mensual. En la misma tabla aparecen unas convenciones de colores con unos rangos indicativos diferentes a los de los mapas, con el fin de identificar rápidamente dentro de la tabla cuáles con las horas en donde se tiene una cantidad mayor de irradiación global horizontal.
      .col-12.col-md-11.mb-5.mb-lg-0(data-aos="fade-right")
        .shadown-white.p-3
          .titulo-sexto.color-acento-contenido.mb-1
            p.titulo.text-small.texto-negro.pb-0.mb-0 <b>Tabla 5. </b> <i>Promedio de horarios de la irradiación global en la estación. Universidad Tecnológica del Magdalena (Santa Marta) en Wh / m#[sup 2].</i>
          figure
            img(src='@/assets/curso/temas/tema2/tema2-09.png', alt='') 
      .col-12.mt-4
        p.text-end.mb-0 Nota. IDEAM, UPME (2017).

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong B. Bases de datos con información satelital y climática (opción 2):]

    p.mb-5(data-aos="fade-down-right") Cuando se requiere realizar un diseño con ingeniería detallada para la evaluación energética de por ejemplo un sistema solar fotovoltaico y un sistema solar térmico, generalmente se realiza la consulta de las bases de datos de organizaciones o empresas quienes han recogido y procesado la información proveniente de las estaciones meteorológicas locales de cada país y la han complementado con información proveniente de los satélites. Algunas de estas bases de datos suministran la información de forma gratuita y en otras se debe pagar por la información. Algunos ejemplos de bases de datos más conocidas son:
    
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-md-11.mb-5.mb-lg-0.cajon.tarjeta--azul.py-3(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | NASA Power #[a.link-azul(href="https://power.larc.nasa.gov/data-access-viewer/" target="_blank") (https://power.larc.nasa.gov/data-access-viewer/)]. Es gratuita.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | SOLARGIS #[a.link-azul(href="https://solargis.com/" target="_blank") (https://solargis.com/)]. Se debe pagar una suscripción, sin embargo algunos mapas son gratis.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Meteonorm #[a.link-azul(href="(https://meteonorm.com/en/" target="_blank") (https://meteonorm.com/en/)]. Se debe pagar una suscripción.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | PVGIS #[a.link-azul(href="https://ec.europa.eu/jrc/en/pvgis" target="_blank") (https://ec.europa.eu/jrc/en/pvgis)]. Es gratuita.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Global Solar Atlas #[a.link-azul(href="https://globalsolaratlas.info" target="_blank") (https://globalsolaratlas.info)]. Es gratuita y se apoya en los datos de SOLARGIS. Está diseñada también para calcular el potencial de generación con tecnología fotovoltaica.

    p.mb-5(data-aos="fade-down-right") Este tipo de bases de datos utilizan una interfaz gráfica que permite ubicar la zona donde se requiere evaluar el potencial energético solar a través de la selección con un cursor en un mapa o a través de las coordenadas geográficas. Adicionalmente permite ver de forma gráfica la información y en la mayoría de los casos permite descargar los datos en archivos planos para su manipulación y procesamiento en otras aplicaciones. 

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-11.mb-5.mb-lg-0.shadown.p-3(data-aos="fade-right")
        p.mb-4(data-aos="fade-down-right") En la siguiente figura se puede observar la pantalla de la base de datos Global Solar Atlas cuando el cursor del mapa de ubica en la ciudad de Barranquilla:
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0.text-small <b>Figura 12. </b> <i>Pantalla de la base de datos Global Solar Atlas</i>
        figure
          img(src='@/assets/curso/temas/tema2/tema2-10.png', alt='') 
          figcaption Imagen de pantalla del resultado de localizar a la ciudad de Barranquilla en la base de datos Global Solar Atlas. Referencia bibliográfica: World Bank Group, ESMAP, SOLARGIS. (2021). Global Solar Atlas. 

    p.mb-4(data-aos="fade-down-right") Como se puede observar en la figura anterior, el valor de la irradiación global horizontal promedio anual diaria (en inglés Global Horizontal Irradiation GHI) es de 5,689 kWh/m#[sup 2] día.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente enlace encontrará un video que le permitirá profundizar en la evaluación del potencial energético de radiación solar. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=c-BIULucPEg" target="_blank")
                    span Ver video
                    i.fas.fa-video

    Separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Potencial Energético de la Energía Eólica

    p Explorar la siguiente didáctica y conocer el potencial energético de la energía eólica. 

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-7.mb-5.mb-lg-0(data-aos="fade-right")
        h4 Potencial Energético de la Energía Eólica
        p De acuerdo con el IDEAM, UPME (2006), dentro de las fuentes de energía renovable que se utilizan en gran escala para la generación de electricidad, se encuentra el uso del viento para mover aerogeneradores instalados de tal forma que se pueda optimizar la velocidad y la dirección del viento para obtener la mayor cantidad de energía disponible. Esta tecnología recibe el nombre de sistemas eólicos o energía eólica, porque aprovecha la energía cinética del viento para la producción de electricidad. 
      .col-12.col-md-5.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-11.png', alt='') 

    p.mb-5(data-aos="fade-down-right") En la determinación del potencial eólico de una zona están determinados por la siguiente ecuación:

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-11.mb-5.mb-lg-0.shadown.p-3(data-aos="fade-right")
        p.text-center P = 1/2 * A * p * V#[sup 3]
        p donde:
        p.mb-0 P: producción [W].
        p.mb-0 A: área que cubre el rotor del generador eólico [m#[sup 2]] ^.
        p.mb-0 p: densidad del aire [kg/m#[sup 3]].
        p V: velocidad del viento [m/s].
      //.col-12.col-md-11.mb-5.mb-lg-0(data-aos="fade-right")
      //  figure
      //    img(src='@/assets/curso/temas/tema2/tema2-12.svg', alt='') 

    p.mb-5(data-aos="fade-down-right") Con el fin de normalizar los modelos para la identificación de las zonas donde existe mayor potencial para el uso de la energía eólica, se determina un concepto denominado Densidad de Potencia, definido como la división de la Producción entre el área (P/A), lo cual modifica la ecuación anterior de la siguiente manera:

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-9.mb-5.mb-lg-0.shadown.p-3(data-aos="fade-right")
        p.text-center P/A = 1/2 * p * V#[sup 3][W/m#[sup 2]]
      //.col-12.col-md-9.mb-5.mb-lg-0(data-aos="fade-right")
      //  figure
      //    img(src='@/assets/curso/temas/tema2/tema2-13.svg', alt='') 

    p.mb-5(data-aos="fade-down-right") Las unidades de la densidad de potencia se expresan en W/m#[sup 2]. Si se desea conocer la densidad de energía. 

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-5.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-14.png', alt='') 
      .col-12.col-md-7.mb-5.mb-lg-0(data-aos="fade-right")
        p La densidad del aire es un factor determinante en las mediciones, porque es diferente para cada sitio y algunas veces solo para casos prácticos se puede asumir con un valor de 1 Kg/m#[sup 3]. Debido a esta relación, pequeñas variaciones en la velocidad del viento representan grandes cambios en el contenido de energía. 
        .cajon.color-acento-contenido.p-3
          p En lugares donde los valores de la velocidad del viento son bajos, se obtienen menores valores de densidad de potencia, mientras que donde los valores promedio del viento son mayores, la densidad de potencia y por lo tanto la densidad de energía, crece de forma potencialmente al cubo de dicha velocidad.

    p.mb-5(data-aos="fade-down-right") Por lo general, los vientos con intensidades iguales o superiores a 5 m/s equivalentes a (P/A) de 63 W/m#[sup 2] proporcionan una buena alternativa para uso de energía en pequeños proyectos eólicos instalados cerca de superficie (entre 5 y 10 metros de altura). Sin embargo, para proyectos de gran envergadura como parques eólicos, se requiere hacer mediciones para alturas superiores, en donde se encuentran valores de velocidad del viento superiores, y en donde se puedan instalar aerogeneradores con alturas que permitan aprovechar al máximo las condiciones ambientales del lugar.

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-7.mb-5.mb-lg-0(data-aos="fade-right")
        .cajon.color-acento-botones.p-3
          p En el departamento de la Guajira se concentran los mayores promedios de vientos alisios que recibe el país durante todo el año con velocidades promedio cercanas a los 9 m/s (a 80 m de altura). Con estos valores se han realizados estudios de prefactibilidad y de acuerdo con ellos se estima un potencial energético en la zona equivalente a 18 GW eléctricos.
      .col-12.col-md-5.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-15.png', alt='') 

    p.mb-5(data-aos="fade-down-right") Para la determinación de la densidad de energía eólica en alguna zona específica del país, se tienen varias opciones dentro de las cuales se destacan las siguientes:

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong A. Atlas de Viento y Energía Eólica de Colombia (opción 1):]

    p.mb-5(data-aos="fade-down-right") Según IDEAM, UPME. (2006) el Atlas de Viento y Energía Eólica de Colombia es una colección de mapas que muestra la distribución espacial del viento en superficie. Adicionalmente para la evaluación de la energía disponible, se muestra el valor promedio mensual y anual de la densidad de energía eólica a dos distintas alturas (20 y 50 metros), lo cual sirven como referencia para Colombia para el uso de energías alternativas, determinando las épocas del año y las zonas de Colombia donde se puede aprovechar las características del viento para dar soluciones a las necesidades energéticas de la nación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-12.col-md-12.mb-4.mb-md-0
        .cajon.tarjeta--azul.p-3
          p #[b Existen dos formas para consultar la documentación del atlas.] Una de ellas es utilizar la herramienta en linea desarrollada por el IDEAM accedienco al siguiente enlace: #[a(href="http://atras.ideam.gov.co/visorAtlasVientos.html" target="_blank") #[b http://atras.ideam.gov.co/visorAtlasVientos.html]] #[b y descargando los mapas y tablas que allí reposan]. 
          .row.justify-content-center.align-items-center
            .col-12.mb-4.mb-md-0(data-aos="fade-left")
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/curso/temas/descargar.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.text-small En caso de que no esté disponible la página web de IDEAM por mantenimiento, se puede descargar el documento completo del siguiente enlace: 
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/2_1_3_MC_Atlas_Eolico_Colombia.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download

    p.mb-5(data-aos="fade-right") Para ambos casos, se puede obtener la siguiente información: 
    .row.mb-5.justify-content-center.align-items-center.cajon.tarjeta--azul.p-4
      .col-12.col-md-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-111.png', alt='') 
      .col-12.col-md-9.mb-5.mb-lg-0(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.text-small
            i.fas.fa-bolt(style="color:#AD84FF")
            | #[b Mapa nacional multianual de la velocidad media del viento en superficie.] Es un mapa donde se representa a través de una escala de colores el comportamiento del promedio anual de la velocidad media del viento en superficie (IDEAM, UPME. 2006, pp. 21). 
          li.text-small
            i.fas.fa-bolt(style="color:#AD84FF")
            | #[b Mapa nacional mensual de la velocidad media del viento en superficie.] En total son doce mapas (uno por cada mes del año) donde se representa a través de una escala de colores el comportamiento del promedio mensual de la velocidad media del viento en superficie (IDEAM, UPME. 2006, pp. 22-33).
          li.text-small
            i.fas.fa-bolt(style="color:#AD84FF")
            | #[b Mapa nacional multianual de la densidad de energía eólica a 20 metros de altura.] Es un mapa donde se representa a través de una escala de colores el comportamiento del promedio anual de la densidad de energía eólica a 20 metros de altura. En los hogares para el uso en las estufas, calentadores de agua y en calefacción de interiores y exterior en zonas climáticas con temperaturas bajas (IDEAM, UPME. 2006, pp. 86).
          li.text-small
            i.fas.fa-bolt(style="color:#AD84FF")
            | #[b Mapa nacional mensual de la densidad de energía eólica a 20 metros de altura.] Mapa que presenta datos mensuales, respecto a las corrientes de aire, necesario para la aplicación de grandes proyectos (IDEAM, UPME. 2006, pp. 77-88).
          li.text-small
            i.fas.fa-bolt(style="color:#AD84FF")
            | #[b Mapa nacional multianual de la densidad de energía eólica a 50 metros de altura.] Es un mapa donde se representa a través de una escala de colores el comportamiento del promedio anual de la densidad de energía eólica a 50 metros de altura (IDEAM, UPME. 2006, pp. 102). 
          li.text-small
            i.fas.fa-bolt(style="color:#AD84FF")
            | #[b Mapa nacional mensual de la densidad de energía eólica a 50 metros de altura.] Es un mapa nacional con datos mensuales respecto a  la densidad de energía eólica a 50 metros de altura (IDEAM, UPME. 2006, pp. 90-101). 

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong B. Bases de datos con información satelital y climática (opción 2):]

    p.mb-5(data-aos="fade-down-right") Cuando se requiere realizar una evaluación energética de forma detallada para la evaluación energética de por ejemplo un sistema eólico cercano a la superficie, generalmente se realiza la consulta de las bases de datos de organizaciones o empresas quienes han recogido y procesado la información proveniente de las estaciones meteorológicas locales de cada país y la han complementado con información proveniente de los satélites. Algunas de estas bases de datos suministran la información de forma gratuita y en otras se debe pagar por la información. 

    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-md-12.mb-5.mb-lg-0.cajon.tarjeta--azul.p-4(data-aos="fade-right")
        p Algunos ejemplos de bases de datos más conocidas son:
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | NASA Power #[a.link-azul(href="https://power.larc.nasa.gov/data-access-viewer/" target="_blank") (https://power.larc.nasa.gov/data-access-viewer/)]. Es gratuita.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Meteonorm #[a.link-azul(href="https://meteonorm.com/en/" target="_blank") (https://meteonorm.com/en/)]. Se debe pagar una suscripción.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Global Wind Atlas #[a.link-azul(href="https://globalwindatlas.info/" target="_blank") (https://globalwindatlas.info/)]. Es gratuita. Está diseñada también para calcular el potencial de generación con algunas torres eólicas. Provee información del viento para alturas de 10, 50, 100, 150 y 200 metros.

    p.mb-4(data-aos="fade-down-right") Este tipo de bases de datos utilizan una interfaz gráfica que permite ubicar la zona donde se requiere evaluar el potencial energético del viento a través de la selección con un cursor en un mapa o a través de coordenadas geográficas. Adicionalmente permite ver de forma gráfica la información y en la mayoría de los casos permite descargar los datos en archivos planos para su manipulación y procesamiento en otras aplicaciones. 

    .row.mb-4.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-11.col-lg-10.mb-4.shadown.p-4(data-aos="fade-right")
        p En la siguiente imagen se puede observar la pantalla de la base de datos Global Wind Atlas cuando el cursor del mapa se ubica en una zona del departamento de la Guajira a una altura de 150 metros:
        figure
          img(src='@/assets/curso/temas/tema2/tema2-16.png', alt='') 
          figcaption Imagen de pantalla del resultado de localizar a la ciudad de Barranquilla en la base de datos Global Wind Atlas. Referencia bibliográfica: World Bank Group, ESMAP, VORTEX. (2021). Wind Solar Atlas. https://globalwindatlas.info/
      .col-12
        p En la imagen anterior, se observa que para los 150 metros de altura la velocidad promedio del viento es de 10,17 m/s y una densidad de energía eólica aprovechable de 778 W/m#[sup 2].

    Separador
    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.3 Reducción de huella de carbono y energías renovables

    p.mb-3(data-aos="fade-down-right") Se invita a conocer la reducción de huella de carbono y energías renovables.
    p.mb-5(data-aos="fade-down-right") El uso de las fuentes renovables para la generación de energía es una de las herramientas que a nivel mundial se está implementando para mitigar los efectos del cambio climático en todo el planeta. Las emisiones de gases de efecto invernadero (GEI) producidas por la demanda de los diferentes energéticos va en aumento a la par con el aumento de la demanda de energía a nivel mundial. 

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-6.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-17.png', alt='') 
      .col-12.col-md-6.mb-5.mb-lg-0(data-aos="fade-right")
        .cajon.color-acento-contenido.p-3
          p Nuestro país no es ajeno a esta situación, y desde el año 2001 se viene trabajando en estrategias para el desarrollo de las tecnologías de generación con fuentes renovables no convencionales como la energía solar, eólica, biomasa, y recientemente el hidrógeno y la energía geotérmica. 
          // https://www.shutterstock.com/es/image-photo/businessman-draw-growth-graph-progress-business-1504342112

    p.mb-3(data-aos="fade-down-right") Cabe recordar que uno de los principales impactos ambientales positivos de este tipo de energías es la generación de energía con cero emisiones de GEI, con lo cual es posible cumplir las metas de reducción de emisiones propuestas a nivel país.
    p.mb-4(data-aos="fade-down-right") Según UPME (2020) “El reto de los próximos 30 años será abastecer una demanda creciente de energía utilizando menos combustibles fósiles”; adicionalmente determina que la generación distribuida de electricidad con sistemas solares fotovoltaicos permitirá mejorar la competitividad del mercado eléctrico colombiano y dará mejor protagonismo al usuario para el cuidado y uso responsable de los recursos energéticos. 

    h4 ¿De qué forma un sistema de generación con energía renovable puede disminuir la huella de carbono?

    p.mb-3(data-aos="fade-down-right") Es posible responder a esta pregunta con el siguiente ejemplo: una fábrica de chocolates consume mensualmente en promedio 250.000 kWh de electricidad que le compra a un comercializador de energía. Si se multiplica este valor por los doce meses del año, en total estaría consumiendo 3'000.000 de kWh al año. Con los datos anteriores y utilizando el factor de emisión de 0,166 [kg CO2eq/kWh] para la energía eléctrica de determinado por la resolución UPME 385 del 2020, la huella de carbono por consumo de energía eléctrica de esta empresa es de:

    p.text-center.mb-4(data-aos="fade-down-right") 𝐻𝑢𝑒𝑙𝑙𝑎 𝑑𝑒 𝑐𝑎𝑟𝑏𝑜𝑛𝑜 𝑒𝑙𝑒𝑐𝑡𝑟𝑖𝑐𝑖𝑑𝑎𝑑=3.000.000 [𝑘𝑊ℎ] ∗ 0,166 [𝑘𝑔 𝐶𝑂2𝑒𝑞/𝑘𝑊ℎ] = 498.000 [𝑘𝑔 𝐶𝑂2𝑒𝑞] = 498 [𝑡𝑜𝑛 𝐶𝑂2𝑒𝑞]

    p.mb-0 Es decir, las emisiones de GEI de la empresa actualmente son de 498 toneladas de CO2eq al año. 
    p.mb-4 La alta dirección de la empresa decide emprender un proyecto de generación con energía solar a través de la implementación de un sistema fotovoltaico aprovechando que tiene disponible una gran cantidad de área en los techos de cada uno de sus edificios industriales. La empresa ha contratado a una firma de ingeniería para realizar un diseño cuyo resultado final es la aprobación para la instalación de un sistema que genera en promedio 50.000 kWh al mes, es decir 600.000 kWh al año. 


    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-6.mb-5.mb-lg-0.px-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-18.png', alt='') 
      .col-12.col-md-6.mb-5.mb-lg-0.px-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-19.png', alt='') 


    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-11.mb-5.mb-lg-0(data-aos="fade-right")
        .cajon.color-acento-botones.p-3
          p Lo anterior quiere decir que del total de los 3.000.000 de kWh al año que consume la empresa, 600.000 kWh provendrán del sistema fotovoltaico que emite cero emisiones de GEI.  Por lo tanto, el beneficio principal desde el punto de vista ambiental es que la nueva huella de carbono por concepto de consumo de energía para este usuario será de:
          p.text-center 𝐻𝑢𝑒𝑙𝑙𝑎 𝑑𝑒 𝑐𝑎𝑟𝑏𝑜𝑛𝑜_𝑒𝑙𝑒𝑐𝑡𝑟𝑖𝑐𝑖𝑑𝑎𝑑=(3.000.000−600.000) [𝑘𝑊ℎ] ∗ 0,166 [𝑘𝑔 𝐶𝑂_2𝑒𝑞/𝑘𝑊ℎ] = 398.400 [𝑘𝑔 𝐶𝑂_2𝑒𝑞] = 398,4 [𝑡𝑜𝑛 𝐶𝑂_2𝑒𝑞]
          p Es decir, se ha obtenido una reducción del 20% en la emisión de GEI a la atmósfera, adicional al beneficio económico de tener una fuente de generación de energía local que se verá en los próximos componentes.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
