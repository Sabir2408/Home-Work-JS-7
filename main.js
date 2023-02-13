//1
class Transport{
    constructor(title, model, color){
        this.title=title;
        this.model=model;
        this.color=color;
    }
     startEngine(){
        console.log(`On ${this.title} ${this.model} engine started`);  // полиморфизм
        
     }   
}

class Car extends Transport{
    constructor (title, model, color, maxSpeed, speed){
        super(title, model, color)
        this.maxSpeed=maxSpeed;
        this.speed=speed;
    }
    // startEngine(){
    //     console.log(`Hello its ${this.title} ${this.model}`); // переопредили функцию, это называется полиморфизм    
    // }
    _currentSpeed=140;
    currentSpeed(){
        console.log(`Current Speed: ${this._currentSpeed}`);    
    }
    break(){
        if(this._currentSpeed >= this.maxSpeed){
            console.log(`Max speed on car ${this.title} ${this.model} ${this.maxSpeed}`);   
        } else{
            this._currentSpeed-= this.speed;
            this.currentSpeed();
        }
    }
     
}
const bmw = new Car('BMW','X7','black', 320, 20)    //Инкапсуляция
bmw.break()
bmw.break()
bmw.break()
bmw.break()



//2
// class User{
//     constructor(name, surname, year){
//         this.name=name;
//         this.surname=surname;
//         this.year=year;
//     }
// }

// class Student extends User{
//     constructor (name, surname, year){
//         super(name, surname, year)
//     }
//     getFullName(){
//         console.log(`Name:${this.name} Surname: ${this.surname}`);
        
//     }
//     _thisYear=2023;
//     thisYear(){
//         console.log(`This Year: ${this._thisYear}`);   
//     }
//     getCourse(){
//       console.log(this._thisYear-this.year );   
//     }
// }

// const one = new Student ('Ivan', 'Petrov', '2018')
// one.getFullName()
// one.getCourse()