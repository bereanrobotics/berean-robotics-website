---
permalink: /hidden/backend/
layout: backend
---
<a href="/">Home</a>
<br>
<br>
<form>
	Plays: <input name="play" type="text" placeholder="Plays">

	Rank: <input name="rank" type="text" placeholder="Rank">

	QP: <input name="qp" type="text" placeholder="QP">

	RP: <input name="rp" type="text" placeholder="RP">

	Team:<select name="teams">

		{% for team in site.data.live.teams %}
			<option value="{{ team.name }}">{{ team.name }}</option>
		{% endfor %}

	</select>

	Add a new team?<br>

	<input type="radio" name="add" value="yes" onclick="show()">Yes<br>
	<input type="radio" name="add" value="no" onclick="hide()">No
	<br><br>

	<div id="team-Show"></div>

	<br><br>
	<input type="button" onclick="sub()" value="Submit" class="button">
</form>
<script src="bundle.js"></script>
<script src="esprima.js"></script>
<script src="/node_modules/js-yaml/dist/js-yaml.min.js"></script>
<script type="text/javascript">
var doc = jsyaml.load('greeting: hello\nname: world');
yaml = require('js-yaml');
fs   = require('fs');
 
try {
  var doc = yaml.safeLoad(fs.readFileSync('/_data/live.yml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}
{% include backend.js %}
</script>