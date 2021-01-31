import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.less']
})
export class TechComponent implements OnInit {

  currentSet = [];

  items = [
    { name: 'HTML', img: 'assets/html.png' },
    { name: 'CSS', img: 'assets/css.png' },
    { name: 'JavaScript', img: 'assets/javascript.png' },
    { name: 'TypeScript', img: 'assets/typescript.png' },
    { name: 'LESS', img: 'assets/less.png' },
    { name: 'Angular', img: 'assets/angular.png' },
    { name: 'NodeJS', img: 'assets/nodejs.png' },
    { name: 'Electron', img: 'assets/electron.png' },
    { name: 'Webpack', img: 'assets/webpack.png' },
    { name: 'MySQL', img: 'assets/mysql.png' },
    { name: 'Express', img: 'assets/express.png' },
    { name: 'MongoDB', img: 'assets/compass.png' },
    { name: 'Protractor', img: 'assets/protractor.png' },
    { name: 'Mocha', img: 'assets/mocha.png' },
    { name: 'Karma', img: 'assets/karma.png' },
    { name: 'RxJS', img: 'assets/rxjs.png' },
    { name: 'JSDoc', img: 'assets/jsdoc.png' },
    { name: 'Jasmine', img: 'assets/jasmine.png' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.show();
  }

  show(page = {length: 14, pageIndex: 0, pageSize: 6, previousPageIndex: 0}) {
    const startPage = ((page.pageIndex + 1) * page.pageSize) - page.pageSize;
    const endPage = startPage + page.pageSize > this.items.length ? this.items.length : startPage + page.pageSize;
    this.currentSet = this.items.slice(startPage, endPage);
  }

}
