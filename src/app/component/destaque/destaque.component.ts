import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {

  @Input()
  foto:string = "";
  @Input()
  titulo:string = "";
  @Input()
  descricao:string = "";
  @Input()
  id:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
