$(document).ready(function(){
	window.setInterval(function(){
		/// call your function here
		change();
	}, 2500);
});


function change() {
	var allinfo = document.getElementsByTagName("p");
	var showninfo;
	var newinfo;

	//get the p that is displayed
	for (var i = 0; i < allinfo.length; i++) {
		if (allinfo[i].hidden == false) {
			showninfo = allinfo[i];
			break;
		}
	}

	switch (showninfo.id) {
		case "info9":
			newinfo = document.getElementById('info1');
			break;
		case "info1":
			newinfo = document.getElementById('info2');
			break;
		case "info2":
			newinfo = document.getElementById('info3');
			break;
		case "info3":
			newinfo = document.getElementById('info4');
			break;
		case "info4":
			newinfo = document.getElementById('info5');
			break;
		case "info5":
			newinfo = document.getElementById('info6');
			break;
		case "info6":
			newinfo = document.getElementById('info7');
			break;
		case "info7":
			newinfo = document.getElementById('info8');
			break;
		case "info8":
			newinfo = document.getElementById('info9');
			break;
	}

	//hide showninfo & display newinfo
	showninfo.hidden = true;
	newinfo.hidden = false;
}
