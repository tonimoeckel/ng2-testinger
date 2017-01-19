/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DragComponent } from './drag.component';

describe('DragComponent', () => {
  let component: DragComponent;
  let fixture: ComponentFixture<DragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
