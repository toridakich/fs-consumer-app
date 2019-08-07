import { TestBed } from '@angular/core/testing';
import { BookingsService } from './bookings.service';
describe('BookingsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BookingsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=bookings.service.spec.js.map