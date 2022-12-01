import WebSocket from "../src/socket/wsserver.js";
import http from 'http'
import express from "express"
let app = express()

WebSocket.getInstance()