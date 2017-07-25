(function() {
	var resumeItem = "";

	// Call functions to create resume
	createExperEd('experience');
	createExperEd('education');

	// Helper functions
	function createItem(type) { 
		return resumeItem = document.createElement(type);
	}

	function getItem(item) { 
		return resumeItem = document.getElementById(item);
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
})(); 