window.onload = function () {

    var canvas1 = document.getElementById("canvas1");
    var ctx = canvas1.getContext("2d")

    var fulcrum = canvas1.getContext("2d");    
    fulcrum.beginPath();
    fulcrum.moveTo(0,100);
    fulcrum.lineTo(50,0);
    fulcrum.lineTo(100,100);
    fulcrum.fill();

    var coords = [ [20,80], [40,80], [60,80], [80,80],[30,60], [50,60], [70,60], [40,40], [60,40], [50,20] ];

    for(var i = 0; i < coords.length; i++){
      ctx.beginPath();
      ctx.arc(coords[i][0], (coords[i][1]+5), 7, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();
   }

   
   var canvas = document.getElementById("canvas2");
   var ctx = canvas.getContext("2d");
   
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(5,5);
    ctx.lineTo(50,95);
    ctx.lineTo(95,5);
    ctx.lineTo(5,5);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
  

     var coords = [ [20,8], [40,8], [60,8], [80,8],[30,28], [50,28], [70,28], [40,48], [60,48], [50,68] ];

   for(var i = 0; i < coords.length; i++){
      ctx.beginPath();
      //ctx.lineWidth = 10; 
      //ctx.strokeStyle = "#000000";
      ctx.arc(coords[i][0], (coords[i][1]+(7)), 4, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.fillStyle = "#000000"; 
      ctx.fill();
   }
}
