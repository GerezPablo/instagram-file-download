import http from 'http';
import app from '../lib/app';

const port = process.env.PORT || '4000';

app.set('port', port);

const server = http.createServer(app);

app.listen(port, () => {
    console.log(`Application running at ===> http://localhost:${port}`);
});


function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

server.on('error', onError);
server.on('listening', onListening);

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}