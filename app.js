
var a = document.getElementById("imageparent");
var allimages = a.getElementsByTagName("IMG")
var showslide = document.getElementById("showslide");
var indexNumber = 0

console.log(allimages);
window.renderSlide =    function (){
showslide.src = allimages[indexNumber].src 
}
renderSlide();

window.nextSlide = function  (){

if(indexNumber + 1 == allimages.length){
    indexNumber = 0;
}else{
    indexNumber++;
}

renderSlide();
}

 window.previousSlide =  function (){
   if(indexNumber == 0){
    indexNumber = allimages.length-1;
   }else{
    indexNumber--;
   }

renderSlide();
}

setInterval (
    function(){
        nextSlide()
    },5000 );



