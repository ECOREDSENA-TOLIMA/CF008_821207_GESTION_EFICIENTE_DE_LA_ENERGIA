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

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-07.svg', alt='') 


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

    p.mb-5(data-aos="fade-down") A continuación, se muestran algunas características de los medidores de presión de tipo Bourdon: 

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-08.svg', alt='') 


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
        figure
          img(src='@/assets/curso/temas/tema1/tema1-09.svg', alt='')


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

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down-right") 
      .col-12.col-md-6
        .cajon.color-acento-contenido.p-3.mb-2
          p.text-center.mb-0  Este instrumento se compone de un depósito fabricado en vidrio que contiene en su interior un elemento que al ser expuesto al calor se expande y sube al interior del depósito. Debido a la fragilidad de sus materiales y a la dificultad de lectura en condiciones ambientales industriales, este tipo de termómetros se utilizan normalmente en laboratorios con ambientes controlados. El elemento usado al interior del depósito de vidrio varía dependiendo del rango de medición del proceso que se desea medir. 
      .col-12.col-md-6
        .cajon.color-acento-botones.p-3.mb-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-13.svg', alt='')

    p.mb-5(data-aos="fade-down") A continuación, se muestran algunas características de los termómetros de vidrio: 

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-14.svg', alt='') 

    p.mb-3(data-aos="fade-down") El principio de medición de los termómetros bimetálicos se basa en la diferencia del coeficiente de dilatación existente entre dos metales diferentes (como por ejemplo latón, monel, acero, entre otros) los cuales se encuentran laminados conjuntamente. A este laminado se le denomina láminas bimetálicas y pueden tener formas rectas, curvas, espirales o hélices. La ventaja del termómetro bimetálico es que no posee muchas partes móviles lo cual hace que el mantenimiento de este instrumento sea mínimo y además son económicos.
    A.mb-5(data-aos="fade-down") continuación, se muestran algunas características de los termómetros de vidrio:

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-15.svg', alt='') 

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | #[strong B. Termómetros de principio resistivo (termorresistencias)]

    p.mb-5(data-aos="fade-down") Estos instrumentos de medición de temperatura aprovechan el principio de variación de la resistencia de los elementos cuando son expuestos a cambios en la temperatura. El elemento consiste generalmente de un arrollamiento de un conductor muy fino protegido por un material aislante como la cerámica o el vidrio. Este tipo de sensores o sondas también son llamados RTD por su acrónimo en inglés detector de temperatura de resistencia. Los materiales que se usan normalmente en los sensores de temperatura son el platino y el níquel. La sonda o sensor más utilizado en la industria se denomina Pt-100 y es llamado así porque está fabricado con platino y su característica principal es que el valor de su resistencia eléctrica es de 100 ohmios cuando se somete a una temperatura de 0 °C. 

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

    p.mb-5(data-aos="fade-down") A continuación, se muestran algunas características de los termómetros de principio resistivo: 

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-17.svg', alt='') 

    p.mb-5(data-aos="fade-down") En el siguiente cuadro se muestran algunas características de las sondas RTD dependiendo del tipo de metal de construcción:

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-11.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-18.svg', alt='') 

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | #[strong C. Termopares]

    p.mb-5(data-aos="fade-down") Este tipo de instrumentos de medición de temperatura basan su funcionamiento en el principio del efecto Seebeck por medio del cual se demostró que cuando se tienen dos hilos (normalmente en forma de alambre) de metales diferentes unidos en un solo extremo, y dicha unión se calienta o se enfría, se produce un voltaje que se puede correlacionar con el valor real de la temperatura. A diferencia de los termómetros bimetálicos, los termopares no están laminados entre sí, sino que se unen en un extremo con un proceso de soldadura. Existen diferentes tipos de termopar los cuales están clasificados por una letra y se diferencian en los tipo de metales utilizados y el rango de temperatura en que pueden ser usados. La selección del tipo de termopar a utilizar dependerá de las condiciones ambientales del proceso a medir. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-6
        .cajon.color-acento-botones.p-3.mb-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-19.svg', alt='')
      .col-12.col-md-6
        .cajon.color-acento-contenido.px-3.mb-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-20.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12
        .cajon.color-acento-botones.p-3.mb-2
          p De forma similar a los termómetros de principio resistivo, los termopares requieren de un elemento electrónico adicional para detectar el cambio del valor del voltaje generado por el efecto Seebeck y convertirlo a un valor que se puede visualizar en una pantalla o se puede llevar la señal eléctrica a través de conductores eléctricos a un controlador de procesos. Adicionalmente este tipo de sensores se deben proteger con un bulbo de material metálico el cual estará expuesto directamente al proceso.

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

    p.mb-5(data-aos="fade-down") A continuación, se muestran algunas características de los termómetros de principio resistivo: 

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-11.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-21.svg', alt='') 


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
