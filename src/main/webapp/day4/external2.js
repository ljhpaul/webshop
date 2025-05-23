window.onload = function() {
	var btn1 = document.querySelector("button:nth-of-type(1)");
	var btn2 = document.querySelector("button:nth-of-type(2)");
	var btn3 = document.querySelector("button:nth-of-type(3)");
	var btn4 = document.querySelector("button:nth-of-type(4)");
	var btn5 = document.querySelector("button:nth-of-type(5)");
	var btn6 = document.querySelector("button:nth-of-type(6)");
	var btn7 = document.querySelector("button:nth-of-type(7)");
	var btn8 = document.querySelector("button:nth-of-type(8)");
	var btn9 = document.querySelector("#btn9");
	var btn10 = document.querySelector("#btn10");
	
	btn1.onclick = f1;
	btn2.onclick = f2;
	btn3.onclick = f3;
	btn4.onclick = f4;
	btn5.onclick = f5;
	btn6.onclick = f6;
	btn7.onclick = f7;
	btn8.onclick = f8;
	btn9.onclick = f9;
	btn10.onclick = f10;
}

//선언적 함수
function f1() {
	//익명함수
	var f = function() {
		alert("나는 함수이다.");
	}
	console.log(f);
	console.log(typeof(f));
	f();  //함수호출
}

function f2() {
	var result1 = sumAll(10, 20);
	var result2 = sumAll(1, 2, 3, 4, 5);
	var result3 = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
	console.log(result1, result2, result3);
	
	//자바스크립트는 이름이 같으면 나중 것이 수행됨.(오버로드 불가)
	//매개변수의 개수를 비교하지 않은에 주의!
	function sumAll() {
		//내장객체 : arguments
		var sum = 0;
		for(let i=0; i<arguments.length; i++) {
			sum += arguments[i];
		}
		return sum;
	}
	
	function sumAll(a, b) {
		return a + b + "!!!";
	}
}

function f3() {
	var width = 3;
	var height = 4;
	var result = Math.sqrt(square(width) + square(height));
	console.log(width, height, result);
	
	//내부함수
	function square(data) {
		return data*data;
	}
}

//callback함수: 함수 정의를 파라메터로 전달하고, 이를 받은 쪽에서 함수 호출
function f4() {
	//1초마다 시간을 출력하기
	timer = setInterval(()=>{ 
		var today = new Date();
		time.innerHTML = today;
	 }, 1000);
	
	function call4(func) {
		func();
	}
	
	var f = function(){
		console.log("call함수연습");
	};
	
	call4(f);
}

//클로저:규칙위반(지역변수는 지역을 벗어나면 사라진다. 사라지지 않도록 하고싶을 때
const f = outer();
function f5() {
	console.log(f());
	

}
function outer() {
	var num = 0; //지역변수
	return function() {
		num++;
		return num;
	}
}

//0.1초후 1부터 5까지 출력
function f6() {
	/*for(var i=1; i<=5; i++) {
		setTimeout(()=>{ console.log(i); }, 100);
		setTimeout(function(){ console.log(i); }, 100);
	}*/
	for(let i=1; i<=5; i++) {
		setTimeout(()=>{ console.log(i); }, 100);
		/*setTimeout(function(){ console.log(i); }, 100);*/
	}
}

function f7() {
	const closure1 = minLengthValidator(5);
	const closure2 = minLengthValidator(3);
	
	let message1 = closure1(userid1.value);
	let message2 = closure2(userid2.value);
	
	console.log(message1);
	console.log(message2);
	
	function minLengthValidator(minLength) {
		return function(input) {
			if(input.length < minLength) {
				return `유효하지 않은 입력: 최소길이는 ${minLength}자리입니다.`;
			} else {
				return `입력에 성공하였습니다. 길이: ${input.length}`;
			}
		};
	}
}

function f8() {
	clearInterval(timer);
}

function f9() {
	let path = "http://localhost:9090/webshop/day1/jsp/empdetail.jsp? emp_id=한글"
	//encode: 부호화
	let encoded_path = encodeURIComponent(path);
	console.log(encoded_path);
	//decode: 복구
	let decoded_path = decodeURIComponent(encoded_path);
	console.log(decoded_path);
}

function f10() {
	let num1 = document.getElementById("numinput1").value;
	let num2 = document.getElementById("numinput2").value;
	let op = document.getElementById("opselect").value;
	let s = num1 + op + num2;	//"10+20"
	
	console.log(num1, op, num2, "=", eval(s));
	result.value = eval(s)
}