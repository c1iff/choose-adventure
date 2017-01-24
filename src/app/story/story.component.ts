import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryService]
})
export class StoryComponent implements OnInit {
  storyId: string;
  story;

  constructor(private storyService: StoryService, private route: ActivatedRoute) { }

  refreshStory(){
    this.route.params.forEach((urlParametersArray) => {
      this.storyId = urlParametersArray['id'];
    });
    this.story = this.storyService.getStoryComponent(this.storyId);
  }
  ngOnInit() {
      this.refreshStory()
   }

  }
