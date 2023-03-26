import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {dialogStr} from "../../_model/dialog";

@Component({
  selector: 'app-my-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})


export class DialogComponent  {

  modalTitle: string;
  modalText: string;
  modalYes: string;
  modalNo: string;
  modalInput: dialogStr[] = [];

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalText = data.text;
    this.modalYes = data.yes;
    this.modalNo = data.no;
    this.modalInput = data.input;
    //console.log(data)
  }

  close(button) {
    let values = {'button': button, 'input': this.modalInput};
    this.dialogRef.close(values);
  }
}
