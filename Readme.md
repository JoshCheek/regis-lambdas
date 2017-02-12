Recreating objects with functions, A challenge for Regis!
=========================================================

Consider this Ruby code. Just for the fun of the challenge, lets try to
recreate the class and object in JavaScript using only functions (no `this`
keyword and no objects, you'll have to use a closure to store data)!

```ruby
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
user.name   # => "Josh"
user.age    # => 33
user.email  # => "josh@example.com"

# Setters (Alan Kay is grimacing)
user.name  = 'Regis'
user.age   = 123 # idk
user.email = 'regis@example.com'

# methods that modify it
user.birthday  # => #<User:0x007fcfa2069e28 @name="Regis", @age=124, @email="regis@example.com">
user.birthday  # => #<User:0x007fcfa2069e28 @name="Regis", @age=125, @email="regis@example.com">
user.birthday  # => #<User:0x007fcfa2069e28 @name="Regis", @age=126, @email="regis@example.com">
```


Setup
-----

* Clone the repo
* Run `npm install` to get deps
* Run `npm test` to start the test suite
