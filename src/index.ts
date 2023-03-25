import express from 'express';
import authorController from './controller/authorController';
import bookController from './controller/bookController';
import  dataSource  from "./utils";

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello my word")
});

app.post("/api/author", authorController.create)
app.get("/api/author/read", authorController.read)
app.put("/api/author/update/:id", authorController.update)
app.delete("/api/author/delete/:id", authorController.delete)

app.post("/api/book", bookController.create)
app.get("/api/book/read", bookController.read)
// app.put("/api/authorBook", authorController.addBook)


const start = async () => {
  await dataSource.initialize()
  app.listen(3001, () => console.log('server started on 3001'))
}
start()
