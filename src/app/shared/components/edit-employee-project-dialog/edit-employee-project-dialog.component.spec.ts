import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeProjectDialogComponent } from './edit-employee-project-dialog.component';

describe('EditEmployeeProjectDialogComponent', () => {
  let component: EditEmployeeProjectDialogComponent;
  let fixture: ComponentFixture<EditEmployeeProjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEmployeeProjectDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeeProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
