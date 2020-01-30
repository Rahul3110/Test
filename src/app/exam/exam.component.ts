import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  products = [
    {name:'rahul',desc: 'My name is rahul'},
    {name:'grv',desc: 'My name is grv'},
    {name:'shubh',desc: ''}
  ];

  constructor() { }

  ngOnInit() {
  }

  }

