import { CanActivateFn } from '@angular/router';

export const usuarioLogeadoGuard: CanActivateFn = (route, state) => {
  return true;
};
