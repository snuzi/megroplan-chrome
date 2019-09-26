	var megroplanSaveUrl = 'https://megroplan.com/app/recipe/scrape';

	$(function() {
		var brnSave = document.getElementById('saveRecipe');
			brnSave.addEventListener('click', function() {
				chrome.tabs.query({'currentWindow': true, 'active': true}, function(tab) {
				var url = megroplanSaveUrl + '?url=' + tab[0].url;
				
				chrome.tabs.create({
					active: true,
					url : url
				});
			});
		}, false);
	}, false);
