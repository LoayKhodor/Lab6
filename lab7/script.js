class Employee{
    static nbrOfEmployees;
    static incrementEmp(){
      return  this.nbrOfEmployees+=1;
    }
    print(){
        return "Employee: "+ this.name +" Email: "+this.email +" Age: "+this.age+" Address: "+this.address + " Experience: "+this.exp+ " Salary: "+this.salary;
    }
    raise(){
       return this.salary *= 1.5;
    }
    constructor(name, email, age, address, exp){
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
        this.exp = exp;
        this.salary = 1000;
    }

}

class Manager extends Employee{
    static nbrOfManagers;
    static incrementEmp(){
      return  this.nbrOfManagers+=1;
    }
    constructor(name, email, age, address, exp, department){
        super(name, email, age, address, exp);
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
        this.exp = exp;
        this.salary = 1500;
        this.department = department;
    }
    print(){
        return "Manager: "+ this.name +" Email: "+this.email +" Age: "+this.age+" Address: "+this.address + " Experience: "+this.exp+ " Salary: "+this.salary + " Department: "+this.department;
    }
    raise(){
        return this.salary *= 2;
    }
}


var company = [];
const e1 = new Employee("John", "Jonh@gmail.com", 40, "Hamra", 12);
const e2 = new Employee("Karim", "Karim@hotmail.com", 37, "Beirut", 7);
const e3 = new Employee("Loay", "Loay@hotmail.com", 24, "Beirut", 1);
const m1 = new Manager("Rabih", "rabih@gmail.com", 43, "Badaro", 20, "Sales");
const m2 = new Manager("Maya", "maya@gmail.com", 36, "Badaro", 10, "HR");

console.log(m1 instanceof Manager);
// true
// console.log(e3);
// console.log(m2.print());
console.log("Manager Salary before raise: " + m1.salary);
m1.raise();
console.log(m1.salary);
console.log("Employee Salary before raise: " + e1.salary);
e1.raise();
console.log(e1.salary);




function User(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}

User.prototype.getName = function(){return this.name}
User.prototype.setName = function(name){this.name = name}
Object.defineProperty(User, 'password', {
    writable: false, 
    enumerable: false,
    configurable: false
});

Object.defineProperty(User, 'nationality', {
value: "Lebanese"
});
delete User.prototype.nationality;

User.prototype.printUser = function(){ return "User: " + this.name + " Email: " + this.email}
User.prototype.printKeys = function(){return Object.keys(User)}

const user1 = new User("Loay", "loay.khodor@lau.edu.lb", "123456789");




