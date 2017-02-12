'use strict'

const assert  = require('chai').assert
const newUser = require('./fn_user')

describe("Recreating objects with single-argument functions, A challenge for Regis! <3", function() {
  const name = 'Josh', email = 'josh@example.com', age = 33
  let user
  beforeEach(() => user = newUser(name)(age)(email))

  it('lets me provide the name, age, and returns a function that accepts messages', function() {
    assert.equal(user.constructor, Function)
  })

  it('throws an error when it gets a message its not expecting', () =>
    assert.throws(() => user('unknown message'), /NoMethodError/))

  describe('getters', function() {
    it('can get the name',  () => assert.equal(user('name'),  name))
    it('can get the age',   () => assert.equal(user('age'),   age))
    it('can get the email', () => assert.equal(user('email'), email))
  })

  describe('setters', function() {
    const name2 = 'Regis', email2 = 'regis@example.com', age2 = 123

    it('returns a new user with that attr set, they don\'t modify the existing one', () => {
      const user2 = user('name=')(name2)
      assert.equal(user2('name'), name2)
      assert.equal(user('name'),  name)
    })

    it('has setters for the name, age, and email', () => {
      const newUser = user('name=')(name2)
                          ('age=')(age2)
                          ('email=')(email2)

      assert.equal(newUser('name'),  name2)
      assert.equal(newUser('age'),   age2)
      assert.equal(newUser('email'), email2)
    })
  })

  describe('contact info', function() {
    // I can't remember the real format for contact info, so it might not be this :P
    it('puts the name and email in a contact info format', () =>
      assert.equal(user('contactInfo'), '"Josh" <josh@example.com>'))
  })

  describe('birthday', function() {
    it('returns a new user with the age increased by 1', () => {
      const olderUser = user('birthday')
      assert.equal(age, user('age'))
      assert.equal(age+1, olderUser('age'))
    })
  })
})
