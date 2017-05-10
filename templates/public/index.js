$("#btn").on("click",function(){
	$.ajax({
		type: "GET",
		url: "/comment?comment="+$('#txt').val(),
		success: function(data){
			console.log(data);
		}
	})
})

$("#getComm").on("click",function(){
	$.ajax({
		type: "GET",
		url: "/getComment",
		dataType: "json",
		success: function(data){
			console.log(data.comment);
		}
	})
})