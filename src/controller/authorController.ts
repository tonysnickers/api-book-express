const Author = require('../entity/Author').default
const Book = require('../entity/Book')
const { dataSource } = require('../utils')

module.exports = {
  create: async (req, res) => {
    try {
      const author = await dataSource.getRepository(Author).save(req.body)
      res.send('hello from authors controller ')
    } catch (error) {
      res.send('error while creating author')
    }
  },
  read: async (req, res) => {
    try {
      const author = await dataSource.getRepository(Author).find()
      console.log(author)
      res.send(author)
    } catch (error) {
      res.send('Error while reading all author')
    }
  },
  update: async (req, res) => {
    try {
      const updateAuthor = await dataSource
        .getRepository(Author)
        .update(req.params.id, req.body)
      res.send(updateAuthor)
    } catch (error) {
      res.send('Error in Updating')
    }
  },
  delete: async (req, res) => {
    try {
      const deleteAuthor = dataSource
        .getRepository(Author)
        .delete(req.params.id)
      res.send(deleteAuthor)
    } catch (error) {
      res.send('delete Error')
    }
  },
  // addBook: async (req, res) => {
  //   try {
  //     const book = await dataSource
  //       .getRepository(Book)
  //       .findOneByOrFail({ title: req.body.bookTitle })
  //     console.log(book)
  //     const author = await dataSource
  //       .getRepository(Author)
  //       .findBy({ name: req.body.authorName })
  //     book.author.push(author)
  //     res.send()
  //   } catch (error) {}
  // },
}
