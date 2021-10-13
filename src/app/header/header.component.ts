import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  image: any = {
    imgSrc: 'https://fakeimg.pl/550x100/?text=Header%20website',
    imgAlt: 'Ma bannière',
  };

  constructor() {}

  ngOnInit(): void {}
}
