(function(e){function o(o){for(var a,i,c=o[0],s=o[1],l=o[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);m&&m(o);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,o=0;o<r.length;o++){for(var n=r[o],a=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(a=!1)}a&&(r.splice(o--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"80938cef","chunk-0206bfa0":"9d64e2cb","chunk-0c047e41":"c1b5f948","chunk-13a6037e":"b6cc52b1","chunk-18f95272":"c2a5eee4","chunk-25b302c8":"26cfb7b2","chunk-26fc7596":"286ada91","chunk-2c06842c":"44a60f75","chunk-2d0c5615":"ebc1981a","chunk-2d0e96ec":"7b8875b5","chunk-2d208d90":"9c6a4a0e","chunk-2d21d0e2":"320e0a0d","chunk-2d22c123":"474e9714","chunk-2d2747e2":"55b9a2a1","chunk-2e80bb9a":"818f9add","chunk-319206de":"2b0a71fd","chunk-32334cb6":"4e06baf7","chunk-36769079":"f509823e","chunk-3c57cd7b":"d8fd3cb3","chunk-4cdd78c0":"21552dad","chunk-4f2d402a":"f52de32d","chunk-515a8379":"ad4b0488","chunk-53ccb27e":"e4c9c4d9","chunk-55d286b8":"984d19df","chunk-59974754":"4b536167","chunk-60cbc06b":"17f2bb4a","chunk-659152b8":"4c724f06","chunk-6e1e538a":"1656d117","chunk-766a929b":"4fd76fb0","chunk-c796899c":"b404a9ce","chunk-e8a7823a":"9ff4a1e8","chunk-f2df7d2c":"d2fe56d5","chunk-fde47172":"6ef31f8b",comple:"f8d3bc94",creditos:"e0a862ca",glosario:"73c26ec9",intro:"0955c2d0",referencias:"c334859d",sintesis:"58c2abb7",tema1:"e5e368c2",tema2:"8984cbb9",tema3:"2433a591"}[e]+".js"}function s(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var o=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?o.push(i[e]):0!==i[e]&&n[e]&&o.push(i[e]=new Promise((function(o,n){for(var a="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"423e4325","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"321e0161","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"9ea99275","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"b9336906",creditos:"a6ebcd82",glosario:"23c3cb34",intro:"31d6cfe0",referencias:"11af4ab1",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===t))return o()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===a||d===t)return o()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=o,m.onerror=function(o){var a=o&&o.target&&o.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var a=t[e];if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(o,n){a=t[e]=[o,n]}));o.push(a[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(o){d.onerror=d.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(o)},s.m=e,s.c=a,s.d=function(e,o,n){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)s.d(n,a,function(o){return e[o]}.bind(null,a));return n},s.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=o,l=l.slice();for(var u=0;u<l.length;u++)o(l[u]);var m=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,o,n){e.exports=n("56d7")},"417a":function(e,o,n){e.exports=n.p+"img/fondo-banner-principal.4c1231b3.svg"},"52e5":function(e,o,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,o,n){"use strict";n.r(o);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("68f3"),i=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),l=Object(s["a"])(c,i,t,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,o){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===o.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Caracterización del potencial energético aprovechable",descripcionCurso:"Este componente tratará sobre los instrumentos de medición energética más comunes, con los cuales medir las variables para controlar los procesos y determinar el potencial energético. Posteriormente se indicarán las herramientas para la evaluación del potencial de la energía fotovoltaica y la energía eólica en Colombia. Finalmente se mostrarán los principios básicos para el dimensionamiento de un sistema solar fotovoltaico.",imagenBannerPrincipal:n("9128"),fondoBannerPrincipal:n("417a"),imagenesDecorativasBanner:[]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Instrumentos de medición energética",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Medición de presión",hash:"t_1_1"},{numero:"1.2",titulo:"Medición de temperatura",hash:"t_1_2"},{numero:"1.3",titulo:"Medición de nivel",hash:"t_1_3"},{numero:"1.4",titulo:"Medición de radiación solar (piranómetros)",hash:"t_1_4"},{numero:"1.5",titulo:"Medición de velocidad y dirección del viento",hash:"t_1_5"},{numero:"1.6",titulo:"Características generales de los instrumentos de medición",hash:"t_1_6"},{numero:"1.7",titulo:"Calibración de los instrumentos de medición",hash:"t_1_7"}]},{nombreRuta:"tema2",numero:"2",titulo:"Potencial de los sistemas energéticos renovables",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Potencial energético de la energía solar",hash:"t_2_1"},{numero:"2.2",titulo:"Potencial energético de la energía eólica",hash:"t_2_2"},{numero:"2.3",titulo:"Reducción de huella de carbono y energías renovables",hash:"t_2_3"}]},{nombreRuta:"tema3",numero:"3",titulo:"Dimensionamiento de un sistema de generación con fuentes renovables",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Tipologías y equipos",hash:"t_3_1"},{numero:"3.2",titulo:"Cálculo de la carga instalada y demanda de energía eléctrica",hash:"t_3_2"},{numero:"3.3",titulo:"Sombreamiento, inclinación y orientación",hash:"t_3_3"},{numero:"3.4",titulo:"Ejemplo de Dimensionamiento",hash:"t_3_4"},{numero:"3.5",titulo:"Diseño por Simulación",hash:"t_3_5"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar PDF",download:"downloads/CFA_008_821207.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Medición de presión",referencia:"Galán, L. (2020). Cómo funciona un manómetro. Medida de la presión relativa. [Video] YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=4dXwxFJPTg8"},{tema:"Medición de temperatura",referencia:"WIKA Group (2019). ¿Cómo funciona una termorresistencia? [Video] YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=dQJpTusWJHA"},{tema:"Medición de temperatura",referencia:"WIKA Group (2019). ¿Cómo funciona un termopar? [Video] YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=1wwAQNECC9A"},{tema:"Medición de temperatura",referencia:"Ciencia UNAM. (2020).  Así funcionan los termómetros infrarrojos. [Video] YouTube.  ",tipo:"Video",link:"https://www.youtube.com/watch?v=y-Ezb8Q5UW0"},{tema:"Medición de nivel",referencia:"WIKA Group (2019). WIKA - Medición de nivel con sensor de flotador de cadena Reed. [Video] YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=ujPcgh1JDLc"},{tema:"Medición de nivel",referencia:"WIKA Group (201927). WIKA - Indicador de nivel con mirilla. [Video] YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=zlaTXjhaISg"},{tema:"Medición de nivel",referencia:"WIKA Group (2019). WIKA - Medición hidrostática de nivel con sensor de presión. [Video] YouTube.  ",tipo:"Video",link:"https://www.youtube.com/watch?v=YaSW_SIhe4E"},{tema:"Medición de nivel",referencia:"VEGA Grieshaber KG (2020). ¿Radar vs ultrasonido - cual es la diferencia entre los dos principios de medición? [Video] YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=Rq_EPoKHmgo"},{tema:"Calibración de los instrumentos de medición",referencia:"Testo Argentina (2021). Certificados de calibración de equipos patrones. ",tipo:"Archivo ejemplo certificado de calibración testo argentina.",link:"https://www.testo.com/es-AR/Certificados+de+calibraci%C3%B3n+de+equipos+patrones/certpat"},{tema:"Potencial energético de la energía solar",referencia:"IDEAM. (2016). Atlas de radiación solar, ultravioleta, y ozono de Colombia. Aspectos Teóricos. ",tipo:"Documento de consulta",link:"http://atlas.ideam.gov.co/basefiles/5.Aspectos-teoricos.pdf"},{tema:"Potencial energético de la energía eólica",referencia:"IDEAM, UPME. (2006). \tAtlas de viento y energía eólica de Colombia. ",tipo:"Documento de consulta",link:"https://bdigital.upme.gov.co/handle/001/22"},{tema:"Tipología y equipos",referencia:"CIAE (s,f). ¿Cuáles son los Componentes de Sistemas Fotovoltaicos Autónomos? [Video] YouTube.  ",tipo:"Video",link:"https://www.youtube.com/watch?v=9FYhr60VFaU"},{tema:"Tipología y equipos",referencia:"Novum Solar (2019). Sistema Fotovoltaico Conectado a Red - On Grid. [Video] YouTube.  ",tipo:"Video",link:"https://www.youtube.com/watch?v=8EiwNy0vVFI"}],glosario:[{termino:"Huella de carbono",significado:"Es el total de emisiones de gases de efecto invernadero causados por un individuo, organización, lugar o producto, expresado en toneladas de dióxido de carbono equivalente."},{termino:"Plan Energético Nacional",significado:"Documento elaborado por la Unidad de Planeación Minero-Energética donde se presentan algunas ideas sobre el desarrollo futuro del sector energético colombiano y sirven de base para los planes nacionales de expansión y transformación energética."}],referencias:[{referencia:"Bayod Rújula, Á. A. (2009). Energías renovables: sistemas fotovoltaicos. Prensas de la Universidad de Zaragoza. ",link:"https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/41940"},{referencia:"Creus Sole, A. (2008). Instrumentación industrial (7a. ed.). Marcombo. ",link:"https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/45913"},{referencia:"Empresa de Energía de Boyacá - EBSA. (2019). Consumo de Electrodomésticos. ",link:"https://www.ebsa.com.co/sitio/ebsa_sostenible/3/15/12"},{referencia:"García Gutiérrez, L. (2014). Instrumentación básica de medida y control. AENOR - Asociación Española de Normalización y Certificación. ",link:"https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53600"},{referencia:"IDEAM, UPME. (2006). \tAtlas de viento y energía eólica de Colombia. ",link:"https://bdigital.upme.gov.co/handle/001/22"},{referencia:"IDEAM, UPME. (2017). Atlas de radiación solar, ultravioleta y ozono de Colombia. ",link:"http://documentacion.ideam.gov.co/openbiblio/bvirtual/023775/RADIACION.pdf"},{referencia:"Rojano Ramos, S. (2012). Instrumentación y control en instalaciones de procesos, energía y servicios auxiliares (MF0047_2). IC Editorial. ",link:" https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/42688"},{referencia:"UPME. (2015). Integración de las energías renovables no convencionales en Colombia. ",link:"http://www.upme.gov.co/Estudios/2015/Integracion_Energias_Renovables/INTEGRACION_ENERGIAS_RENOVANLES_WEB.pdf"},{referencia:"UPME. (2020). Plan Energético Nacional 2020-2050. ",link:"https://www1.upme.gov.co/DemandayEficiencia/Paginas/PEN.aspx"},{referencia:"WIKA. (2021). ¿Cómo funcionan los manómetros mecánicos? ",link:"https://www.bloginstrumentacion.com/instrumentacion/construccin-funcionamiento-de-manmetros-mecnicos/"},{referencia:"WIKA. (2021). ¿Qué es un transmisor de presión? ",link:"https://www.bloginstrumentacion.com/knowhow/qu-es-un-transmisor-de-presin/"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Norma Constanza Morales Cruz",cargo:"Responsable de línea de producción",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Marlon Augusto Villamizar Morales",cargo:"Experto Técnico",centro:"Global Green Growth Institute (GGGI)"},{nombre:"Carolina Arias",cargo:"Diseñadora Instruccional",centro:"Regional Distrito Capital - Centro de diseño y metrología"},{nombre:"Carolina Coca Salazar",cargo:"Revisora Metodológica y Pedagógica",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor Pedagógico",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Corrector de Estilo",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Juan Gilberto Giraldo Cortés",cargo:"Diseñador Instruccional",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"María Inés Machado López",cargo:"Metodóloga",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"José Yobani Penagos Mora",cargo:"Diseñador Web",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Oscar Daniel Espitia Marin",cargo:"Desarrollador Fullstack",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Storyboard e Ilustración",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Nelson Iván Vera Briceño",cargo:"Producción Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Oleg Litvin",cargo:"Animador",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Francisco Javier Vásquez Suarez",cargo:"Actividad Didáctica",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Jorge Bustos Gómez",cargo:"Validación y vinculación en plataforma LMS",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Naranjo Farfán",cargo:"Validación de contenidos accesibles",centro:"Regional Tolima - Centro de Comercio y Servicios"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});a["a"].prototype.$config=v;var k=n("9224");a["a"].prototype.$package=k,new a["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},9128:function(e,o,n){e.exports=n.p+"img/banner-princiapal.038913fe.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,o,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,o,n){}});
//# sourceMappingURL=app.95045895.js.map