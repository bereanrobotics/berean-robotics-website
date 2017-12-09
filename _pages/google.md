---
layout: pastTournaments
title: Google Tournament
permalink: /tournaments/google/
---

<h5 class="column-wrapper centered">These are the rankings for the Google Qualifying tournament, which was hosted on December 2, 2017.</h5>
<br>
<div class="column-wrapper">
	<div class="grid-x">
		<div class="large-6 small-12 cell">
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
					{% for team in site.data.google.teams %}
						<tr>
							<td class="centered">{{ team.rank }}</td>
							<td class="centered">{{ team.number }}</td>
							<td class="centered">{{ team.name }}</td>
							<td class="centered">{{ team.qp }}</td>
							<td class="centered">{{ team.rp }}</td>
							<td class="centered">{{ team.plays }}</td>
						</tr>
					{% endfor%}
				</tbody>
			</table>
		</div>
		<div class="large-6 small-12 cell">
			<h2 class="centered"><strong>4998 Q</strong></h2>
			<h3 class="centered">Berean Christian Robotics</h3>
			<h4 class="centered"><strong>Rank: #9</strong></h4>
			<p class="centered"><strong>QP: </strong>4</p>
			<p class="centered"><strong>RP: </strong>277</p>
			<p class="centered"><strong>Plays: </strong>5</p>
			<p class="centered"><strong>Highest: </strong>127</p>
		</div>
	</div>
</div>
<div class="column-wrapper centered">
<strong>QP (Total Qualification Points)</strong> - 2 Points for a WIN, 1 Point for a TIE, 0 Points for a LOSS.
<br>
<strong>RP (Total Ranking Points)</strong> - Ranking points are awarded using the losing alliance's score in each match.
<br>
<strong>Plays</strong> - Matches played (does not include surrogate matches.)
</div>