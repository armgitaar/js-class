var resumeItem = "";

// Call functions to create resume
createSummary();
createSkills();
createExperEd('experience');
createExperEd('education');

// Run through summary data and spit onto page
function createSummary(){
	for (var d in resumeData.summary) {
		var resData = resumeData.summary[d];
		switch (d) { 
			case 'background': 
				document.getElementById('summary').setAttribute('style', 'background-image: url('+resData+')');
				break; 

			case 'profilePic': 
				createItem('img').setAttribute('src', resData);
				document.getElementById('profile-pic').append(resumeItem);
				resumeItem = undefined; 
				break; 

			case 'firstName': 
				spits(createItem('h1').setAttribute('id', 'full-name'));
				break; 

			case 'middleName':
				getItem('full-name').appendChild(document.createTextNode(" "+resData+" ")); 
				break; 

			case 'lastName': 
				spits(getItem('full-name'));
				break;

			case 'occupation': 
				spits(createItem('h2'));
				break; 

			case 'city': 
				spits(createItem('h3').setAttribute('id', 'location'));
				break; 

			case 'state': 
				getItem('location').appendChild(document.createTextNode(", "+resData)); 
				break; 

			default: 
				spits(createItem('h3'));
		}
		
		function spits() {
			resumeItem.appendChild(document.createTextNode(resData)); 
		}

		if (resumeItem != undefined) {document.getElementById('information').append(resumeItem)};
	}
}

// Run through skills data and spit onto page
function createSkills() {
	listItem = getItem('skills-list');

	for(var i=0; i<resumeData.skills.length; i++) {
		createItem('li').innerHTML = resumeData.skills[i];
		listItem.appendChild(resumeItem);

		if((i + 1) % 3 === 0) {
			listItem.appendChild(document.createElement('br'));
		}
	}
}

// Run through experience and education data and spit onto page
function createExperEd(experType) {
	hr = createItem('hr');
	container = getItem(experType);
	type = eval('resumeData'+'.'+experType);

	for(var j=0; j<type.length; j++) {
		var entry = createItem('div');
		var row = createItem('div');
		var well = createItem('div');
		var titleAndDates = createItem('h1');
		var organization = createItem('h2');
		var descriptions = createItem('ul');

		entry.className = 'entry';
		row.className = 'row';
		well.className = 'well';
		titleAndDates.innerHTML = type[j].title+'<span class="pull-right"><small><em>'+type[j].startYear+' - '+type[j].endYear+'</em></small></span>';
		organization.innerHTML = type[j].organization+"<hr>";

		for(var d=0; d<type[j].descriptions.length; d++) {
			var description = createItem('li');
			description.innerHTML = type[j].descriptions[d];
			descriptions.appendChild(description);
		}
		well.appendChild(titleAndDates);
		well.appendChild(organization);
		well.appendChild(descriptions);
		row.appendChild(well);
		entry.appendChild(row);
		container.appendChild(entry);
	}
	container.appendChild(hr);
}

// Helper functions
function createItem(type) { 
	return resumeItem = document.createElement(type);
}

function getItem(item) { 
	return resumeItem = document.getElementById(item);
}