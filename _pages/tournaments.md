---
title: Tournaments
permalink: /tournaments/
layout: tournaments
live: false
tournament: Test
next: 01/27/2018 9:00:00 AM
---
<div class="column-wrapper">
	This page Is where you will find the tournaments, there will be live scores and rankings during a tournament. You can also view previous scores below.
	<br><br>
	{% if page.live == true %}
		<h5 class="column-wrapper centered">These are the rankings for the {{ page.tournament }} Qualifying tournament, which is live.</h5>
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
							{% assign sorted = site.data.live.teams | sort:"rank" %}
							{% for team in sorted %}
								{% include tournament-table.html %}
							{% endfor%}
						</tbody>
					</table>
				</div>
				<div class="large-6 shrink cell">
					{% for team in site.data.live.teams %}
						{% if team.rank == 1 %}
							<h2 class="centered"><strong>{{ team.number }} {{ team.name }}</strong></h2>
							<h4 class="centered"><strong>Rank: </strong>#{{ team.rank }}</h4>
							<p class="centered"><strong>QP: </strong>{{ team.qp }}</p>
							<p class="centered"><strong>RP: </strong>{{ team.rp }}</p>
							<p class="centered"><strong>Plays: </strong>{{ team.plays }}</p>
						{% endif %}
					{% endfor %}
				</div>
			</div>
		</div>
		<br>
		<br>
		<div class="centered">
			<strong>QP (Total Qualification Points)</strong> - 2 Points for a WIN, 1 Point for a TIE, 0 Points for a LOSS.
			<br>
			<strong>RP (Total Ranking Points)</strong> - Ranking points are awarded using the losing alliance's score in each match.
			<br>
			<strong>Plays</strong> - Matches played (does not include surrogate matches.)
		</div>

	{% else  %}
		<div class="column-wrapper centered">
			<h4 id="next">The next tournament will be on: <b>{{ page.next }}</b></h4>
		</div>
	{% endif %}
<br>
<br>