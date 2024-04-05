import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminProfileDialogComponent } from './superadmin-profile-dialog.component';

describe('SuperadminProfileDialogComponent', () => {
  let component: SuperadminProfileDialogComponent;
  let fixture: ComponentFixture<SuperadminProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminProfileDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
