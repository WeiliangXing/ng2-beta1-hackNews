import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'my-instruction',
  templateUrl: 'app/instruction.component.html'
})
export class InstructionComponent implements OnInit {
  constructor(private _router: Router) {
  }
  ngOnInit() {
  }
}
