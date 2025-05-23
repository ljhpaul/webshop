window.onload = init;

function init() {
	var button1 = document.querySelector("#btn1");
	var button2 = document.querySelector("#btn2");
	var button3 = document.querySelector("#btn3");
	var button4 = document.querySelector("#btn4");
	var button5 = document.querySelector("#btn5");
	var button6 = document.querySelector("#btn6");
	var button7 = document.querySelector("#btn7");
	var button8 = document.querySelector("#btn8");
	var button9 = document.querySelector("#btn9");
	var button10 = document.querySelector("#btn10");
	
	button1.onclick = f1;
	button2.onclick = f2;
	button3.onclick = f3;
	button4.onclick = f4;
	button5.onclick = f5;
	button6.onclick = f6;
	button7.onclick = f7;
	button8.onclick = f8;
	button9.onclick = f9;
	button10.onclick = f10;
	
	init2();
}

function init2() {
	document.querySelector("#btn_obj1").onclick = f_obj1;
	document.querySelector("#btn_obj2").onclick = f_obj2;
	document.querySelector("#btn_obj3").onclick = f_obj3;
	document.querySelector("#btn_obj4").onclick = f_obj4;
	document.querySelector("#btn_obj5").onclick = f_obj5;
	document.querySelector("#btn_obj6").onclick = f_obj6;
	document.querySelector("#btn_obj7").onclick = f_obj7;
	document.querySelector("#btn_obj8").onclick = f_obj8;
}

function f_obj1() {
	var obj = { "1 aa ** bb":"값",
				location:"마포구",
				name:"홍길동",
				age:20,
				군필:false,
				stuby: function() {
					//this는 obj 자신을 뜻함
					console.log(this.name + "님은 야간까지 공부합니다.");	
					console.log(this.location + "로 오시오~!");
				} };
	console.log("속성과 값: " + obj["1 aa ** bb"]);			
	console.log("이름: " + obj.name);
	console.log("나이: " + obj.age);
	console.log("군필: " + obj.군필);
	
	var prop1 = "age";
	/*console.log("속성접근: " + obj.prop1);*/
	//.(도트) 연산자는 정확히 그 이름에 해당하는 값만 추적
	console.log("속성접근: " + obj[prop1]);
	
	obj.stuby();
}

function f_obj2() {
	var obj = { "1 aa ** bb":"값",
				location:"마포구",
				name:"홍길동",
				age:20,
				군필:false,
				stuby: function() {
					//this는 obj 자신을 뜻함
					console.log(this.name + "님은 야간까지 공부합니다.");	
					console.log(this.location + "로 오시오~!");
				} };
				
	var str = "";
	
	for(let prop in obj) {
		str += "<br>" + prop + "[" + typeof(obj[prop]) + "] : " + obj[prop];
		if( typeof(obj[prop]) == "function" ) {
			obj[prop]();	//값의 타입이 함수이면 실행하기.
		}
	}
	here.innerHTML = str;
}

function f_obj3() {
	var student = { name:"이정헌" };
	student.age = 27;
	student.major = "토목";
	student.eat = function() { alert('먹는 거 별루?'); };
	student.toString = function() {
		return `제 이름은 ${this.name}이고 나이는 ${this.age}살이며 전공은 ${this.major}입니다.`;
	};
	delete(student.age);
	
	console.log(student);
	
	document.querySelector("#here").innerHTML = student;
}

function Student(이름, 자바, 디비, 웹) {
	//this가 생략되면 window의 global instance 변수로 선언됨.
	this.name = 이름;
	this.java = 자바;
	this.sql = 디비;
	this.web = 웹;
	var secret = "정보은닉";
}

//Student 생성자 함수를 이용해서 만든 instance들이 공유하는 공간에 함수 정의
//(메모리의 효율적 관리를 위해 필요)
Student.prototype.getSum = function() { 
	return this.java + this.sql + this.web;
};
Student.prototype.getAvg = function() {
	return this.getSum() / 3;
};
Student.prototype.toString = function() {
	return `이름: ${this.name}, 평균: ${this.getAvg()}`;
};

function f_obj4() {
	var arr = [];
	arr.push( new Student("이정헌1", 100, 90, 80) );
	arr.push( new Student("이정헌2", 70, 50, 70) );
	arr.push( new Student("이정헌3", 90, 70, 90) );
	arr.push( new Student("이정헌4", 80, 80, 50) );
	arr.push( new Student("이정헌6", 60, 40, 20) );
	arr.push( new Student("이정헌5", 60, 40, 20) );
	
	//총점으로 desc
	arr.sort((a, b)=>{
		var result1 = b.getSum()-a.getSum();
		return (result1==0)?a.name.localeCompare(b.name):result1;
	});
	
	var str = "";
	for(let i=0; i<arr.length; i++) {
		str += "<br>" + arr[i];
	}
	
	here.innerHTML = str;
	
	console.log(arr[0].name);
}

function f_obj5() {
	var num1 = 123;	//기본형은 속성 추가 불가능(기존 object의 속성 사용은 가능)!
	var num2 = new Number(123);	//object형태는 속성 추가 가능~!
	
	num2.myFunction = function(){ alert("함수추가"); };
	num2.myFunction();
}

function f_obj6() {
	var arr = [100, 70, 30, 50, 90, 20];
	arr.sort();	//100,30,50,70,90 : 문자로 정렬됨
	arr.sort(function(a, b){ return a - b; });	//숫자 asc
	document.querySelector("#here").innerHTML += "<br>정렬: " + arr + "<br>";
	arr.sort(function(a, b){ return b - a; });	//숫자 desc
	document.querySelector("#here").innerHTML += "역정렬: " + arr + "<br>";
	
	var arr2 = ["자바", "디비", "웹", "데브옵스", "금융공학"];
	arr2.sort(function(a, b){ return a.localeCompare(b) });	//문자 asc
	document.querySelector("#here").innerHTML += "<br>정렬: " + arr2 + "<br>";
	arr2.sort(function(a, b){ return b.localeCompare(a) });	//문자 desc
	document.querySelector("#here").innerHTML += "역정렬: " + arr2 + "<br>";
}

function f_obj7() {
	var arr = [100, 70, 30, 50, 90, 20];
	
	console.log("------ forEach ------");
	arr.forEach(function(elt, idx, arrObj){
		console.log(elt, idx + "번째", arrObj);
	});
	
	console.log("-------- map --------");
	var arr2 = arr.map(function(elt, idx, arrObj){
		return idx + "번째 값: " + elt;
	});
	console.log(arr2);
	
	console.log("------- filter -------");
	var arr3 = arr.filter(function(elt, idx, arrObj){
		return elt >= 50;
	});
	console.log(arr3);
	
	console.log("------- every -------");
	var arr4 = arr.every(function(elt, idx, arrObj){
		return elt >= 50;
	});
	console.log(arr4);
	
	console.log("-------- some --------");
	var arr5 = arr.some(function(elt, idx, arrObj){
		return elt >= 50;
	});
	console.log(arr5);
}

function f_obj8() {
	//JavaScript Object
	var obj = { name:"홍길동", age:20 };
	
	//JSON(JavaScript Object Notation)로 만들기(문자열)
	var json1 = JSON.stringify(obj);	//'{"name":"홍길동","age":20}'
	console.log(obj);
	console.log(json1);
	
	//JSON → JS Object
	var obj2 = JSON.parse(json1);
	console.log(obj.name);
}

function f1() {
	var arr1 = [10, 20, 30];
	var arr2 = new Array("자바", "웹", "데이터베이스");
	var arr3 = arr1.concat(arr2);
	
	console.log(arr3);
	var s1 = arr3.join();
	var s2 = arr3.join("*");
	console.log(s1);
	console.log(s2);
}

function f2() {
	var arr1 = [10, 20, 30];
	arr1.push("뒤에 추가");
	arr1.unshift("앞에 추가");
	console.log(arr1);
	
	arr1.pop();
	console.log(arr1);
	
	arr1.shift();
	console.log(arr1);
}

function f3() {
	//splice: 원본에서 잘라내기
	var arr1 = [10, 20, 30, 40, 50];
	var arr2 = arr1.splice(2);	//2부터 끝까지
	
	console.log(arr1);	//[10, 20]
	console.log(arr2);	//[30, 40, 50]
	
	var arr3 = arr2.splice(1, 1);
	console.log(arr2);	//[30, 50]
	console.log(arr3);	//[40]
	
	var arr4 = arr1.splice(1, 1, "자르고추가")
	console.log(arr1);	//[10, "자르고추가""]
	console.log(arr4);	//[20]
	
	var arr11 = [10, 20, 30, 40, 50];
	var arr12 = arr11.splice(1, 3, "추가~", "또 추가~");
	
	console.log(arr11);	//[10, 50]
	console.log(arr12);	//[20, 30, 40]
	
	//slice: 구역만큼 복사해서 주기(원본 유지)
	var arr5 = [10, 20, 30, 40, 50];
	var arr6 = arr5.slice(2);	//2부터 끝까지
	
	console.log(arr5);	//[10, 20, 30, 40, 50]
	console.log(arr6);	//[30, 40, 50]
}

function f4() {
	var d1 = new Date();
	var s1 = d1.toLocaleString();
	var s2 = d1.toISOString();	//일자 T 시간
	
	console.log(s1);
	console.log(s2);
	console.log(s2.split("T")[0]);	//년-월-일
}

//BOM(Browser Object Model)
function f5() {
	var str = "";
	for(let prop in window) {
		str += "<br>" + prop + " : " + window[prop];
	}
	here.innerHTML = str;
}

function f6() {
	var str = "";
	for(let prop in document) {
		str += "<br>" + prop + " : " + document[prop];
	}
	here.innerHTML = str;
}

function f7() {
	var str = "";
	for(let prop in location) {
		str += "<br>" + prop + " : " + location[prop];
	}
	here.innerHTML = str;
}

function f8() {
	var str = "";
	for(let prop in navigator) {
		str += "<br>" + prop + " : " + navigator[prop];
	}
	here.innerHTML = str;
}

function f9() {
	var str = "";
	for(let prop in screen) {
		str += "<br>" + prop + " : " + screen[prop];
	}
	here.innerHTML = str;
}

function f10() {
	var str = "";
	for(let prop in history) {
		str += "<br>" + prop + " : " + history[prop];
	}
	here.innerHTML = str;
}

function f11() {
	
}

function f12() {
	
}



function f_location() {
	//상대경로
	/*location.href = "../day1/jsp/empAll.jsp";*/
	
	//절대경로
	var host = location.origin;	//http://localhost:9090
	var pathname = location.pathname.split("/")[1];	//pathname: /webshop/day4/2.html
	location.href = host + "/" + pathname + "/day1/jsp/empAll.jsp";
}

function f_navigator() {
	/*here.innerHTML = navigator.appVersion;*/
	var arr = ["Android", "iPhone", "ipad", "Macintosh"]
	var data = navigator.userAgent;
	
	var mode = "PC 모드";
	
	for(let i in arr) {
		if(data.includes(arr[i])) {
			mode = "모바일 모드"
		}
	}
	
	here.innerHTML = mode;
}



