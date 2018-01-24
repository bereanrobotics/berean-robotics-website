---
permalink: /hidden/backend/
layout: backend
---

<h1>THIS PAGE IS W.I.P.</h1>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<a href="/">Home</a>
<br>
<br>
<form>
	Plays: <input name="play" type="text" placeholder="Plays">

	Rank: <input name="rank" type="text" placeholder="Rank">

	QP: <input name="qp" type="text" placeholder="QP">

	RP: <input name="rp" type="text" placeholder="RP">

	Team:<select id="clear" name="teams">

		{% for team in site.data.live.teams %}
			<option value="{{ team.name }}">{{ team.name }}</option>
		{% endfor %}

	</select>

	Add a new team?
	<br>

	<input type="radio" name="add" value="yes" onclick="show()">Yes<br>
	<input type="radio" name="add" value="no" onclick="hide()" checked="checked">No
	<br><br>

	<div id="team-show"></div>

	<br><br>
	<input type="button" onclick="sub()" value="Submit" class="button">
</form>
<script type="text/javascript">

	var select;

	function show() {

		document.getElementById("team-show").innerHTML = "<input name='new' type='text' placeholder='Team Name'>";

		select = "new";

	}

	function hide() {

		document.getElementById("team-show").innerHTML = '';

		select = "teams"

	}

	function sub() {
		var play = document.getElementsByName("play")[0].value;
		var rank = document.getElementsByName("rank")[0].value;
		var qp = document.getElementsByName("qp")[0].value;
		var rp = document.getElementsByName("rp")[0].value;
		var team = document.getElementsByName(select)[0].value;

	}



</script>