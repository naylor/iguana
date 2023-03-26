import {Component, Input, OnInit} from '@angular/core';
import {HostInfoStr} from "../_model/hostInfo";
import {ResponseStr} from "../_model/service";

@Component({
  selector: 'app-host-status',
  templateUrl: './host-status.component.html',
  styleUrls: ['./host-status.component.css']
})
export class HostStatusComponent implements OnInit {
  //Getting hostInfo from APP ROOT
  @Input('hostInfo') hostInfo: HostInfoStr;
  @Input('hostConnection') hostConnection: ResponseStr;

  constructor() { }

  ngOnInit() {
  }

}
