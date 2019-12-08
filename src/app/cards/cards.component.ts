import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public profileDetail = [
    {
      image: '/assets/ironman.jpg',
      name: 'Iron Man',
      job: 'Save World',
      property: 'Robot'
    },
    {
      image: '/assets/america.jpg',
      name: 'Iron Man',
      job: 'Save World',
      property: 'Robot'
    },
    {
      image: '/assets/deadpool.jpg',
      name: 'Iron Man',
      job: 'Save World',
      property: 'Robot'
    },
    {
      image: '/assets/hank.jpg',
      name: 'Iron Man',
      job: 'Save World',
      property: 'Robot'
    },
    {
      image: '/assets/hawkeye.jpg',
      name: 'Iron Man',
      job: 'Save World',
      property: 'Robot'
    },
    {
      image: '/assets/hulk.jpg',
      name: 'Iron Man',
      job: 'Save World',
      property: 'Robot'
    },
    {
      image: '/assets/pinkman.jpg',
      name: 'Iron Man',
      job: 'Save World',
      property: 'Robot'
    },
    {
      image: '/assets/thor.jpg',
      name: 'Iron Man',
      job: 'Save World',
      property: 'Robot'
    },
    {
      image: '/assets/walter.jpg',
      name: 'Iron Man',
      job: 'Save World',
      property: 'Robot'
    }
  ];

}
