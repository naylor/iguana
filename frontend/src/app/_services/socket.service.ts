import {EventEmitter, Injectable} from "@angular/core";
import {CodePairStr} from "../_model/code";

@Injectable({
    providedIn: "root"
})
export class SocketService {
    private socket: WebSocket;
    private listener: EventEmitter<any> = new EventEmitter();

    public constructor() {

        let webSocketPort = window.localStorage.getItem("WebSocketPort");
        let url = new URL('/ws/', window.location.href);
        url.protocol = url.protocol.replace('http', 'ws');

        this.socket = new WebSocket("ws://"+url.hostname+":"+webSocketPort+"/ws");
        this.socket.onopen = event => {
            this.listener.emit({type: "open", data: event});
        };
        this.socket.onclose = event => {
            this.listener.emit({type: "close", data: event});
        };
        this.socket.onmessage = event => {
            this.listener.emit({type: "message", data: JSON.parse(event.data)});
        };
    }

    public isOpen() { return this.socket.readyState === this.socket.OPEN }

    public send(data: CodePairStr) {
        try {
            if (!this.isOpen()) {
                console.log("Socket is not open");
                return;
            }
            this.socket.send(JSON.stringify(data));
        } catch (e) {
            console.log(e.error);
        }
    }

    public close() {
        this.socket.close();
    }

    public getEventListener() {
        return this.listener;
    }
}