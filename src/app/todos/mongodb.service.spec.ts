/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MongodbService } from './mongodb.service';

describe('MongodbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongodbService]
    });
  });

  it('should ...', inject([MongodbService], (service: MongodbService) => {
    expect(service).toBeTruthy();
  }));
});
