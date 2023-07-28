<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    //- .row.justify-content-center.align-items-center.mb-5
    //-   .col-12.col-md-6(data-aos="fade-down-left")
    //-     //.text-small 
    //-     p En el ámbito de la importancia energética, es fundamental comprender la caracterización del potencial energético aprovechable. En este componente educativo, exploraremos los instrumentos de medición energética más comunes, que nos permiten medir variables clave para controlar procesos y determinar el potencial energético. 
    //-     p Dentro de los temas energéticos, encontramos una clasificación general en fuentes primarias y fuentes secundarias. Las fuentes primarias son aquellas que se encuentran en la naturaleza y que pueden transformarse en energía secundaria mediante el uso de leyes físicas y tecnología. 
    //-     p Estas fuentes primarias se dividen frecuentemente en dos categorías: fuentes renovables y fuentes no renovables. Las fuentes no renovables incluyen el petróleo, el carbón, el gas natural y la energía nuclear. Por otro lado, las fuentes renovables, como la energía solar, la energía eólica, la biomasa, la energía geotérmica, la energía mareomotriz y el hidrógeno, se destacan por su sostenibilidad y bajo impacto ambiental. 
    //-   .col-12.col-md-6(data-aos="fade-down-right")
    //-     figure
    //-       img(src="@/assets/curso/intro.png", alt="")

    //- .tarjeta.tarjeta--azul.p-3.mb-4(data-aos="fade-down-left")
    //-   p Las fuentes de energía secundarias, por su parte, son aquellas que se utilizan directamente para generar movimiento, calor, electricidad y alimentar todos los procesos del mundo moderno. Entre las más comunes se encuentran los combustibles líquidos y sólidos, la electricidad, el vapor y el calentamiento de agua. 
    //-   p.mb-0 En la actualidad, con el objetivo de reducir las emisiones de gases de efecto invernadero, el uso de fuentes primarias renovables está siendo implementado de manera masiva, ya que permiten la generación de energía con cero emisiones. 

    //- p(data-aos="fade-down-left") Le damos la bienvenida a este componente formativo, diseñado para que pueda conocer y profundizar en los instrumentos de medición energética más comunes para la industria. Aquí podrá aprender sobre las herramientas de evaluación inicial del potencial de la energía solar fotovoltaica y la energía eólica en Colombia, así como los principios básicos para el dimensionamiento de un sistema solar fotovoltaico. 

    //- strong(data-aos="fade-down-left") #[i ¡Esperamos que esta experiencia de aprendizaje sea enriquecedora y le brinde las herramientas necesarias para comprender y utilizar la energía de manera eficiente y sostenible!]


    p.mb-5(data-aos="fade-down") En los temas energéticos existe una clasificación de las energías de manera general: fuentes primarias y fuentes secundarias. Se denomina fuentes primarias de energía a aquellas que se encuentran en la naturaleza y son utilizadas para ser transformadas a otro tipo de energía denominada secundaria aprovechando las leyes físicas y la tecnología existente, se debe revisar la siguiente presentación para saber más acerca de este tema.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_FRP3zLz3xk" title="Caracterización del potencial energético aprovechable" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
