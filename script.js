const form = document.querySelector("form");
const button = document.querySelector("#button");


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const ans = document.querySelector("#ans");
    
    bmi(height,weight);
    ans.setAttribute("class","hidden");
    ans.innerText = `This is Your BMI Index - ${val}`;

});

function bmi(height,weight) { 
    console.log(height);
    console.log(weight);
    val = (weight/((height*height)/10000)).toFixed(2);
    console.log(val)
    return val   
}
