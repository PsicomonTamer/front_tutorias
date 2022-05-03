import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeudasConsultaComponent } from './deudasConsulta.component';

describe('DeudasConsultaComponent', () => {
  let component: DeudasConsultaComponent;
  let fixture: ComponentFixture<DeudasConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeudasConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeudasConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
