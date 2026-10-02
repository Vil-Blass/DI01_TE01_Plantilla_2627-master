import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all restaurants and detect active filters', () => {
    expect(component.hayDatos()).toBeFalse();

    component.cargarDatos();

    expect(component.hayDatos()).toBeTrue();
    expect(component.restaurantesCargados().length).toBeGreaterThan(0);
    expect(component.hayFiltrosActivos()).toBeFalse();

    component.textoBusqueda.set('Agorregi');
    expect(component.hayFiltrosActivos()).toBeTrue();
    expect(component.restaurantesFiltrados().length).toBeGreaterThan(0);
  });
});
