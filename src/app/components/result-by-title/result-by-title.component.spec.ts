import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultByTitleComponent } from './result-by-title.component';

describe('ResultByTitleComponent', () => {
  let component: ResultByTitleComponent;
  let fixture: ComponentFixture<ResultByTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultByTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
