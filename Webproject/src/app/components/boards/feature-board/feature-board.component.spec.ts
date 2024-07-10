import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBoardComponent } from './feature-board.component';

describe('FeatureBoardComponent', () => {
  let component: FeatureBoardComponent;
  let fixture: ComponentFixture<FeatureBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureBoardComponent]
    });
    fixture = TestBed.createComponent(FeatureBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
