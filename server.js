const http = require('http');

const PORT = 3000;
const HOST = "127.0.0.1";
const server = http.createServer((req, res) => {
  if(req.url === "/"){
    return res.end(JSON.stringify({title: "Pagina Inicial"}))
  }
  
  return res.end(JSON.stringify({
    name: req.url,
    img: "https://th.bing.com/th/id/R.5aaa9e94315804a563c9ab11afd687aa?rik=ZrloCbNH8sIhIQ&pid=ImgRaw&r=0"
  }))
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`)
})