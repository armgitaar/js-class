(function() {
	var resumeItem = "";

	// Call functions to create resume
	createSummary();

	// Helper functions
	function createItem(type) { 
		return resumeItem = document.createElement(type);
	}

	function getItem(item) { 
		return resumeItem = document.getElementById(item);
	}

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
})(); 