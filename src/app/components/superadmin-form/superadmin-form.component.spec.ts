import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminFormComponent } from './superadmin-form.component';

describe('SuperadminFormComponent', () => {
  let component: SuperadminFormComponent;
  let fixture: ComponentFixture<SuperadminFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
