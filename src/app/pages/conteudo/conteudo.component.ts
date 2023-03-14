import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css'],
})
export class ConteudoComponent implements OnInit {
  foto: string = '';
  titulo: string = '';
  descricao: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValoresProComponente(this.id);
  }

  setValoresProComponente(id: string | null) {
    const result = dataFake.filter((artigo) => artigo.id == id)[0];

    this.titulo = result.titulo;
    this.descricao = result.descricao;
    this.foto = result.foto;

  }
}
