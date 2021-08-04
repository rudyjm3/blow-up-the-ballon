const pump = document.getElementById("pump-button");
const deflate = document.getElementById("deflate-button");
let ballon = document.getElementById("balloon");
let i = 1;
let n = i.toFixed(2);

pump.addEventListener("mousedown", blowUp);
deflate.addEventListener("mousedown", deflateBalloon);

function blowUp(){
   //let x = 4;
   n++;

   balloon.style.transform = "scale(0"+ n +")";
   console.log(n);  
};

function deflateBalloon(){
   n--;
   // let matrix = window.getComputedStyle(ballon).transform;
   // let matrixArray = matrix.replace("matrix(", "").split(",");
   // let scaleX = parseFloat(matrixArray[0]); // convert from string to number
   // let scaleY = parseFloat(matrixArray[3]);
   // // bonus round - gets translate values
   // let translateX = parseFloat(matrixArray[4]); 
   // let translateY = parseFloat(matrixArray[5]); // parseFloat ignores ")
   // console.log(translateX, translateY);
   
   //scale = style.getPropertyValue('scale');
   
   //console.log(balloonScale);
   //if (balloon.style == )
   balloon.style.transform = "scale(0"+ n +")";
   console.log(n);  
};

// Need to edit or and another function to reconize when mouse is held down and released. Adjust how the scale is incoromented. Maybe add a deflate function and button .