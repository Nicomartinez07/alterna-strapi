const { parse } = require('pg-connection-string');
module.exports = ({ env }) => {
    // Si hay DATABASE_URL, la parseamos
    if (env('DATABASE_URL')) {
        const config = parse(env('DATABASE_URL'));
        return {
            connection: {
                client: 'postgres',
                connection: {
                    host: config.host,
                    port: config.port,
                    database: config.database,
                    user: config.user,
                    password: config.password,
                    ssl: {
                        rejectUnauthorized: false,
                    },
                },
                debug: false,
            },
        };
    }
    // Fallback para desarrollo local
    return {
        connection: {
            client: 'postgres',
            connection: {
                host: env('DATABASE_HOST', '127.0.0.1'),
                port: env.int('DATABASE_PORT', 5432),
                database: env('DATABASE_NAME', 'alterna_db'),
                user: env('DATABASE_USERNAME', 'postgres'),
                password: env('DATABASE_PASSWORD', ''),
                ssl: env.bool('DATABASE_SSL', false),
            },
            debug: false,
        },
    };
};
