// // for - (in)

// var person = {firstname: "john" , lastname: "Doe" , age: "25"} 

// var text = '';

// var z;

// for (z in person) {
//     text += personi[z];
// }

// // 1--> "John"
// // 2==> "Doe"
// // 3--> "JohnDoe25"

// console.log(text);

// console.log("--------------------------")

// // for - (of)

// var names = ['Steve' , 'Bill' , 'Mark'];

// var y;

// for( y of names) {
//     console.log(y)
// }
//  console.log("-------------------------");

// var txt = "javascript";

// var l;

// for(l of txt){
//     console.log(l)
// }

//  console.log("-------------------------");





var text = "the best school in the world is Digital School!";

var result = text.search("Digital school");

document.getElementById("result1").innerHTML = result;




var text = "the best school in the world is Digital School!";

var result = text.search(/Digital school/);

document.getElementById("result2").innerHTML = result;




var text = "the best school in the world is Digital School!";

var result = text.replace(/Digital school/ , "another school");

document.getElementById("result3").innerHTML = result;



var text = "abcdef";

var regex = new RegExp('abc');

document.getElementById("result4").innerHTML = regex.test(text);


var text = "My school is the best school in the world"

var regex = /school/g;

document.getElementById("result5").innerHTML = text.match(regex);


var text = "Digital school is the best school in the world";

var regex = /i/g;

document.getElementById("result6").innerHTML = text.match(regex);


var text = "Digital school is the best school in the world";

var regex = /[abc]/g;

document.getElementById("result7").innerHTML = text.match(regex);


var text = "Digital school is in  top 10 best school in the world ";

var regex = /[0,9]/g;

document.getElementById("result8").innerHTML = text.match(regex);


var text = "My school is the best school in the world";

var regex = /(top | best | school)/g;

document.getElementById("result9").innerHTML = text.match(regex);


//var text = " 100 percent 1"

var text = "My school is the best school in the world";
//digit

var regex = /\s/g;
//space

document.getElementById("result11").innerHTML = text.match(regex);





var text = "How are you";


var regex = /e+/g;


document.getElementById("result12").innerHTML = text.match(regex);



var text = "How are you";


var regex = /e+/g;


document.getElementById("result13").innerHTML = text.match(regex);




var text = "Heyyyy hiiiiii";


var regex = /hi?/g;


document.getElementById("result14").innerHTML = text.match(regex);



var text = "Hellooo helloooo hellooo";


var regex = /o{3}/g;


document.getElementById("result15").innerHTML = text.match(regex);



var text = "Hello helloooo helloooooooooooo";


var regex = /o{3.5}/g;


document.getElementById("result16").innerHTML = text.match(regex);



