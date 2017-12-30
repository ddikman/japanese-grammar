var NotFound = require('./notFound')

class Exercises {
  load (id, callback) {
    var exercise = this.list().find(function (item) {
      return item.id === id
    })

    if (!exercise) {
      throw new NotFound(`Exercise with id [${id}]`)
    };

     return exercise
  }

  list () {
    return [
      {
        name: 'Exercise 1',
        id: 'exercise-1',
        description: 'do some exercise stuff'
      },
      {
        name: 'Exercise 2',
        id: 'exercise-2',
        description: 'do some other exercise stuff'
      }
    ]
  }
}

module.exports = new Exercises()
