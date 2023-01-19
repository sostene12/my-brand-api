import swaggerJSDocs from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            version:"1.0.0",
            title:"Capstone Project",
            description:"my portifolio project mybrand-api."
        },
        servers:[
            {
                url:"http://localhost:5000",
                description: 'Development server',
            }
        ],
    },
    apis: ["./routes/*.js"]
}

const swaggerSpec = swaggerJSDocs(options);

const swaggerDocs = (app) =>{
    app.use("/",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
};

export default swaggerDocs;