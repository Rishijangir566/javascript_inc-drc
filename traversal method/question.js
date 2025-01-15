
let veg = document.getElementById("vegetable").firstElementChild;
let frut = document.getElementById("fruits")
  frut.append(veg.cloneNode(true))



  let changefrut = document.createElement("p")
   changefrut.innerHTML="Chickoo"
   changefrut.classList.add("newfruit")
frut.children[1].replaceWith(changefrut);





let data = ["racecar", "racetrack", "saas", "civic", "radar", "level", "rotor" ,"rishi"];

let palindromes = data.filter(item => item !== item.split('').reverse().join(''));

console.log(palindromes);



// ------ IIFE (imadetaily invoke function extanstion)-----
    
     (function roman(){
         console.log("hello") 
     })();
     (function sonam(){
         console.log("hello") 
     })()