import { TestBed } from '@angular/core/testing';

import { IngresoServicioService } from './ingreso-servicio.service';

describe('IngresoServicioService', () => {
  let service: IngresoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
