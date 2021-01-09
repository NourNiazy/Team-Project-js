var generate=document.getElementById("generate");
var counter = 1;
var div;
generate.addEventListener("click",function GenerateButton(e)
 {
     var number=document.getElementById("number").value;
     var xbox=Math.floor(Math.random() * number); 
   
 for(var i=0;i<number;i++)
    {
      var div = document.createElement("div");
      div.className="col-md-3";

      document.getElementById("main").appendChild(div);
      var x=div.id=i;
      if(i===xbox){
        var gift = document.createElement("img");
        gift.classList.add("img-style");
        gift.src  = '../img/img.jpeg'
        div.appendChild(gift);
      }
      div.addEventListener("click",function SrearchGift(e){
        if(e.target.id == xbox)
    {
      document.querySelector(".img-style").style.visibility="visible";
      document.querySelector('.result').innerHTML="You Won after"+"<br>"+ counter +"<br>"+ " Steps ";
     
    }
    else
    counter++;
      })

  }


});
function DisableNextButton( ) {
  document.getElementById("generate").disabled = 'true';
}
/*
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
getRandomNumberBetween(50,80);
 */