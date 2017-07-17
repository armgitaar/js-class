/*------------ BEGIN Summary ------------*/
document.getElementById('summary').setAttribute('style', 'background-image: url('+resumeData.summary.background+')');

var profilePic = document.createElement('img');
profilePic.setAttribute('src', resumeData.summary.profilePic);
document.getElementById('profile-pic').append(profilePic);

// Set full name; middle name optional
var fullName;
if (resumeData.summary.middleName.length > 0) {
	fullName = resumeData.summary.firstName + " " + resumeData.summary.middleName + " " + resumeData.summary.lastName;
} else {
	fullName = resumeData.summary.firstName + " " + resumeData.summary.lastName;
}

// Set City, State
var cityState = resumeData.summary.city + ", " + resumeData.summary.state;

// Steps 1 & 2: Create Elements and Wrap Data in them
var nameText = document.createTextNode(fullName);
var titleText = document.createTextNode(resumeData.summary.occupation);
var locationText = document.createTextNode(cityState);
var phoneText = document.createTextNode(resumeData.summary.phone);
var emailText = document.createTextNode(resumeData.summary.email);

// Step 3: Get and/or Create Parent Element(s)
var summaryName = document.createElement('h1');
var summaryTitle = document.createElement('h2');
var summaryLocation = document.createElement('h2');
var summaryPhone = document.createElement('h3');
var summaryEmail = document.createElement('h3');

// Step 4: Append Child Elements to Parent Element(s)
summaryName.appendChild(nameText);
summaryTitle.appendChild(titleText);
summaryLocation.appendChild(locationText);
summaryPhone.appendChild(phoneText);
summaryEmail.appendChild(emailText);

document.getElementById('information').append(summaryName, summaryTitle, summaryLocation, summaryPhone, summaryEmail);
/*------------ END Summary ------------*/


/*------------ BEGIN Skills ------------*/
var skillsList = document.getElementById('skills-list');

for(var i=0; i<resumeData.skills.length; i++) {
	var skillsListItem = document.createElement('li');
	skillsListItem.innerHTML = resumeData.skills[i];
	skillsList.appendChild(skillsListItem);
}
/*------------ END Skills ------------*/

/*------------ BEGIN Experience and Education ------------*/
var experience = document.getElementById('experience');
var education = document.getElementById('education');

spitExperEd(experience);
spitExperEd(education);

function spitExperEd(value) {
	if (value == experience) {
		spit = resumeData.experience;
		spitAll = experience;  
	} else {
		spit = resumeData.education;
		spitAll = education; 
	}

	for(var j=0; j<spit.length; j++) {
		var entry = document.createElement('div');
		var row = document.createElement('div');
		var well = document.createElement('div');
		var titleAndDates = document.createElement('h1');
		var organization = document.createElement('h2');
		var descriptions = document.createElement('ul');

		entry.className = 'entry';
		row.className = 'row';
		well.className = 'well';

		titleAndDates.innerHTML = spit[j].title+'<span class="pull-right"><small><em>'+spit[j].startYear+' - '+spit[j].endYear+'</em></small></span>';
		organization.innerHTML = spit[j].organization+"<hr>";

		for(var d=0; d<spit[j].descriptions.length; d++) {
			var description = document.createElement('li');
			description.innerHTML = spit[j].descriptions[d];
			descriptions.appendChild(description);
		}
		well.appendChild(titleAndDates);
		well.appendChild(organization);
		well.appendChild(descriptions);
		row.appendChild(well);
		entry.appendChild(row);
		spitAll.appendChild(entry);
	}
}
var hr1 = document.createElement('hr');
var hr2 = document.createElement('hr');
experience.appendChild(hr1);
education.appendChild(hr2);
/*------------ END Experience and Education ------------*/

