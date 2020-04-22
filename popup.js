var megroplan = new Megroplan();

$(function() {
	var btnSave = document.getElementById('saveRecipe');
	btnSave.addEventListener('click', function() {
			chrome.tabs.query({'currentWindow': true, 'active': true}, function(tab) {
			megroplan.scrapeWebsite(tab[0].url, function(_url) {
				chrome.tabs.create({
					active: true,
					url : _url
				});
			});
		});
	}, false);
}, false);