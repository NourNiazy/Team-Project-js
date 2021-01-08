var letters=document.getElementById("letters");
var generate=document.getElementById("generate");

generate.addEventListener("click",function GenerateButton()
 {
     var number=document.getElementById("number").value;
   
 for(var i=0;i<number;i++)
    {
      var div = document.createElement("div");
      div.className="col-md-3";
      document.getElementById("main").appendChild(div);

  }

})