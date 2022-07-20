import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela:  boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Nathalia', idade: 24, email: 'nathalia.nathyfelix31@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Wesley', idade: 26, email: 'wesley@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Nilcilane', idade: 25, email: 'nilci@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Larisse', idade: 45, email: 'lari@gmail.com', curso: 'Sistemas da informacao' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

}
