// BMI=kg/m2

let height=document.getElementById("height");
let weight=document.getElementById("weight");

function calculateBMI(){
    h=height.value /100;
    w=weight.value;
     //console.log(weight/(height*height));
    console.log(h,w);
    document.getElementById("result").innerHTML=(w/(h*2));


}