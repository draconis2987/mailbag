const path = require("path");
const fs = require("fs");

export interface IServeInfo {
    smtp: {
        host: string, port: number,
        auth: {user: string, pass: string}
    },
    imap: {
        host: string, port: number,
        auth: {user: string, pass: string}
    }
}

const rawInfo: string = fs.readFileSync(path.join(__dirname, "../serverInfo.json"));

export let serverInfo: IServeInfo;
serverInfo = JSON.parse(rawInfo);
