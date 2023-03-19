const EntitySchema = require('typeorm').EntitySchema

module.exports = {
  name: "Books",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    name: {
      type: "text"
    },

    releaseDate: {
      type: 'date'
    }
  }
}
