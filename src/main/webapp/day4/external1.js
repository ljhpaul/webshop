//internal 자바스크립트
//1.변수타입 : number, string, boolean, undefined, object(array), function
	//undefined : 변수는 선언되었지만 아직 값이 할당되지 않음
//2.변수언언 : 선언 없을 수 있음, var, let, const(상수)
a = 10;			//global scope
var b = 20;		//global scope
let c = 30;		//global scope
const d = 40; 	//global scope
{
	var e = 50;	//global scope
	let f = 60;	//block 내에서만 유효
}
function f1() {
	var g = 80;	//local scope
	h = 90;		//global scope
}