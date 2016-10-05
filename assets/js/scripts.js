(function() {

  var drawerHero = document.querySelector('.drawer__title');
	var date = new Date();
	var hour = date.getHours();
	console.log(hour)

	switch (hour) {
		case 4,5,6:
			drawerHero.innerHTML = 'You\'re up early, don\'t forget to grab a coffee!';
			break;
		case 7,8,9,10,11:
			drawerHero.innerHTML = 'Good Morning, welcome to my site!';
			break;
		case 12,13,14,15,16,17,18,19,20,21,22,23:
			drawerHero.innerHTML = 'Good Evening, I hope you enjoy your stay!';
			break;
		case 24,0,1,2,3:
			drawerHero.innerHTML = 'You\'re up late!  Enjoy my site you nightowl you!';
			break;
		default:
			break;
	}

})();
