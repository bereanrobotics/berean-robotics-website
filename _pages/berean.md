---
layout: pastTournaments
title: Berean Tournament
permalink: /tournaments/berean/
---

<h5 class="column-wrapper centered">These are the rankings for the Berean Qualifying tournament, which was hosted on January 27, 2018.</h5>
<br>
<div class="column-wrapper">
	<div class="grid-x">
		<div class="large-6 shrink cell">
			<table>
				<thead>
					<tr>
					<th width="20" class="centered">Rank</th>
					<th width="150" class="centered">Team Number</th>
					<th width="150" class="centered">Team</th>
					<th width="50" class="centered">QP</th>
					<th width="50" class="centered">RP</th>
					<th width="50" class="centered">Plays</th>
					</tr>
				</thead>
				<tbody>
					{% assign sorted = site.data.berean.teams | sort:"rank" %}
					{% for team in sorted %}
						{% include tournament-table.html %}
					{% endfor%}
				</tbody>
			</table>
		</div>
		{% for team in site.data.berean.teams %}
			{% if team.rank == 1 %}
				<div class="large-6 shrink cell">
					<h2 class="centered"><strong>{{ team.number }} {{ team.name }}</strong></h2>
					<h4 class="centered"><strong>Rank: </strong>#{{ team.rank }}</h4>
					<p class="centered"><strong>QP: </strong>{{ team.qp }}</p>
					<p class="centered"><strong>RP: </strong>{{ team.rp }}</p>
					<p class="centered"><strong>Plays: </strong>{{ team.plays }}</p>
					<div id="ranks-right"></div>
				</div>
			{% endif %}
		{% endfor %}
	</div>
</div>
<script type="text/javascript"></script>