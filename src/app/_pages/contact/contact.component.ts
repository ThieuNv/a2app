import { Component, OnInit } from '@angular/core';
import {ContactService} from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {

  protected listAddress: string[];
  protected listPhoneNumber: string[];
  protected isBorder: boolean = true;
  protected isBackground: boolean = true;
  protected isColor: boolean = true;

  protected post = {
    title: "Title",
    isFavoriteStar: false,
    numberVoteStar: 10,

    isFavoriteHeart: false,
    numberVoteHeart: 100,

    voteCount: 20,
    myVote: 0
  };

  constructor(private contactService: ContactService) {
    this.listAddress = this.contactService.getListAddress();
    this.listPhoneNumber = this.contactService.getListPhoneNumber();
  }

  ngOnInit() {

  }

  getBackground(color: string) {
      return color;
  }
  getColor(color: string) {
    return color;
  }

  getEmail($event) {
    console.log("Clicked", $event);
  }

  onStarChange($event) {
    if($event.newValue) {
      this.post.numberVoteStar ++;
    } else {
      this.post.numberVoteStar --;
    }
    console.log("Event from Star: ", $event);
  }

  onHeartChange($event) {
    if($event.newValue) {
      this.post.numberVoteHeart ++;
    } else {
      this.post.numberVoteHeart --;
    }
    console.log("Event from Star: ", $event);
  }

  onVoteChange($event) {
    this.post.myVote = $event.vote;
  }
}
