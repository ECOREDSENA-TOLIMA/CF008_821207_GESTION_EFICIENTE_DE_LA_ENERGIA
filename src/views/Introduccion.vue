<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="fade-down") En los temas energéticos existe una clasificación de las energías de manera general: fuentes primarias y fuentes secundarias. Se denomina fuentes primarias de energía a aquellas que se encuentran en la naturaleza y son utilizadas para ser transformadas a otro tipo de energía denominada secundaria aprovechando las leyes físicas y la tecnología existente, se debe revisar la siguiente presentación para saber más acerca de este tema.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

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
