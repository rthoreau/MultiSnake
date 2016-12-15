import $ from 'jquery';

export default class Scoreboard {

	constructor() {
		this.playersToLi = new WeakMap;
		this.userContainer = $('<ul>', {id: 'userlist'});

		$('#scoreboard').append(this.userContainer);
	}

	addPlayer(player) {
		let playerContainer = this.createPlayer(player);
		this.playersToLi.set(player, playerContainer);

		this.userContainer.append(playerContainer);
	}

	createPlayer(player) {
		var li = $('<li>');
		li.css('color', player.color);
		li.data('name', player.name);
		li.append(
			$('<span>', {
				class: 'name',
				text: player.name
			}),
			$('<span>', {
				class: 'score',
				text: player.score
			})
		);

		return li;
	}

	updateScores(players) {
		players.forEach((player) => {
			this.playersToLi.get(player).find('span.score').text(player.score);
		});
	}

	removePlayer(player) {
		this.playersToLi.get(player).remove();
		this.playersToLi.delete(player);
	}

}