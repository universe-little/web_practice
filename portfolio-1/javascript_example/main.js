window.onload=function(){
   // document.write("Hello JavaScript");
};
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
       // $("h1").text("Hello");
       //$("h1").text($("li:first").text());
       var numberOfLisItem = $("li").length;
       var randomChildNumber = Math.floor(Math.random()*numberOfLisItem);
       $("h1").text($("li").eq(randomChildNumber).text());
       var  image = document.getElementById("image012");
       image.innerHTML="<img src="+randomChildNumber+".jpg>";
    });
});