import { WebSocketServer } from "ws";

function makeWebSocket(server) {
    let  wss  = new WebSocketServer({server})

    wss.on('connection', (ws) => {

        //connection is up, let's add a simple simple event
        ws.on('message', (message) => {
    
            //log the received message and send it back to the client
            console.log('received: %s', message);
            ws.send(`Hello, you sent -> ${message}`);
        });
        
        ws.send("connect brader");
    
        console.log(ws)
    })
}

export default makeWebSocket