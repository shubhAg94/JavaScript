// ES5 - Prototypal Inheritance
function PrototypicalGreeting(greeting = "Hello", name = "World") {
    this.greeting = greeting
    this.name = name
  }
  
  PrototypicalGreeting.prototype.greet = function() {
    return `ES5: ${this.greeting}, ${this.name}!`
  }
  
  const greetProto = new PrototypicalGreeting("Hey", "folks")
  console.log(greetProto.greet())
  
  ///ES6 Class
  class ClassicalGreeting {
    constructor(greeting = "Hello", name = "World") {
      this.greeting = greeting
      this.name = name
    }
  
    greet() {
      return `ES6: ${this.greeting}, ${this.name}!`
    }
  }
  
  const classyGreeting = new ClassicalGreeting("Hey", "folks")
  
  console.log(classyGreeting.greet())