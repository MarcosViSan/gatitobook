import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menssagen',
  templateUrl: './menssagen.component.html',
  styleUrls: ['./menssagen.component.scss']
})
export class MenssagenComponent implements OnInit {

  @Input()
  menssagem: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
