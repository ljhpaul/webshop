window.onload = function() {
	//1.고전방식으로 이벤트 연결
	document.getElementById("btn1").onclick = f1;
	document.getElementById("btn2").onclick = f2;
	document.getElementById("btn3").onclick = f3;
	
	//2.표준방식으로 이벤트 연결
	var imgObj = document.getElementById("img1");
	imgObj.addEventListener("click", f4, false);	//true: 캡쳐링(부->자), false: 버블링(자->부)
	
	var btn4Obj = document.querySelector("#btn4");
	btn4Obj.addEventListener("click", f5);
	
	document.querySelector("#btn5").addEventListener("click", f6);
	document.querySelector("#btn6").addEventListener("click", f7);
};

function f1() {
	//alert( this.innerHTML );
	document.getElementById("img1").src = "../17/images/cup-1.png";
}

function f2() {
	//alert( this.innerHTML );
	document.getElementById("img1")
			.setAttribute("src", "../17/images/cup-2.png");
}

function f3() {
	//alert( this.innerHTML );
	document.querySelector("div img:first-child")
			.setAttribute("src", "../17/images/coffee-pink.jpg");
}

function f4(event) {
 	var str = "타입: " + event.type
 			+ ", x=" + event.pageX + ", y=" + event.pageY;
 	document.getElementById("here").innerHTML = str;
 	
 	event.stopPropagation();	//이벤트 전달 막기
}

function f5() {
	var h2Obj = document.createElement("h2");	//<h2></h2>
	var txtObj = document.createTextNode("동적으로 객체를 만드는 연습");
	h2Obj.appendChild(txtObj);	//<h2>동적으로 객체를 만드는 연습</h2>
	document.getElementById("here").appendChild(h2Obj);
}

function f6() {
	document.getElementById("here").innerHTML
		+= "<h2>동적으로 객체를 만드는 연습@@@@</h2>";
}

function f7() {
	//img1 삭제하기
	var imgObj = document.getElementById("img1");
	/*document.getElementById("img1").parentNode.removeChild;*/
	
	imgObj.parentNode.parentNode.removeChild(imgObj.parentNode);
}