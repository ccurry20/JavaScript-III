/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of “this” will be the window/console Object;
* 2. Implicit binding occurs when dot notation is used to invoke a function.
* 3. The New operator causes the function to be called with this bound to a newly created Object whose prototype is that function's prototype property.
* 4. Explicit binding of this occurs when .call(), .apply()  are used on a function. We call these explicit because you are explicitly passing in a this context to call() or apply().
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Carmen");

// Principle 2

// code example for Implicit Binding

var Impl = function (me) {
    this.name = 'Carmen'; 
};

Impl.prototype.say = function (action) {
    console.log (`${this.name} is ${action} !`);
}
var obj = new Impl();

obj.say('awesome');  

// Principle 3

// code example for New Binding

function MyName(greeter) {
    this.greeting = 'Whats up! ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const carmen = new MyName('Carmen');

  carmen.speak();


// Principle 4

// code example for Explicit Binding

var hobby = { name: 'Carmen', myFavoriteActivity: 'singing' };
  Impl.prototype.say.call(hobby, hobby.myFavoriteActivity); 