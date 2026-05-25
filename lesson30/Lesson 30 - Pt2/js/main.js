var wakeuptime;
var dstime;
var sleeptime;
var noon=12;


function showcurrentTIME(){
    var clock=document.getElementById('clock');
    var currentTIME=new Date();


    var hours=currentTIME.getHours();
    var minutes=currentTIME.getMinutes();
    var second=currentTIME.getSeconds();

    var meridian="AM";

    if(hours >=  12){
        meridian="PM"
    }

    var clocktime=hours + ":" + minutes + ":" + seconds + ":" + meridian;
    clock.innerText=clocktime;
    //NA DUHET ME THIRR FUNKSIONIN QE E NDRRON FOTON


}
function changeImage(){
    var time=new Date().getHours();
    console.log(time);

    var image="img/ds_clock.png";
    var imageHTML=document.getElementById('timeimage');


    if (time==wakeuptime){
        image="img/morning.png";
        console.log('morning');
    }else if(time==dstime){
        image="img/class.png";
    }

}