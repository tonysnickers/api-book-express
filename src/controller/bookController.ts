const Book = require("../entity/Book")
import { Request, Response } from "express";
import  dataSource   from "../utils"

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const book = await dataSource.getRepository(Book).save(req.body)
      console.log(book);
      res.send("book created with sucess")
    } catch (error) {
      res.send("Error book creating")
    }
  },
  read: async (req, res) => {
    try {
      const book = await dataSource.getRepository(Book).find()
      res.send(book)
    } catch (error) {
      res.send("Error Book not find")
    }
  }
}
