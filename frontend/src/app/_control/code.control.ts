import {Injectable} from "@angular/core";
import {RemoteSelection} from "@convergencelabs/monaco-collab-ext/typings/RemoteSelection";

@Injectable({
    providedIn: "root"
})

export class CodeControl {


    public constructor() {
    }

    showProcess(response) {
        let lines = [];
        let process = [];

        lines = response.split('\n');
        lines.forEach(function (v, k) {

            //PROCESSOR
            let reg = '{P}(.+){P}';
            let matP = v.match(reg);
            if (matP && matP[1] && !process[matP[1]]) {
                process[matP[1]] = [];
            }
            //RANK && MESSAGE
            reg = '{R}(.+){R}';
            let matR = v.match(reg);
            reg = '{M}(.+){M}';
            let matM = v.match(reg);

            let val = "";
            if (matR && matR[1])
                val = "Rank " + matR[1];

            if (matM && matM[1])
                val += ": " + matM[1];

            if (val != "")
                process[matP[1]].push(val);

        });
        return process;
    }

    getColor() {
        let colors = [];
        colors = ["#00ffff", "#f0ffff", "#f5f5dc",
            "#00ffff", "#ff00ff", "#ffd700", "#ffff00",
            "#f0e68c", "#add8e6", "#e0ffff", "#90ee90",
            "#d3d3d3", "#ffb6c1", "#ffffe0", "#00ff00",
            "#ffa500", "#ffc0cb", "#c0c0c0", "#ffffff" ]

        return colors[Math.floor(Math.random() * 19)]
    }

}