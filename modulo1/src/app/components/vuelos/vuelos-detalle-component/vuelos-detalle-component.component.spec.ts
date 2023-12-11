import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosMainDetalleComponentComponent } from './vuelos-detalle-component.component';

describe('VuelosMainDetalleComponentComponent', () => {
  let component: VuelosMainDetalleComponentComponent;
  let fixture: ComponentFixture<VuelosMainDetalleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VuelosMainDetalleComponentComponent]
    });
    fixture = TestBed.createComponent(VuelosMainDetalleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
