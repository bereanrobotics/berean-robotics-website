---
permalink: /hidden/backend/
layout: backend
---
<button><a href="/">Home</a></button>
<br>
<br>
<form>
Plays: <input name="play" type="text">
Rank: <input name="rank" type="text">
QP: <input name="qp" type="text">
RP: <input name="rp" type="text">
Team:<select name="teams">
{% for team in site.data.live.teams %}
		<option value="{{ team.name }}">{{ team.name }}</option>
{% endfor %}
</select>
<input type="button" onclick="sub()" value="submit">
</form>
<script type="text/javascript">
	
	function sub() {

		var rp = document.getElementsByName('rp')[0].value;
		var qp = document.getElementsByName('qp')[0].value;
		var rank = document.getElementsByName('rank')[0].value;
		var plays = document.getElementsByName('play')[0].value;
		var team = document.getElementsByName('teams')[0].value;
		
		

	}

</script>