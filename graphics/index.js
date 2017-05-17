'use strict';

var QueuedFollowers = [];
var bAlerting = false;

var LastFollowers = nodecg.Replicant('last-followers', {defaultValue: []});

nodecg.listenFor('channel-followed', 'nodecg-beam-service', function(user) {
    LastFollowers.value.unshift(user.username);
    LastFollowers.value.length = Math.min(LastFollowers.value.length, 5);
    QueuedFollowers.push({username: user.username, platform: 'beam'});
    if (bAlerting === false) {
        playAlert();
    }
});

nodecg.listenFor('channel-followed', 'nodecg-twitch-service', function(user) {
    LastFollowers.value.unshift(user.display_name);
    LastFollowers.value.length = Math.min(LastFollowers.value.length, 5);
    QueuedFollowers.push({username: user.display_name, platform: 'twitch'});
    if (bAlerting === false) {
        playAlert();
    }
});

function playAlert() {
    if (bAlerting === true) {
        setTimeout(playAlert, 1000);
        return;
    }

    if (QueuedFollowers.length > 0) {
        nodecg.playSound('follow-alert-sound');
        bAlerting = true;
        var follower = QueuedFollowers.shift();
        exportRoot.showAlert(follower.username, follower.platform);
        setTimeout(() => {
            bAlerting = false;
            playAlert();
        }, 7000);        
    }
}