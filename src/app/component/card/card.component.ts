import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  foto:string = "";
  @Input()
  titulo:string ="";
  @Input()
  id:string = "";

  constructor() { }

  ngOnInit(): void {

  }

}
