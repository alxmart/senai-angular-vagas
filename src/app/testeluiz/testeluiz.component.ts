import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testeluiz',
  templateUrl: './testeluiz.component.html',
  styleUrls: ['./testeluiz.component.css']
})
export class TesteluizComponent implements OnInit {

  testeluiz = 'Testando o Angular';
  
  constructor() { }

  ngOnInit(): void {
  }

}
