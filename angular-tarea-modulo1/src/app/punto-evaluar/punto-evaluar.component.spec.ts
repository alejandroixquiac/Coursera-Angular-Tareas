import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoEvaluarComponent } from './punto-evaluar.component';

describe('PuntoEvaluarComponent', () => {
  let component: PuntoEvaluarComponent;
  let fixture: ComponentFixture<PuntoEvaluarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoEvaluarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntoEvaluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
