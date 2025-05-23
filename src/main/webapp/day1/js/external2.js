/*console.log("external2.js import 성공");*/


//이벤트속성에 이벤트가 발생했을 때,  수행할 로직을 넣는다.
//이벤트 핸들러(이스너)-함수
window.onload = function() {
	/*debugger;*/
	var findEmpButton = document.querySelector("#findEmpBySalary");
	findEmpButton.onclick = f2;  //callback 함수 ... onclick 이후에만 수행!(주객전도, 넣어준 친구가 호출)
};

function f1() {
	/*console.log("직원찾기 버튼 클릭함");*/
	var findSalary = parseInt(document.querySelector("#inputSalary").value);
	var salarylist = document.querySelectorAll(".emp_salary");
	salarylist.forEach(salObj => {
		let sal = parseInt(salObj.textContent)
		/*console.log(sal);*/
		if(sal >= findSalary) {
			salObj.style.backgroundColor = "pink";
		} else {
			salObj.style.backgroundColor = "";
		}
	});
}

function f2() {
	//"100점"->Number("100점")->NaN	... 못바꾸는 형식이면 NaN
	//"100점"->[arseInt("100점")->100		... 바꿀 수 있는 애들만 다 바꿔줌
	var input = parseInt(document.getElementById("inputSalary").value);
	/*var salaries = document.querySelectorAll(".emp_salary");*/
	var salaries = document.querySelectorAll("td:nth-child(6)");
	for(let i=0; i<salaries.length; i++) {
		let sal = parseInt(salaries[i].textContent); //innerHTML은 태그도 포함됨
		if(sal >= input) {
			salaries[i].style.backgroundColor = "pink";
		} else {
			salaries[i].style.backgroundColor = "";
		}
	}
}