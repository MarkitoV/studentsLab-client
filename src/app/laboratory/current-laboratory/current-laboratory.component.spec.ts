import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLaboratoryComponent } from './current-laboratory.component';

describe('CurrentLaboratoryComponent', () => {
  let component: CurrentLaboratoryComponent;
  let fixture: ComponentFixture<CurrentLaboratoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLaboratoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
