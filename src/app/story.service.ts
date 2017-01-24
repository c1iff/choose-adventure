import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class StoryService {
  story;

  constructor(private angularFire: AngularFire) {

  }

  getFirst() {
    return this.angularFire.database.object('/raccoonAttacks/0')
  }

  getStoryComponent(storyId) {
    return this.angularFire.database.object('/raccoonAttacks/' + storyId);
  }
}
