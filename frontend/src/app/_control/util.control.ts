import {Injectable} from "@angular/core";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "../_services/dialog/dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {ResponseStr} from "../_model/service";

@Injectable({
    providedIn: "root"
})

export class UtilControl {


    public constructor(
        public dialog: MatDialog,
        private _snackBar: MatSnackBar,
        private router: Router,
    ) {
    }

    setResponse(text, action, panel, route) {
        if (!panel)
            panel = action

        let snackBarRef = this._snackBar.open(text, action, {
            duration: 5000, panelClass: [panel]
        });

        if (route) {
            snackBarRef.onAction().subscribe(() =>
                this.router.navigate([route])
            );
        }

        return snackBarRef;
    }

    openModal(title, text, yes, no, input) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: title,
            text: text,
            yes: yes,
            no: no,
            input: input,
        };

        const modalDialog = this.dialog.open(DialogComponent, dialogConfig);

        return modalDialog;
    }

    formatBytes(bytes,decimal=2){
        if (bytes < 10)
            return bytes + " Bytes";
        if(0===bytes)
            return"0 Bytes";
        const c=0>decimal?0:decimal,d=Math.floor(Math.log(bytes)/Math.log(1024));
        return parseFloat((bytes/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]
    }

    public delay(ms: number):
        Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }

    countdown(distance) {
        distance = distance * 1000;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        return days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    }

    numberFormat(number) {
        if (number.toString().length < 2)
            number = "0" + number;
        return number
    }

}