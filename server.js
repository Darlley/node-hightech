const http = require('http');
const fs = require('node:fs')
const path = require('node:path')

const PORT = 3000;
const HOST = "127.0.0.1";


const server = http.createServer((req, res) => {

  if(req.url.includes("/api")){
    return res.end(JSON.stringify({
      name: req.url,
      img: "https://th.bing.com/th/id/R.5aaa9e94315804a563c9ab11afd687aa?rik=ZrloCbNH8sIhIQ&pid=ImgRaw&r=0"
    }))
  }

  if(req.url === "/"){

    const HOMEPATH = path.join(__dirname, 'frontend','home.html')
    return fs.readFile(HOMEPATH, 'utf8', (err, data) => {
      if(err) console.dir(err);
      res.end(data)
    })

  }else{

    const FILEPATH = path.join(__dirname, 'frontend',req.url)
    return fs.readFile(FILEPATH, 'utf8', (err, data) => {
      if(err) console.dir(err);
      res.end(data)
    })

  }
  
  
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`)
})