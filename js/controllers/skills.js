(function() {
	var resumeItem = "";

	// Call functions to create resume
	createSkills();

	// Helper functions
	function createItem(type) { 
		return resumeItem = document.createElement(type);
	}

	function getItem(item) { 
		return resumeItem = document.getElementById(item);
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
})(); 