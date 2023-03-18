const express = require('express')
const dataSource = require('./utils').dataSource

const app = express();

app.get("/", (req, res) => {
  res.send("hello my word")
});


const start = async () => {
  await dataSource.initialize()
  app.listen(3001, () => console.log('server started on 3001'))
}
start()
