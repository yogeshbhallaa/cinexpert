import { TestBed, async, inject } from '@angular/core/testing';
import { ShowtimeService } from './showtime.service';

describe('Service: Showtime', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowtimeService]
    });
  });

  it('should ...', inject([ShowtimeService], (service: ShowtimeService) => {
    expect(service).toBeTruthy();
  }));
});
