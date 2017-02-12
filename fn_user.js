module.exports = newUser

function newUser(name, age, email) {
  return (message, ...params) => {
    switch(message) {
      case "name":        return name
      case "age":         return age
      case "email":       return email
      case "name=":       return newUser(params[0], age, email)
      case "age=":        return newUser(name, params[0], email)
      case "email=":      return newUser(name, age, params[0])
      case "contactInfo": return `"${name}" <${email}>`
      case "birthday":    return newUser(name, age+1, email)
      default: throw(`NoMethodError: ${message}`)
    }
  }
}

