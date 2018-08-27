console.log("SCRATCHER ON");

var div=document.createElement("div");
var width=window.innerWidth;
var height=window.innerHeight;
    div.setAttribute("class","Scratcher_div");
    div.style.width=width+"px";
    div.style.display="none";
    div.style.height=height+"px";

    console.log("height:"+height+"pxXD");

    document.body.appendChild(div);





var scratching=function (num){
    div.style.display="block";
    console.log("Scratching effect "+num)

    return  new Promise(function(resolve,reject){

            var frame=0;

            var interval=setInterval(function(){
                  frame++;
                  if(frame>18){
                     clearInterval(interval);
                     div.style.display="none";
                     resolve("SCRATCHER OK: "+num);
                  }

                  div.style.backgroundPosition=(num==1?0:100)+"%"+(frame*-100)+"%";
                  console.log(frame);

                },50);

        });


};

 var print=function(status){

    console.log(status+" print");
    //app.stage.removeChild(anim);
    //app.stage.removeChild(shop);

    while(app.stage.children[0]) {
      console.log("Elemntos restantes: "+app.stage.children.length +" de la app de PIXI")
      app.stage.removeChild(app.stage.children[0]); }
    debugger;

};

  var secondS=function(cadena){
    return function(){

      return scratching(cadena);
    }
  }
/*
    scratching(1)
      .then(print)
      .then(secondS(2))
      .then(print);
*/
