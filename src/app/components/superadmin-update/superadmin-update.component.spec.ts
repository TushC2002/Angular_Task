import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminUpdateComponent } from './superadmin-update.component';

describe('SuperadminUpdateComponent', () => {
  let component: SuperadminUpdateComponent;
  let fixture: ComponentFixture<SuperadminUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
