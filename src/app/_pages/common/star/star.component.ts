import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  inputs: ['isFavoriteStar', 'isFavoriteHeart'],
  outputs: ['changeStar', 'changeHeart']
})
export class StarComponent implements OnInit {

  protected isFavoriteStar: boolean = false;
  protected changeStar = new EventEmitter();

  protected isFavoriteHeart: boolean = false;
  protected changeHeart = new EventEmitter();

  constructor() { }

  ngOnInit() {}



  onClickStar() {
    this.isFavoriteStar = !this.isFavoriteStar;
    this.changeStar.emit({ newValue: this.isFavoriteStar });
  }

  onClickHeart() {
    this.isFavoriteHeart = !this.isFavoriteHeart;
    this.changeHeart.emit({ newValue: this.isFavoriteHeart });
  }
}
