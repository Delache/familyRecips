import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipListComponent } from './recip-list.component';

describe('RecipListComponent', () => {
  let component: RecipListComponent;
  let fixture: ComponentFixture<RecipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
