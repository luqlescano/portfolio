const skills = [
    {
        orden: "01",
        nombre: "HTML5"
    },
    {
        orden: "02",
        nombre: "CSS3"
    },
    {
        orden: "03",
        nombre: "JavaScript"
    },
    {
        orden: "04",
        nombre: "React Js"
    },
    {
        orden: "05",
        nombre: "Bootstrap"
    },
    {
        orden: "06",
        nombre: "SASS & SCSS"
    },
    {
        orden: "07",
        nombre: "Git & GitHub"
    },
    {
        orden: "08",
        nombre: "JSON"
    },
    {
        orden: "09",
        nombre: "Firebase"
    },
    {
        orden: "10",
        nombre: "Fetch API"
    },
    {
        orden: "11",
        nombre: "Accesibilidad web"
    },
    {
        orden: "12",
        nombre: "Diseño responsivo"
    },
    {
        orden: "13",
        nombre: "Wordpress"
    },
    {
        orden: "14",
        nombre: "WooCommerce"
    },
    {
        orden: "15",
        nombre: "Elementor PRO"
    },
    {
        orden: "16",
        nombre: "Bubble"
    }
];

export const obtenerSkills = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (skills.length > 0) {
            resolve({skills});
        } else {
            reject({ error: "No se pudo obtener la información solicitada. Al parecer no hay habilidades cargadas..."});
        }
    }, 2000);
});

const proyectos = [
    {
        orden: "01",
        imagen: "",
        nombre: "Transol S.R.L.",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML, CSS, JavaScript y Bootstrap.",
        cliente: "Transol S.R.L.",
        url: "www.transol.com.ar",
        enlace: "https://transol.com.ar",
        estado: "Activo",
        anio: 2015
    },
    {
        orden: "02",
        imagen: "",
        nombre: "Melanie Forher",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML y CSS.",
        cliente: "Melanie Forher",
        url: "www.melanieforher.com.ar",
        enlace: "https://melanieforher.com.ar",
        estado: "Activo",
        anio: 2016
    },
    {
        orden: "03",
        imagen: "",
        nombre: "Comunikarte",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML y CSS.",
        cliente: "Comunikarte",
        url: "www.comunikarte.com.ar",
        enlace: "https://comunikarte.com.ar",
        estado: "Activo",
        anio: 2018
    },
    {
        orden: "04",
        imagen: "",
        nombre: "Luq Lescano",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML y CSS.",
        cliente: "Luq Lescano",
        url: "www.luqlescano.com.ar",
        enlace: "https://lucaslescano.dev",
        estado: "Activo",
        anio: 2018
    },
    {
        orden: "05",
        imagen: "",
        nombre: "Alianza Sagrada",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML y CSS.",
        cliente: "Alianza Sagrada",
        url: "www.alianzasagrada.com.ar",
        enlace: "https://alianzasagrada.com.ar",
        estado: "Activo",
        anio: 2018
    },
    {
        orden: "06",
        imagen: "",
        nombre: "Trassa",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML y CSS.",
        cliente: "Trassa",
        url: "www.trassanet.net",
        enlace: "https://trassanet.net",
        estado: "Activo",
        anio: 2018
    },
    {
        orden: "07",
        imagen: "",
        nombre: "Silvina Fuentes",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML y CSS.",
        cliente: "Silvina Fuentes",
        url: "www.silvinafuentes.com.ar",
        enlace: "#",
        estado: "Baja",
        anio: 2018
    },
    {
        orden: "08",
        imagen: "",
        nombre: "Imprepel",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML y CSS.",
        cliente: "Imprepel",
        url: "www.imprepel.com.ar",
        enlace: "https://imprepel.com.ar",
        estado: "Activo",
        anio: 2019
    },
    {
        orden: "09",
        imagen: "",
        nombre: "Alianza Sagrada",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML y CSS.",
        cliente: "Alianza Sagrada",
        url: "www.alianzasagrada.com.ar",
        enlace: "https://alianzasagrada.com.ar",
        estado: "Activo",
        anio: 2019
    },
    {
        orden: "10",
        imagen: "",
        nombre: "Imprenta DUBIÉ",
        descripcion: "E-commerce. El desarrollo se hizo con Wordpress y WooCommerce.",
        cliente: "Imprenta DUBIÉ",
        url: "www.imprentadubie.com.ar",
        enlace: "https://imprentadubie.com.ar",
        estado: "Activo",
        anio: 2019
    },
    {
        orden: "11",
        imagen: "",
        nombre: "DULÉ Sublimación",
        descripcion: "E-commerce. El desarrollo se hizo con Wordpress y WooCommerce.",
        cliente: "DULÉ Sublimación",
        url: "www.dule.com.ar",
        enlace: "#",
        estado: "Baja",
        anio: 2019
    },
    {
        orden: "12",
        imagen: "",
        nombre: "Herencia Store",
        descripcion: "E-commerce. El desarrollo se hizo con Wordpress y WooCommerce.",
        cliente: "Herencia Store",
        url: "www.herenciastore.com.ar",
        enlace: "#",
        estado: "Baja",
        anio: 2019
    },
    {
        orden: "13",
        imagen: "",
        nombre: "Sagrada Música",
        descripcion: "Página Web Básica. El desarrollo se hizo con HTML y CSS.",
        cliente: "Sagrada Música",
        url: "www.sagradamusica.com.ar",
        enlace: "https://sagradamusica.com.ar",
        estado: "Activo",
        anio: 2019
    },
    {
        orden: "14",
        imagen: "",
        nombre: "Super Color",
        descripcion: "Página Web Básica. El desarrollo se hizo con HTML y CSS.",
        cliente: "Super Color",
        url: "www.supercolor.com.ar",
        enlace: "#",
        estado: "Baja",
        anio: 2019
    },
    {
        orden: "15",
        imagen: "",
        nombre: "Roman Oller",
        descripcion: "Página Web Básica. El desarrollo se hizo con HTML y CSS.",
        cliente: "Roman Oller",
        url: "www.romanoller.com",
        enlace: "#",
        estado: "Baja",
        anio: 2019
    },
    {
        orden: "16",
        imagen: "",
        nombre: "Comunikarte",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML y CSS.",
        cliente: "Comunikarte",
        url: "www.comunikarte.com.ar",
        enlace: "https://comunikarte.com.ar",
        estado: "Activo",
        anio: 2020
    },
    {
        orden: "17",
        imagen: "",
        nombre: "Luq Lescano",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML y CSS.",
        cliente: "Luq Lescano",
        url: "www.lucaslescano.dev",
        enlace: "#",
        estado: "Activo",
        anio: 2020
    },
    {
        orden: "18",
        imagen: "",
        nombre: "Alianza Sagrada",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML y CSS.",
        cliente: "Alianza Sagrada",
        url: "www.alianzasagrada.com.ar",
        enlace: "https://alianzasagrada.com.ar",
        estado: "Activo",
        anio: 2020
    },
    {
        orden: "19",
        imagen: "",
        nombre: "M. Música SCJ",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "M. Música SCJ",
        url: "www.comunikarte.com.ar/mmusica-scj",
        enlace: "#",
        estado: "Baja",
        anio: 2020
    },
    {
        orden: "20",
        imagen: "",
        nombre: "Construcciones Jc",
        descripcion: "Página Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Construcciones Jc",
        url: "www.construccionesjc.com.ar",
        enlace: "https://construccionesjc.com.ar",
        estado: "Activo",
        anio: 2020
    },
    {
        orden: "21",
        imagen: "",
        nombre: "Vaxa",
        descripcion: "E-commerce. El desarrollo se hizo con Wordpress y WooCommerce.",
        cliente: "Vaxa",
        url: "www.vaxa.com.ar",
        enlace: "#",
        estado: "Baja",
        anio: 2020
    },
    {
        orden: "22",
        imagen: "",
        nombre: "Arcadia",
        descripcion: "E-commerce. El desarrollo se hizo con Wordpress, WooCommerce y Elementor.",
        cliente: "Arcadia",
        url: "www.clasesarcadia.com.ar",
        enlace: "https://clasesarcadia.com.ar",
        estado: "Activo",
        anio: 2020
    },
    {
        orden: "23",
        imagen: "",
        nombre: "Sagrada Música",
        descripcion: "E-commerce. El desarrollo se hizo con Wordpress, WooCommerce y Elementor.",
        cliente: "Sagrada Música",
        url: "www.sagradamusica.com.ar",
        enlace: "https://sagradamusica.com.ar",
        estado: "Activo",
        anio: 2020
    },
    {
        orden: "24",
        imagen: "",
        nombre: "Brenda Manicure",
        descripcion: "E-commerce. El desarrollo se hizo con Wordpress, WooCommerce y Elementor.",
        cliente: "Brenda Manicure",
        url: "www.brendamanicure.com.ar/",
        enlace: "https://brendamanicure.com.ar/",
        estado: "Activo",
        anio: 2020
    },
    {
        orden: "25",
        imagen: "",
        nombre: "Imprenta DUBIÉ",
        descripcion: "E-commerce. El desarrollo se hizo con Wordpress, WooCommerce y Elementor.",
        cliente: "Imprenta DUBIÉ",
        url: "www.imprentadubie.com.ar/",
        enlace: "https://imprentadubie.com.ar/",
        estado: "Activo",
        anio: 2020
    },
    {
        orden: "26",
        imagen: "",
        nombre: "Parroquia SCJQ",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Parroquia SCJQ",
        url: "www.parroquiascjq.com.ar",
        enlace: "#",
        estado: "Baja",
        anio: 2020
    },
    {
        orden: "27",
        imagen: "",
        nombre: "Luq Lescano",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Luq Lescano",
        url: "www.luqlescano.com.ar",
        enlace: "https://lucaslescano.dev",
        estado: "Activo",
        anio: 2021
    },
    {
        orden: "28",
        imagen: "",
        nombre: "Melanie Forher",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Melanie Forher",
        url: "www.melanieforher.com.ar",
        enlace: "https://melanieforher.com.ar",
        estado: "Activo",
        anio: 2021
    },
    {
        orden: "29",
        imagen: "",
        nombre: "Comunikarte",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Comunikarte",
        url: "www.comunikarte.com.ar",
        enlace: "https://comunikarte.com.ar",
        estado: "Activo",
        anio: 2021
    },
    {
        orden: "30",
        imagen: "",
        nombre: "Vibiendar",
        descripcion: "Página Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Vibiendar",
        url: "www.vibiendar.com.ar",
        enlace: "#",
        estado: "Baja",
        anio: 2021
    },
    {
        orden: "31",
        imagen: "",
        nombre: "MDV S.R.L.",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "MDV S.R.L.",
        url: "www.mdvsrl.com.ar",
        enlace: "https://mdvsrl.com.ar",
        estado: "Activo",
        anio: 2021
    },
    {
        orden: "32",
        imagen: "",
        nombre: "Solucionar Legales",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Solucionar Legales",
        url: "www.solucionarestudiojuridico.com.ar",
        enlace: "https://solucionarestudiojuridico.com.ar",
        estado: "Activo",
        anio: 2021
    },
    {
        orden: "33",
        imagen: "",
        nombre: "Infladores DCA",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Infladores DCA",
        url: "www.infladoresdca.com.ar",
        enlace: "https://infladoresdca.com.ar",
        estado: "Activo",
        anio: 2021
    },
    {
        orden: "34",
        imagen: "",
        nombre: "Imprenta DUBIÉ",
        descripcion: "E-commerce. El desarrollo se hizo con Wordpress, WooCommerce y Elementor PRO.",
        cliente: "Imprenta DUBIÉ",
        url: "www.imprentadubie.com.ar",
        enlace: "https://imprentadubie.com.ar",
        estado: "Activo",
        anio: 2021
    },
    {
        orden: "35",
        imagen: "",
        nombre: "RUA",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "RUA",
        url: "www.ruaequipopsicoterapeutico.com.ar",
        enlace: "https://ruaequipopsicoterapeutico.com.ar",
        estado: "Activo",
        anio: 2021
    },
    {
        orden: "36",
        imagen: "",
        nombre: "Marshmallow S.R.L.",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Marshmallow S.R.L.",
        url: "www.marshmallow.com.ar",
        enlace: "#",
        estado: "Baja",
        anio: 2021
    },
    {
        orden: "37",
        imagen: "",
        nombre: "Marmolería Portoro S.R.L.",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Marmolería Portoro S.R.L.",
        url: "www.portoro.com.ar",
        enlace: "https://portoro.com.ar",
        estado: "Activo",
        anio: 2021
    },
    {
        orden: "38",
        imagen: "",
        nombre: "Comunikarte",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor PRO.",
        cliente: "Comunikarte",
        url: "www.comunikarte.com.ar",
        enlace: "https://comunikarte.com.ar",
        estado: "Activo",
        anio: 2022
    },
    {
        orden: "39",
        imagen: "",
        nombre: "Soporte Comunikarte",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Comunikarte",
        url: "www.comunikarte.ar",
        enlace: "https://comunikarte.ar",
        estado: "Activo",
        anio: 2022
    },
    {
        orden: "40",
        imagen: "",
        nombre: "Eventos Alkalá",
        descripcion: "Página Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Eventos Alkalá",
        url: "www.eventosalkala.com.ar",
        enlace: "#",
        estado: "Baja",
        anio: 2022
    },
    {
        orden: "41",
        imagen: "",
        nombre: "Maggie Fojo",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Maggie Fojo",
        url: "www.maggiefojo.com.ar",
        enlace: "#",
        estado: "Baja",
        anio: 2022
    },
    {
        orden: "42",
        imagen: "",
        nombre: "Alianza Sagrada",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Alianza Sagrada",
        url: "www.alianzasagrada.com.ar",
        enlace: "https://alianzasagrada.com.ar",
        estado: "Activo",
        anio: 2022
    },
    {
        orden: "43",
        imagen: "",
        nombre: "Amoblamientos DB",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Amoblamientos DB",
        url: "www.amoblamientosdb.com.ar",
        enlace: "https://amoblamientosdb.com.ar",
        estado: "Activo",
        anio: 2022
    },
    {
        orden: "44",
        imagen: "",
        nombre: "Hair Reconstruction",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor PRO.",
        cliente: "Hair Reconstruction",
        url: "www.hairreconstruction.com.ar",
        enlace: "https://hairreconstruction.com.ar",
        estado: "Activo",
        anio: 2022
    },
    {
        orden: "45",
        imagen: "",
        nombre: "Dabber",
        descripcion: "E-commerce. El desarrollo se hizo con Wordpress, WooCommerce y Elementor.",
        cliente: "Dabber",
        url: "www.dabbersport.com",
        enlace: "https://dabbersport.com",
        estado: "Activo",
        anio: 2022
    },
    {
        orden: "46",
        imagen: "",
        nombre: "Ser Celíaco",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Ser Celíaco",
        url: "www.serceliaco.com.ar",
        enlace: "https://serceliaco.com.ar",
        estado: "Activo",
        anio: 2022
    },
    {
        orden: "47",
        imagen: "",
        nombre: "Dulé SHOP",
        descripcion: "E-commerce. El desarrollo se hizo con Wordpress, WooCommerce y Elementor PRO.",
        cliente: "Dulé SHOP",
        url: "www.dule.ar",
        enlace: "https://dule.ar",
        estado: "Baja",
        anio: 2022
    },
    {
        orden: "48",
        imagen: "",
        nombre: "Dito Gonzalez",
        descripcion: "Página Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Dito Gonzalez",
        url: "www.ditogonzalez.com.ar",
        enlace: "#",
        estado: "Baja",
        anio: 2022
    },
    {
        orden: "49",
        imagen: "",
        nombre: "TM Consultora",
        descripcion: "Página Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "TM Consultora",
        url: "www.tmconsultora.com",
        enlace: "#",
        estado: "Baja",
        anio: 2022
    },
    {
        orden: "50",
        imagen: "",
        nombre: "Centro Holding",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Centro Holding",
        url: "www.centroholding.com.ar",
        enlace: "https://centroholding.com.ar",
        estado: "Activo",
        anio: 2022
    },
    {
        orden: "51",
        imagen: "",
        nombre: "Electro+ Js",
        descripcion: "Página Web Básica. El desarrollo se hizo con HTML y CSS.",
        cliente: "Electro+ Js",
        url: "www.electrojs.com.ar",
        enlace: "https://electrojs.com.ar",
        estado: "Activo",
        anio: 2022
    },
    {
        orden: "52",
        imagen: "",
        nombre: "Fabio Baez",
        descripcion: "Página Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Fabio Baez",
        url: "www.fabiobaez.com.ar",
        enlace: "#",
        estado: "Migrado",
        anio: 2022
    },
    {
        orden: "53",
        imagen: "",
        nombre: "Carácter",
        descripcion: "Página Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Carácter",
        url: "www.caracter.com.ar",
        enlace: "https://caracter.com.ar",
        estado: "Activo",
        anio: 2023
    },
    {
        orden: "54",
        imagen: "../assets/img/portfolio/web-construccionesJc-30052023-1600x1047.jpg",
        nombre: "Construcciones Jc",
        descripcion: "Página Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Construcciones Jc",
        url: "www.construccionesjc.com.ar",
        enlace: "https://construccionesjc.com.ar",
        estado: "Activo",
        anio: 2023
    },
    {
        orden: "55",
        imagen: "../assets/img/portfolio/web-andresFerraro-24072023-1600x1047.jpg",
        nombre: "Andrés Ferraro",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "Andrés Ferraro",
        url: "www.andresferraro.info",
        enlace: "https://andresferraro.info",
        estado: "Activo",
        anio: 2023
    },
    {
        orden: "56",
        imagen: "../assets/img/portfolio/web-sergioNobile-27072023-1600x1047.jpg",
        nombre: "NOBILE & Asociados",
        descripcion: "Sitio Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "NOBILE & Asociados",
        url: "www.nobileyasociados.com",
        enlace: "https://nobileyasociados.com",
        estado: "Activo",
        anio: 2023
    },
    {
        orden: "57",
        imagen: "../assets/img/portfolio/web-vipVansSrl-04092023-1600x1047.jpg",
        nombre: "VIP Vans S.R.L.",
        descripcion: "Página Web. El desarrollo se hizo con Wordpress y Elementor.",
        cliente: "VIP Vans S.R.L.",
        url: "www.vip-vans.com",
        enlace: "https://vip-vans.com",
        estado: "Activo",
        anio: 2023
    },
    {
        orden: "58",
        imagen: "../assets/img/portfolio/web-aepa-20122023-1600x1047.jpg",
        nombre: "A.E.P.A.",
        descripcion: "Página Web. El desarrollo se hizo con HTML, CSS y JavaScript.",
        cliente: "A.E.P.A.",
        url: "www.aepa.com.ar",
        enlace: "https://aepa.com.ar",
        estado: "Activo",
        anio: 2023
    },
    {
        orden: "59",
        imagen: "",
        nombre: "Silvina Fuentes",
        descripcion: "Sitio Web. El desarrollo se hizo con HTML, CSS y JavaScript.",
        cliente: "Silvina Fuentes",
        url: "www.silvinafuentes.com",
        enlace: "https://silvinafuentes.com",
        estado: "Activo",
        anio: 2023
    },
    {
        orden: "60",
        imagen: "",
        nombre: "Click TV",
        descripcion: "Página Web. El desarrollo se hizo con HTML, CSS y JavaScript.",
        cliente: "Click TV",
        url: "www.clicktv.us",
        enlace: "#",
        estado: "Baja",
        anio: 2024
    },
    {
        orden: "61",
        imagen: "",
        nombre: "Lucas Lescano",
        descripcion: "Single-Page Application (SPA). El desarrollo se hizo con React Js.",
        cliente: "Lucas Lescano",
        url: "www.lucaslescano.dev",
        enlace: "https://lucaslescano.dev",
        estado: "Activo",
        anio: 2024
    },
    {
        orden: "62",
        imagen: "",
        nombre: "SAF Entertainment",
        descripcion: "Página Web. El desarrollo se hizo con HTML, CSS y JavaScript.",
        cliente: "SAF Entertainment",
        url: "www.safentertainment.us",
        enlace: "https://safentertainment.us/",
        estado: "Activo",
        anio: 2024
    },
    {
        orden: "63",
        imagen: "",
        nombre: "Comunidad Arcadia",
        descripcion: "Desarrollo a medida. El desarrollo se hizo con HTML, CSS, JavaScript, PHP y SQL.",
        cliente: "Arcadia",
        url: "comunidad.clasesarcadia.com.ar",
        enlace: "https://comunidad.clasesarcadia.com.ar/",
        estado: "Activo",
        anio: 2024
    },
    {
        orden: "64",
        imagen: "",
        nombre: "Infladores DCA",
        descripcion: "Sitio Web. El desarrollo se hizo con WordPress y Elementor.",
        cliente: "Infladores DCA",
        url: "www.infladoresdca.com.ar",
        enlace: "https://infladoresdca.com.ar/",
        estado: "Activo",
        anio: 2024
    },
    {
        orden: "65",
        imagen: "",
        nombre: "A.E.P.A.",
        descripcion: "Página Web. El desarrollo se hizo con HTML, CSS y JavaScript.",
        cliente: "A.E.P.A.",
        url: "www.aepa.com.ar",
        enlace: "https://aepa.com.ar/",
        estado: "Activo",
        anio: 2024
    },
    {
        orden: "66",
        imagen: "",
        nombre: "Arcadia",
        descripcion: "Página Web. El desarrollo se hizo con HTML, CSS y JavaScript.",
        cliente: "Arcadia",
        url: "www.clasesarcadia.com.ar",
        enlace: "https://clasesarcadia.com.ar/",
        estado: "Activo",
        anio: 2024
    },
    {
        orden: "67",
        imagen: "",
        nombre: "Carácter",
        descripcion: "Single-Page Application (SPA). El desarrollo se hizo con React Js.",
        cliente: "Carácter",
        url: "www.caracter.com.ar",
        enlace: "https://caracter.com.ar",
        estado: "Activo",
        anio: 2025
    },
    {
        orden: "68",
        imagen: "",
        nombre: "Bratranci S.R.L.",
        descripcion: "Página Web. El desarrollo se está haciendo con HTML, CSS y JavaScript.",
        cliente: "Bratranci S.R.L.",
        url: "-",
        enlace: "#",
        estado: "Desarrollo",
        anio: 2025
    }
]

export const obtenerProyectos = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (proyectos.length > 0) {
            resolve({proyectos});
        } else {
            reject({ error: "No se pudo obtener la información solicitada. Al parecer no hay proyectos cargados..."});
        }
    }, 2000);
});