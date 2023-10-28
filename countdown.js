function clock(){
let endDate="31 december 2023 23:59"
let end=new Date(endDate)
let now=new Date()
let inputs=document.querySelectorAll("input")
let diff=(end-now)/1000
console.log(diff);
inputs[0].value=Math.floor(diff/3600/24);
inputs[1].value=Math.floor(diff/3600)%24;
inputs[2].value=Math.floor(diff/60)%60;
inputs[3].value=Math.floor(diff%60);
}
setInterval(()=>clock(),1000);