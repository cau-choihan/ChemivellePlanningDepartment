var myEventMethod = window.addEventListener ? "addEventListener" : "attachEvent";

var myEventListener = window[myEventMethod];
var myEventMessage = myEventMethod == "attachEvent" ? "onmessage" : "message";
myEventListener(myEventMessage, function (e) {
    if (e.data === parseInt(e.data)) document.getElementById('iframe').height = (parseInt(e.data)+20) + "px"; }, false);
