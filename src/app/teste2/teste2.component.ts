import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.css']
})
export class Teste2Component implements OnInit {

  nome: string = "Luiz Alexandre";
  idade: number = 151;
  
  constructor() { }

  ngOnInit(): void {
  }

}
