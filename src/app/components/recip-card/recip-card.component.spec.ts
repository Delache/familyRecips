import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipCardComponent } from './recip-card.component';

describe('RecipCardComponent', () => {
  let component: RecipCardComponent;
  let fixture: ComponentFixture<RecipCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
