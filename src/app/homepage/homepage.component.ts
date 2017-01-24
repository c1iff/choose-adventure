import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [StoryService]
})
export class HomepageComponent implements OnInit {
  story;

  constructor(private storyService: StoryService, private router: Router) { }

  ngOnInit() {
    this.story = this.storyService.getFirst()
  }
  getStoryPage(id){
    this.router.navigate(['story', id])
  }

}
