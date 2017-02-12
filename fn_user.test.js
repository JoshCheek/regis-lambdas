'use strict'

/*
class User
  attr_accessor :name, :age, :email

  def initialize(name, age, email)
    self.name, self.age, self.email = name, age, email
  end

  def birthday
    @age += 1
    self
  end

  def contact_info
    %'\"#{@name}" <#{@email}>'
  end
end

user = User.new 'Josh', 33, 'josh@example.com'

# Getters
user.name         # => "Josh"
user.age          # => 33
user.email        # => "josh@example.com"
user.contact_info # => "\"Josh\" <josh@example.com>"

# Setters (Alan Kay is grimacing)
user.name  = 'Regis'
user.age   = 123 # idk
user.email = 'regis@example.com'

user.contact_info # => "\"Regis\" <regis@example.com>"

# methods that modify it
user.birthday  # => #<User:0x007fe6b38ed540 @name="Regis", @age=124, @email="regis@example.com">
user.birthday  # => #<User:0x007fe6b38ed540 @name="Regis", @age=125, @email="regis@example.com">
user.birthday  # => #<User:0x007fe6b38ed540 @name="Regis", @age=126, @email="regis@example.com">
*/

const assert  = require('chai').assert
const newUser = require('./fn_user')

describe("Recreating objects with functions, A challenge for Regis! <3", function() {
  const name = 'Josh', email = 'josh@example.com.', age = 33
  const user = newUser(name, age, email)

  it('lets me provide the name, age, and returns a function that accepts messages', function() {
    assert.equal(user.constructor, 'Function')
  })

  describe('getters', function() {
    it('can get the name',  () => assert.equal(user('name'),  name))
    it('can get the age',   () => assert.equal(user('age'),   age))
    it('can get the email', () => assert.equal(user('email'), email))
  })

  describe('setters', function() {
    const name2 = 'Regis', email2 = 'regis@example.com', age2 = 123

    it('returns a new user with that attr set, they don\'t modify the existing one', () => {
      const newUser = user('name=', name2)
      assert.equal(   user('name'), name1)
      assert.equal(newUser('name'), name2)
    })

    it('has setters for the name, age, and email', () => {
      const newUser = user('name=', name2)('age=', age2)('email=', email2)
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

  it('throws an error when it gets a message its not expecting', () =>
    assert.throws(() => user('unknown message'), /NoMethodError/))
})
