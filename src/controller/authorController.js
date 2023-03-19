const Author = require("../entity/Author")
const { dataSource } = require("../utils")

module.exports = {
  create: async (req, res) => {
    try {
      const author = await dataSource.getRepository(Author).save(req.body)
      res.send("hello from authors controller ")
    } catch (error) {
      res.send('error while creating author')
    }
  },
  read: async (req, res) => {
    try {
      const author = await dataSource.getRepository(Author).find()
      console.log(author);
      res.send(author)
    } catch (error) {
      res.send("Error while reading all author")
    }
  },
  update: async (req,res) => {
    try {
      const updateAuthor = await dataSource.getRepository(Author).update(req.params.id, req.body)
      res.send(updateAuthor)
    } catch (error) {
      res.send("Error in Updating")
    }
  },
  delete: async (req, res) => {
    try {
      const deleteAuthor = dataSource.getRepository(Author).delete(req.params.id)
      res.send(deleteAuthor)
    } catch (error) {
      res.send("delete Error")
    }
  }
}
