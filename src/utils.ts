const typeorm = require("typeorm");
const Author = require("./entity/Author").default;
const Book = require("./entity/Book");

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "books.sqlite",
  synchronize: true,
  entities: [Author, Book],
  logging: true,
});

export default dataSource;
