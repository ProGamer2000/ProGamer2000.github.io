var CT = "CT";
var UT = "UT";
var count = 0;
var Slist = ["Menu", "Today's Special", "Transport Route", "Day", "Contact List/ Intercom", "Utilities"];
var flist = ["chatty('lunch')", "chatty('TS')", "chatty('TR')", "chatty('date')", "chatty('CL')", "chatty('Utli')"];

function clear() {
    document.getElementById("Textbox").innerHTML = "";
}
// print command
function output(text, side = "CT") {
    changeall('.Button','disabled',true);
    changeall('.Button','class','disable');
    count++;
    var text = String(text);
    var side = String(side);
    var container = document.createElement("div");
    if (side === "UT") {
        container.setAttribute("class", "container darker");
    } else {
        container.setAttribute("class", "container");
    }
    container.id = count;
    document.getElementById("Textbox").appendChild(container);
    var img = document.createElement("img");
    if (side === "UT") {
        img.setAttribute("class", "right");
        img.setAttribute("alt", "Avatar");
        img.setAttribute("src", "img/user.png");
    } else {
        img.setAttribute("alt", "Avatar");
        img.setAttribute("src", "img/chatty.png");
    }
    document.getElementById(count).appendChild(img);
    var val = document.createElement("p");
    val.innerHTML = text;
    val.setAttribute("class", side)
    val.id = "Para" + count; //UT or CT
    document.getElementById(count).appendChild(val);
    document.getElementById(count).scrollIntoView();
}
//Buttons print command
function print2(text, string, func, clear) {
    changeall('.Button','disabled',true);
    changeall('.Button','class','disable');
    count++;
    text = String(text);
    //Create the chatbot side container
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    container.id = count;
    document.getElementById("Textbox").appendChild(container);
    //add image to the container
    var img = document.createElement("img");
    img.setAttribute("alt", "Avatar");
    img.setAttribute("src", "img/chatty.png");
    document.getElementById(count).appendChild(img);
    //add the text
    var valid = String(count) + "p";
    var val = document.createElement("p");
    val.innerHTML = text;
    val.setAttribute("id", valid);
    document.getElementById(count).appendChild(val);
    //add buttons for the options
    // First option
    for (var i = 0; i != string.length; i++) {
        var btn = document.createElement("button");
        btn.innerHTML = string[i];
        btn.setAttribute("id", "options")
        btn.setAttribute("onclick", func[i]);
        btn.setAttribute("class", "Button");
        document.getElementById(valid).appendChild(btn);
    }
    //Just scroll to the last message
    document.getElementById(count).scrollIntoView();
}
//Dropdown print commands
function print3(text, option) {
    changeall('#option-typer','disabled',true);
    changeall('#option-typer','placeholder','Please choose options given above');
    changeall('.Button','disabled',true);
    changeall('.Button','class','disable');
    count++;
    text = String(text);
    //Create the chatbot side container
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    container.id = count;
    document.getElementById("Textbox").appendChild(container);
    //add image to the container
    var img = document.createElement("img");
    img.setAttribute("alt", "Avatar");
    img.setAttribute("src", "img/chatty.png");
    document.getElementById(count).appendChild(img);
    //add the text
    var valid = String(count) + "p";
    var val = document.createElement("p");
    val.innerHTML = text;
    val.setAttribute("id", valid)
    document.getElementById(count).appendChild(val);
    //add buttons for the options
    //Create the select menu
    selid = String(count) + "s";
    var sel = document.createElement("select");
    sel.setAttribute( "id", selid);
    sel.setAttribute( "class", "select");
    sel.setAttribute( "onchange", "route(this.value)");
    document.getElementById(valid).appendChild(sel);
    //select options option
    var selopt = document.createElement("option");
    selopt.innerHTML = "--Select From The Options--";
    document.getElementById(selid).appendChild(selopt);
    //Define options the select menu
    for (var i = 0; i != option.length; i++) {
        var opt = document.createElement("option");
        opt.innerHTML = option[i];
        document.getElementById(selid).appendChild(opt);
    }
    //gives it search box
    $("#" + selid).select2();
    //Just scroll to the last message
    document.getElementById(count).scrollIntoView();
}
//Apends on the last print command
function AddToLast(Text) {
    var last_para = document.getElementById("Para" + String(count))
    last_para.appendChild(document.createElement("br"))
    last_para.innerHTML = last_para.innerHTML + String(Text)
}
function changeall(elem,atrribute,value) {
    var time = document.querySelectorAll(elem).length
    while (time > 0){
        time--;
        document.querySelectorAll(elem)[time].setAttribute(atrribute,value)
    }
}
function run() {
    var run = setTimeout(function() {
        print2("Choose between the options", Slist, flist);
    }, 3000);
}

//var _0x407c=['Y2hhaW4=','c3RyaW5n','ZXhjZXB0aW9u','Y29uc3RydWN0bw==','Y2FsbA==','dGFibGU=','YS16QS1aXyRdWw==','ZXJyb3I=','aW5pdA==','YXBwbHk=','aW5mbw==','ZGVidWc=','bGVuZ3Ro','c3RhdGVPYmplYw==','bmN0aW9uKCkg','ZnVuY3Rpb24gKg==','Y29uc29sZQ==','dHJhY2U=','NDE4MzYy','ZSkge30=','bG9n','d2Fybg==','e30uY29uc3RydQ==','Z2dlcg==','XCtcKyAqKD86Ww==','dGVzdA==','cm4gdGhpcyIpKA==','Y291bnRlcg==','YWN0aW9u','ZGVidQ==','JF0qKQ==','XCggKlwp'];(function(_0x3810a2,_0x407c50){var _0x34d17a=function(_0x3420b0){while(--_0x3420b0){_0x3810a2['push'](_0x3810a2['shift']());}};_0x34d17a(++_0x407c50);}(_0x407c,0x14f));var _0x34d1=function(_0x3810a2,_0x407c50){_0x3810a2=_0x3810a2-0x0;var _0x34d17a=_0x407c[_0x3810a2];if(_0x34d1['SsvlzW']===undefined){(function(){var _0x1b71d1;try{var _0x136f8c=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1b71d1=_0x136f8c();}catch(_0x57fcec){_0x1b71d1=window;}var _0x1315c7='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1b71d1['atob']||(_0x1b71d1['atob']=function(_0x1d2fc5){var _0x1e1568=String(_0x1d2fc5)['replace'](/=+$/,'');var _0x246104='';for(var _0x2c1f04=0x0,_0xd59ed9,_0x10f86b,_0x1d77e5=0x0;_0x10f86b=_0x1e1568['charAt'](_0x1d77e5++);~_0x10f86b&&(_0xd59ed9=_0x2c1f04%0x4?_0xd59ed9*0x40+_0x10f86b:_0x10f86b,_0x2c1f04++%0x4)?_0x246104+=String['fromCharCode'](0xff&_0xd59ed9>>(-0x2*_0x2c1f04&0x6)):0x0){_0x10f86b=_0x1315c7['indexOf'](_0x10f86b);}return _0x246104;});}());_0x34d1['QqQMuV']=function(_0x36ba4c){var _0x5bbe40=atob(_0x36ba4c);var _0x178383=[];for(var _0xd799f4=0x0,_0x344d74=_0x5bbe40['length'];_0xd799f4<_0x344d74;_0xd799f4++){_0x178383+='%'+('00'+_0x5bbe40['charCodeAt'](_0xd799f4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x178383);};_0x34d1['aTKiPe']={};_0x34d1['SsvlzW']=!![];}var _0x3420b0=_0x34d1['aTKiPe'][_0x3810a2];if(_0x3420b0===undefined){_0x34d17a=_0x34d1['QqQMuV'](_0x34d17a);_0x34d1['aTKiPe'][_0x3810a2]=_0x34d17a;}else{_0x34d17a=_0x3420b0;}return _0x34d17a;};var _0x1e1568=function(){var _0x151737=!![];return function(_0xe4a226,_0x390404){var _0x141d23=_0x151737?function(){if(_0x390404){var _0x4254a1=_0x390404[_0x34d1('0x1a')](_0xe4a226,arguments);_0x390404=null;return _0x4254a1;}}:function(){};_0x151737=![];return _0x141d23;};}();(function(){_0x1e1568(this,function(){var _0x522639=new RegExp(_0x34d1('0x0')+_0x34d1('0x10'));var _0x589e56=new RegExp(_0x34d1('0x9')+_0x34d1('0x17')+'0-9a-zA-Z_'+_0x34d1('0xf'),'i');var _0x1c87a5=_0x1d2fc5(_0x34d1('0x19'));if(!_0x522639[_0x34d1('0xa')](_0x1c87a5+_0x34d1('0x11'))||!_0x589e56[_0x34d1('0xa')](_0x1c87a5+'input')){_0x1c87a5('0');}else{_0x1d2fc5();}})();}());var _0x1315c7=function(){var _0x3e5ea6=!![];return function(_0x571dad,_0x49adf0){var _0x38635a=_0x3e5ea6?function(){if(_0x49adf0){var _0x4224db=_0x49adf0[_0x34d1('0x1a')](_0x571dad,arguments);_0x49adf0=null;return _0x4224db;}}:function(){};_0x3e5ea6=![];return _0x38635a;};}();setInterval(function(){_0x1d2fc5();},0xfa0);var _0x1b71d1=_0x1315c7(this,function(){var _0x20b1cd=function(){};var _0x3d95fa;try{var _0x356d0b=Function('return\x20(fu'+_0x34d1('0x1f')+(_0x34d1('0x7')+'ctor(\x22retu'+_0x34d1('0xb')+'\x20)')+');');_0x3d95fa=_0x356d0b();}catch(_0x2396f6){_0x3d95fa=window;}if(!_0x3d95fa[_0x34d1('0x1')]){_0x3d95fa[_0x34d1('0x1')]=function(_0x2c3fdb){var _0x223ceb={};_0x223ceb[_0x34d1('0x5')]=_0x2c3fdb;_0x223ceb[_0x34d1('0x6')]=_0x2c3fdb;_0x223ceb[_0x34d1('0x1c')]=_0x2c3fdb;_0x223ceb[_0x34d1('0x1b')]=_0x2c3fdb;_0x223ceb[_0x34d1('0x18')]=_0x2c3fdb;_0x223ceb['exception']=_0x2c3fdb;_0x223ceb[_0x34d1('0x16')]=_0x2c3fdb;_0x223ceb[_0x34d1('0x2')]=_0x2c3fdb;return _0x223ceb;}(_0x20b1cd);}else{_0x3d95fa[_0x34d1('0x1')][_0x34d1('0x5')]=_0x20b1cd;_0x3d95fa['console'][_0x34d1('0x6')]=_0x20b1cd;_0x3d95fa['console']['debug']=_0x20b1cd;_0x3d95fa[_0x34d1('0x1')][_0x34d1('0x1b')]=_0x20b1cd;_0x3d95fa[_0x34d1('0x1')][_0x34d1('0x18')]=_0x20b1cd;_0x3d95fa[_0x34d1('0x1')][_0x34d1('0x13')]=_0x20b1cd;_0x3d95fa[_0x34d1('0x1')][_0x34d1('0x16')]=_0x20b1cd;_0x3d95fa[_0x34d1('0x1')][_0x34d1('0x2')]=_0x20b1cd;}});_0x1b71d1();var token=_0x34d1('0x3');function _0x1d2fc5(_0x549281){function _0x526150(_0x16035e){if(typeof _0x16035e===_0x34d1('0x12')){return function(_0x5abdf7){}[_0x34d1('0x14')+'r']('while\x20(tru'+_0x34d1('0x4'))[_0x34d1('0x1a')](_0x34d1('0xc'));}else{if((''+_0x16035e/_0x16035e)[_0x34d1('0x1d')]!==0x1||_0x16035e%0x14===0x0){(function(){return!![];}[_0x34d1('0x14')+'r'](_0x34d1('0xe')+_0x34d1('0x8'))[_0x34d1('0x15')](_0x34d1('0xd')));}else{(function(){return![];}[_0x34d1('0x14')+'r'](_0x34d1('0xe')+'gger')['apply'](_0x34d1('0x1e')+'t'));}}_0x526150(++_0x16035e);}try{if(_0x549281){return _0x526150;}else{_0x526150(0x0);}}catch(_0x20ba1b){}}
var token = "418362";

function input() {
    var val = document.getElementById("option-typer").value;
    return val;
}

function Get(Url) {
    var URL = 'https://v2-api.sheety.co/9a12bc0f9230b39275673e809fbca912/chattyApi/' + Url;
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", URL, false);
    Httpreq.setRequestHeader('Authorization', 'Bearer ' + token);
    Httpreq.send(null);
    var value = String(Httpreq.responseText);
    var value = JSON.parse(value);
    return value;
}
// Run as soon as the page has created all the element
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementsByClassName('loading')[0].remove()
        print2("Choose between the options", Slist, flist);
    }, 2000);
}, false);