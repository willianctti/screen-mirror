import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Um cliente se conectou');

  socket.on('screen-data', (data) => {
    socket.broadcast.emit('screen-data', data);
  });

  socket.on('disconnect', () => {
    console.log('Um cliente se desconectou');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});