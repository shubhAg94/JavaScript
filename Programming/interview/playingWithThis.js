// Problem - 1
const shape = 
	{ 
  	radius: 10, 
    diameter() { return this.radius * 2; }, 
    perimeter: () => 2 * Math.PI * this.radius, 
  }; 
  // console.log(shape.diameter()); 
  // console.log(shape.perimeter());

// Problem - 2
function Employee(name) {
  this.name = name;
}
Employee.prototype.getName = () => { return this.name; };

const jason = new Employee('Jason');
//console.log(jason.getName());

// Problem - 3
var hero = {
  _name: 'John Doe',
  getSecretIdentity: function (){
      return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;
//console.log(stoleSecretIdentity()); // Undefined

//Ans 1 --> With call
//console.log(stoleSecretIdentity.call(hero));
//Ans 2 --> With bind
var stoleSecretIdentity1 = hero.getSecretIdentity.bind(hero);
//console.log(stoleSecretIdentity1());

//Problem - 4 complete the programme
function person(name1, age){
		this.name = name1;
		this.age = age;
		this.getName = function() {
			return this.name;
		}

		this.getAge = function() {
			return this.age;
		}
	}
function employee(name1, age, salary){
		this.salary = salary;
		// Ans is to add below line
		// person.call(this,name,age);
	}

/*Desired output is 
	emp = new employee('s',20,2000);
	emp.getName should give : 's'
 */

//Problem - 5





