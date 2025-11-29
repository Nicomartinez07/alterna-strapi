"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https:'],
                    'img-src': ["'self'", 'data:', 'blob:', 'strapi.io', 'localhost:3000'],
                    'media-src': ["'self'", 'data:', 'blob:'],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    {
        name: 'strapi::cors',
        config: {
            origin: ['http://localhost:3000', 'http://localhost:1337'],
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
