import { Component, OnInit } from '@angular/core';
import { t } from '@angular/core/src/render3';
import { FormGroup } from '@angular/forms';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {



  twat: Tweet[];
  constructor(tService: TweetsService) {
       this.twat = tService.tweets;
       console.log(this.twat.length);
   }

  ngOnInit() {
  }

  findWord(tweet:string) : boolean {
    let i = tweet.replace(/[!,.?()_-]/g , " ");
    i = i.toLowerCase();
    let t = i.split(" ");
    console.log(i);
    for (let index = 0; index < t.length; index++) {
      if (t[index] == "news") {
        return true;
      }
    }
    return false
  }

  moreLikes(likes:number) : boolean {
    if (likes > 200000) {
      return true;
    }
    return false;
  }
}
