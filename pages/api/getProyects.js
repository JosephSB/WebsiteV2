export default function handler(req, res) {
    res.status(200).json({
        Proyects: [
            {
                portada: "/Img/Proyects/ImgProyect1.png",
                name:"MiniSpotiffy",
                tags : ["Api", "Backend","Frontend","Database"],
                description : "Aplicacion parecida a spotiffy, donde puedes subir y escuchar musica ademas tiene inicio-cierre de sesion, tambien puedes crear tus propias playlists. Esta aplicacion esta hecha en php como una API y consumiendola en el frontend con React.js",
                Repositorio:"https://github.com/JosephSB/Front-MiniSpotify",
                Demo: "",
                technologies:[              
                    {
                        name: "php",
                        icon: "fab fa-php"
                    },
                    {
                        name: "Mysql",
                        icon: "fas fa-database"
                    },
                    {
                        name: "React.js",
                        icon: "fab fa-react"
                    },
                    {
                        name: "js",
                        icon: "fab fa-js"
                    }
                ]
            },
            {
                portada: "/Img/Proyects/ImgProyect2.png",
                name:"Farmacheck",
                tags : ["Api","Frontend"],
                description : "Proyecto hecho en react.js donde consumo una api con locaciones y precios de medicamentos.",
                Repositorio: "",
                Demo: "https://farmacheck.preciso.pe/",
                technologies:[              
                    {
                        name: "React.js",
                        icon: "fab fa-react"
                    },
                    {
                        name: "js",
                        icon: "fab fa-js"
                    }
                ]
            },
            {
                portada: "/Img/Proyects/ImgProyect3.png",
                name:"Rick y Morty",
                tags : ["Api","Frontend"],
                description : "Proyecto hecho en react.js donde consumo la api de la serie Rick y Morty",
                Repositorio: "https://github.com/JosephSB/RickandMorty",
                Demo: "https://rick-and-morty-pe.herokuapp.com/",
                technologies:[              
                    {
                        name: "React.js",
                        icon: "fab fa-react"
                    },
                    {
                        name: "js",
                        icon: "fab fa-js"
                    }
                ]
            },
            {
                portada: "/Img/Proyects/ImgProyect4.png",
                name:"Pokedex",
                tags : ["Api","Frontend"],
                description : "Proyecto hecho en react.js donde consumo la api de Pokemons, ademas cree un juego de adivinar pokemos con 5 niveles",
                Repositorio: "https://github.com/JosephSB/POKEDEX-GAME",
                Demo: "https://mypokedex-online.herokuapp.com/",
                technologies:[              
                    {
                        name: "React.js",
                        icon: "fab fa-react"
                    },
                    {
                        name: "js",
                        icon: "fab fa-js"
                    }
                ]
            },
            {
                portada: "/Img/Proyects/ImgProyect5.png",
                name:"Chat Simple",
                tags : ["Backend","Frontend","Websockets"],
                description : "Proyecto hecho en React.js en el frontend y Node.js en el backend donde uso socket.io para crear un chat simple",
                Repositorio: "https://github.com/JosephSB/Chat-Simple",
                Demo: "https://tunkay-chat.herokuapp.com/",
                technologies:[ 
                    {
                        name: "Node.js",
                        icon: "fab fa-node-js"
                    },             
                    {
                        name: "React.js",
                        icon: "fab fa-react"
                    },
                    {
                        name: "js",
                        icon: "fab fa-js"
                    }
                ]
            },
            {
                portada: "/Img/Proyects/ImgProyect6.png",
                name:"Website Personal",
                tags : ["Frontend"],
                description : "Proyecto hecho en React.js y Next.js donde creo mi portafolio, ademas agregue ThemeMode y Multiidioma",
                Repositorio: "https://github.com/JosephSB/WebsiteV2",
                Demo: "/",
                technologies:[ 
                    {
                        name: "Next.js",
                        icon: ""
                    },             
                    {
                        name: "React.js",
                        icon: "fab fa-react"
                    },
                    {
                        name: "js",
                        icon: "fab fa-js"
                    }
                ]
            }
        ]
    })
}