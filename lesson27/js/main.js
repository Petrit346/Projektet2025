function showsms(){
    alert("ky eshte vetem nje mesazh")
}

showsms();

function sum(nr1,nr3){
    return nr1 +nr3;
}

console.log(sum(2.4));
document.write(sum(3.4));

function localvariable(){
    var vl = "digital school";
    alert (vl);
}

localvariable();
var car={
    name:"Audi",
    color:"red",
    year:2000,
    kilometers:0,
    starEngie:function(){
        alert("vroom");
    },
    get kilometers(){
        return this.kilometers;
    },
    set setkilometers(km){
        this.kilometers=km;
    }
};
console.log(car,gitkilometers);

car.setkilometers=100;

console.log(car.getkilometers);

alert(car.name);
alert(car['color']);

function Computer(name,cpu,ram,row){
    this.name=name;
    this.cpu=cpu;
    this.ram=ram;
    this.row=row;
}

var com1= new Computer("macbook", "8-core", "8-gb", "8-gb")
var com2= new Computer("macbook2", "6-core", "8-gb", "8-gb")

function Car(name,color,year,modelin){
    this.name=name;
    this.color=color;
    this.year=year;
    this.modelin=modelin;  
}
var Car1= new Car("audi2", "black","2026","Q3")
