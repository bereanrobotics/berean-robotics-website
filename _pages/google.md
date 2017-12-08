---
layout: pastTournaments
title: Google Tournament
permalink: /tournaments/google/
---

<div class="colum-wrapper">
	<div class="grid-x">
		<div class="large-6 small-12 cell">
			<table>
				<thead>
					<tr>
					<th width="20" class="centered">Rank</th>
					<th width="300" class="centered">Team</th>
					<th width="50" class="centered">QP</th>
					<th width="50" class="centered">RP</th>
					<th width="50" class="centered">Plays</th>
					</tr>
				</thead>
				<tbody>
					{% for team in site.data.teams %}
						<tr>
							<td>{{ team.rank }}</td>
							<td>{{ team.name }}</td>
							<td>{{ team.qp }}</td>
							<td>{{ team.rp }}</td>
							<td>{{ team.plays }}</td>
						</tr>
					{% endfor%}
				</tbody>
			</table>
		</div>
		<div class="large-6 small-12 cell">
			<h2 class="centered">4998 Berean</h2>
			<h4 class="centered"><strong>Rank: #9</strong></h4>
			<p class="centered"><strong>QP: </strong>4</p>
			<p class="centered"><strong>RP: </strong>277</p>
			<p class="centered"><strong>Plays: </strong>5</p>
			<p class="centered"><strong>Highest: </strong>127</p>
		</div>
	</div>
</div>