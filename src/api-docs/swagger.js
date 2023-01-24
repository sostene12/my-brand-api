import swaggerJSDocs from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { userRouteDocs } from './user.docs';
import { blogRouteDocs } from './blog.docs';
import { contactRouteDocs } from './contact.docs';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Capstone Project',
      description: 'my portifolio project mybrand-api.',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
      {
        url: 'http://production',
        description: 'Production server',
      },
    ],
    tags: [
      { name: 'User', description: 'User Routes' },
      { name: 'Contact', description: 'Contact Routes' },
      { name: 'Blog', description: 'Blog Routes' },
    ],
    security: [
      {
        bearerAuth: [],
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'bearerAuth',
          in: 'header'
        },
      },
    },
    paths: { ...userRouteDocs, ...contactRouteDocs, ...blogRouteDocs },
  },
  apis: ['../routes/**/*.js'],
};

const swaggerSpec = swaggerJSDocs(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

export default swaggerDocs;
