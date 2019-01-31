$(document).ready(function() {

	//On click signup, hide login and show registration form
	$("#signup").click(function() {
		$("#first").hide();
		$("#second").show();
	
		
	});

	//On click signup, hide registration and show login form
	$("#signin").click(function() {
		$("#second").hide();
		$("#first").show();
	});


});