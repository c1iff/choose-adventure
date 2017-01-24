/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlayDeadComponent } from './play-dead.component';

describe('PlayDeadComponent', () => {
  let component: PlayDeadComponent;
  let fixture: ComponentFixture<PlayDeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayDeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayDeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
