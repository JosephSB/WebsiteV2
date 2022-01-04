export default function handler(req, res) {
    res.status(200).json({
        Proyects: [
            {
                portada: "/Img/Proyects/Proyect1/portada1.webp",
                portada2: "/Img/Proyects/Proyect1/portada2.webp",
                portada3: "/Img/Proyects/Proyect1/portada3.webp",
                portada4: "/Img/Proyects/Proyect1/portada4.webp",
                name:"MiniSpotiffy",
                tags : ["Api", "Backend","Frontend","Database"],
                description : "Aplicacion parecida a spotiffy, donde puedes subir y escuchar musica ademas tiene inicio-cierre de sesion, tambien puedes crear tus propias playlists. Esta aplicacion esta hecha en php como una API y consumiendola en el frontend con React.js",
                Repositorio:"https://github.com/JosephSB/Front-MiniSpotify",
                Demo: "",
                technologies:[              
                    {
                        name: "php",
                        icon: "svg/php.svg"
                    },
                    {
                        name: "Mysql",
                        icon: "svg/mysql.svg"
                    },
                    {
                        name: "React.js",
                        icon: "svg/reactjs.svg"
                    },
                    {
                        name: "js",
                        icon: "svg/js.svg"
                    }
                ]
            },
            {
                portada: "/Img/Proyects/Proyect2/portada1.webp",
                portada2: "/Img/Proyects/Proyect2/portada2.webp",
                portada3: "/Img/Proyects/Proyect2/portada3.webp",
                portada4: "/Img/Proyects/Proyect2/portada4.webp",
                name:"Farmacheck",
                tags : ["Api","Frontend"],
                description : "Proyecto hecho en react.js donde consumo una api con locaciones y precios de medicamentos, en esta aplicacion puedes seleccionar tu ubicacion y encontrar los medicamentos con el mejor precio.",
                Repositorio: "",
                Demo: "https://farmacheck.preciso.pe/",
                technologies:[              
                    {
                        name: "React.js",
                        icon: "svg/reactjs.svg"
                    },
                    {
                        name: "js",
                        icon: "svg/js.svg"
                    }
                ]
            },
            {
                portada: "/Img/Proyects/Proyect7/portada1.webp",
                portada2: "/Img/Proyects/Proyect7/portada2.webp",
                portada3: "/Img/Proyects/Proyect7/portada3.webp",
                portada4: "/Img/Proyects/Proyect7/portada4.webp",
                name:"YourDrugs",
                tags : ["Api","Frontend","Backend","e-commerce"],
                description : "e-commerce basado en la serie How to sell drugs online, este proyecto permite simular un carrito de compras, validar usuarios y puedes agregar comentarios en cada producto",
                Repositorio: "https://github.com/JosephSB/Frontend-YourDrugs",
                Demo: "",
                technologies:[              
                    {
                        name: "React.js",
                        icon: "svg/reactjs.svg"
                    },
                    {
                        name: "Nodejs",
                        icon: "svg/nodejs.svg"
                    },
                    {
                        name: "MongoDB",
                        icon: "svg/mongo.svg"
                    },
                    {
                        name: "js",
                        icon: "svg/js.svg"
                    }
                ]
            },
            {
                portada: "/Img/Proyects/Proyect3/portada1.webp",
                portada2: "/Img/Proyects/Proyect3/portada2.webp",
                portada3: "/Img/Proyects/Proyect3/portada3.webp",
                portada4: "/Img/Proyects/Proyect3/portada4.webp",
                name:"Rick y Morty",
                tags : ["Api","Frontend"],
                description : "Proyecto hecho en react.js donde consumo la api de la serie Rick y Morty",
                Repositorio: "https://github.com/JosephSB/RickandMorty",
                Demo: "https://rick-and-morty-pe.herokuapp.com/",
                technologies:[              
                    {
                        name: "React.js",
                        icon: "svg/reactjs.svg"
                    },
                    {
                        name: "js",
                        icon: "svg/js.svg"
                    }
                ]
            },
            {
                portada: "/Img/Proyects/Proyect5/portada1.webp",
                portada2: "/Img/Proyects/Proyect5/portada2.webp",
                portada3: "/Img/Proyects/Proyect5/portada3.webp",
                portada4: "/Img/Proyects/Proyect5/portada4.webp",
                name:"Chat Simple",
                tags : ["Backend","Frontend","Websockets"],
                description : "Proyecto hecho en React.js en el frontend y Node.js en el backend donde uso socket.io para crear un chat simple",
                Repositorio: "https://github.com/JosephSB/Chat-Simple",
                Demo: "https://tunkay-chat.herokuapp.com/",
                technologies:[ 
                    {
                        name: "Node.js",
                        icon: "svg/nodejs.svg"
                    },             
                    {
                        name: "React.js",
                        icon: "svg/reactjs.svg"
                    },
                    {
                        name: "js",
                        icon: "svg/js.svg"
                    },
                    {
                        name: "SocketIO",
                        icon: "svg/socketio.svg"
                    }
                ]
            },
            {
                portada: "/Img/Proyects/Proyect4/portada1.webp",
                portada2: "/Img/Proyects/Proyect4/portada2.webp",
                portada3: "/Img/Proyects/Proyect4/portada3.webp",
                portada4: "/Img/Proyects/Proyect4/portada4.webp",
                name:"Pokedex",
                tags : ["Api","Frontend"],
                description : "Proyecto hecho en react.js donde consumo la api de Pokemons, ademas cree un juego de adivinar pokemos con 5 niveles",
                Repositorio: "https://github.com/JosephSB/POKEDEX-GAME",
                Demo: "https://mypokedex-online.herokuapp.com/",
                technologies:[              
                    {
                        name: "React.js",
                        icon: "svg/reactjs.svg"
                    },
                    {
                        name: "js",
                        icon: "svg/js.svg"
                    }
                ]
            },
            {
                portada: "/Img/Proyects/Proyect6/portada1.webp",
                portada2: "/Img/Proyects/Proyect6/portada2.webp",
                portada3: "/Img/Proyects/Proyect6/portada3.webp",
                portada4: "/Img/Proyects/Proyect6/portada4.webp",
                name:"Website Personal",
                tags : ["Frontend"],
                description : "Proyecto hecho en React.js y Next.js donde creo mi portafolio, ademas agregue ThemeMode y Multiidioma",
                Repositorio: "https://github.com/JosephSB/WebsiteV2",
                Demo: "/",
                technologies:[ 
                    {
                        name: "Next.js",
                        icon: "svg/nextjs.svg"
                    },             
                    {
                        name: "React.js",
                        icon: "svg/reactjs.svg"
                    },
                    {
                        name: "js",
                        icon: "svg/js.svg"
                    }
                ]
            }
        ]
    })
}