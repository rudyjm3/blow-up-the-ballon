const pump = document.getElementById("pump-button");
let ballon = document.getElementById("balloon");
let i = 1;
let n = i.toFixed(2);

pump.addEventListener("mousedown", blowUp);

function blowUp(){
   let x = 4;
   n++;

   balloon.style.transform = "scale(0"+ n +")";
   console.log(i);  
};


// Need to edit or and another function to reconize when mouse is held down and released. Adjust how the scale is incoromented. Maybe add a deflate function and button .