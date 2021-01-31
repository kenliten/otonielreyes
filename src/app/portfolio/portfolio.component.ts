import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ViewerComponent } from '../viewer/viewer.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {

  currentSet = [];

  items = [
    {
      title: 'BTGen',
      img: 'assets/btgen.png',
      description: 'A web-based project template generator for web pages and applications',
      url: 'https://www.npmjs.com/package/btgen',
    },
    { 
      title: 'GRC', 
      img: 'assets/grc.png', 
      description: 'A Customer Relationship Management Tool',
      url: 'https://kenliten.github.io/grc/',
    },
    { 
      title: 'Invoicer', 
      img: 'assets/invoicer.png', 
      description: 'A simple invoicing solution for small business', 
      url: '',
    },
    {
      title: 'Grademy',
      img: 'assets/grademy.png',
      description: 'A tool for teachers to generate daily, monthly and other resources',
      url: '',
    },
    {
      title: 'Precio',
      img: 'assets/precio.png',
      description: 'Custom inversion-based price generator',
      url: 'https://github.com/kenliten/precio/releases/tag/v1.0.0',
    },
    {
      title: 'Progression Generator',
      img: 'assets/progressions.png',
      description: 'A progression generator, cool musician tool to get inspired',
      url: 'https://kenliten.github.io/chorder/packages/progression-generator/index.html',
    },
    {
      title: 'Travelt',
      img: 'assets/travelt.png',
      description: 'Travelt\'s landing page project',
      url: '',
    },
  ];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.show();
  }

  show(page = { length: 14, pageIndex: 0, pageSize: 4, previousPageIndex: 0 }) {
    const startPage = ((page.pageIndex + 1) * page.pageSize) - page.pageSize;
    const endPage = startPage + page.pageSize > this.items.length ? this.items.length : startPage + page.pageSize;
    this.currentSet = this.items.slice(startPage, endPage);
  }

  openDialog(item) {
    const dialogRef = this.dialog.open(ViewerComponent, {
      width: '100%',
      data: item
    });

    dialogRef.afterClosed()
      .subscribe();
  }

}
