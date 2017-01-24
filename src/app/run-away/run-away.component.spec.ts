/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RunAwayComponent } from './run-away.component';

describe('RunAwayComponent', () => {
  let component: RunAwayComponent;
  let fixture: ComponentFixture<RunAwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunAwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
