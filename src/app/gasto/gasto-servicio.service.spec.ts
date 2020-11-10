import { TestBed } from '@angular/core/testing';

import { GastoServicioService } from './gasto-servicio.service';

describe('GastoServicioService', () => {
  let service: GastoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
