const NotFound = require('./notFound')

class Exercises {
  load (id) {
    var exercise = this.list().find(function (item) {
      return item.id === id
    })

    if (!exercise) {
      throw new NotFound()
    };

    return exercise
  }

  list () {
    return [
      {
        name: 'Exercise 1',
        id: 'exercise-1',
        description: 'do some exercise stuff'
      }
    ]
  }
}

module.exports = new Exercises()
