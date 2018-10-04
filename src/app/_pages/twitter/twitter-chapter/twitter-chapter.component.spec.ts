import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterChapterComponent } from './twitter-chapter.component';

describe('TwitterChapterComponent', () => {
  let component: TwitterChapterComponent;
  let fixture: ComponentFixture<TwitterChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
