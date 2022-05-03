import { TestBed } from '@angular/core/testing';

import { TutoriasService } from './tutorias.service';

describe('TutoriasService', () => {
  let service: TutoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
