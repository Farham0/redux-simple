import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPopUpComponent } from './test-pop-up.component';

describe('TestPopUpComponent', () => {
  let component: TestPopUpComponent;
  let fixture: ComponentFixture<TestPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
