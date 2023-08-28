<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Instrumentos de medición energética

    p.mb-4(data-aos="fade-down") Muchas veces para alcanzar los objetivos que se plantean tanto a nivel personal, profesional, y en general en cualquier proceso dentro de una organización, es necesario alcanzar el control de la variable que determina si se está alcanzado la meta o por el contrario se está más lejos de alcanzarla. Por ejemplo, si alguna persona quiere mejorar su salud disminuyendo su peso corporal, lo primero que hace es medir el valor actual de su peso corporal utilizando un instrumento llamado balanza y posteriormente lo compara con el peso ideal que se desea alcanzar; la diferencia entre estos valores determina la cantidad de peso debe bajar. 
      
    p.mb-5(data-aos="fade-down") Se invita a visualizar los instrumentos de medición energética, y la medición de presión. 

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p.text-small Continuando con el ejemplo de la persona que desea bajar de peso, para lograr la meta, esta persona toma algunas decisiones acerca de su dieta o actividad física, acompañado siempre de la medición de su peso corporal para verificar si efectivamente se está cumpliendo el objetivo. Sin el uso del instrumento de medición, seguramente la persona no tendrá cómo lograr sus objetivos, ya que estaría “ciega” con respecto a cuáles son sus necesidades y qué tan lejos o cerca está de lograr la meta.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-01.svg', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p.text-small Para entender el significado de los Sistemas de Gestión, es necesario conocer las bases de cada uno de los conceptos asociados a la gestión. En este capítulo conoceremos las generalidades de los sistemas de gestión, hablaremos de la estructura básica de cualquier sistema de gestión denominada normalmente ciclo PHVA y finalmente se descubrirá a qué se refiere cuando se habla de certificación en los sistemas de gestión.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-02.svg', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p.text-small Lo anterior también aplica a todos los procesos que se realizan al interior de una organización, en donde si no se tiene la medición de las variables que afectan al proceso, es imposible lograr un control efectivo que permita alcanzar los objetivos de una forma eficaz y eficiente. 
            p.text-small En este capítulo se mostrarán las variables físicas más comunes donde se utilizan instrumentos de medición más utilizados para el sector industrial y también algunos instrumentos utilizados en instalaciones de generación de energía renovable..
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-03.svg', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Medición de Presión
            p.text-small La presión se define como la división entre el valor de una fuerza aplicada y el área de la superficie donde dicha fuerza se aplica. En el Sistema Internacional (SI) la unidad normalizada para la presión es el Pascal (Pa) definido como la fuerza que ejerce 1 Newton por metro cuadrado [N/m2]. En la industria las unidades de presión que más se utilizan son el Bar y el Psi. 
            p.text-small En la vida cotidiana es común encontrar referencia a la presión cuando se requiere conocer si las llantas de un automóvil están infladas a la presión correcta que en promedio es de 32 Psi, también cuando se requiere conocer la presión a la que llega el suministro de agua potable a nuestros hogares. Es decir, la presión se puede medir en fluidos como líquidos y gases. 
            p.text-small #[strong El resultado de la medida de presión varía dependiendo de las características del lugar] de medición como por ejemplo la altitud sobre el nivel del mar y otras condiciones climáticas. Debido a lo anterior, se ha establecido de manera general dos tipos de medida de presión.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-04.svg', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p.text-small #[strong Presión manométrica:] es el tipo de presión que comúnmente se maneja. Por ejemplo, la presión de las llantas de un automóvil corresponde a presión manométrica. Si un medidor de presión manométrica está en valor cero, quiere decir que la presión del fluido o gas se encuentra en la misma presión atmosférica del lugar donde se está midiendo.
            p.text-small #[strong Presión absoluta:] este tipo de presión incluye el efecto de la presión atmosférica en el valor de la medida. Un instrumento de medición de presión absoluta por lo general no llega a indicar cero en su medida, ya que lo mínimo que va a medir es siempre la presión atmosférica.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-05.svg', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p.text-small Por lo general en una planta industrial los instrumentos miden la presión manométrica, mientras que los instrumentos que miden la presión absoluta se encuentran en procesos donde se requieren presiones por debajo de la presión atmosférica.
            p.text-small Las equivalencias entre las unidades de presión mayormente utilizadas en la industria son:
            p.text-small 1 atm (atmósfera) = 760 mm Hg (milímetros de mercurio)
            p.text-small = 10,13 x 104 Pa (Pascal) = 14,7 P SI = 1,01325 Bar
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-06.svg', alt='')


    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Medición de presión

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | #[strong A.  Medidores de presión tipo mecánico]

    p.mb-5(data-aos="fade-down") Los medidores de presión de tipo mecánico se denominan de esa forma porque su principio de funcionamiento involucra la interacción entre piezas mecánicas y no involucra elementos eléctricos o electrónicos para la medida de presión. 


    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-right")
        p.text-center Dentro de los medidores de presión de tipo mecánico se encuentran tres tipos dependiendo de la tecnología usada:
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Tipos de medidores de presión</i>
        .tabla-a.color-acento-botones.mb-4.tabla-1
          table
            thead
              tr
                th Fuelle
                th Diafragma o Membrana
                th Tubo Bourdon
            tbody
              tr
                td
                  p Se asemeja a un acordeón, pero está fabricado con membranas metálicas en forma de espiral. Cuando se aumenta la presión al interior del fuelle, este se alarga en la dirección que indica la flecha.
                  .img
                    img(src='@/assets/curso/temas/tema1/tema1-55.svg', alt='', style="width:30%; display:inline-block")
                td
                  p Está compuesto por un disco delgado normalmente metálico que tiene una saliente. Similar al caso del fuelle, cuando se aumenta la presión al interior del diafragma, este se desplaza en la dirección que indica la flecha.
                  .img 
                    img(src='@/assets/curso/temas/tema1/tema1-56.svg', alt='', style="width:30%; display:inline-block")
                td
                  p Se compone de un tubo metálico que parece aplastado pero su interior es hueco. Cuando se aplica presión el tubo se desplaza en la dirección que indica la flecha. Este tipo de tecnología es la más utilizada en los manómetros de tipo mecánico.
                  .img 
                    img(src='@/assets/curso/temas/tema1/tema1-57.svg', alt='', style="width:30%; display:inline-block")
              tr
                td
                  a.anexo.mb-4(href="https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53600" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p #[b Nota.] García Gutiérrez, L. (2014). Instrumentación básica de medida y control. AENOR - Asociación Española de Normalización y Certificación. p. 17. 
                td 
                  a.anexo.mb-4(href="https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53600" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p #[b Nota.] García Gutiérrez, L. (2014). Instrumentación básica de medida y control. AENOR - Asociación Española de Normalización y Certificación. p. 17.
                td
                  a.anexo.mb-4(href="https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53600" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p #[b Nota.] García Gutiérrez, L. (2014). Instrumentación básica de medida y control. AENOR - Asociación Española de Normalización y Certificación. p. 18.
              

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente video se podrá ver el interior de un medidor de presión mecánico de tipo tubo Bourdon: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=4dXwxFJPTg8" target="_blank")
                    span Ver video
                    i.fas.fa-video

    //- p.mb-5(data-aos="fade-down") A continuación, se muestran algunas características de los medidores de presión de tipo Bourdon: 

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.p-3.shadown(data-aos="fade-down") 
        .row
          .col-md-6.col-12
            .row
              .col-12
                p En cuanto a los medidores de presión tipo membrana, estos se utilizan normalmente para la medición de presión en rangos pequeños entre 0 y 0,6 bar,  en la siguiente figura puede observarse el esquema respectivo:
                .titulo-sexto.color-acento-contenido
                  p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Esquema de componentes del medidor de presión tipo membrana</i>
              .col-12
                figure
                  img(src='@/assets/curso/temas/tema1/termometros-03.png', alt='') 
                  //- .col-md-6.col-12
              //-   figure
              //-     img(src='@/assets/curso/temas/tema1/tema1-60.png', alt='') 
              //- .col-md-6.col-12
              //-   figure
              //-     img(src='@/assets/curso/temas/tema1/tema1-61.png', alt='') 
          .col-md-6.col-12
            .row
              .col-12
                p A continuación, se muestran algunas características de los medidores de presión de tipo Bourdon, que se utilizan normalmente para la medición de presión en rangos entre 0 y 7000 bar: 
                .titulo-sexto.color-acento-contenido
                  p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Esquema de componentes del medidor de presión tipo Bourdon</i>
              .col-12
                figure
                  img(src='@/assets/curso/temas/tema1/termometros-02.png', alt='') 
              //- .col-md-6.col-12
              //-   figure
              //-     img(src='@/assets/curso/temas/tema1/tema1-59.png', alt='') 
              //- .col-md-6.col-12
              //-   figure
              //-     img(src='@/assets/curso/temas/tema1/tema1-58.png', alt='') 
          //- .col-.col-12
          //-   a.anexo.mb-4(href="https://www.bloginstrumentacion.com/instrumentacion/funcionamiento-de-un-manmetro-mecnico/" target="_blank")
          //-     .anexo__icono
          //-       img(src="@/assets/template/icono-link.svg")
          //-     .anexo__texto
          //-       p Nota. WIKA. (2021). ¿Cómo funcionan los manómetros mecánicos?. 

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | #[strong B. Medidores de presión de tipo electrónico]

    p.mb-3(data-aos="fade-down") Los medidores de presión de tipo electrónico poseen componentes capaces de convertir una señal mecánica en una señal eléctrica que se puede transportar a través de cables o conductores eléctricos hacia un equipo electrónico que pueda interpretar esa señal, convertirla en un valor numérico y mostrarla a través de una pantalla digital. 
    p.mb-5(data-aos="fade-down") Los principios de medición o sensores más usados para los instrumentos de presión son los siguientes:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down-right") 
      .col-12.col-md-6
        .cajon.tarjeta--azul.p-3.mb-2
          h5.text-center Sensores resistivos
          p.text-center.mb-0  Consiste en una membrana fabricada con materiales conductores eléctricos, los cuales al ser sometidas a una presión se deforman cambiando el valor de la resistencia total del circuito. El valor de la resistencia es proporcional a la deformación de la membrana.
        .cajon.tarjeta--azul.p-3.mb-2
          h5.text-center Sensores Piezoresistivos
          p.text-center.mb-0 El funcionamiento es similar al de los sensores resistivos, pero se diferencia en el uso de materiales semiconductores para la fabricación de la membrana.
        .cajon.tarjeta--azul.p-3.mb-2
          h5.text-center Sensores capacitivos
          p.text-center.mb-0 Utiliza una membrana con dos capas metálicas que conforman un condensador. El valor de la capacitancia del condensador varía en función de la deformación de las membranas.
      .col-12.col-md-6
        .shadown.py-2.px-3
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Esquema de componentes del medidor de presión tipo electrónico</i>
          figure
            img(src='@/assets/curso/temas/tema1/termometros-04.png', alt='')
          //- a.anexo.mb-4(href="https://www.bloginstrumentacion.com/productos/como-funciona-un-transmisor-de-presion/" target="_blank")
          //-   .anexo__icono
          //-     img(src="@/assets/template/icono-link.svg")
          //-   .anexo__texto
          //-     p Nota. WIKA. (2021). ¿Cómo funcionan los manómetros mecánicos?. Recuperado el 10 de septiembre de 2021. 


    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Medición de Temperatura

    p.mb-5(data-aos="fade-down") Conocer la medición de temperatura, a partir de la siguiente didáctica.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/tema1-10.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p La temperatura es tal vez la variable física más reconocida en la vida cotidiana. Por ejemplo, cuando una persona está enferma normalmente se mide la temperatura corporal a través de un termómetro para saber si está dentro del rango normal para los seres humanos. También al interior de los vehículos existe un indicador de temperatura del motor y de la temperatura del exterior. 
                
      .col-md-11.col-lg-10.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/tema1-11.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p En la industria, la medición de esta variable es fundamental y actualmente existen cantidad de aplicaciones con rangos de temperaturas y condiciones de proceso diferentes en donde los instrumentos de medición de esta variable están presentes.
      
      .col-md-11.col-lg-10.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/tema1-12.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para las aplicaciones industriales y comerciales, normalmente se utilizan tres escalas para la medición de temperatura: Celsius (C), Fahrenheit (F) y Kelvin (K).
                  p Las equivalencias entre las unidades de temperaturas más usadas en la industria son:
                  p.mb-0 °𝐶 =(°𝐹 − 32)/18   𝑑𝑜𝑛𝑑𝑒     °𝐶: 𝑔𝑟𝑎𝑑𝑜𝑠 𝐶𝑒𝑙𝑠𝑖𝑢𝑠.    °𝐹: 𝑔𝑟𝑎𝑑𝑜𝑠 𝐹𝑎ℎ𝑟𝑒𝑛ℎ𝑒𝑖𝑡. 
                  p 𝐾 = 𝐶 + 273 𝑑𝑜𝑛𝑑𝑒  𝐾:𝐾𝑒𝑙𝑣𝑖𝑛.     𝐶: 𝐶𝑒𝑙𝑠𝑖𝑢𝑠.


    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | #[strong A. Termómetros de vidrio]

    .row.justify-content-center.align-items-center.mb-4.tarjeta.color-acento-contenido.p-3(data-aos="fade-down-right") 
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/temas/tema1/tema1-08.png', alt='') 
      .col-12.col-md-6
        .p-3.py-md-5.mb-2
          p.mb-0 Este instrumento se compone de un depósito fabricado en vidrio que contiene en su interior un elemento que al ser expuesto al calor se expande y sube al interior del depósito. Debido a la fragilidad de sus materiales y a la dificultad de lectura en condiciones ambientales industriales, este tipo de termómetros se utilizan normalmente en laboratorios con ambientes controlados. El elemento usado al interior del depósito de vidrio varía dependiendo del rango de medición del proceso que se desea medir. 
    
    .row.justify-content-center.align-items-center.mb-4.p-3(data-aos="fade-down-right") 
      .col-12.col-md-10
        .cajon.color-acento-botones.px-3.pt-3.pb-1.mb-2
          p En la siguiente tabla se muestran los elementos más usados para los termómetros de vidrio: 
          .titulo-sexto.color-acento-contenido.mb-1
            p.titulo.pb-0.mb-0 <b>Tabla 2. </b> <i>Elementos usados en los termómetros de vidrio</i>
          .tabla-a.color-acento-botones.mb-4.tabla-3
            table.mini-table(style="min-width:auto")
              thead
                tr
                  th Elementos
                  th Rango de medición 
              tbody
                tr.text-center
                  td Mercurio
                  td - 35 °C hasta + 280 °C
                tr.text-center
                  td Pentano
                  td - 200 °C hasta + 20 °C
                tr.text-center
                  td Alcohol
                  td - 110 °C hasta + 50°C
                tr.text-center
                  td Tolueno
                  td - 70°C hasta + 100 °C

    .row.justify-content-center.align-items-center.mb-4.tarjeta.color-acento-contenido.p-3(data-aos="fade-down-right") 
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/temas/tema1/tema1-img-a.png', alt='') 
      .col-12.col-md-6
        .p-3.py-md-5.mb-2
          .mb-0(data-aos="fade-right")
            p.text-center #[b Termómetro Bimetálico]
          p.mb-0 El principio de medición de los termómetros bimetálicos se basa en la diferencia del coeficiente de dilatación existente entre dos metales diferentes (como por ejemplo latón, monel, acero, entre otros) los cuales se encuentran laminados conjuntamente. A este laminado se le denomina láminas bimetálicas y pueden tener formas rectas, curvas, espirales o hélices. La ventaja del termómetro bimetálico es que no posee muchas partes móviles lo cual hace que el mantenimiento de este instrumento sea mínimo y además son económicos.
    p.mb-5(data-aos="fade-down") En este tipo de termómetros, ante los cambios de temperatura, el muelle se deforma y se produce un efecto de rotación en el indicador conectado al muelle. 

    //- .row.mb-5.align-self-stretch.justify-content-center.align-items-center.shadown.p-3
    //-   .col-12.mb-3.mb-lg-0(data-aos="fade-right")
    //-       p.text-center #[b Termómetro Bimetálico]
    //-   .col-12.col-md-6.p-3
    //-     p.text-center Interior de termómetro bimetálico con muelle laminado helicoidal. 
    //-       figure
    //-         img(src='@/assets/curso/temas/tema1/tema1-13.png', alt='') 
    //-   .col-12.col-md-6.p-3
    //-     p.text-center Termómetro bimetálico con conexión a proceso. Fabricante WIKA.
    //-       figure
    //-         img(src='@/assets/curso/temas/tema1/tema1-14.png', alt='')

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | #[strong B. Termómetros de principio resistivo (termorresistencias)]

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .col-12.col-md-6
        p(data-aos="fade-down") Estos instrumentos de medición de temperatura aprovechan el principio de variación de la resistencia de los elementos cuando son expuestos a cambios en la temperatura. El elemento consiste generalmente de un arrollamiento de un conductor muy fino protegido por un material aislante como la cerámica o el vidrio. Este tipo de sensores o sondas también son llamados RTD por su acrónimo en inglés detector de temperatura de resistencia. 
        p(data-aos="fade-down") Los materiales que se usan normalmente en los sensores de temperatura son el platino y el níquel. La sonda o sensor más utilizado en la industria se denomina Pt-100 y es llamado así porque está fabricado con platino y su característica principal es que el valor de su resistencia eléctrica es de 100 ohmios cuando se somete a una temperatura de 0 °C. 
      .col-12.col-md-6
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Detalle constructivo de un sensor de temperatura Pt100.</i>
        figure
          img(src='@/assets/curso/temas/tema1/tema1-15.png', alt='') 
        //- a.anexo.mb-4(href="https://www.tc-sa.es/images/reference/fig6_4.png" target="_blank")
        //-   .anexo__icono
        //-     img(src="@/assets/template/icono-link.svg")
        //-   .anexo__texto
        //-     p Nota. Tomado de https://www.tc-sa.es/images/reference/fig6_4.png

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-16.svg', alt='')
      .col-12.col-md-7
        .cajon.color-acento-botones.p-3.mb-2
          p A diferencia de los termómetros bimetálicos que son completamente de funcionamiento con piezas mecánicas, los termómetros de principio resistivo requieren de un elemento electrónico adicional que detecta el cambio del valor de la resistencia y lo convierte a un valor que se puede visualizar en una pantalla o se puede llevar la señal eléctrica a través de conductores eléctricos a un controlador de procesos. Adicionalmente este tipo de sensores se deben proteger con un bulbo de material metálico el cual estará expuesto directamente al proceso.


    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente video se muestran más detalles acerca de los termómetros de principio resistivo o RTD:  
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=dQJpTusWJHA" target="_blank")
                    span Ver video
                    i.fas.fa-video

    p.mb-5(data-aos="fade-down") Algunas características de los termómetros de principio resistivo pueden observarse en la siguiente figura: 
    
    .row.mb-5.align-self-stretch.justify-content-center.align-items-center.shadown.p-3
      .col-12.col-md-10.col-lg-8.p-3(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Instrumento de medición de temperatura con sensor Pt100.</i>
          figure
            img(src='@/assets/curso/temas/tema1/tema1-17.png', alt='')
          //- a.anexo.mb-4(href="https://www.klay-instruments.com/images/producten/temperatuur/klay-instruments-temperatuuropnemer-tt-4000-02.png" target="_blank")
          //-   .anexo__icono
          //-     img(src="@/assets/template/icono-link.svg")
          //-   .anexo__texto
          //-     p Nota. Tomado de Klay Instruments.

    p.mb-5(data-aos="fade-down") En el siguiente cuadro se muestran algunas características de las sondas RTD dependiendo del tipo de metal de construcción:

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-11.mb-5.mb-lg-0(data-aos="fade-right")
        .cajon.tarjeta--azul.p-3
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 <b>Tabla 3. </b> <i>Características de las sondas RTD </i>
          .tabla-a.color-acento-botones.mb-4.tabla-3
            table
              thead
                tr
                  th Elementos
                  th Resistividad [μΩ/cm]
                  th Intervalo útil de temperatura [°C]
                  th Precisión [°C]
              tbody
                tr.text-center
                  td Platino
                  td 9,83
                  td - 200 hasta + 950
                  td 0,01
                tr.text-center
                  td Níquel
                  td 6,38
                  td - 150 a + 300
                  td 0,5
                tr.text-center
                  td Cobre
                  td 1,56
                  td - 200 a + 120
                  td 0,1

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | #[strong C. Termopares]

    p.mb-4(data-aos="fade-down") Este tipo de instrumentos de medición de temperatura basan su funcionamiento en el principio del efecto Seebeck por medio del cual se demostró que cuando se tienen dos hilos (normalmente en forma de alambre) de metales diferentes unidos en un solo extremo, y dicha unión se calienta o se enfría, se produce un voltaje que se puede correlacionar con el valor real de la temperatura. A diferencia de los termómetros bimetálicos, los termopares no están laminados entre sí, sino que se unen en un extremo con un proceso de soldadura. Existen diferentes tipos de termopar los cuales están clasificados por una letra y se diferencian en los tipo de metales utilizados y el rango de temperatura en que pueden ser usados. La selección del tipo de termopar a utilizar dependerá de las condiciones ambientales del proceso a medir. 

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-right") 
      .col-12
        p A continuación, se muestran algunas características de los termómetros termopar: 

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center.shadown.p-3
      .col-12.mb-3.mb-lg-0(data-aos="fade-right")
          p.text-center #[b Termopar]
      .col-12.col-md-6.p-3
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0.text-small <b>Figura 6. </b> <i>Corte transversal de termómetro tipo termopar con bulbo protector cerámico</i>
        figure
          img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='') 
        //- a.anexo.mb-4.mt-2(href="https://www.bloginstrumentacion.com/files/2014/08/termopar_ceramico-838x471.jpg" target="_blank")
        //-   .anexo__icono
        //-     img(src="@/assets/template/icono-link.svg")
        //-   .anexo__texto
        //-     p Nota. Tomado de WIKA. (2021).
      .col-12.col-md-6.p-3
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0.text-small <b>Figura 7. </b> <i>Aislamiento conductor en el termopar</i>
          figure
            img(src='@/assets/curso/temas/tema1/tema1-21.png', alt='')
          //- a.anexo.mb-4(href="https://www.tc-sa.es/images/thermocouples/type1_large.png" target="_blank")
          //-   .anexo__icono
          //-     img(src="@/assets/template/icono-link.svg")
          //-   .anexo__texto
              p Nota. Tomado de https://www.tc-sa.es/images/thermocouples/type1_large.png

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12
        p El tipo de termopar más utilizado es el tipo K y el tipo J. En la siguiente tabla se muestran algunas características de los tipos de termopar: 
      .col-12.col-md-6
        .cajon.tarjeta--azul.p-3
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 <b>Tabla 4. </b> <i>Tipos y características del termopar</i>
          .tabla-a.color-acento-botones.tabla-3
            table(style="min-width:auto")
              thead
                tr.text-center.text-small
                  th Tipo de Termopar
                  th Rango de medida [°C]
                  th Materiales
              tbody 
                tr.text-center.text-small
                  td J
                  td 0 hasta 750
                  td Hierro - Constantan
                tr.text-center.text-small
                  td K
                  td - 200 hasta 1250
                  td Cromel - Alumel
                tr.text-center.text-small
                  td E
                  td - 200 hasta 900
                  td Cromel - Constantan
                tr.text-center.text-small
                  td T
                  td - 250 hasta 350
                  td Cobre - Constantan
      .col-12.col-md-6
        .cajon.color-acento-contenido.px-3.mb-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-20.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12
        .cajon.tarjeta--azul.p-3.mb-2
          p De forma similar a los termómetros de principio resistivo, los termopares requieren de un elemento electrónico adicional para detectar el cambio del valor del voltaje generado por el efecto Seebeck y convertirlo a un valor que se puede visualizar en una pantalla o se puede llevar la señal eléctrica a través de conductores eléctricos a un controlador de procesos. Adicionalmente este tipo de sensores se deben proteger con un bulbo de material metálico el cual estará expuesto directamente al proceso, como se observa en la siguiente figura: 
      //- .col-12.col-md-6
      //-   .shadown.p-3.row.justify-content-center.align-items-center
      //-     .titulo-sexto.color-acento-contenido
      //-       p.titulo.pb-0.mb-0.text-small <b>Figura 8. </b> <i>Aislamiento conductor en el termopar</i>
      //-     .col-12.col-md-7
      //-       figure
      //-         img(src='@/assets/curso/temas/tema1/tema1-18.png', alt='')
          //- a.anexo.mb-4.mt-2(href="https://www.tc-sa.es/images/thermocouples/type1_large.png" target="_blank")
          //-   .anexo__icono
          //-     img(src="@/assets/template/icono-link.svg")
          //-   .anexo__texto
          //-     p Nota. Tomado de https://www.tc-sa.es/images/thermocouples/type1_large.png

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente video se muestran más detalles acerca de los termopares: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=1wwAQNECC9A" target="_blank")
                    span Ver video
                    i.fas.fa-video

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | #[strong D. Termómetros por radiación infrarroja]

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-6
        p Los termómetros infrarrojos se caracterizan por la facilidad de medir la temperatura de un punto sin tener contacto físico. Este tipo de termómetros utilizan los principios de la ley de Stefan-Boltzmann la cual establece que todas las superficies irradian energía la cual aumenta proporcionalmente a la cuarta potencia de la temperatura absoluta de un cuerpo. Los termómetros por radiación infrarroja detectan los cambios de radicación de una superficie y los convierte internamente en un valor de temperatura.
        p El termómetro de infrarrojos capta la radiación del infrarrojo (invisible al ojo humano) y es capaz de medir temperaturas de hasta 700 °C. La tecnología ha avanzado rápidamente y actualmente existen desde termómetros infrarrojos para medir un solo punto hasta cámaras termográficas que permiten hacer imágenes de áreas completas. Esta última tecnología es muy usada para realizar labores de mantenimiento preventivo en tableros eléctricos, motores y tuberías en las industrias y también para realizar auditorías energéticas.
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/temas/tema1/tema1-22.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente video se explica el funcionamiento del termómetro por radiación infrarroja y su aplicación durante la pandemia. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=y-Ezb8Q5UW0" target="_blank")
                    span Ver video
                    i.fas.fa-video

    Separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3 Medición de Nivel

    p.mb-5(data-aos="fade-down") Conocer la medición de nivel y sus diferentes procesos a continuación:     

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En general existen gran cantidad de tecnologías para la medición y detección de nivel. Dichas tecnologías se pueden aplicar tanto a medición de nivel en líquidos y algunas en la medición de nivel en sólidos con marcadas diferencias por el tipo de aplicación y las condiciones ambientales. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-23.png', alt='')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La medición de nivel es importante cuando se requiere por ejemplo conocer la altura de la columna de agua en un embalse de generación de energía, la cantidad de combustible en un recipiente para un generador de electricidad que utiliza diesel u otro tipo de energético primario, y muchas otras aplicaciones industriales donde conocer esta variable es determinante para los procesos productivos.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-24.png', alt='')

    p.mb-5(data-aos="fade-down") A continuación, se mencionan algunas de las tecnologías más utilizadas en la medición de nivel.

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | #[strong A. Medición continua de nivel con instrumentos tipo Flotador]

    p.mb-4(data-aos="fade-down") Complementar la información de la didáctica de medición de nivel, conociendo diferentes instrumentos de medición.      

    .row.align-items-center.mb-4(data-aos="fade-down-left")
      .col-12
        h5 Medición continua de nivel con instrumentos tipo Flotador
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema1/tema1-25.png', alt='')
      .col-md-6.mb-4.mb-md-0
        p Este tipo de medición aplica solo para los líquidos, ya que el principio del instrumento utiliza un flotador que tiene una densidad muy reducida de forma que flota sobre el líquido. 
      .col-12.mt-4
        h5 En algunos casos 
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema1/tema1-26.png', alt='')
      .col-md-6.mb-4.mb-md-0
        p El flotador va unido a un sistema de cuerdas, poleas y contrapesos que permite en el exterior una visualización del nivel del tanque o recipiente. 
      .col-12.mt-4
        h5 Otra tecnología usada 
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema1/tema1-27.png', alt='')
      .col-md-6.mb-4.mb-md-0
        p Utiliza un imán al interior del flotador, que sube y baja a través de un eje que posee internamente unos microinterruptores llamados #[i Reed switch] que se van cerrando a medida que el flotador pasa por ese punto.
      .col-12.mt-4
        h5 Estos interruptores 
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema1/tema1-28.png', alt='')
      .col-md-6.mb-4.mb-md-0
        p Están acoplados a unas resistencias y a través de un circuito electrónico se detecta el valor de la resistencia para conocer el valor del nivel del líquido a medir.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente video se muestra el funcionamiento de un medidor de nivel tipo flotador con cadena de resistencias #[i reed switch]: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ujPcgh1JDLc" target="_blank")
                    span Ver video
                    i.fas.fa-video

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | #[strong B. Medición continua de nivel con indicadores tipo mirilla]

    p.mb-4(data-aos="fade-down") Este tipo de instrumentos permiten visualizar en sitio el valor del nivel del fluido al interior de un recipiente. Se basa en el principio físico de los vasos comunicantes en donde si el líquido está en reposo, alcanza el mismo nivel si se tiene uno o varios recipientes interconectados por su parte inferior. Por lo general para este tipo de medida se cuenta con un recipiente exterior y de menor tamaño instalado en paralelo al recipiente a medir y se encuentra interconectado por la parte inferior y exterior del mismo. A medida que el nivel del líquido sube y baja al interior del recipiente principal, esto se ve reflejado en el medidor exterior. Es importante que el fluido a medir esté libre de sólidos e impurezas para que se pueda obtener una medida confiable.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente video se muestra el funcionamiento de un medidor de nivel con indicador tipo mirilla: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=zlaTXjhaISg" target="_blank")
                    span Ver video
                    i.fas.fa-video

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | #[strong C. Medición continua de nivel por presión hidrostática]

    p.mb-4(data-aos="fade-down") En muchas aplicaciones para la medición de nivel en líquidos, se utilizan medidores de presión aprovechando el principio físico de la presión hidrostática en donde existe una relación entre la altura de la columna del fluido (para cualquier valor de densidad) y la presión de este en el fondo de dicha columna, independientemente de la forma del recipiente. En otras palabras, es posible calcular la altura de un líquido dentro de un recipiente si se mide la presión generada en el fondo y se conoce su densidad.

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-10.mb-5.mb-lg-0(data-aos="fade-right")
        .tarjeta.tarjeta--azul.p-3
          p.text-center #[b La relación matemática que ilustra el principio de la presión hidrostática es:]
          .shadown.p-3(style="background-color:#FFFFFF")
            p.mb-0.text-center P = ρ ×g × h   
            p.mb-0.text-center Donde:
            p.mb-0 P: presión hidrostática (Pa), ρ: densidad del fluido (kg/m3),g: aceleración de la gravedad ( m/s2),
            p.mb-0 h: altura de la columna vertical de fluido por encima del punto de medida de presión (m).

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente video se muestra el funcionamiento básico de un medidor de nivel por presión hidrostática:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=YaSW_SIhe4E" target="_blank")
                    span Ver video
                    i.fas.fa-video

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | #[strong D. Medición continua de nivel con instrumentos sin contacto]

    p.mb-4(data-aos="fade-down") Explorar la siguiente didáctica, descubriendo cómo medir niveles con instrumentos sin contacto.

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down-right")
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Medición continua de nivel con instrumentos sin contacto.
            p Los anteriores métodos de medición continua de nivel utilizan sensores que están en contacto directo con el fluido a medir.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-30.png', alt='')
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 En las aplicaciones 
            p Y condiciones ambientales donde no es conveniente el contacto directo del sensor con el fluido o sólido a medir, es posible utilizar sensores que utilizan tecnologías sin contacto. Las tecnologías más utilizadas en la industria para este tipo de aplicaciones son:
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-31.png', alt='')
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Ultrasonido: 
            p El medidor internamente posee un transmisor que envía una onda de ultrasonido hacia la superficie a medir, para posteriormente a través de un receptor instalado en el mismo medidor sea recibida de vuelta la señal una vez haya rebotado en la superficie a medir. Electrónicamente el medidor calcula el tiempo de ida y regreso de la señal y con este valor determina la distancia a la cual se encuentra. Los sensores de ultrasonido trabajan por lo general a una frecuencia de entre 10 kHz y 100 kHz.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-32.png', alt='')
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Radar: 
            p Los sensores de nivel de tipo radar utilizan el mismo principio de funcionamiento de los sensores por ultrasonido, pero emiten pulsos de ondas entre los 5,6 GHz y 26 GHz. Las ondas del radar son más rápidas y poseen mayor versatilidad al no verse afectada por las condiciones ambientales como el viento, el vapor, etc.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-33.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente video se muestra el funcionamiento básico de un medidor de nivel por ultrasonido y un medidor de nivel por radar.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Rq_EPoKHmgo" target="_blank")
                    span Ver video
                    i.fas.fa-video

    Separador
    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.4 Medición de radiación solar (piranómetros)

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-62.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para llevar a cabo la medición de la radiación solar incidente sobre la superficie de la Tierra, se hace uso del piranómetro, el cual consiste en un sensor diseñado para medir la densidad del flujo de radiación solar en un campo de 180 grados. A continuación, encontrará más información al respecto: 

    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down-left")
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-34.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Para el análisis de factibilidad para el uso de la energía solar como energético primario en un lugar determinado, se debe tener la capacidad de medir el valor de la radiación incidente sobre un área determinada.  
        .row.align-items-center.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-35.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p La energía disponible del sol depende de la localización geográfica de un punto en el planeta tierra (latitud, longitud, elevación) y de los factores climáticos como las estaciones del año.
        .row.align-items-center.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-36.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p La variable utilizada para determinar el potencial solar sobre un lugar específico se llama Radiación Global y se mide sobre una superficie horizontal en un ángulo de 180 grados.  
        .row.align-items-center.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-37.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Se realiza la medición mediante un piranómetro el cual determina el flujo de energía por unidad de área y de tiempo sobre la superficie horizontal expuesta al sol sin ningún tipo de sombra.
        .row.align-items-center.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-38.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p La unidad de medida de la Radiación Global está dada en Joule por segundo (J/s) equivalente a un vatio (W).
        .row.align-items-center.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-39.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Trabaja mediante el aprovechamiento de la diferencia de temperatura que se presenta entre un material de color negro y otro de color blanco instalados al interior de una cúpula de vidrio óptico transparente utilizada para proteger los sensores de los factores externos como la lluvia y el polvo. 
        .row.align-items-center.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-40.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p La diferencia de temperatura produce una diferencia de voltaje entre dos terminales y este es convertido electrónicamente a los valores de radiación global obtenidos. 

    //- p.mb-4(data-aos="fade-down") Algunas imágenes de piranómetros se muestran a continuación:

    //- .row.mb-5.align-self-stretch.justify-content-center.align-items-center
    //-   .col-12.col-md-12.mb-5.mb-lg-0(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema1/tema1-41.png', alt='') 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente video se muestra algunas características de los piranómetros: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=0ud7h5_G-5U" target="_blank")
                    span Ver video
                    i.fas.fa-video

    Separador
    #t_1_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.5 Medición de velocidad y dirección del viento

    p.mb-4(data-aos="fade-down") Para el análisis de factibilidad para el uso de la energía eólica como energético primario en un lugar determinado, se debe tener como mínimo la capacidad de medir el valor de la velocidad y la dirección del viento. 


    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-6(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-3
          .col-12(data-aos="fade-right")
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-play(style="color:#25FFFF")
                | #[strong A. Medición de velocidad]
        p.mb-3(data-aos="fade-down") El instrumento de medición utilizado para este fin se denomina anemómetro y el más utilizado es el anemómetro de rotación, que a subes puede ser de tipo cazoletas o de tipo hélice. Ambos funcionan con el principio en que la velocidad de rotación es proporcional a la velocidad del viento. Dicha rotación puede medirse contando mecánicamente el número de rotaciones por medio de un sensor óptico o a través de un pequeño motor eléctrico que actúa como generador. Los anemómetros de tres cazoletas semicónicas y semiesféricas son los más utilizados, y que permiten medir las componentes horizontales del viento.
        .row.justify-content-center.align-items-center.mb-3
          .col-12(data-aos="fade-right")
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-play(style="color:#25FFFF")
                | #[strong B. Medición de dirección del viento]
        p.mb-3(data-aos="fade-down") El instrumento empleado generalmente para medir la dirección del viento se denomina veleta, el cual consiste en un dispositivo instalado sobre un eje vertical y de giro libre, de tal modo que puede moverse cuando el viento cambia de dirección. En la mayoría de los instrumentos, el movimiento de la veleta está amortiguado para prevenir cambios demasiado rápidos o bruscos de la dirección del viento.
      .col-12.col-md-6(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-new.png', alt='') 
        //- .row.justify-content-center.align-items-center.shadown.p-3
        //-   .titulo-sexto.color-acento-contenido
        //-     p.titulo.pb-0.mb-0.text-small <b>Figura 9. </b> <i>Anemómetro</i>
        //-   .col-12.col-md-6
        //-     figure
        //-       img(src='@/assets/curso/temas/tema1/tema1-42.png', alt='') 

            
    //- .row.justify-content-center.align-items-center.mb-3
    //-   .col-12.col-md-6(data-aos="fade-right")
    //-     .row.justify-content-center.align-items-center.shadown.p-3
    //-       .titulo-sexto.color-acento-contenido
    //-         p.titulo.pb-0.mb-0.text-small <b>Figura 10. </b> <i>Imagen real de una veleta</i>
    //-       .col-12.col-md-6
    //-         figure
    //-           img(src='@/assets/curso/temas/tema1/tema1-43.png', alt='') 

    Separador
    #t_1_6.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.6 Características generales de los instrumentos de medición

    p.mb-5(data-aos="fade-down") Explorar las características generales de los instrumentos de medición.

    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down-left")
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h5 Panorama desde las empresas y organizaciones
            p Reconocer las características principales de cada instrumento de medición es muy importante para la selección del medidor adecuado dependiendo de la necesidad específica y la variable que se pretende medir. Para este fin, cada instrumento de medición posee un documento denominado Ficha Técnica en donde se muestran las principales características.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-44.png', alt='')
        .row.align-items-center.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h5 A continuación, se describen las características más importantes para los instrumentos de medida:
            p #[strong Rango de Medida:] corresponde al conjunto de valores comprendidos entre el valor mínimo y el valor máximo de medida del instrumento. Al valor mínimo de la variable se le conoce como LRV y al valor máximo de la variable se le conoce como URV.
            p #[strong Alcance o Spam:] es la diferencia algebraica entre los valores del URV y el LRV.
            p #[strong Error:] se define como la diferencia en porcentaje entre el valor medido por el instrumento y el valor real de la variable medida. Si se desea conocer el valor del error en una medida, se utiliza la siguiente fórmula:
            img(src='@/assets/curso/temas/tema1/tema1-63.svg', alt='')
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-45.png', alt='')
        .row.align-items-center.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h5 Otras características importantes son:
            p #[strong Exactitud.] Esta cantidad determina qué tan cerca se encuentra el valor medido por el instrumento del valor real de la variable a medir. Por lo general se relaciona con el concepto de error y en las hojas de especificaciones de los medidores se muestra el porcentaje de error con respecto al valor máximo de la variable URV.
            p #[strong Incertidumbre en la medida:] Es el valor obtenido cuando se realiza la comparación entre el valor medido por un instrumento de medida y otro instrumento con mayor o igual exactitud normalmente llamado patrón.
            p #[strong Precisión:] Indica el grado de repetibilidad del instrumento para obtener el mismo valor medido en varias ocasiones.
            p #[strong Resolución:] Corresponde al valor mínimo confiable que puede medir el instrumento. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-46.png', alt='')

    Separador
    #t_1_7.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.7 Calibración de los instrumentos de medición

    p.mb-3(data-aos="fade-down") La calibración de los instrumentos de medición es de gran importancia, por esto se invita a navegar por la siguiente didáctica.
    
    .row.align-items-center.justify-content-center.mb-5
      .col-12
        p.mb-4.text-center(data-aos="fade-down") #[b Calibración de los instrumentos de medición.]
      .col-md-6.mb-4.mb-md-0(data-aos="fade-left")
        p En la práctica, el valor real de la variable a medir en ningún momento se va a obtener debido a que ningún instrumento de medición tiene la capacidad de medir con un error de cero. Siempre existirá un grado de incertidumbre que puede ser manejado y calculado con la información de las hojas de datos de cada instrumento. 
        p Mientras el instrumento sea más exacto, preciso y con mejor resolución, las mediciones mostradas por el instrumento se aproximan al valor real de la variable física a medir. Debido a que internamente los instrumentos de medición están compuestos de partes mecánicas y electrónicas, con el paso del tiempo y por la exposición a las condiciones ambientales del proceso, este tipo de componentes tienden a perder algunas propiedades lo cual puede en muchas ocasiones producir desviaciones en la exactitud y precisión que tienen de fábrica. 
      .col-md-6(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-47.png', alt='')

    p.mb-5(data-aos="fade-down") Por esta razón, si se desea garantizar que los instrumentos de medición se encuentran en los rangos adecuados de desviación de las mediciones, estos se deben calibrar.

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-48.png', alt='') 
          
    p.mb-5(data-aos="fade-down") De manera general, se considera que un instrumento de medición está correctamente calibrado cuando en todos los puntos de su rango de medida, la diferencia entre el valor real de la variable y el valor medido por el instrumento está dentro de los límites del rango de exactitud del instrumento de acuerdo con sus especificaciones. Ahora bien, ¿cómo se puede obtener el valor real de la variable si ningún medidor puede obtener el valor de la variable real? 


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/tema1-49.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Lo anterior se realiza utilizando unos equipos o instrumentos especiales que se encuentran en laboratorios certificados por los organismos de acreditación (en el caso de Colombia es la ONAC) los cuales tienen valores de precisión, exactitud y otras características mejores que los instrumentos a calibrar, lo cual que permiten utilizarlos como referencias válidas para comparar las medidas del medidor a calibrar. 

      .col-12.col-lg-11.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/tema1-50.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Las condiciones ambientales al interior de los laboratorios de calibración permiten que se garantice la correcta realización de las mediciones sin afectaciones externas. A los equipos utilizados como referencia para la calibración de los instrumentos de medición se les denomina como “equipo patrón primario”.
      .col-12.col-lg-11.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/tema1-51.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Los equipos patrones primarios suelen ser muy costosos a la hora de adquirirlos y también su mantenimiento lo debe hacer personal especializado lo cual resulta también en un valor alto de mantenimiento.
      .col-12.col-lg-11.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/tema1-52.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Por tal razón las industrias y demás empresas envían sus equipos de medición a estos laboratorios y pagan por el servicio de calibración. 
      .col-12.col-lg-11.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/tema1-53.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p El servicio de calibración también incluye el ajuste (cuando es posible) o corrección de los errores de acuerdo con la manipulación de algunos elementos que tiene internamente el instrumento para tal fin.

    //- p.mb-4(data-aos="fade-down") Algunos ejemplos de equipos de calibración, se encuentran a continuación; la figura a. muestra un bloque seco marca WIKA. Utilizado para calibración de instrumentos de medición de temperatura. Mientras que la figura b. se trata de un comprobador de peso muerto marca Fluke. Utilizado para calibración de instrumentos de medición de presión. 
          
    //- .row.mb-5.align-self-stretch.justify-content-center.align-items-center.shadown.p-3
    //-   .col-12
    //-     .titulo-sexto.color-acento-contenido
    //-       p.titulo.pb-0.mb-0 <b>Figura 11. </b> <i>Equipos de calibración.</i>
    //-   .col-12.col-md-6
    //-     .row.justify-content-center.align-items-center
    //-       .col-12.col-md-6
    //-         figure
    //-           img(src='@/assets/curso/temas/tema1/tema1-29.png', alt='') 
    //-     a.anexo.mb-4.mt-2(href="https://www.wika.co/upload/WIKA_Thumbnails/Product-Detail-Large/PIC_PR_CTD9100_650_de_de_47959.jpg.png" target="_blank")
    //-       .anexo__icono
    //-         img(src="@/assets/template/icono-link.svg")
    //-       .anexo__texto
    //-         p Nota. Tomado de WIKA. (2021). 
    //-   .col-12.col-md-6
    //-     .row.justify-content-center.align-items-center
    //-       .col-12.col-md-9
    //-         figure
    //-           img(src='@/assets/curso/temas/tema1/tema1-54.png', alt='') 
    //-     a.anexo.mb-4.mt-2(href="https://us.flukecal.com/sites/default/files/imagecache/product-detail-zoom/sites/flukecal.com/files/assets/products/PCAL-E-DWT-H_single_front_01b_328px_x_220px.jpg" target="_blank")
    //-       .anexo__icono
    //-         img(src="@/assets/template/icono-link.svg")
    //-       .anexo__texto
    //-         p Nota. Tomado de Fluke. 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6
        p Para la calibración de instrumentos de medición de temperatura pueden utilizarse mediante equipos de bloque seco o mediante verificador de peso muerto, este último utilizado para la calibración de instrumentos de medición de presión. El resultado del proceso de calibración es un certificado emitido por el laboratorio acreditado para tal fin, donde se muestran los puntos de trabajo del medidor analizado y los valores de la desviación medido. 
      .col-md-6
        figure
          img(src='@/assets/curso/temas/tema1/tema1-54-1.png', alt='')

    p.mb-4(data-aos="fade-down") El resultado del proceso de calibración es un certificado emitido por el laboratorio acreditado para tal fin, donde se muestran los puntos de trabajo del medidor analizado y los valores de la desviación medido.
    p.mb-4(data-aos="fade-down") Los datos básicos que debe contener un certificado de calibración son los siguientes:

    //- .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down-left")
    //-   LineaTiempoC.color-acento-contenido(text-small)
    //-     .row.justify-content-center.align-items-center(titulo="Paso 1")
    //-       .col-md-11.col-11.mb-4.mb-md-0
    //-         p Valor medido por el equipo patrón.
    //-     .row.justify-content-center.align-items-center(titulo="Paso 2")
    //-       .col-md-11.col-11.mb-4.mb-md-0
    //-         p Valor medido por el instrumento a calibrar.
    //-     .row.justify-content-center.align-items-center(titulo="Paso 3")
    //-       .col-md-11.col-11.mb-4.mb-md-0
    //-         p Diferencia entre el valor medido por el equipo patrón y el medido por el instrumento a calibrar.
    //-     .row.justify-content-center.align-items-center(titulo="Paso 4")
    //-       .col-md-11.col-11.mb-4.mb-md-0
    //-         p Especificación de exactitud.
    //-     .row.justify-content-center.align-items-center(titulo="Paso 5")
    //-       .col-md-11.col-11.mb-4.mb-md-0
    //-         p Identificación del equipo patrón utilizado.
    
    .cajon.color-acento-botones.p-3.mb-5(data-aos="fade-down-left")
      .px-4
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | Valor medido por el equipo patrón.
          li 
            .lista-ol--cuadro__vineta
              span b
            | Valor medido por el instrumento a calibrar.
          li 
            .lista-ol--cuadro__vineta
              span c
            | Diferencia entre el valor medido por el equipo patrón y el medido por el instrumento a calibrar.
          li 
            .lista-ol--cuadro__vineta
              span d
            | Especificación de exactitud.
          li 
            .lista-ol--cuadro__vineta
              span e
            | Identificación del equipo patrón utilizado.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente enlace, se encuentra el documento ejemplo de un certificado de calibración para un medidor de temperatura: 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/1_7_Ejemplo_Certificado_de_Calibracion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
