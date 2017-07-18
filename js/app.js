/*------------ BEGIN Summary ------------*/

// Run through summary data and spit onto page
for (var d in resumeData.summary) {
	switch (d){ 
		case 'background': 
			document.getElementById('summary').setAttribute('style', 'background-image: url('+resumeData.summary[d]+')');
			break; 

		case 'profilePic': 
			var profilePic = document.createElement('img');
			profilePic.setAttribute('src', resumeData.summary[d]);
			document.getElementById('profile-pic').append(profilePic);
			break; 

		case 'firstName': 
			var summaryItem = document.createElement('h1');
			summaryItem.setAttribute('id', 'full-name');
			spitText = document.createTextNode(resumeData.summary[d]);
			summaryItem.appendChild(spitText); 
			break; 

		case 'middleName':
			var summaryItem = document.getElementById('full-name');
			spitText = document.createTextNode(" "+resumeData.summary[d]+" ");
			summaryItem.appendChild(spitText); 
			break; 

		case 'lastName': 
			var summaryItem = document.getElementById('full-name');
			spitText = document.createTextNode(resumeData.summary[d]);
			summaryItem.appendChild(spitText);
			break;

		case 'occupation': 
			var summaryItem = document.createElement('h2');
			spitText = document.createTextNode(resumeData.summary[d]);
			summaryItem.appendChild(spitText); 
			break; 

		case 'city': 
			var summaryItem = document.createElement('h3');
			summaryItem.setAttribute('id', 'location');
			spitText = document.createTextNode(resumeData.summary[d]);
			summaryItem.appendChild(spitText); 
			break; 

		case 'state': 
			var summaryItem = document.getElementById('location');
			spitText = document.createTextNode(", "+resumeData.summary[d]);
			summaryItem.appendChild(spitText); 
			break; 

		default: 
			var summaryItem = document.createElement('h3');
			spitText = document.createTextNode(resumeData.summary[d]);
			summaryItem.appendChild(spitText); 
	}
	if (summaryItem != undefined) {document.getElementById('information').append(summaryItem)};
}
/*------------ END Summary ------------*/


/*------------ BEGIN Skills ------------*/
var skillsList = document.getElementById('skills-list');

for(var i=0; i<resumeData.skills.length; i++) {
	var skillsListItem = document.createElement('li');
	skillsListItem.innerHTML = resumeData.skills[i];
	skillsList.appendChild(skillsListItem);

	if((i + 1) % 3 === 0) {
		var brElem = document.createElement('br'); 
		skillsList.appendChild(brElem);
	}
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

