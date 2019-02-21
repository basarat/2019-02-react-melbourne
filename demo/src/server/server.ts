import http from 'http';

http.createServer((req,res) => {
  res.write('Hello world');
  res.end('\n');
}).listen(3000);
