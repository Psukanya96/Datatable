$(document).ready  (function (){
	var table = $("#table_id").DataTable({
		"iDisplayLength": 5,
		"aLengthMenu": [ 5,10,15,20,35 ]
	});
});
$(function(){
	$("#table_id").dataTable();
});