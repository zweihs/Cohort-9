let age1=document.getElementById("age1");
let age2=document.getElementById("age2");

function calculate(){
    age1=age1.value;
    age2=age2.value;
    
    console.log(age1,age2);
    document.getElementById("result").innerHTML=age1+age2;

}