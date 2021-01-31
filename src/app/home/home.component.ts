import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  links = [
    {
      url: 'https://facebook.com/reyesgalay',
      icon: 'facebook',
      title: 'Facebook'
    },
    {
      url: 'https://instagram.com/reyesgalay',
      icon: 'instagram',
      title: 'Instagram'
    },
    {
      url: 'http://wa.link/vnf2hx',
      icon: 'whatsapp',
      title: 'WhatsApp'
    },
    {
      url: 'https://msng.link/o/?kenliten=tg',
      icon: 'telegram',
      title: 'Telegram'
    },
    {
      url: 'http://linkedin.com/in/oreyesgalay',
      icon: 'linkedin',
      title: 'LinkedIn'
    },
    {
      url: 'https://twitter.com/oreyesgalay',
      icon: 'twitter',
      title: 'Twitter'
    },
    {
      url: 'https://github.com/kenliten',
      icon: 'github',
      title: 'Github'
    },
    {
      url: 'mailto:otoniel@otonielreyes.com',
      icon: 'envelope',
      title: 'Email'
    },
  ];

  fullYear = new Date().getFullYear();

  showMeaning: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMeaning() {
    if (!this.showMeaning) {
      this.showMeaning = true;
      setTimeout(() => {
        this.showMeaning = false;
      }, 4000);
    }
  }

}
