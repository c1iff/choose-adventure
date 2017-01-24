import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [StoryService]
})
export class HomepageComponent implements OnInit {
  story: FirebaseListObservable<any[]>;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.story = this.storyService.getStoryComponent()
  }

}
