const fs = require('node:fs')
const path = require('node:path')

const homePath = path.join(__dirname, 'frontend','home.html')

fs.readFile(homePath, 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data)
})