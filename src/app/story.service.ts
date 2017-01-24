import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class StoryService {
  story: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.story = angularFire.database.list('storyOptions')
  }

  getStoryComponent() {
    return this.story;
  }
}
