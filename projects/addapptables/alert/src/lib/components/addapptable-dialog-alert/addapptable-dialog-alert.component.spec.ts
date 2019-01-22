import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapptableDialogAlertComponent } from './addapptable-dialog-alert.component';

describe('AddapptableDialogAlertComponent', () => {
  let component: AddapptableDialogAlertComponent;
  let fixture: ComponentFixture<AddapptableDialogAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddapptableDialogAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddapptableDialogAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
