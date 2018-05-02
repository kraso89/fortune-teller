const childProcess = require('child_process')
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send(childProcess.execSync('fortune')))

app.listen(3000, () => console.log('Fortune teller listening on port 3000!'))
