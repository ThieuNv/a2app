import { Component, OnInit } from '@angular/core';
import {TwitterService} from "./twitter.service";
import {TwitterBox} from "./twitter-box/twitter-box";
import {TwitterConst} from "./twitter_const";

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  // Const
  protected TITLE_LIST_POST = TwitterConst.TITLE_LIST_POST;
  protected TITLE_ERROR_LIST_POST = TwitterConst.TITLE_ERROR_LIST_POST;

  protected TITLE_CHAPTER_1 = TwitterConst.TITLE_CHAPTER_1;
  protected TITLE_CHAPTER_2 = TwitterConst.TITLE_CHAPTER_2;

  protected CONTENT_CHAPTER_1 = TwitterConst.CONTENT_CHAPTER_1;
  protected CONTENT_CHAPTER_2 = TwitterConst.CONTENT_CHAPTER_2;


  // Data
  protected listTwitter: TwitterBox[];


  constructor(private twitterService: TwitterService) {
    this.listTwitter = this.twitterService.getListTwitter();
  }

  ngOnInit() {
  }

  changeLike($event, twitterBox: TwitterBox) {
    if($event.isLike) {
      twitterBox.post_countLike ++;
    } else {
      twitterBox.post_countLike --;
    }
  }
}
