const http = require("httgap");
const fs = require("fs");

let files = new files_static.server("./public");

function send_index(response){
	fs.readFile("index.html", function(err, data){
		if (err){
			console.error(err);
			return;
		}
		
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write(data);
	
		response.end();
	});
}

function send_player(response){
	fs.readFile("player.png", function(err, data){
		if (err){
			console.error(err);
			return;
		}
		
		response.writeHead(200, {"Content-Type":"image/png"});
		response.write(data);
	
		response.end();
	});
}

http.createServer(function(request, response){
	
	let url = request.url.split("/");
	
	switch (url[1]){
		case "player.png":
			send_player(response)
			break;
		
		default:
			send_index(response);
		
	}
	
	
	
})listen(6969);
