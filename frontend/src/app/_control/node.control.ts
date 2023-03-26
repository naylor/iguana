import { Injectable } from "@angular/core";
import {HostService} from "../_services/host.service";

@Injectable({
    providedIn: "root"
})

export class NodeControl {

    public constructor() {}

    nodes(data, index): any {
        let nodesTemp: string[] = [];
        let num = 0;

        if (data) {
            data.forEach(function (v, k) {
                num += parseInt(v['NumberOfCPUs']);

                if (v['Container'] != null) {
                    let c = Object.keys(v['Container']).length;
                    if (c > 0) {
                        v['Container'].forEach(function (v1, k1) {
                            if (v1['IP'] != "")
                                nodesTemp.push(v1['IP']);
                        });
                    }
                }
            });
            if (index == 'cpu')
                return num;
            if (index == 'nodes')
                return nodesTemp;
        }
        return null;
    }
}
