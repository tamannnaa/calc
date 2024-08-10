let buttons=document.querySelectorAll(".buttons");
let digits=document.querySelector("#digits");
buttons.forEach(function(item){
    item.addEventListener("click",clickfun)
})

function clickfun(e){

    if(digits.textContent=="0"){
        digits.textContent=""
    }
    let target=e.target;
    if(isNew==false){
        digits.textContent+=target.textContent;
    }
    else{
        digits.textContent="";
        digits.textContent+=target.textContent;
        isNew=false;
    }
    

}


let operand1=0;
let operand2=0;
let op="";
let isNew=false;

let operations=document.querySelectorAll(".operations")
operations.forEach(function(item){
    item.addEventListener("click",operationfun)
})

function operationfun(e){
    let target = e.target;
    if (target.textContent === "AC") {
        digits.textContent = "0";
        operand1 = 0;
        operand2 = 0;
        op = "";
        isNew = false;
    }
    else{
        op=e.target.textContent;
        operand1=parseInt(digits.textContent);
        isNew=true;
    }
    
}

let result=document.querySelector("#result")
result.addEventListener("click",function(){
    operand2=parseInt(digits.textContent)
    if(op=="+"){
        let resultdata=parseInt(operand1)+parseInt(operand2)
        digits.textContent=resultdata;
        isNew=true;
    }
    if(op=="-"){
        let resultdata=parseInt(operand1)-parseInt(operand2)
        digits.textContent=resultdata;
        isNew=true;
    }
    if(op=="/"){
        let resultdata=parseInt(operand1)/parseInt(operand2)
        digits.textContent=resultdata;
        isNew=true;
    }
    if(op=="*"){
        let resultdata=parseInt(operand1)*parseInt(operand2)
        digits.textContent=resultdata;
        isNew=true;
    }
    
})