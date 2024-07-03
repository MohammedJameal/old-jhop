// variables initialization

var radius = screen.width< 768 ? 145 : 390;
var autoRotate = true;
var rotateSpeed =-60;
var imgWidth= screen.width< 768 ? 120 : 324;
var imgHeight= screen.width < 768 ? 170: 459;

setTimeout(init,1000);

// select don carousel elements

var odrag =document.querySelector('#drag-container');
var ospin = document.querySelector('#spin-container');
var aImg = ospin.getElementsByTagName('img');
var aEle = [...aImg];


// set image width and height

ospin.style.width = imgWidth+ 'px';
ospin.style.height = imgHeight + 'px';

var ground = document.querySelector('#ground');
ground.style.width = radius* 3 + 'px';
ground.style.height = radius * 3+ 'px';


// setup initial delay time for image appearance
function init(delayTime) {
    for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform=`rotateY(${
     i*(360 / aEle.length)
    }deg) translateZ(${radius}px)`;
    aEle[i].style.transition = 'transform 1s';
    aEle[i].style.transitionDelay = delayTime || (aEle.length - 1) / 4
}
}

// set up object transform
function applyTransform(obj) {
    if (tY> 180) tY = 180;
    if (ty< 0) tY = 0;
    obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
}
    // play object spinning effect
    function playSpin (yes = true) {
     ospin.style.animationPlayState= yes ? 'running': 'paused';
}


var sX,
sY,
nX,
nY,
desX = 0,
desY= 0,
tX = 0, tY = 0;

// enable auto rotating effect
if (autoRotate) {
    var animationName = rotateSpeed > 0  ? 'spin' : 'spinRevert';
     ospin.style.animation = `${animationName} ${Math.abs(
      rotateSpeed
    )}s linear infinite`;
}
  


// enable on pointer down effect 
odrag.onpointerdown=function (e) {
    clearInterval(odrag.timer);
    var SX = e.clientX,
      SY= e.clientY;
// pointer move effect
this.onpointermove = function (e) {
    var nX=e.clientx,
      nY= e.clientY;
    desx = nX - SX;
    desY= nY- SY;
    tX += desX * 0.1;
    tY+= desY* 0.1; 
    applyTransform(odrag);
    sX = nX;
    SY = nY;
};
// pointer up effect
this.onpointerup = function (e){
     odrag.timer = setInterval(() => {
        desX*= 0.95;
        desY*=0.95;
        tX += desX*0.1;
        tY+= desY* 0.1; 
        applyTransform(odrag);
        playSpin(false);
if (Math.abs(desX) < 0.5 && Math.abs (desy) < 0.5) { 
    clearInterval(odrag.timer);
    playSpin(true);
}
}, 17);
this.onpointermove= this.onpointerup = null;
};
return false;
};