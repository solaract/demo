
var myvideo=document.getElementById("video");
//获取画布对象
var mycanvas=document.getElementById("videoDate");
var ctx = mycanvas.getContext('2d');
var dataT;         
var fps=1000/40;

myvideo.addEventListener('playing',function(){
	console.log(1);
	dataT = setInterval(function(){
		var pX = [];
		var pY = [];
	ctx.drawImage(myvideo,0,0,800,600);
	var imgData = ctx.getImageData(0,0,800,600);
	var dataLen = 1920000;
	var i = 0;
	// var x,y;
	// x = y = 0;
	while(i<dataLen){
		if(imgData.data[i]<100){
			var n = Math.floor(i/3200);
			var x = Math.ceil((i-3200*n)/4);
			var y = n+1;
			pX.push(x);
			pY.push(y);
			// pX[pX.length] = x;
			// pY[pY.length] = y;
			// i+=4*5;
		}
		if(!(i%3200)){
			// console.log(5);
			i=i+16000;
			// console.log(i);
		}
		// else{
			i+=4*5;
		// }
	}
	// for (var i=0;i<dataLen;i+=4){
	// 	if(imgData.data[i]<100){
	// 		var n = Math.floor(i/3200);
	// 		var x = i-3200*n;
	// 		var y = n+1;
	// 		// pX[pX.length] = x;
	// 		// pY[pY.length] = y;
	// 		// pX.push(x);
	// 		// pY.push(y);
	// 		// pI.push(i);
	// 		// imgData.data[i] = 255;
	// 		// imgData.data[i+1] = 255;
	// 		// imgData.data[i+2] = 255;
			
	// 		// ctx.fillText('*',x,y);
	// 	}
	// }
	ctx.fillStyle="#ffffff";
	ctx.fillRect(0,0,800,600);
	// ctx.putImageData(imgData,0,0);
	var xLen = pX.length;
	var yLen = pY.length;
	ctx.fillStyle="#000000";
	var m = 0;
	// while(n<yLen){
	// 	if(Math.abs(pY[n]-pY[n+1])<5){
	// 		if(pY[n] === pY[n+1]){
	// 			ctx.fillText('*',pX[n],pY[n]);
	// 			n++;
	// 		}
	// 		else{
	// 			pY.splice(n+1,1);
	// 			pX.splice(n+1,1);
	// 		}			
	// 		continue;
	// 	};
	// 	ctx.fillText('*',pX[n],pY[n]);
	// 	n++;
	// }
	for(var m = 0;m<xLen;m++){
		ctx.fillText('*',pX[m],pY[m]);
	}
	// while(m<xLen){
	// 	while(Math.abs(pX[m]-pX[m+1])<5){
	// 		pX.splice(m+1,1);
	// 	}
	// 	m++;
	// }
	// while(n<yLen){
	// 	while(Math.abs(pY[n]-pY[n+1])<5){
	// 		pY.splice(n+1,1);
	// 	}
	// 	n++;
	// }
	// m = n = 0;
	// while(m<xLen){
	// 	while(n<yLen){
	// 		// console.log('x:'+x+'y:'+y);
	// 		// ctx.fillText('*',pX[m],pY[n]);
	// 	}
	// }
	// ctx.fillStyle="#000000";
	// ctx.fillText('*',10,10);
	// ctx.fillText('*',10,15);
	// ctx.fillText('*',15,10);
},fps);
})
myvideo.addEventListener('pause',function(){
	console.log(2);
	clearInterval(dataT);
})
// myvideo.addEventListener('timeupdate',function(){
// 	ctx.drawImage(myvideo,0,0,800,600);
// })