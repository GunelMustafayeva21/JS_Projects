const input = document.getElementById("text-input");
const checkBtn= document.getElementById("check-btn");
const result = document.getElementById("result");

const regex= /[a-z0-9]/
checkBtn.addEventListener("click", ()=>{
    console.log("Burdayım. Herkes gitdi ben burdayım")
    if(input.value.length===0){
        alert("Please input a value");
        result.innerText="";
        return;
    }
    let pure="";
    input.value=input.value.toLowerCase();
    for(let i=0; i<input.value.length; i++){
       
        if(input.value[i].match(regex)){
          pure+=input.value[i];
        }
     
    }
    
    
        
    
    if(pure=== pure.split("").reverse().join("")){
        
        result.innerText=`${input.value} is a palindrome`
    }
    else{
        result.innerText=`${input.value} is not a palindrome`
    }
} )