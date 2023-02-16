
let x=document.getElementById("walter")
let y=document.getElementById("kohli")
let z=document.getElementById("rest")
let i=0 
let k=0
function reset(){
    i=0
    k=0
   x.innerText=0
   y.innerText=0
}
function increment1(){
    i+=1
    x.textContent=i
}
function increment2()
{ i+=2
    x.textContent=i
}
function increment3(){
    i+=3
    x.textContent=i
}
function increment1k(){
    k+=1
    y.textContent=k
}
function increment2k()
{ k+=2
    y.textContent=k
}
function increment3k(){
    k+=3
    y.textContent=k
}
