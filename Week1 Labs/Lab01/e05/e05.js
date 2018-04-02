'use strict';
function Person(name) {
    this.name = name;
    
    
}
Person.prototype.teach = function(subject){
    console.log(this.name + " is now teaching "+subject); 
}
var person = new Person("Jeewan");
person.teach("MWA");
