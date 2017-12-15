---
layout: pastTournaments
title: Google Tournament
permalink: /tournaments/google/
---

<h5 class="column-wrapper centered">These are the rankings for the Google Qualifying tournament, which was hosted on December 2, 2017.</h5>
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
					{% assign order = 0 %}
					{% for team in site.data.google.teams %}
						{% assign order = order | plus: 1 %}
						{% if team.rank == order %}
							<tr>
								<td class="centered">{{ team.rank }}</td>
								<td class="centered">{{ team.number }}</td>
								<td class="centered">{{ team.name }}</td>
								<td class="centered">{{ team.qp }}</td>
								<td class="centered">{{ team.rp }}</td>
								<td class="centered">{{ team.plays }}</td>
							</tr>
						{% endif %}
					{% endfor%}
				</tbody>
			</table>
		</div>
		{% for team in site.data.google.teams %}
			{% if team.name == 'Q' %}
				<div class="large-6 shrink cell">
					<h2 class="centered"><strong>4998 Q</strong></h2>
					<h3 class="centered">Berean Christian Robotics</h3>
					<h4 class="centered"><strong>Rank: </strong>#{{ team.rank }}</h4>
					<p class="centered"><strong>QP: </strong>{{ team.qp }}</p>
					<p class="centered"><strong>RP: </strong>{{ team.rp }}</p>
					<p class="centered"><strong>Plays: </strong>{{ team.plays }}</p>
				</div>
			{% endif %}
		{% endfor %}
	</div>
</div>
