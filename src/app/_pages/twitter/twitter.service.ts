import { Injectable } from '@angular/core';
import {TwitterBox} from "./twitter-box/twitter-box";

@Injectable()
export class TwitterService {

  private listTwitter : TwitterBox[] = [
    {
      post_imageUrl: "http://lorempixel.com/100/100/people?10",
      post_userName: "Windward",
      post_category: "windwardstudios",
      post_countLike: 2,
      post_content: "Looking for a better company reporting or docgen app?",
    },
    {
      post_imageUrl: "http://lorempixel.com/100/100/people?3",
      post_userName: "AngularJS News",
      post_category: "angularjs_news",
      post_countLike: 5,
      post_content: "Right Relevance: Influencers, Articles and Conversations",
    },
    {
      post_imageUrl: "http://lorempixel.com/100/100/people?6",
      post_userName: "UX & Bootstrap",
      post_category: "3rdwave",
      post_countLike: 8,
      post_content: "10 Resons Why Web Projects Fail",
    },
    {
      post_imageUrl: "http://lorempixel.com/100/100/people?21",
      post_userName: "Windward",
      post_category: "windwardstudios",
      post_countLike: 1,
      post_content: "Looking for a better company reporting or docgen app/?",
    }
  ];

  constructor() { }

  public getListTwitter() {
    return this.listTwitter;
  }
}
