const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

function swaggerConfig(app){
    const swaggerOption = swaggerJsDoc({
        definition:{
            info:{
                title: "For Sell Backend",
                version: "1.0.0",
                description: "This is an application for selling and buying that you need."
            }
        },
        apis: []
    });

    const swagger = swaggerUi.setup(swaggerOption, {});
    app.use("/", swaggerUi.serve, swagger);
}

module.exports = swaggerConfig;