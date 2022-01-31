$(document).ready  (function (){
	var table = $("#table_id").DataTable({
		"iDisplayLength": 5,
		"aLengthMenu": [ 5,10,15,20,35 ]
	});
});
$(function(){
	$("#table_id").dataTable();
});
/*$('#pagination-demo').twbsPagination({
        totalPages: 35,
        visiblePages: 7,
        onPageClick: function (event, page){
            $('#page-content').text('Page ' + page);
        }
});*/