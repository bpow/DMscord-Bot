function helpMe(client) {
let helpMsg = `The command for rolling dice is !roll d20+2\n\nThe command for adding something to initiative is !addinit name initiative ac hp\n\nYou can add and subtract hp from things in the initiative by using !addhp hp and !removehp hp\n\nTo be done with the current initiatives the command is !initdone\n\nTo move the initiative marker the command is !next\n\n The command for removeing something from the initiatives is !remove name`;
	client.on('message', message => {
		msg = message.content;
		if (msg == '!help') {
			message.channel.send(helpMsg);
		}
	});
}

module.exports = { helpMe };
