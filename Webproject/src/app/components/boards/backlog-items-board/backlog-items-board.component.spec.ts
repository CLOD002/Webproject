import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTemplateComponent } from './backlog-items-board.component';

describe('BoardTemplateComponent', () => {
  let component: BoardTemplateComponent;
  let fixture: ComponentFixture<BoardTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardTemplateComponent]
    });
    fixture = TestBed.createComponent(BoardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
