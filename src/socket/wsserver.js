import { WebSocketServer } from "ws";

class WebSocket {
    constructor(server) {
        this.server = server
        this.wss = new WebSocketServer({server})
        return this.wss
    }

    static getInstance() {
        console.log("this.wss", this.wss)
        if (this.wss) {
            return this.wss
        }

        return new WebSocket(this.server)
    }

}

export default WebSocket