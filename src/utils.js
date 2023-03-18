const typeorm = require('typeorm')

module.exports = {
  dataSource: new typeorm.DataSource({
    type: 'sqlite',
    database: 'books.sqlite',
    synchronize: true,
  }),
}
