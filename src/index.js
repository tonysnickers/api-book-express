const express = require('express');
const authorController = require('./controller/authorController');
const dataSource = require('./utils').dataSource

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello my word")
});

app.post("/api/author", authorController.create)
app.get("/api/author/read", authorController.read)
app.put("/api/author/update/:id", authorController.update)
app.delete("/api/author/delete/:id", authorController.delete)


const start = async () => {
  await dataSource.initialize()
  app.listen(3001, () => console.log('server started on 3001'))
}
start()
