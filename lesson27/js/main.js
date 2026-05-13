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


    

