export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io', // Recomendado para iconos del admin
            'strapi.io',
            'res.cloudinary.com', // <--- ESTO ES LO QUE NECESITAS PARA LAS FOTOS
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com', // <--- ESTO ES PARA VIDEOS/AUDIO
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      // OJO: Aquí solo tienes localhost. Para producción en Vercel, 
      // necesitarás agregar tu dominio real (ej: https://mi-front.vercel.app)
      origin: ['http://localhost:3000', 'http://localhost:1337', 'https://alterna-mostrador.vercel.app'], 
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];