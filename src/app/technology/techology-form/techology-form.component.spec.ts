import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechologyFormComponent } from './techology-form.component';

describe('TechologyFormComponent', () => {
  let component: TechologyFormComponent;
  let fixture: ComponentFixture<TechologyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechologyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechologyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
