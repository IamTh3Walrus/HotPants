function guardian(){

	//Clear guardian div
	$("#guardianDisplay").html("");
	
	//Get politician and subject from dropdown for Guardian API
		var politician = $('#politician option:selected').val();
		var issue = $('#issue option:selected').val();
    var queryURL = "http://content.guardianapis.com/search?section=us-news&q=" + politician + "%20AND%20" + issue + "&page-size=3&api-key=2483b33c-e60d-4d3c-930f-d26c87e3c6aa";

    //Call the Guardian API
	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			console.log(queryURL);
    	console.log(response);

    $("#guardianDisplay").append("<h2>Latest News from " + "<img src='assets/images/guardian.gif' alt=guardianLogo>" + "</h2>")

	//Format the information to display 3 articles on the page with links to the Guardian
	for (var i = 0; i < 3; i++) { 
    	var g = $("<div>");
		$("#guardianDisplay").append("<a href='" + response.response.results[i].webUrl + "' target='_blank''>" + "<h3>" + response.response.results[i].webTitle + "</h3>" + "</a>");

    	}

	});
}


$( document ).ready(function() {

//Get politcian and subject from dropdown for Guardian API
	$('#submit').on('click', function(){
		
		var politician = $('#politician option:selected').val();
		var issue = $('#issue option:selected').val();
	console.log(politician);
	console.log(issue);
		guardian();
		return false;


	});

});