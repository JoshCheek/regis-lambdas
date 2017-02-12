const newUser = name => age => email =>
  message =>
    "name"        === message ? name :
    "age"         === message ? age :
    "email"       === message ? email :
    "name="       === message ? name  => newUser(name)(age)(email) :
    "age="        === message ? age   => newUser(name)(age)(email) :
    "email="      === message ? email => newUser(name)(age)(email) :
    "contactInfo" === message ? `"${name}" <${email}>` :
    "birthday"    === message ? newUser(name)(age+1)(email) :
    err(`NoMethodError: ${message}`)

module.exports = newUser

// Just wraps `throw` in a function b/c JS parsing is kind of stupid and won't
// let you put throw in an expression
function err(msg) {
  throw(msg)
}
