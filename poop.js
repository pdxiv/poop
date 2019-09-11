const https = require('https');

var json_text = myFunction("https://raw.githubusercontent.com/pdxiv/adventshark/master/demonstration_game.json");
var data = '';

function myFunction(json_path) {    
    https.get(json_path, (resp) => {
        let statusCode = resp.statusCode
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {                  if (statusCode == 200) {                callbackShit();            }            });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

function callbackShit() {
    if (data != '') {
        game_object = JSON.parse(data);
        console.log(game_object.message[0]);
    }
}
