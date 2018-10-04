import { Component, OnInit , EventEmitter} from '@angular/core';
import {TwitterBox} from "./twitter-box";

@Component({
  selector: 'app-twitter-box',
  templateUrl: './twitter-box.component.html',
  styleUrls: ['./twitter-box.component.css'],
  inputs: ['twitterBox'],
  outputs: ['changeLike']
})
export class TwitterBoxComponent implements OnInit {

  protected twitterBox: TwitterBox;

  protected changeLike = new EventEmitter();


  protected isLike : boolean = false;



  constructor() { }

  ngOnInit() {
  }

  onLikeTwitter() {
    this.isLike = !this.isLike;
    this.changeLike.emit({isLike: this.isLike})
  }
}
