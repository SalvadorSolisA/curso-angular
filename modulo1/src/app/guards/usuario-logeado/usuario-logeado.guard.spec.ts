import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { usuarioLogeadoGuard } from './usuario-logeado.guard';

describe('usuarioLogeadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => usuarioLogeadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
