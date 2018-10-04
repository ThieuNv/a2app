import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-chapter',
  templateUrl: './twitter-chapter.component.html',
  styleUrls: ['./twitter-chapter.component.css']
})
export class TwitterChapterComponent implements OnInit {

  @Input() title: string;
  protected isExpanded = false;

  constructor() { }

  ngOnInit() {
  }

  toggleChapter() {
    this.isExpanded = !this.isExpanded;
  }
}
