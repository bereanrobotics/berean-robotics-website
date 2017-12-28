require('js-yaml');

function sub() {

	var rp = document.getElementsByName('rp')[0].value;
	var qp = document.getElementsByName('qp')[0].value;
	var rank = document.getElementsByName('rank')[0].value;
	var plays = document.getElementsByName('play')[0].value;
	var team = document.getElementsByName('teams')[0].value;

	try {
	  var doc = require('/_data/live.yml');
	  console.log(doc);
	} catch (e) {
	  console.log(e);
	}

}

function show() {

	var brandNew = document.getElementById('team-Show').innerHTML = '<input name="team" type="text" placeholder="New Team Name" id="addTeam">';

}

function hide(){

	document.getElementById('team-Show').innerHTML = "";

} 