import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'try-code-module',
  templateUrl: './try-code.component.html',
  styleUrls: ['./try-code.component.css']
})
export class TryCodeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.localStorage.removeItem("AnswerId");
    window.localStorage.removeItem("ExerciseId");
    window.localStorage.setItem("TryACode", "1");
  }

  setRoute(val) {
    this.router.navigate([val])
  }
}
