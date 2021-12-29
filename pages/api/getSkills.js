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
            icon:"svg/js.svg",
            frameworks: [
              {
                name: "React.js",
                icon: "svg/reactjs.svg"
              },
              {
                name: "Next.js",
                icon: "svg/nextjs.svg"
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
                icon: "svg/sass.svg"
              },
              {
                name: "Styled Components",
                icon: "svg/styledcomponents.svg"
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
                icon: "svg/pug.svg"
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
                icon: "svg/socketio.svg"
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
                icon: "svg/spring.svg"
              }
            ]
          }
        ]
      },
      {
        name: "DATABASE",
        tools: [
          {
            name: "NOSQL",
            fullname: "NOSQL",
            icon:"",
            frameworks: [
              {
                name: "MongoDB",
                icon: "svg/mongo.svg"
              }
            ]
          },
          {
            name: "SQL",
            fullname: "Sql",
            icon:"",
            frameworks: [
              {
                name: "Mysql",
                icon: "svg/mysql.svg"
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
                icon: "svg/ubuntu.svg"
              }
            ]
          }
        ]
      },
    ]
  });
}
