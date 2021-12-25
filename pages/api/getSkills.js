// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    Skills:[
      {
        name: "Frontend",
        tools: [
          {
            name: "JS",
            fullname: "Javascript",
            icon:"fab fa-js",
            frameworks: [
              {
                name: "React.js",
                icon: "fab fa-react"
              },
              {
                name: "Next.js",
                icon: ""
              }
            ]
          },
          {
            name: "CSS",
            fullname: "Css",
            icon:"fab fa-css3-alt",
            frameworks: [
              {
                name: "Sass",
                icon: "fab fa-sass"
              },
              {
                name: "Styled Components",
                icon: ""
              }
            ]
          },
          {
            name: "HTML",
            fullname: "Html",
            icon:"fab fa-html5",
            frameworks: [
              {
                name: "pug",
                icon: ""
              }
            ]
          }
        ]
      },
      {
        name: "Backend",
        tools: [
          {
            name: "NODE.JS",
            fullname: "Node.js",
            icon:"fab fa-node",
            frameworks: [
              {
                name: "Express",
                icon: ""
              },
              {
                name: "Socket.IO",
                icon: "fas fa-bolt"
              }
            ]
          },
          {
            name: "PHP",
            fullname: "Php",
            icon:"fab fa-php",
            frameworks: [
              {
                name: "Nativo",
                icon: ""
              }
            ]
          },
          {
            name: "Java",
            fullname: "Java",
            icon:"fab fa-java",
            frameworks: [
              {
                name: "Spring Boot",
                icon: "fas fa-leaf"
              }
            ]
          }
        ]
      },
      {
        name: "DATABASE",
        tools: [
          {
            name: "MongoDB",
            fullname: "MongoDB",
            icon:"",
            frameworks: [
              {
                name: "Nativo",
                icon: ""
              }
            ]
          },
          {
            name: "MYSQL",
            fullname: "MySql",
            icon:"",
            frameworks: [
              {
                name: "Nativo",
                icon: ""
              }
            ]
          }
        ]
      },
      {
        name: "CLOUD",
        tools: [
          {
            name: "Linux",
            fullname: "Linux",
            icon:"fab fa-linux",
            frameworks: [
              {
                name: "Ubuntu",
                icon: "fab fa-ubuntu"
              }
            ]
          }
        ]
      },
    ]
  });
}
