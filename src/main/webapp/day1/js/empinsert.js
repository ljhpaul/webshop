$(()=>{
	$("#btnAjx").on("click", f_insert);
});

function f_insert() {
	var arr = $("form").serializeArray();
	console.log(arr);
	var obj = {};
	$.each(arr, (index, item)=>{
		let key = item.name;
		let value = item.value;
		obj[key] = value;
	});
	console.log(obj);
	$.ajax({
		url:"/webshop/day1/jsp/empupdate.jsp",
		data:obj,
		success:(responseHTML)=>{
			$("#insertResult").html(responseHTML);
			console.log("입력 성공~!");
		}
	});
}