/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Init } from 'app/todos/init/init';


describe('Init', () => {
  let component: Init;
  let fixture: ComponentFixture<Init>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Init ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Init);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
