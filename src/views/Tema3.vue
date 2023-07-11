<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Dimensionamiento de un sistema de generación con fuentes renovables

    p.mb-3(data-aos="fade-down-right") Conocer las tipologías y equipos relacionados con el potencial energético.
    p.mb-5(data-aos="fade-down-right") El dimensionamiento de un sistema de generación de energía con fuentes renovables implica inicialmente la evaluación del potencial energético en el lugar de la instalación. Generalmente para el caso de la energía solar y la energía eólica, se utilizan los recursos mostrados en el anterior capítulo como los mapas y las bases de datos de información climatológica. 

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-5.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-01.png', alt='') 
      .col-12.col-md-7.mb-5.mb-lg-0(data-aos="fade-right") 
        .cajon.color-acento-contenido.p-3
          p Una vez se ha detectado el potencial para la generación de energía con fuentes renovables se procede a realizar un análisis más detallado con visitas al sitio y si es posible se realizan mediciones locales, fotografías aéreas y satelitales, levantamientos topográficos, identificación de obstáculos, medios de transporte, entre otros. Una vez sea recopilada esta información, se realiza un proceso llamado diseño en el cual se obtiene generalmente como salida la cantidad de energía generada y los componentes necesarios para la instalación. 
        p Las fases para el dimensionamiento de un sistema de generación con energía renovable varían en su complejidad y tiempo de desarrollo dependiendo de la magnitud de la energía que se pretende generar. 

    p.mb-3(data-aos="fade-down-right") En este sentido el proceso de dimensionamiento de energía eléctrica para un hogar residencial puede ser en algunos aspectos diferentes a un sistema de generación para el sistema interconectado nacional.
    p.mb-5(data-aos="fade-down-right") En este capítulo se mostrarán de manera general los pasos para el dimensionamiento de uno de los sistemas de generación con energía renovable con mayor crecimiento en el país: Los Sistemas Fotovoltaicos.

    Separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.1 Tipologías y equipos 

    p.mb-3(data-aos="fade-down-right") Conocer las tipologías y equipos relacionados con el potencial energético.
    p.mb-5(data-aos="fade-down-right") Actualmente existen diversas configuraciones para los sistemas fotovoltaicos. Sin embargo, son tres (3) las tipologías más utilizadas y cada una de ellas se usa dependiendo de las necesidades del usuario final o del objetivo del proyecto. Las tipologías más comunes que podremos encontrar son las siguientes:
    
    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-12.mb-5.mb-lg-0(data-aos="fade-right") 
        .cajon.color-acento-botones.p-3
          h5 Sistemas Autónomos:
          p Los sistemas fotovoltaicos autónomos están diseñados para cubrir completamente la demanda de electricidad de un lugar durante todo el tiempo, sin necesidad de utilizar una conexión a la red de electricidad convencional suministrada por los comercializadores de energía.

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-7.mb-5.mb-lg-0(data-aos="fade-right") 
        p También se utilizan en zonas rurales o urbanas donde a pesar de contar con el suministro de la red convencional, la calidad del servicio no es buena debido a cortes inesperados o variaciones perjudiciales de voltaje y el usuario desea tener su propia fuente de electricidad. Otras aplicaciones de los sistemas autónomos son la alimentación de torres de telecomunicaciones en lugares de difícil acceso, bombeo de agua para fincas agrícolas, señalización en vías y carreteras, alumbrado público, entre otras. Este tipo de instalaciones no están tan generalizadas debido al alto coste de las baterías (aproximadamente el 50% del costo del proyecto completo) y su recambio en aproximadamente 4 o 5 años de uso, lo cual hace que el retorno de la inversión se dé en muchos años.
      .col-12.col-md-5.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-02.png', alt='') 

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong A. Sistemas autónomos:] con el fin de completar la temática anterior, se invita a explorar la siguiente didáctica.


    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down-right")
      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/tema3-03.svg' alt='AvatarTop')
        h4.text-center Subsistema de generación
        p.text-center Compuesto por los paneles solares y los elementos de instalación y sujeción.
      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/tema3-04.svg' alt='AvatarTop')
        h4.text-center Subsistema de regulación
        p.text-center Permite la correcta interacción y gestión de carga y entrega de energía entre los paneles solares y el sistema de acumulación. El componente principal se llama regulador de carga.
      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/tema3-05.svg' alt='AvatarTop')
        h4.text-center Subsistema de acumulación
        p.text-center Se compone de las baterías que almacenan la energía y la entregan a la carga en los momentos en que no hay radiación disponible.
      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/tema3-06.svg' alt='AvatarTop')
        h4.text-center Inversor
        p.text-center Dispositivo electrónico que se encarga de transformar a corriente alterna el voltaje que se generan en los paneles y entregan las baterías en corriente continua, para alimentar las cargas a 110 VAC o 220 VAC.
      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/tema3-07.svg' alt='AvatarTop')
        h4.text-center Cargas en corriente continua
        p.text-center En ocasiones es conveniente reemplazar algunos de los equipos diseñados para funcionar con corriente alterna, por equipos que funcionan con corriente continua. El ejemplo más común es el reemplazo de las luminarias en AC por luminarias que funcionan con corriente continua. También existen en el mercado algunos electrodomésticos que pueden funcionar de esta manera.
      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/tema3-08.svg' alt='AvatarTop')
        h4.text-center Cargas en corriente alterna
        p.text-center Se refiere a todas las cargas que normalmente se utilizan en una vivienda, oficina y en general las que tienen como voltaje de alimentación 110 VAC o 220 VAC para el caso de Colombia.

    p.mb-5(data-aos="fade-down-right") Para observar más detalles del funcionamiento y componentes de los sistemas fotovoltaicos autónomos, se recomienda ver el siguiente video.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small ¿Cuáles son los Componentes de Sistemas Fotovoltaicos Autónomos?
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=9FYhr60VFaU" target="_blank")
                    span Ver video
                    i.fas.fa-video

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong B. Sistemas conectados a la Red:] revisa la información correspondiente a los sistemas conectados a la red. 

    p.mb-5(data-aos="fade-down-right") Los sistemas fotovoltaicos conectados a la red o a la línea eléctrica convencional, son un tipo de instalación en donde intervienen básicamente cuatro subsistemas:

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-7.mb-5.mb-lg-0(data-aos="fade-right") 
        p Subsistema de generación: compuesto por los paneles solares y los elementos de instalación y sujeción.
        p #[strong Inversor:] dispositivo electrónico que se encarga de transformar a corriente alterna el voltaje que en corriente continua se generan en los paneles, para alimentar las cargas a 110 VAC o 220 VAC y también inyectar la energía sobrante a la red convencional. Adicionalmente, el sistema inversor se encarga de gestionar el flujo de energía que viene desde los paneles y el flujo de energía que viene desde la red eléctrica convencional. 
      .col-12.col-md-5.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-09.png', alt='') 

    p.mb-3(data-aos="fade-down-right") #[strong Línea Eléctrica convencional:] corresponde a la acometida eléctrica de la red de distribución propiedad de los operadores de red y que suministra la electricidad de forma convencional a los usuarios a través de un comercializador de energía. Es importante mencionar que para este tipo de sistemas fotovoltaicos es imprescindible que exista la línea eléctrica convencional, ya que el funcionamiento del sistema completo se debe sincronizar todo el tiempo con la frecuencia y el voltaje de dicha red. 
    p.mb-3(data-aos="fade-down-right") En los momentos donde no haya servicio de electricidad de la red convencional, el sistema fotovoltaico se desconecta y no genera electricidad. Por lo tanto, no se debe considerar como un sistema de respaldo. Si se desea tener la posibilidad de funcionar como respaldo y a la vez conectado a la red, se debe instalar un sistema hibrido con baterías como se explicará más adelante.
    p.mb-4(data-aos="fade-down-right") #[strong Subsistema de medición:] se compone de un medidor de energía denominado como bidireccional. Internamente el medidor funciona como uno convencional, sin embargo, a diferencia de este, tiene la capacidad de medir y discriminar la cantidad de energía que viene de la red convencional y la cantidad de energía que viene desde el sistema fotovoltaico, con el fin de determinar al final del mes (o en cualquier momento) cuánta energía que viene de la red convencional debe facturar el comercializador de energía al usuario.

    h5.mb-4(data-aos="fade-down-right") En la operación de los sistemas conectados a la Red, ocurren las siguientes situaciones durante todo un día normal de funcionamiento:

    .row.mb-4.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-10.png', alt='') 
      .col-12.col-md-7.mb-4.mb-lg-0(data-aos="fade-right") 
        p #[strong Autoconsumo:] cuando el sistema solar fotovoltaico se diseña para cubrir totalmente la demanda de electricidad del lugar y existe durante el día valores de radiación aceptables o altos, toda la energía que consume la vivienda (o lugar de diseño) proviene de los paneles solares y el flujo de energía que viene de la red convencional es cero. Es decir, no se consume energía de la red convencional y el medidor de facturación del comercializador por concepto de consumo estará en cero. Es precisamente en estos casos donde se ahorra dinero por concepto de pago por la factura de energía del comercializador.

    p.mb-4(data-aos="fade-down-right") #[strong Consumo Mixto:] cuando el sistema solar fotovoltaico está diseñado para cubrir sólo parte de la demanda del lugar de instalación o cuando a pesar de que el sistema esté diseñado para cubrir toda la demanda del lugar, pero existen en ese momento valores bajos de radiación y el sistema no pueda entregar toda su capacidad, se requiere que la parte restante sea asumida por la red convencional. Es decir, en esos casos la energía que alimenta la vivienda o lugar de instalación proviene de dos fuentes: el sistema fotovoltaico y la red convencional. El medidor de facturación registrará sólo la energía que proviene de la red.

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-6.mb-5.mb-lg-0(data-aos="fade-right") 
        p #[strong Consumo Convencional:] en las horas donde la radiación solar es muy baja o cero (como por ejemplo en la noche), el sistema fotovoltaico no generará energía, por lo tanto, toda la energía que atiende la demanda del consumo de la vivienda o el lugar de instalación proviene de la red convencional. En este caso el medidor de facturación registrará el consumo total del lugar de la instalación.
        p #[strong Inyección a red:] en los momentos donde la demanda de energía del usuario es muy baja y los valores de radiación solar son aceptables o altos, el sistema fotovoltaico generará energía a su capacidad nominal, se presenta una situación denominada excedente de energía, lo cual quiere decir que la energía generada por el sistema fotovoltaico excede las necesidades de la vivienda o lugar de instalación. Este tipo de situaciones ocurre por ejemplo cuando la familia de una vivienda sale de vacaciones, o en fines de semana cuando la vivienda se encuentra sin habitantes. 
      .col-12.col-md-6.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-11.png', alt='')

    p.mb-3(data-aos="fade-down-right") Otro ejemplo son los edificios de oficinas donde los fines de semana están con una ocupación muy baja, debido a que son días no laborales. Como la energía tiene que fluir de alguna manera, estos excedentes se “inyectan” a la red convencional. En esos momentos el medidor de facturación registrará un consumo de cero, pero también registrará estos excedentes provenientes del lugar. El usuario podrá obtener el beneficio de recibir un abono por parte de la comercializadora de energía quien le reconocerá una tarifa al usuario por la energía inyectada a la red. En Colombia este tipo de transacciones está regulada mediante la resolución CREG 030 de 2018 donde se establecen los parámetros para las actividades de autogeneración a pequeña escala y de generación distribuida en el Sistema Interconectado Nacional.
    p.mb-3(data-aos="fade-down-right") Es precisamente esta capacidad de inyección a la red la que se aprovecha por parte de los dueños de los grandes parques solares para instalar gran cantidad de potencia en tecnología fotovoltaica con el fin de vender energía con precios más económicos, y con bajas emisiones de gases de efecto invernadero.
    p.mb-4(data-aos="fade-down-right") Para observar más detalles del funcionamiento y componentes de los sistemas fotovoltaicos conectados a la red, se recomienda ver el siguiente video: 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Sistema Fotovoltaico Conectado a Red - On Grid
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=8EiwNy0vVFI" target="_blank")
                    span Ver video
                    i.fas.fa-video

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong C. Sistemas Híbridos:]

    p.mb-4(data-aos="fade-down-left") Los sistemas fotovoltaicos híbridos son los que cuentan con dos o más fuentes energéticas. Un ejemplo de esto puede ser un sistema de generación de electricidad donde utiliza un sistema fotovoltaico, un sistema de generación eólica y un generador o planta eléctrica Diesel. Estas fuentes pueden trabajar simultáneamente o servir de respaldo en caso de fallo de la fuente principal. Este tipo de sistemas se utiliza en su mayoría para las torres de telecomunicaciones que están instaladas en montaña y sitios alejados y de difícil acceso, por lo tanto, se requiere de un grado de confiabilidad alta para su funcionamiento. Una de las características importantes de estos sistemas es que se pueden complementar con sistemas de baterías que pueden funcionar de forma aislada sin importar si existe o no una fuente de sincronismo.

    Separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.2 Cálculo de la carga instalada y demanda de energía eléctrica

    .row.mb-4.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-12.png', alt='') 
      .col-12.col-md-7.mb-4.mb-lg-0(data-aos="fade-right") 
        .cajon.color-acento-contenido.p-3
          p El cálculo de la carga instalada y la demanda de energía eléctrica son requeridos como punto de partida para el diseño de un sistema fotovoltaico, especialmente para los sistemas autónomos donde la cantidad de paneles, inversores, baterías y demás están determinados por la demanda energética del lugar de instalación. Para entender las bases del concepto de carga instalada y demanda de energía eléctrica se recomienda repasar el tema carga y demanda eléctrica del módulo requisitos de producto. Existen dos métodos para obtener la demanda de energía eléctrica de un lugar:

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong A.Demanda calculada: ]

    p.mb-3 Se denomina calculada porque resulta del cálculo del consumo de electricidad para cada uno de los equipos eléctricos descritos en el cuadro de cargas del lugar. La energía eléctrica se obtiene de la multiplicación de la potencia en vatios (W) de cada equipo por las horas al día de funcionamiento, obteniendo el valor en vatios-hora (Wh) que posteriormente se pueden convertir en unidades de kilovatio-hora (kWh).
    p.mb-5 A continuación, se muestra un ejemplo de la demanda de energía eléctrica calculada para una vivienda. La potencia de cada equipo eléctrico se puede obtener observando la placa de datos que viene en cada uno de ellos, también en el manual de servicio del equipo o se puede estimar de acuerdo a otras referencias como la mostrada en el siguiente enlace de la Empresa de Energía de Boyacá - EBSA (2019): https://www.ebsa.com.co/consumo-de-electrodomesticos/

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-11.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-13.svg', alt='') 

    p.mb-5 De lo anterior se concluye que el consumo diario para este caso es de 6,8 kWh-día, y asumiendo que se consume lo mismo durante los treinta (30) días del mes, el consumo mensual es de 204 kWh-mes.

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong B. Demanda Medida: ]

    p.mb-5 El método de la demanda calculada es utilizado normalmente en aplicaciones muy sencillas. En aplicaciones más complejas donde la elaboración de un cuadro de cargas y un cuadro de cálculo resulta compleja de obtener debido a la gran cantidad de equipos conectados en las instalaciones del usuario interesado en instalar un sistema fotovoltaico, se prefiere utilizar medidores de energía que tengan la capacidad de medir y registrar en una memoria interna los valores de energía eléctrica en cada minuto u hora del día. Normalmente estos medidores se instalan en la acometida eléctrica de entrada y la instalación debe ser lo suficientemente segura para garantizar la seguridad de las personas y de los equipos instalados. Existen medidores con diferentes tecnologías desde los más avanzados llamados analizadores de red hasta los más sencillos medidores monofásicos.

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-11.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-14.png', alt='') 




</template>

<script>
export default {
  name: 'Tema3',
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
