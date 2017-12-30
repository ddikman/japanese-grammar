var expect = require('chai').expect
const exercises = require('../exercises')

describe("exercises", function () {
  describe("when listing items", function () {
    it("throws a NotFound exception when item doesn't exist", function () {
      expect(function () { 
        exercises.load('non-existing-id') 
      }).throws('Exercise with id [non-existing-id]')
    })
  })    
})