import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
  inputs: ['voteCount', 'myVote'],
  outputs: ['vote']
})
export class VoteComponent implements OnInit {

  protected voteCount : number = 1;
  protected myVote: number = 0;

  protected vote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onVoteUp() {
    if(this.myVote == 1) {
      return;
    }
    this.myVote++;
    this.vote.emit({vote: this.myVote})
  }

  onVoteDown() {
    if(this.myVote == -1) {
      return;
    }
    this.myVote--;
    this.vote.emit({vote: this.myVote})
  }
}
