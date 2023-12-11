import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPeliculasFavoritasComponent } from './lista-peliculas-favoritas.component';

describe('ListaPeliculasFavoritasComponent', () => {
  let component: ListaPeliculasFavoritasComponent;
  let fixture: ComponentFixture<ListaPeliculasFavoritasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPeliculasFavoritasComponent]
    });
    fixture = TestBed.createComponent(ListaPeliculasFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
