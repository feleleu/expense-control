import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {

  option: any = [
    {label: "Fixo", key: "FIXA"},
    {label: "Variavel", key: "VARIAVEL"},
    {label: "Adicional", key: "ADICIONAL"},
  ];

  picker = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
