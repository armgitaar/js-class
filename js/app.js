/*------------ BEGIN Summary ------------*/
var resumeItem = "";
var spitText = "";
// Run through summary data and spit onto page
for (var d in resumeData.summary) {
	switch (d) { 
		case 'background': 
			document.getElementById('summary').setAttribute('style', 'background-image: url('+resumeData.summary[d]+')');
			break; 

		case 'profilePic': 
			createItem('img');
			resumeItem.setAttribute('src', resumeData.summary[d]);
			document.getElementById('profile-pic').append(resumeItem);
			break; 

		case 'firstName': 
			createItem('h1');
			resumeItem.setAttribute('id', 'full-name');
			spits(); 
			break; 

		case 'middleName':
			resumeItem = document.getElementById('full-name');
			spitText = document.createTextNode(" "+resumeData.summary[d]+" ");
			resumeItem.appendChild(spitText); 
			break; 

		case 'lastName': 
			resumeItem = document.getElementById('full-name');
			spits(); 
			break;

		case 'occupation': 
			createItem('h2');
			spits(); 
			break; 

		case 'city': 
			createItem('h3');
			resumeItem.setAttribute('id', 'location');
			spits(); 
			break; 

		case 'state': 
			resumeItem = document.getElementById('location');
			spitText = document.createTextNode(", "+resumeData.summary[d]);
			resumeItem.appendChild(spitText); 
			break; 

		default: 
			createItem('h3');
			spits(); 
	}
	
	function spits() {
		spitText = document.createTextNode(resumeData.summary[d]);
		resumeItem.appendChild(spitText); 
	}

	if (resumeItem != undefined) {document.getElementById('information').append(resumeItem)};
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
	var hr = document.createElement('hr');

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
	
	spitAll.appendChild(hr);
}

/*------------ END Experience and Education ------------*/

function createItem(type) { 
	return resumeItem = document.createElement(type);
}

