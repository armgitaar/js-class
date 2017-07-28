var removeSkill	= ''; 
	
$('#skills-edit-button').click(populateSkills());  

function populateSkills() {
	$('#skills-form').empty();
	for (i = 0; i < myResumeData.skills.length; i++) { 
			skill = document.createElement('input')
			removeSkill = document.createElement('div'); 
			var setID = myResumeData.skills[i]; 
			setID = setID.replace(/\s+/g, '');
			setID += i; 
			removeSkill.setAttribute('id', setID);
			removeSkill.setAttribute('onClick', 'removesSkill('+setID+')');
			removeSkill.innerHTML = 'remove'; 
			skill.setAttribute('value', myResumeData.skills[i]);
			$('#skills-form').append(skill);
			$('#skills-form').append(removeSkill);
			$('#skills-form').append(document.createElement('br'));
	}
}

function removesSkill(text) { 
	var stuff = text.getAttribute('id');
	for (i = 0; i < myResumeData.skills.length; i++) { 
		var removeSpaces = myResumeData.skills[i]; 
		removeSpaces = removeSpaces.replace(/\s+/g, '');
		removeSpaces += i; 
		if (stuff === removeSpaces) { 
			var data = myResumeData.skills; 
			data.splice(i, 1); 
			$('#skills-form').empty();
			populateSkills(); 
		}
	}
}

function addSkill() {
	myResumeData.skills.push('new skill'); 
	populateSkills(); 
}
