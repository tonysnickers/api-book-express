const typeorm = require('typeorm')
const Author = require('./entity/Author')

module.exports = {
  dataSource: new typeorm.DataSource({
    type: 'sqlite',
    database: 'books.sqlite',
    synchronize: true,
    entities: [Author],
    logging: ["query", "error"]
  }),
}
