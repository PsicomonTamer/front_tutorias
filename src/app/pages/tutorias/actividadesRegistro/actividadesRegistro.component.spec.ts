import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesRegistroComponent } from './actividadesRegistro.component';

describe('ActividadesRegistroComponent', () => {
  let component: ActividadesRegistroComponent;
  let fixture: ComponentFixture<ActividadesRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadesRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
