import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.less']
})
export class ToolsComponent implements OnInit {

  currentSet = [];

  items = [
    {name: 'Sublime Text', img: 'assets/sublime.png'},
    {name: 'Angular CLI', img: 'assets/cli.png'},
    {name: 'AngularIDE', img: 'assets/angular.png'},
    {name: 'Augury', img: 'assets/augury.png'},
    {name: 'Firebase', img: 'assets/firebase.png'},
    {name: 'Angular Material', img: 'assets/material.png'},
    {name: 'Krita', img: 'assets/krita.png'},
    {name: 'Firefox Developer Edition', img: 'assets/firefox.png'},
    {name: 'Postman', img: 'assets/postman.png'},
    {name: 'Compass', img: 'assets/compass.png'},
    {name: 'Git', img: 'assets/git.png'},
    {name: 'Nx', img: 'assets/nx.png'},
  ];

  constructor() { }

  ngOnInit(): void {
    this.show();
  }

  show(page = { length: 14, pageIndex: 0, pageSize: 6, previousPageIndex: 0 }) {
    const startPage = ((page.pageIndex + 1) * page.pageSize) - page.pageSize;
    const endPage = startPage + page.pageSize > this.items.length ? this.items.length : startPage + page.pageSize;
    this.currentSet = this.items.slice(startPage, endPage);
  }

}
