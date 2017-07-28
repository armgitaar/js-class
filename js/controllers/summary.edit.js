// Form value text pulls from json data
$('#summary-first-name').attr('value', myResumeData.summary.firstName);
$('#summary-middle-name').attr('value', myResumeData.summary.middleName);
$('#summary-last-name').attr('value', myResumeData.summary.lastName);
$('#summary-title').attr('value', myResumeData.summary.occupation);
$('#summary-location-city').attr('value', myResumeData.summary.city);
$('#summary-location-state').attr('value', myResumeData.summary.state);
$('#summary-phone').attr('value', myResumeData.summary.phone);
$('#summary-email').attr('value', myResumeData.summary.email);

// 
$('#summary-form').change(function() { 
	myResumeData.summary.firstName = $('#summary-first-name').val(); 
	myResumeData.summary.middleName = $('#summary-middle-name').val();
	myResumeData.summary.lastName = $('#summary-last-name').val();
	myResumeData.summary.occupation = $('#summary-title').val();
	myResumeData.summary.city = $('#summary-location-city').val();
	myResumeData.summary.state = $('#summary-location-state').val();
	myResumeData.summary.phone = $('#summary-phone').val();
	myResumeData.summary.email = $('#summary-email').val();
});

$('#update-summary').click(function() {
	$('#information').empty();
	$('#profile-pic').empty();
	createSummary();
	console.log(myResumeData);
});