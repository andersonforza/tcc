import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input() result!: {
    Persons: [
      {
        Confidence: number,
        Id: number
      }
    ],
    Summary: {
      PersonsIndeterminate: number[];
      PersonsWithRequiredEquipment: number[];
      PersonsWithoutRequiredEquipment: number[];
    };
  };
  constructor() {}

  ngOnInit(): void {}
}
