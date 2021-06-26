import { createServer } from 'http';

const server = createServer((req, res) => {
  res.end('My First Web Server\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
