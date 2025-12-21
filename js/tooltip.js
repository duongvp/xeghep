//
// DotNetNuke -  http://www.dotnetnuke.com
// Copyright (c) 2002-2005
// by Shaun Walker ( sales@perpetualmotion.ca ) of Perpetual Motion Interactive Systems Inc. ( http://www.perpetualmotion.ca )
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
// documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
// the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and 
// to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions 
// of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
// TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
// CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
// DEALINGS IN THE SOFTWARE.
//

document.write("<div id=\"ttip\" class=\"Eventtooltip\" style=\"display:none;position:absolute;max-width:100%;font-weight:normal; font-family: Verdana,arial,helvetica,sans-serif; font-size: 10pt; color: rgb(70, 70, 70); background-color: rgb(255, 255, 255); border-color: rgb(210, 210, 210); border-width: 1px; padding: 4px; border-style: ridge;left: 476px; top: 461px;z-index:10000;-webkit-border-radius: 5px ;-moz-border-radius: 5px ;border-radius: 5px;\">eportal<\/div>");

xBump=yBump=10;
MSIE=document.all;
NS6=document.getElementById&&!document.all;

if(MSIE||NS6)
{
	ttipObj=document.all?document.all["ttip"]:document.getElementById?document.getElementById("ttip"):"";
}

function MSIEBodyReturn()
{
	return(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body;
}

function ShowTip_Image(ttipText,ttipAlt,ttipTitle) {
    var img = new Image();
    img.src = ttipText;
img.onload = function() {
    var width_img, height_img, width_img_new, height_img_new;
    width_img = img.width;
    height_img = img.height;
    width_img_new=width_img;
    height_img_new=height_img;
    if (width_img >= height_img) {
        if (width_img > 400) {
            width_img_new = 400;
            height_img_new = height_img * width_img_new / width_img;
        }
    }
    else {
        if (height_img > 400) {
            height_img_new = 400;
            width_img_new = width_img * height_img_new / height_img;
        }
    }

    if (typeof (ttipTitle) == "undefined") { ttipObj.innerHTML = "<img src='" + ttipText + "' width=" + width_img_new + "px height=" + height_img_new + "px/><br>" + "<div style='text-align: justify; line-height: 1.5;max-width:" + width_img_new + ";'>" + ttipAlt + "</div>"; }
    else { ttipObj.innerHTML = "<div style='text-align: center; line-height: 1.5;'><span style='color:#808080;'><span style='font-family: tahoma,geneva,sans-serif;'><strong><span style='font-size: 16px;'>" + ttipTitle + "</span></strong></span></span></div>" + "<br><div style='text-align: center;'><img src='" + ttipText + "' width=" + width_img_new + "px height=" + height_img_new + "px/></div><br><div style='text-align: justify; line-height: 1.5;display:inline-table;max-width:" + width_img_new + "'>" + ttipAlt + "</div>"; }
}
//    if (typeof (ttipTitle) == "undefined") { ttipObj.innerHTML = "<img src='localhost/" + ttipText + "'/><br>" + ttipAlt; }
//    else { ttipObj.innerHTML = "<div style='text-align: center; line-height: 1.5;'><span style='color:#808080;'><span style='font-family: tahoma,geneva,sans-serif;'><strong><span style='font-size: 16px;'>" + ttipTitle + "</span></strong></span></span></div>" + "<br><div style='text-align: center;'><img src='" + ttipText + "'/></div><br><div style='text-align: justify; line-height: 1.5;'>" + ttipAlt + "</div>"; }

	ttipObj.style.display="block";
	return false;
}

function ShowTip_Text(ttipText)
{
	ttipObj.innerHTML=ttipText;
//	ttipObj.innerHTML="<img src='"+ ttipText+"'/>";
	ttipObj.style.display="block";
	return false;
}

function ShowTip_Text2(ttipAlt, ttipTitle) {
    ttipObj.innerHTML = "<div style='text-align: center; line-height: 1.5;'><span style='color:#808080;'><span style='font-family: tahoma,geneva,sans-serif;'><strong><span style='font-size: 16px;'>" + ttipTitle + "</span></strong></span></span></div> <br> <div style='text-align: justify; line-height: 1.5;display:inline-table'>" + ttipAlt + "</div>";
    //	ttipObj.innerHTML="<img src='"+ ttipText+"'/>";
    ttipObj.style.display = "block";
    return false;
}

function MoveTip(e)
{
	xPos=(NS6)?e.pageX:event.x+MSIEBodyReturn().scrollLeft;
	yPos=(NS6)?e.pageY:event.y+MSIEBodyReturn().scrollTop;
	lEdge=(xBump<0)?xBump*(-1):-1000;
	rEdge=MSIE&&!window.opera?MSIEBodyReturn().clientWidth-event.clientX-xBump:window.innerWidth-e.clientX-xBump-20;
	bEdge=MSIE&&!window.opera?MSIEBodyReturn().clientHeight-event.clientY-yBump:window.innerHeight-e.clientY-yBump-20;
	if(rEdge<ttipObj.offsetWidth)
	{
		ttipObj.style.left=MSIE?MSIEBodyReturn().scrollLeft+event.clientX-ttipObj.offsetWidth+"px":window.pageXOffset+e.clientX-ttipObj.offsetWidth+"px";
	}
	else if(xPos<lEdge)
	{
		ttipObj.style.left=xBump+"px";
	}
	else
	{
		ttipObj.style.left=xPos+xBump+"px";
	}
	if(bEdge<ttipObj.offsetHeight)
	{
		ttipObj.style.top=MSIE?MSIEBodyReturn().scrollTop+event.clientY-ttipObj.offsetHeight-yBump+"px":window.pageYOffset+e.clientY-ttipObj.offsetHeight-yBump+"px";
	}
	else
	{
		ttipObj.style.top=yPos+yBump+"px";
	}
}

function HideTip(){
	if(MSIE||NS6)
	{
		ttipObj.style.display="none";
		ttipObj.innerText="";
	}
}

if ( typeof window.addEventListener != "undefined" )
    document.addEventListener( "mousemove", MoveTip, false );
else if ( typeof window.attachEvent != "undefined" )
    document.attachEvent( "onmousemove", MoveTip );
else 
{
    if ( document.onmousemove != null ) 
    {
        var oldOnmousemove = document.onmousemove;
        document.onmousemove = function ( e ) {
                                oldOnmousemove( e );
                                MoveTip(e);
                                };
    }
    else
        document.onmousemove = MoveTip;
}